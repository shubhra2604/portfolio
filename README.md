# Animated Portfolio Website

Personal portfolio built with React + Vite + Tailwind CSS and animation-focused UI.

## Animation Stack

- AOS (scroll-based section animations)
- Animate.css (headline and text reveals)
- Lottie (`@lottiefiles/react-lottie-player`) for Hero illustration
- Motion One (`@motionone/dom`) for micro-interactions and hover effects

## Sections

- Hero
- About Me
- Technical Skills
- Projects
- Education & Achievements Timeline
- Contact
- Footer

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components` → reusable sections and animation wrappers
- `src/data/portfolioData.js` → centralized resume content
- `src/App.jsx` → page composition, AOS init, theme toggle
- `src/index.css` → Tailwind layers + global styles

## Personalization

Update portfolio content in `src/data/portfolioData.js`.
