<img width="1856" height="933" alt="image" src="https://github.com/user-attachments/assets/68e97bc3-5e53-4ae2-b83e-563e1bc10de6" />

# 🚀 Ahmadh Najahi - Portfolio

A modern, animated, and responsive personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed with a clean, recruiter-friendly layout and immersive visual effects.

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Live Preview

> [View Live Portfolio →](#)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Portfolio Sections](#-portfolio-sections)
- [Animations & Effects](#-animations--effects)
- [CV Download (PDF)](#-cv-download-pdf)
- [Customization](#-customization)
- [Build & Deployment](#-build--deployment)
- [Screenshots](#-screenshots)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Features

- ⚡ **Blazing Fast** — Built with Vite for instant HMR and optimized production builds
- 🎨 **Immersive Animated Background** — Interactive particle system with mouse-reactive connections, shooting stars/meteors, floating geometric shapes, animated wave lines, and aurora/nebula gradient blobs
- 📄 **PDF CV Download** — Auto-generates a professionally formatted multi-page PDF resume using jsPDF (no static file needed)
- 🧩 **6-Section Architecture** — Hero, About, Projects, Skills, Data & Analytics, Education/Certifications, and Contact
- 📱 **Fully Responsive** — Mobile-first design with hamburger navigation and adaptive layouts
- 🖱️ **Smooth Animations** — Framer Motion scroll-triggered reveals, staggered transitions, and micro-interactions
- 🔗 **Project Detail Expansion** — Each featured project expands to show Problem, Solution, Role, Tech Stack reasoning, Challenges, and Outcome
- 🌙 **Dark Theme** — Glassmorphism cards, gradient accents, and glow effects
- 🚫 **Hidden Scrollbar** — Clean, scrollbar-free browsing experience
- 🔍 **SEO-Friendly** — Semantic HTML structure with proper heading hierarchy

---

## 🛠 Tech Stack

| Category       | Technology                                                    |
| -------------- | ------------------------------------------------------------- |
| **Framework**  | React 19.2                                                    |
| **Language**   | TypeScript 5.9                                                |
| **Bundler**    | Vite 7.2                                                      |
| **Styling**    | Tailwind CSS 4.1                                              |
| **Animations** | Framer Motion 12.x + Custom Canvas API                        |
| **Icons**      | Lucide React                                                  |
| **PDF Gen**    | jsPDF                                                         |
| **Utilities**  | clsx, tailwind-merge, react-intersection-observer             |
| **Build**      | vite-plugin-singlefile (single-file output)                   |

---

## 📁 Project Structure

```
├── index.html                      # Entry HTML with Google Fonts
├── package.json                    # Dependencies & scripts
├── vite.config.ts                  # Vite + Tailwind + SingleFile plugin config
├── tsconfig.json                   # TypeScript configuration
├── README.md                       # This file
│
└── src/
    ├── main.tsx                    # React DOM entry point
    ├── App.tsx                     # Root component with background layers
    ├── index.css                   # Global styles, animations, glassmorphism
    │
    ├── data/
    │   └── portfolio.ts            # All portfolio data (projects, skills, education, etc.)
    │
    ├── utils/
    │   ├── cn.ts                   # Tailwind class merge utility
    │   └── generateCV.ts           # PDF CV generator using jsPDF
    │
    └── components/
        ├── Navbar.tsx              # Fixed navigation with scroll detection & mobile menu
        ├── Hero.tsx                # Full-screen hero with animated elements & CTAs
        ├── About.tsx               # About section with highlight cards
        ├── Projects.tsx            # Featured projects with expandable detail cards
        ├── Skills.tsx              # Grouped skill tags with staggered animations
        ├── DataExperience.tsx      # Data & Analytics experience cards
        ├── Education.tsx           # Education timeline + certification cards
        ├── Contact.tsx             # Contact info, social links, reference, CV download
        ├── Footer.tsx              # Minimal footer
        └── ParticleBackground.tsx  # Interactive canvas particle system
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The dev server will start at `http://localhost:5173` with hot module replacement.

### Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start Vite development server            |
| `npm run build`     | Build for production (outputs to `dist/`)|
| `npm run preview`   | Preview production build locally         |

---

## 📑 Portfolio Sections

### 1. 🏠 Hero Section
- Full-screen landing with name, role, and tagline
- Animated gradient text effect
- "Open to opportunities" status badge with pulse animation
- CTA buttons: View Projects, GitHub, LinkedIn
- Subtle "Download CV (PDF)" link (intentionally not in navigation)
- Scroll indicator animation

### 2. 👤 About Me
- Concise professional summary (~120 words)
- 4 highlight cards: Frontend Systems, Data Awareness, Fast Learner, Problem Solver
- Scroll-triggered fade-in animations

### 3. 💼 Featured Projects (Core Section)
4 curated projects with expandable detail cards:

| Project                        | Tech Stack                              |
| ------------------------------ | --------------------------------------- |
| Component Flow Explorer        | TypeScript, React, Vite, Tailwind, shadcn/ui |
| Weather Tracking System        | React, TypeScript, Weather API, Tailwind|
| Telegram To-Do Bot             | Python, Telegram Bot API, SQLite        |
| Grifindo Leave Management System | C#, .NET Framework, SQL Server        |

Each project card expands to reveal:
- **Problem** — What real problem was being solved
- **Solution** — How it was built and what it does
- **My Role** — Specific responsibilities
- **Tech Stack & Why** — Technologies with reasoning for each choice
- **Challenges & Learnings** — Technical difficulties overcome
- **Outcome** — Results and impact

Plus an **"Other Notable Projects"** grid with 5 additional projects.

### 4. 🛠 Technical Skills
Grouped into 4 categories with animated skill tags:
- **Frontend:** React, TypeScript, JavaScript, Tailwind CSS, Material UI, HTML/CSS, Bootstrap
- **Backend & Data:** Python, C#, SQL, MySQL, PHP, .NET Framework, REST APIs
- **Tools:** Git & GitHub, Power BI, Figma, VS Code, WebStorm, SSMS, Excel
- **Practices:** Agile/Scrum, SDLC, UI/UX Design, System Design, Database Management

### 5. 📊 Data & Analytics
Light section highlighting data-driven capabilities:
- Power BI Dashboards
- Python Analytics (Pandas, NumPy)
- SQL Queries
- Data-Driven UI

### 6. 🎓 Education & Certifications
- **Timeline layout** for 4 education entries
- **Certification cards** for Cisco IoT, Mars Tech Ethical Hacking, Google Generative AI, Cisco Data Science

### 7. 📬 Contact
- Email, Phone, Location contact cards
- GitHub & LinkedIn social links
- Quick email CTA with pre-filled subject
- Professional reference (NMM. Nuhman)
- Download CV button (PDF generation)

---

## 🎨 Animations & Effects

### Canvas Particle System (`ParticleBackground.tsx`)
- **Multi-type particles** — Dots, rings, and star shapes with lifecycle fading
- **Mouse interaction** — Particles attract toward cursor (200px radius) and repel when too close (30px)
- **Connection lines** — Dynamic lines between nearby particles and cursor
- **Floating orbs** — Large gradient blobs that pulse and drift
- **Wave/mesh lines** — Animated sine wave lines flowing across the background
- **Shooting stars** — Random meteor effects with gradient trails and head glow
- **Geometric shapes** — Subtle rotating triangle, square, and hexagon
- **Scroll-responsive** — Background elements shift with page scroll

### CSS Animations (`index.css`)
- `gradient-shift` — Animated gradient text colors
- `float` — Gentle vertical floating motion
- `pulse-glow` — Opacity pulsing for glow effects
- `aurora-shift` — Complex multi-point aurora blob movement
- `nebula-drift` — Slow nebula-like drift with scale changes
- `grid-pulse` — Subtle background grid pulsing

### Framer Motion
- Scroll-triggered section reveals (`react-intersection-observer`)
- Staggered children animations for lists and grids
- Expand/collapse project detail cards with height transitions
- Navbar slide-in on page load
- Mobile menu slide transitions

### UI Effects
- **Glassmorphism** — Frosted glass cards with `backdrop-filter: blur(20px)`
- **Glow borders** — Gradient border glow on hover
- **Line decoration** — Underline animation on nav link hover
- **Noise texture** — Subtle SVG noise overlay
- **Selection color** — Custom text selection highlighting

---

## 📄 CV Download (PDF)

The portfolio generates a **professional multi-page PDF CV** on-the-fly using `jsPDF`. No static PDF file is required.

### What's included in the generated PDF:
1. **Header** — Full name, email, phone, LinkedIn, GitHub, address
2. **Profile** — Professional summary
3. **Education** — All 4 education entries with dates, institutions, and focus areas
4. **Skills Summary** — Categorized skill listings
5. **Projects** — 9 projects with descriptions and date ranges
6. **Certificates** — 4 certifications with providers and dates
7. **References** — Professional reference with full contact details

### How it works:
- The `generateCV.ts` utility creates a formatted `jsPDF` document
- Automatic page breaks for content overflow
- Color-coded sections with consistent typography
- Right-aligned dates for a professional CV layout
- Output filename: `Ahmadh_Najahi_CV.pdf`

---

## ⚙️ Customization

### Updating Personal Information
Edit `src/data/portfolio.ts` to update:
- Personal info (name, email, links)
- About me text
- Featured projects (with full detail breakdowns)
- Other projects
- Skills (grouped by category)
- Data experience
- Education history
- Certificates
- Professional reference

### Updating the CV
Edit `src/utils/generateCV.ts` to modify the PDF content, layout, or styling.

### Changing Colors
Edit the `@theme` block in `src/index.css` to customize:
- `--color-primary-*` — Main brand color (currently blue)
- `--color-dark-*` — Background and text shades
- `--color-accent` — Accent/highlight color (currently amber)

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to the section order in `src/App.tsx`
3. Add corresponding data in `src/data/portfolio.ts`
4. Add navigation link in `src/components/Navbar.tsx`

---

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

This generates an optimized single-file build in the `dist/` directory using `vite-plugin-singlefile`. The output is a self-contained `index.html` file.

### Deployment Options

| Platform       | Method                                                   |
| -------------- | -------------------------------------------------------- |
| **Vercel**     | Connect GitHub repo → Auto-deploy on push                |
| **Netlify**    | Drag & drop `dist/` folder or connect repo               |
| **GitHub Pages** | Use `gh-pages` package to deploy `dist/` directory     |
| **Cloudflare Pages** | Connect repo with build command `npm run build`    |
| **Static Host** | Upload `dist/index.html` (single file, no server needed)|

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Aboothaiyoob Ahmadh Najahi**

- 📧 Email: [ahmednajahi2003@gmail.com](mailto:ahmednajahi2003@gmail.com)
- 📱 Mobile: +94 75 053 8620
- 🔗 LinkedIn: [linkedin.com/in/profile](https://linkedin.com/in/profile)
- 💻 GitHub: [github.com](https://github.com)
- 📍 Location: Kalmunai, Ampara, Sri Lanka

---

<p align="center">
  Built with ❤️ using React & TypeScript
</p>
