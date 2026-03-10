## Tuks Ekhaya Website

Website and future web app for **Tuks Ekhaya Men&apos;s Residence** at the University of Pretoria.  
Built with **React**, **Vite**, and **TypeScript**, with a structure designed to scale into an admin‑managed web app (live events, announcements, etc.).

---

### Tech stack

- **Frontend**: React + TypeScript
- **Bundler/Dev server**: Vite
- **Routing**: `react-router-dom`
- **Styling**: Global CSS (custom, Ekhaya colours)

---

### Getting started

Prerequisites:

- Node.js **20.19+** or **22.12+** (due to Vite requirement)
- npm (comes with Node)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint (when rules are added):

```bash
npm run lint
```

---

### Project structure (high‑level)

- `index.html` – Vite entry HTML with `#root` mount point.
- `src/main.tsx` – React entry, wraps the app in `BrowserRouter`.
- `src/app/App.tsx` – Top‑level app component using the main layout and routes.
- `src/app/layout/MainLayout.tsx` – Shared layout (navbar, main content, footer).
- `src/app/routes/AppRoutes.tsx` – All public routes.

**Features**

- `src/features/home/HomePage.tsx`
  - Landing page with hero copy, CTAs, and a hero image placeholder for Ekhaya photos.
- `src/features/about/AboutPage.tsx`
  - Info about the residence identity and HC.
- `src/features/life/LifeAtEkhayaPage.tsx`
  - Cards describing academics, sports & culture, and community, with simple illustration placeholders.
- `src/features/events/EventsPage.tsx`
  - Placeholder for the future **live events** module that HC/admins will manage.

**Shared components**

- `src/components/navigation/NavBar.tsx`
  - Top navigation with logo and links to the main pages.
- `src/components/navigation/Footer.tsx`
  - Global footer with copyright and tech note.

**Styling & assets**

- `src/styles/global.css`
  - Global styling, layout, and components.
  - Colour system aligned to Ekhaya spec:
    - Black background (`#000000`)
    - Grey text (`#a7a9ab` for muted copy)
    - Primary accent red (`#9c0a15` – Pantone 7627 C)
- `src/assets/`
  - `ekhaya-logo.svg` – Logo used in the navbar.
  - `ekhaya-hero.svg` – Hero illustration on the home page.
  - `life-academics.svg`, `life-community.svg` – Illustration placeholders on the Life at Ekhaya page.

You can safely replace these SVGs with real photos or official artwork (keep the filenames or update the imports in the components).

---

### Future plans / extension points

The app is structured to support:

- **Admin/HC web app**
  - Add an `admin` feature area (e.g. `src/features/admin/`) with protected routes.
  - Introduce authentication (e.g. JWT, session, or SSO) and role‑based access for HC vs residents.
- **Live events**
  - Extend `EventsPage` into a full events feature:
    - Events list, detail views, registrations, check‑ins, announcements.
    - Real‑time updates (WebSocket/SSE) can be wired in at the `App`/layout level.
- **API integration**
  - Add a data layer (e.g. `src/lib/api/`) to talk to a backend for events, announcements, and resident‑only content.

This README should be kept up to date as new features and admin tools are added.
