import { routes } from "@/constants/navigation";
import { isSearchScope, type SearchScope } from "@/constants/search";
import { courseCategories } from "@/data/categories";
import type { Course } from "@/types/course";

export type FilterOption = { value: string; label: string };

export const levelOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
] as const satisfies readonly FilterOption[];

export const priceOptions = [
  { value: "free", label: "Free" },
  { value: "paid", label: "Paid" },
] as const satisfies readonly FilterOption[];

export const ratingOptions = [
  { value: "4.5", label: "4.5 & up" },
  { value: "4", label: "4.0 & up" },
  { value: "3.5", label: "3.5 & up" },
] as const satisfies readonly FilterOption[];

export const sortOptions = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "popular", label: "Most popular" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const satisfies readonly FilterOption[];

export const categoryOptions: readonly FilterOption[] = courseCategories.map(({ slug, label }) => ({
  value: slug,
  label,
}));

type OptionValue<T extends readonly FilterOption[]> = T[number]["value"];

export type CourseSort = OptionValue<typeof sortOptions>;

export const defaultSort: CourseSort = "relevant";

export type CourseFilters = {
  q?: string;
  scope?: SearchScope;
  category?: string;
  level?: OptionValue<typeof levelOptions>;
  price?: OptionValue<typeof priceOptions>;
  rating?: OptionValue<typeof ratingOptions>;
  sort?: CourseSort;
  page?: number;
};

export type FilterKey = keyof CourseFilters;

type FilterPatch = Partial<Record<FilterKey, string | number | undefined>>;

type SearchParams = Record<string, string | string[] | undefined>;

const paramOrder: FilterKey[] = ["q", "scope", "category", "level", "price", "rating", "sort", "page"];

export const coursesPerPage = 18;

export const courseResultsId = "course-results";

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pick<T extends readonly FilterOption[]>(options: T, value: string | undefined) {
  return options.find((option) => option.value === value)?.value as OptionValue<T> | undefined;
}

export function optionLabel(options: readonly FilterOption[], value: string | undefined) {
  return options.find((option) => option.value === value)?.label;
}

export function parseCourseFilters(params: SearchParams): CourseFilters {
  const scope = first(params.scope);
  const sort = pick(sortOptions, first(params.sort));
  const page = Number.parseInt(first(params.page) ?? "", 10);

  return {
    q: first(params.q)?.trim() || undefined,
    scope: isSearchScope(scope) ? scope : undefined,
    category: pick(categoryOptions, first(params.category)),
    level: pick(levelOptions, first(params.level)),
    price: pick(priceOptions, first(params.price)),
    rating: pick(ratingOptions, first(params.rating)),
    sort: sort === defaultSort ? undefined : sort,
    page: page > 1 ? page : undefined,
  };
}

export function coursesHref(filters: CourseFilters, patch: FilterPatch = {}, hash?: string) {
  const next: FilterPatch = { ...filters, page: undefined, ...patch };
  const params = new URLSearchParams();

  for (const key of paramOrder) {
    const value = next[key];
    if (!value || (key === "sort" && value === defaultSort) || (key === "page" && Number(value) <= 1)) continue;
    params.set(key, String(value));
  }

  const query = params.toString();
  return `${routes.courses}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

function matchesQuery(course: Course, filters: CourseFilters) {
  if (!filters.q) return true;
  const needle = filters.q.toLowerCase();
  const haystack = filters.scope === "creators" ? course.creator.name : course.title;
  return haystack.toLowerCase().includes(needle);
}

const sorters: Record<CourseSort, (a: Course, b: Course) => number> = {
  relevant: (a, b) => Number(b.featured) - Number(a.featured),
  rating: (a, b) => b.rating - a.rating,
  popular: (a, b) => b.enrolled - a.enrolled,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

export function queryCourses(courses: readonly Course[], filters: CourseFilters) {
  const matches = courses
    .filter(
      (course) =>
        matchesQuery(course, filters) &&
        (!filters.category || course.categories.includes(filters.category)) &&
        (!filters.level || course.level.toLowerCase() === filters.level) &&
        (!filters.price || (filters.price === "free" ? course.price === 0 : course.price > 0)) &&
        (!filters.rating || course.rating >= Number(filters.rating))
    )
    .sort(sorters[filters.sort ?? defaultSort]);

  const total = matches.length;
  const pageCount = Math.max(1, Math.ceil(total / coursesPerPage));
  const page = Math.min(filters.page ?? 1, pageCount);
  const start = (page - 1) * coursesPerPage;

  return {
    items: matches.slice(start, start + coursesPerPage),
    total,
    page,
    pageCount,
    start,
  };
}
