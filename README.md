# WebWeave Studio Portfolio

WebWeave Studio is a premium, high-performance, dark-themed developer portfolio built for showcasing freelance design and development work. The application leverages modern web technologies to deliver a responsive experience with rich aesthetics, glassmorphism elements, custom animations, and automated client onboarding features.

## Architecture and Core Tech Stack

The application is built on top of a modern, type-safe full-stack React framework:

- **Framework**: TanStack Start (TypeScript) with TanStack Router for route management and SSR capabilities.
- **Core Library**: React 19.
- **Styling**: Tailwind CSS v4 with custom utility layers.
- **Animations**: Framer Motion for spring-based component transitions and micro-interactions.
- **Forms**: React Hook Form with validation patterns.
- **Icons**: Lucide React.
- **Bundler**: Vite.

## Repository Structure

The project code is organized as follows:

```
├── .lovable/                 # Environment and editor metadata
├── src/
│   ├── assets/               # Local static assets, logos, and mockups
│   ├── components/
│   │   ├── portfolio/        # Core portfolio section components
│   │   │   ├── About.tsx         # Professional biography and profile section
│   │   │   ├── Contact.tsx       # Standard inquiry details and CTA triggers
│   │   │   ├── EnquiryModal.tsx  # Dynamic WhatsApp project intake form modal
│   │   │   ├── Faq.tsx           # Interactive FAQ accordion
│   │   │   ├── Footer.tsx        # Brand footer and social coordinates
│   │   │   ├── Hero.tsx          # Dynamic visual landing with primary CTAs
│   │   │   ├── Navbar.tsx        # Sticky navigation header
│   │   │   ├── Particles.tsx     # Canvas-based background animations
│   │   │   ├── Portfolio.tsx     # Case studies and interactive mockups
│   │   │   ├── Pricing.tsx       # Service tiers and feature comparison
│   │   │   ├── Results.tsx       # Metrics, analytics and client success data
│   │   │   └── Testimonials.tsx  # Interactive client reviews carousel
│   │   └── ui/               # Reusable UI primitives (Radix UI wrappers)
│   ├── routes/               # File-based routing configuration
│   │   ├── __root.tsx        # Global layout component and error boundaries
│   │   └── index.tsx         # Main entry point mounting the portfolio landing
│   ├── styles.css            # Custom CSS properties, animations, and premium scrollbar styles
│   ├── router.tsx            # TanStack Router instance creation
│   └── start.ts              # TanStack Start dev environment entry point
├── package.json              # Script definitions and package dependencies
├── tsconfig.json             # TypeScript compiler settings
├── vite.config.ts            # Vite build pipeline and plugin configurations
└── wrangler.jsonc            # Cloudflare Pages deployment properties
```

## Features

### Dynamic Project Enquiry Form
The portfolio integrates a comprehensive EnquiryModal triggered by CTA buttons throughout the site.
- Implements real-time filtering on key fields (e.g., restricts the WhatsApp input field strictly to 10 digits and numbers).
- Features validation rules using React Hook Form to ensure high-quality leads.
- Automatically compiles inputs and generates pre-filled links to redirect users directly to WhatsApp for instant client-freelancer matching.
- Implements an opaque sticky header (bg-background/95) with backdrop-blur to prevent scrolling form text from overlapping or bleeding through.

### Premium Design Aesthetics
- Uses a luxury color scheme consisting of a deep navy background, warm ivory typography, and gold gradient accents.
- Utilizes glassmorphism panels (glass and glass-strong utilities) with custom backdrop blurs and borders.
- Integrates custom scrollbars site-wide and within panels, using floating gold-accented handles matching the theme.

### Performance and SEO
- Optimized layouts with low shift, semantic HTML structure, and fast rendering.
- Layouts are fully responsive across phone, tablet, and desktop screens.

## Getting Started

### Prerequisites

Ensure you have Node.js (v18 or higher) and npm installed on your system.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/tulasiram04/Tulasiram-Portfolio.git
cd Tulasiram-Portfolio
npm install
```

### Development Server

Run the local development server with hot module reloading:

```bash
npm run dev
```

The application will be accessible at: `http://localhost:8080`

### Building for Production

Compile a production-ready bundle optimized for deployment:

```bash
npm run build
```

You can preview the compiled build locally:

```bash
npm run preview
```

### Code Formatting and Linting

Validate code consistency and lint rules:

```bash
# Run linting check
npm run lint

# Format code with Prettier
npm run format
```

## Deployment

The application is configured to build and deploy to serverless hosting environments such as Cloudflare Pages. Deployment settings and routing targets are declared in the wrangler.jsonc configuration file.
