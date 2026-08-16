# Nexora Bio

> This project was built as a frontend development assessment for the Nexora Bio landing page.
> The focus is on creating a premium biotechnology experience with strong visual hierarchy, responsive design, smooth interactions, and purposeful animations.

A React + TypeScript landing page for a fictional biotechnology company focused on computational science, molecular biology, precision medicine, and scientific innovation.

The website combines a dark scientific visual language with subtle green accents, animated molecular visuals, scroll-based animations, responsive layouts, and interactive single-page navigation.

Live demo: `https://your-deployment-url.com`

---

## Overview

Nexora Bio is a modern biotechnology landing page designed around the idea of combining biology, computation, and engineering.

The experience is structured as a single-page website with the following sections:

- Hero
- Innovation
- Research
- Capabilities
- Impact
- Contact

The design focuses on strong typography, scientific visuals, subtle motion, responsive layouts, and clear navigation.

---

## Features

### Hero

The Hero section introduces Nexora Bio with:

- Large editorial typography
- Animated entrance effects
- Primary and secondary CTAs
- Interactive molecular visualization
- Scientific grid background
- Ambient lighting effects
- Responsive layout

The primary CTA navigates to the Research section, while the secondary CTA navigates to the Innovation section.

### Navigation

The website uses single-page anchor navigation.

The navigation includes:

- Home
- Innovation
- Research
- Capabilities
- Impact
- Contact

The corresponding section anchors are:

```text
#innovation
#research
#capabilities
#impact
#contact
```

The Home navigation item returns the user to the Hero section.

The desktop navigation changes into a mobile menu on smaller screens.

Navigation includes smooth scrolling and hover interactions.

### Innovation

The Innovation section presents Nexora's approach through three stages:

1. Decode
2. Design
3. Deliver

Each card includes:

- Icon
- Section number
- Title
- Description
- Hover interaction

### Research

The Research section presents the company's core research areas:

- Computational Biology
- Precision Medicine
- Drug Discovery
- Synthetic Biology

The section uses scroll-based reveal animations and interactive hover states.

### Capabilities

The Capabilities section presents six areas of expertise:

- Genomic Analysis
- Target Discovery
- Drug Discovery
- Data Intelligence
- Biomarker Research
- Scientific Innovation

Each capability is displayed as an interactive card with an icon and supporting description.

### Impact

The Impact section presents key metrics:

- **12+** Research programs
- **48M+** Data points analyzed
- **94%** Discovery accuracy
- **27** Scientific partners

The section uses a contrasting green visual treatment to create a strong visual break in the page.

### Contact

The final CTA encourages visitors to start a conversation with Nexora Bio.

The contact action uses:

```text
mailto:hello@nexora.bio
```

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

---

## Design Approach

The visual direction follows a futuristic biotechnology aesthetic.

The design uses:

- Dark scientific backgrounds
- Soft green accents
- Subtle blue ambient lighting
- Large editorial typography
- Fine borders
- Rounded cards
- Molecular visuals
- Generous whitespace
- Minimal UI elements
- Subtle hover interactions

The goal was to make the biotechnology theme feel modern and technically advanced while keeping the interface clean and easy to navigate.

The design relies on typography, spacing, lighting, and motion rather than excessive graphical elements.

---

## Animation Approach

Framer Motion is used for the main animation and interaction system.

Implemented animations include:

- Hero entrance animations
- Scroll reveal animations
- Repeating viewport animations
- Staggered card animations
- Hover lift effects
- Hover underline animations
- Button scale interactions
- Mobile navigation transitions
- Molecular visualization animation

Section animations are triggered as content enters the viewport.

Animations are configured to replay when sections leave and re-enter the viewport, allowing the experience to remain interactive when navigating between sections.

The project also supports users who prefer reduced motion through the `prefers-reduced-motion` media query.

---

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Loader.tsx
│   ├── Hero.tsx
│   ├── MolecularVisual.tsx
│   ├── Innovation.tsx
│   ├── Research.tsx
│   ├── Capabilities.tsx
│   ├── Impact.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
│
├── App.tsx
├── main.tsx
└── index.css



index.html
package.json
vite.config.ts
tsconfig.json
README.md
```

### Component Responsibilities

`Navbar.tsx`

Handles desktop navigation, mobile navigation, and single-page section navigation.

`Loader.tsx`

Provides the initial loading experience before the main page is displayed.

`Hero.tsx`

Contains the main introduction, headline, CTAs, background effects, and molecular visualization.

`MolecularVisual.tsx`

Contains the animated molecular visualization used in the Hero section.

`Innovation.tsx`

Contains the Decode, Design, and Deliver approach.

`Research.tsx`

Contains the research areas and related animations.

`Capabilities.tsx`

Contains the six scientific and technical capability cards.

`Impact.tsx`

Contains the company impact metrics.

`CTA.tsx`

Contains the final call-to-action and contact link.

`Footer.tsx`

Contains the footer content.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

You can verify the installation with:

```bash
node -v
npm -v
```

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nexora-bio.git
```

### 2. Navigate to the project directory

```bash
cd nexora-bio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

After the development server starts, open the URL shown in the terminal.

The default Vite development URL is:

```text
http://localhost:5173
```

---

## Development

The project uses Vite for local development and hot module replacement.

Start the development server with:

```bash
npm run dev
```

Once the application is running, the main navigation can be used to explore:

```text
Home
  ↓
Innovation
  ↓
Research
  ↓
Capabilities
  ↓
Impact
  ↓
Contact
```

The navigation uses section anchors, so no additional routing configuration is required.

---

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive behavior includes:

- Mobile navigation menu
- Adaptive typography
- Responsive grids
- Flexible spacing
- Mobile-friendly CTAs
- Responsive molecular visualization
- Horizontal overflow prevention

Tailwind CSS responsive utilities are used throughout the application to adapt the layout across different viewport sizes.

---

## Accessibility

The implementation includes:

- Semantic HTML structure
- Keyboard-accessible navigation
- Visible focus states
- Responsive typography
- Accessible interactive elements
- Reduced-motion support

The global stylesheet includes a `prefers-reduced-motion` media query to reduce animations and transitions for users who prefer reduced motion.

---

## Live Demo

`https://your-deployment-url.com`

---

## Notes

This project was created as a frontend development assessment.

Nexora Bio is a fictional biotechnology company created for the purpose of this assessment.

The research areas, company metrics, scientific content, and other company information displayed on the website are fictional.

The project is frontend-only and does not require a backend, database, authentication system, or external API.

---

## Author

**BHUSHAN VILAS MARATHE**

Frontend development assessment for Nexora Bio.
