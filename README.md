# Bhargav Koushal - Personal Portfolio

An interactive 3D portfolio website built with Next.js, Spline, Tailwind CSS, GSAP, and Framer Motion. 

Deployed at: https://bhar7av-portfolio.vercel.app/

## Project Overview

This is a personal portfolio showcasing academic and professional milestones, project works, and technical skills. It features a fully interactive 3D keyboard scene that changes states dynamically as the user scrolls, a custom elastic cursor, and real-time features.

## Tech Stack

* Core: Next.js 15, React, TypeScript
* Styling: Tailwind CSS, Sass
* 3D and Graphics: Spline, Three.js
* Animation: GSAP (GreenSock Animation Platform), Framer Motion
* Scrolling: Lenis (Smooth Scroll)

## Key Features

* Interactive 3D Keyboard: A custom Spline-modeled keyboard mapped to technical skills. Pressing keys triggers specific interactive card highlights.
* Dynamic Scroll Animations: Clean sections synced with scroll progress using GSAP ScrollTrigger and Framer Motion.
* Hardware-Accelerated Effects: Performance-optimized custom elastic cursor using mix-blend-mode composition, preventing rendering lags on high-density screens.
* Responsive Design: Fluid transition between desktop 3D controls and a clean, responsive mobile list-based tech stack layout.
* Dynamic Navigation Previews: Dropdown menu link previews updating as you browse different sections.

## Getting Started

### Prerequisites

* Node.js (version 18 or higher)
* npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhar7av/Newportfolioo.git
   cd Newportfolioo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Deployment

To build the project for production, run:
```bash
npm run build
```

This will output a statically optimized production build ready to be hosted on Vercel or any other hosting provider.
