<div align="center">

# Angular Design System

### A production-quality Angular 21 component library built with Storybook v10, Tailwind CSS, and Nx monorepo

[![Live Storybook](https://img.shields.io/badge/Storybook-Live_Demo-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://prabakarkaruppasamy.github.io/angular-design-system/)
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![Storybook](https://img.shields.io/badge/Storybook-v10-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Nx](https://img.shields.io/badge/Nx-Monorepo-143055?style=for-the-badge&logo=nx&logoColor=white)](https://nx.dev)
[![Deploy](https://img.shields.io/github/actions/workflow/status/PrabakarKaruppasamy/angular-design-system/deploy-storybook.yml?style=for-the-badge&label=Deploy&logo=githubactions&logoColor=white)](https://github.com/PrabakarKaruppasamy/angular-design-system/actions)

**[🚀 View Live Storybook →](https://prabakarkaruppasamy.github.io/angular-design-system/)**

</div>

---

## 📦 Components

| Component | Description | Status |
|---|---|---|
| **Button** | 4 variants (primary, secondary, danger, ghost) · 3 sizes · disabled state | ✅ Live |
| **Input** | Text, email, password, number · label · hint · error · WCAG accessible | ✅ Live |
| **Badge** | 6 colour variants · dot indicator · pill or squared · 2 sizes | ✅ Live |
| **Card** | 4 variants (default, outlined, elevated, flat) · header · footer · content projection | ✅ Live |
| **Modal** | 4 sizes · backdrop click · Escape key · ARIA roles · keyboard accessible | ✅ Live |
| **Toast** | Success, warning, danger, info · auto-dismiss · position control | 🚧 In Progress |
| **Table** | Sortable columns · pagination · row selection · loading state | 🚧 In Progress |
| **Select** | Single/multi select · search · grouped options · WCAG accessible | 🚧 In Progress |

---

## 🏗️ Architecture

```
angular-design-system/
├── apps/
│   └── showcase/                  # Storybook host application
│       ├── src/
│       │   └── app/
│       │       └── components/    # All design system components
│       │           ├── button/
│       │           ├── input/
│       │           ├── badge/
│       │           ├── card/
│       │           └── modal/
│       └── .storybook/            # Storybook configuration
└── .github/
    └── workflows/
        └── deploy-storybook.yml   # CI/CD → GitHub Pages
```

**Key decisions:**
- **Angular 21 Standalone APIs** — no NgModules, tree-shakeable by default
- **Angular Signals** — reactive inputs using `input()` signal primitives
- **Tailwind CSS v3** — utility-first styling, consistent design tokens
- **Nx monorepo** — scalable workspace ready for multiple libraries
- **WCAG 2.1 accessibility** — keyboard navigation, ARIA labels, focus management on every component

---

## 🚀 Getting Started

### Prerequisites
- Node.js v22+
- npm v10+

### Installation

```bash
git clone https://github.com/PrabakarKaruppasamy/angular-design-system.git
cd angular-design-system
npm install --legacy-peer-deps
```

### Run Storybook locally

```bash
npx nx run showcase:storybook
```

Open [http://localhost:4400](http://localhost:4400)

### Build Storybook

```bash
npx nx run showcase:build-storybook
```

### Run the app

```bash
npx nx serve showcase
```

### Run tests

```bash
npx nx run showcase:test
```

---

## ✅ Accessibility

Every component is built to **WCAG 2.1 AA** standards:

- ✅ All form inputs have associated `<label>` elements via `for` + `id`
- ✅ Modal implements `role="dialog"`, `aria-modal`, `aria-label`
- ✅ Modal closes on **Escape key** press
- ✅ Backdrop click and keyboard events paired on interactive elements
- ✅ Error messages use `role="alert"` for screen reader announcements
- ✅ All buttons have descriptive `aria-label` attributes
- ✅ Focus management on interactive components

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (Standalone APIs) |
| Reactivity | Angular Signals (`input()`, `output()`, `signal()`) |
| Styling | Tailwind CSS v3 |
| Documentation | Storybook v10 |
| Monorepo | Nx |
| Testing | Jest |
| CI/CD | GitHub Actions → GitHub Pages |
| Language | TypeScript |

---

## 📖 Component API Example

```typescript
// Button component usage
<app-button
  variant="primary"   // 'primary' | 'secondary' | 'danger' | 'ghost'
  size="md"           // 'sm' | 'md' | 'lg'
  label="Submit"
  [disabled]="false">
</app-button>

// Input component usage
<app-input
  label="Email address"
  placeholder="Enter your email"
  type="email"
  hint="We'll never share your email"
  error="Invalid email format">
</app-input>

// Modal component usage
<app-modal
  [open]="isOpen()"
  title="Confirm Action"
  size="md"
  (closed)="isOpen.set(false)">
  <p>Modal content here</p>
  <div slot="footer">
    <app-button label="Confirm" variant="primary"></app-button>
  </div>
</app-modal>
```

---

## 🚢 Deployment

Storybook auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

**Live URL:** [https://prabakarkaruppasamy.github.io/angular-design-system/](https://prabakarkaruppasamy.github.io/angular-design-system/)

---

## 👤 Author

**Prabakar Karuppasamy** — Frontend Architect · Technical Lead · 14+ years in enterprise web engineering

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/prabakarsamy)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github&logoColor=white)](https://github.com/PrabakarKaruppasamy)

---

## 📄 License

MIT License — free to use, modify, and distribute.
