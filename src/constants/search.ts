export const searchScopes = [
  { value: "courses", label: "Courses" },
  { value: "creators", label: "Creators" },
] as const;

export type SearchScope = (typeof searchScopes)[number]["value"];

export const defaultSearchScope: SearchScope = "courses";

export function isSearchScope(value: unknown): value is SearchScope {
  return searchScopes.some((scope) => scope.value === value);
}
