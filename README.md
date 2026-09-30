# ByteSpace — Online Learning Platform

A responsive, pixel-faithful implementation of the **ByteSpace** Figma design: a marketplace where learners discover courses and creators publish them. It was built as a frontend assessment with Next.js, TypeScript and Tailwind CSS.

**Live demo:** [bytespace-frontend-eight.vercel.app](https://bytespace-frontend-eight.vercel.app)

---

## Table of contents

- [About the project](#about-the-project)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Folder structure](#folder-structure)
- [Architecture and design system](#architecture-and-design-system)
- [Responsive design](#responsive-design)
- [Accessibility](#accessibility)
- [Git workflow](#git-workflow)
- [Deployment](#deployment)

---

## About the project

ByteSpace is an online learning marketplace that brings learners and course creators together in one place.

**For learners**, it is a place to discover new skills. They can browse a wide range of courses across categories such as design, development, business, marketing and photography, search for a topic or a favourite creator, and narrow the results by level, price and rating. Each course has its own page with a description, a lesson breakdown and reviews from other learners, so they can decide with confidence before enrolling.

**For creators**, ByteSpace is a place to share their expertise and earn from it. Every creator has a public profile that shows their story, their audience and all of their courses, and the platform highlights how creators can publish, manage and monetise courses and build a community around them.

This repository contains the frontend of the platform: the landing page, course catalogue, course details, creator profiles, sign-in and sign-up, and a custom 404 page. It was built from the ByteSpace Figma design as a frontend assessment. The content is realistic sample data, so the site runs on its own without a backend.

## Features

### Landing page (`/`)
- Hero with a course search that opens the catalogue with the query applied, plus floating stat cards and decorative 3D shapes.
- Partner logos strip.
- "Discover your passion" course explorer: category chips filter the course grid instantly, with an empty state for categories without courses.
- Category cards, a growth section with platform stats, and a "Create & manage courses" section for creators.
- Creator call to action and a testimonials section.
- Footer with newsletter sign-up (validated with React Hook Form + Zod) and link groups.

### Course catalogue (`/courses`)
- Search by course title or by creator, with a scope selector.
- Filters for category, level, price (free/paid) and minimum rating.
- Sorting by relevance, rating, popularity and price.
- Pagination (18 courses per page).
- Every filter lives in the URL, so results are shareable and work with the browser back button.

### Course details (`/courses/[slug]`)
- Course hero with creator, rating and enrolment card.
- Tabbed sub-pages: **About** (description, preview, key points), **Lessons** (modules, lesson list, progress) and **Reviews** (rating summary and learner reviews).
- Share button using the Web Share API, falling back to copying the link.
- Pages are statically generated for every course, with per-page metadata.

### Creator profile (`/creators/[slug]`)
- Creator hero with bio and stats (products, followers).
- The creator's courses with the same filter and sort toolbar as the catalogue.

### Authentication (`/sign-in`, `/sign-up`)
- Split layout with a showcase panel.
- Client-side validation with inline, accessible error messages and focus on the first invalid field.
- Loading state and success toast (UI only; there is no real auth backend).
- Social sign-in buttons.

### Global
- Fixed header that gains a solid background on scroll, and a slide-out mobile navigation drawer.
- Toast notifications for placeholder actions (cart, video preview, social sign-in).
- Custom 404 page for unknown routes and unknown course or creator slugs.
- SEO metadata for every page.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Server Components, static generation) |
| Language | [TypeScript](https://www.typescriptlang.org) (strict) |
| UI library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with design tokens in CSS |
| Components | [shadcn/ui](https://ui.shadcn.com) on [Radix UI](https://www.radix-ui.com), `class-variance-authority`, `tailwind-merge`, `clsx` |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) (newsletter), typed custom validators (auth) |
| Feedback | [Sonner](https://sonner.emilkowal.ski) toasts |
| Icons | [Lucide](https://lucide.dev) and custom SVG icons |
| Fonts | Clash Display and Satoshi (self-hosted with `next/font/local`), Poppins (`next/font/google`) |
| Tooling | ESLint (`eslint-config-next`), PostCSS |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/HasnathAhmedTamim/bytespace-frontend.git
cd bytespace-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check the project |

## Folder structure

```text
bytespace-frontend/
├── public/
│   └── assets/                  # Images, avatars, logos and decorative shapes exported from Figma
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (site)/              # Pages that share the header and footer
│   │   │   ├── page.tsx         # Landing page
│   │   │   ├── courses/         # Catalogue and course details (about / lessons / reviews)
│   │   │   ├── creators/        # Creator profile
│   │   │   └── not-found.tsx
│   │   ├── (auth)/              # Sign in and sign up
│   │   ├── layout.tsx           # Root layout: fonts, metadata, toaster
│   │   ├── not-found.tsx        # Global 404
│   │   └── globals.css          # Design tokens, typography and utilities
│   ├── components/
│   │   ├── ui/                  # Base primitives: Button, Input, Label, Badge, Card, Sheet, Toaster
│   │   ├── shared/              # Reusable blocks: Container, Section, SectionHeading, Logo, Pagination…
│   │   ├── layout/              # Site header, mobile nav, footer, newsletter, site shell
│   │   ├── sections/            # Page sections grouped by page
│   │   │   ├── home/
│   │   │   ├── courses/
│   │   │   ├── course-details/
│   │   │   ├── creators/
│   │   │   └── not-found/
│   │   ├── courses/             # Course card, tabs, filters, rating, share and preview buttons
│   │   ├── creators/            # Creator stats
│   │   └── auth/                # Auth layout, forms and social sign-in
│   ├── constants/               # Image paths, routes and navigation, metadata, search options
│   ├── data/                    # Typed mock data: courses, creators, categories, testimonials
│   ├── fonts/                   # Self-hosted variable fonts
│   ├── hooks/                   # Custom hooks (useScrolled)
│   ├── lib/                     # Filtering, validation, formatting and utilities
│   └── types/                   # Shared TypeScript types
├── components.json              # shadcn/ui configuration
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Architecture and design system

- **Server-first:** pages are React Server Components; only interactive pieces (forms, the course explorer, the mobile menu, toasts) are client components.
- **Design tokens:** colours, radii, shadows, breakpoints, typography, container width and gutters are defined once in `globals.css` and used through Tailwind utilities; components contain no hard-coded hex values.
- **Reusable primitives:** `Section` (full-width section with tones such as `brand`, `muted` and `subtle`), `Container`, `SectionHeading`, `Button`, `Card` and `Badge` variants built with `class-variance-authority`.
- **Typed data layer:** mock data in `src/data`, shared types in `src/types`, and pure helpers in `src/lib` (for example `queryCourses` for search, filter, sort and pagination).
- **URL as state:** catalogue filters are parsed from and written to search params, which keeps pages server-rendered and shareable.

## Responsive design

- **1440px** is the Figma reference, and the layout matches it closely.
- **Wider screens (1920px, 2560px):** backgrounds stay full width while content stays in a centred 1200px container, so the design keeps its scale instead of stretching or zooming.
- **Smaller screens:** the side gutter shrinks from 120px to 24px, grids go from 3 columns to 2 and then 1, rows stack, and decorative shapes scale down or hide.
- No CSS zoom or scaling of real content, and no horizontal scrolling from 390px to 2560px.

## Accessibility

- Semantic landmarks and headings, labelled navigation and form controls.
- Visible focus rings and keyboard-operable menus, chips and tabs.
- Form errors linked with `aria-describedby` and `aria-invalid`; live regions for filtered results.
- Decorative images are hidden from assistive technology, and motion respects `prefers-reduced-motion`.

## Git workflow

- Each feature was developed on its own branch and merged into `main` through a pull request with a merge commit: project setup, design system, layout, home, courses, course details, creator profile, auth, 404 and a responsive container refactor.
- Commits follow the `type(scope): description` convention (for example `feat(courses): build course discovery section`).
- Lint, type-check and a production build were run before every commit.

## Deployment

The app is deployed on Vercel from the `main` branch with the default Next.js settings. No environment variables are required.

---

**Author:** [Hasnath Ahmed Tamim](https://github.com/HasnathAhmedTamim)
