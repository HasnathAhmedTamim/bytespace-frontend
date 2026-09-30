# ByteSpace Frontend

A responsive online-learning platform UI built from the ByteSpace Figma design as a frontend assessment. It covers the landing page plus the course catalogue, course details, creator profile, authentication and 404 pages.

**Live site:** _add Vercel URL here_

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19 and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens in `src/app/globals.css`
- shadcn/ui primitives on Radix UI, `class-variance-authority`, `tailwind-merge`
- Typed client-side validation for sign-in and sign-up, React Hook Form + Zod for the newsletter form
- Motion for small interactions, Sonner for toasts, Lucide icons
- Clash Display and Satoshi (self-hosted via `next/font/local`) and Poppins (`next/font/google`)

## Pages

| Route | Page |
| --- | --- |
| `/` | Landing page: hero, partners, discover, categories, courses, growth, testimonials, creator CTA |
| `/courses` | Course catalogue with search, filters, sorting and pagination |
| `/courses/[slug]` | Course details: overview |
| `/courses/[slug]/lessons` | Course details: lesson list |
| `/courses/[slug]/reviews` | Course details: reviews |
| `/creators/[slug]` | Creator profile |
| `/sign-in`, `/sign-up` | Authentication with client-side validation |
| any unknown URL | Custom 404 page |

Course and creator content comes from typed mock data in `src/data`, so the app needs no backend or environment variables.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Type-check with `npx tsc --noEmit`.

## Project structure

```text
src/
  app/
    (site)/          # pages with the shared header and footer
    (auth)/          # sign-in and sign-up
    globals.css      # tokens: colours, radius, shadows, breakpoints, container
  components/
    ui/              # base primitives (Button, Input, Badge, Card, Sheet…)
    shared/          # Container, Section, SectionHeading, Logo, Pagination…
    layout/          # site header, footer, mobile menu, newsletter
    sections/        # page sections grouped by page
    auth/ courses/ creators/
  constants/         # image paths, navigation, metadata
  data/              # mock courses, creators, categories, testimonials
  lib/               # validation, filtering, formatting, helpers
  hooks/
public/assets/       # exported Figma images and decorative shapes
```

## Responsive approach

- The 1440px Figma frame is the reference viewport and 390px is the mobile reference.
- Backgrounds, colour bands and grids are always full width.
- Content sits in a shared container: a fluid side gutter (24px on mobile rising to 120px at 1440px) and a 1200px content width that stays centred on wider screens, so layouts keep the Figma scale at 1920px and beyond.
- Decorative shapes are anchored to the composition they belong to and hide or scale down on smaller screens.
- Grids go from 3 columns on desktop to 2 on tablet and 1 on mobile; nothing scrolls horizontally from 390px to 2560px.

## Git workflow

Each feature was built on its own branch and merged into `main` through a pull request with a merge commit:
project setup, design system, layout, home, courses, course details, creator profile, auth, 404 and a responsive container refactor.
Commits follow the `type(scope): description` convention.

## Deployment

Deployed on [Vercel](https://vercel.com) from the `main` branch with the default Next.js settings.
