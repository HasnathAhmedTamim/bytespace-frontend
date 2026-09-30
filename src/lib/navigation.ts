export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const section = `/${href.split("/")[1]}`;
  return pathname === section || pathname.startsWith(`${section}/`);
}
