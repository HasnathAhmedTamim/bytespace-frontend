import { routes } from "@/constants/navigation";
import { isSearchScope, type SearchScope } from "@/constants/search";
import { courseCategories } from "@/data/categories";

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
};

export type FilterKey = keyof CourseFilters;

type SearchParams = Record<string, string | string[] | undefined>;

const paramOrder: FilterKey[] = ["q", "scope", "category", "level", "price", "rating", "sort"];

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

  return {
    q: first(params.q)?.trim() || undefined,
    scope: isSearchScope(scope) ? scope : undefined,
    category: pick(categoryOptions, first(params.category)),
    level: pick(levelOptions, first(params.level)),
    price: pick(priceOptions, first(params.price)),
    rating: pick(ratingOptions, first(params.rating)),
    sort: sort === defaultSort ? undefined : sort,
  };
}

export function coursesHref(filters: CourseFilters, patch: Partial<Record<FilterKey, string | undefined>> = {}) {
  const next: Partial<Record<FilterKey, string | undefined>> = { ...filters, ...patch };
  const params = new URLSearchParams();

  for (const key of paramOrder) {
    const value = next[key];
    if (value && !(key === "sort" && value === defaultSort)) params.set(key, value);
  }

  const query = params.toString();
  return query ? `${routes.courses}?${query}` : routes.courses;
}
