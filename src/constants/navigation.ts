export const routes = {
  home: "/",
  courses: "/courses",
  course: (slug: string) => `/courses/${slug}`,
  courseLessons: (slug: string) => `/courses/${slug}/lessons`,
  courseReviews: (slug: string) => `/courses/${slug}/reviews`,
  creator: (slug: string) => `/creators/${slug}`,
  signIn: "/sign-in",
  signUp: "/sign-up",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "Courses", href: routes.courses },
  { label: "Creators", href: routes.creator("purepearl-studio") },
];

export const footerNav: NavLink[][] = [
  [
    { label: "Featured Courses", href: routes.courses },
    { label: "Featured Categories", href: `${routes.home}#categories` },
    { label: "Business", href: `${routes.courses}?category=business` },
    { label: "IT", href: `${routes.courses}?category=it-software` },
    { label: "Design", href: `${routes.courses}?category=design` },
  ],
  [
    { label: "Development", href: `${routes.courses}?category=development` },
    { label: "Marketing", href: `${routes.courses}?category=marketing` },
    { label: "Photography", href: `${routes.courses}?category=photography` },
    { label: "Finance", href: `${routes.courses}?category=finance` },
    { label: "Sport", href: `${routes.courses}?category=sport` },
  ],
  [
    { label: "Become a Creator", href: routes.signUp },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];
