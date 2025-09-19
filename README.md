# Blck Grid - Portfolio Website

This is a pixel-perfect recreation of the Figma design for Blck Grid, a software development studio. The website showcases their curated approach to software development services.

## Design Details

This Next.js application recreates the exact layout, typography, colors, and positioning from the original Figma design:

- **Dimensions**: 1280px × 832px (desktop design)
- **Typography**: 
  - Roboto Mono (Google Fonts) for body text
  - Serif fallbacks for the custom "Gacor Personal Use" font
  - System fonts for "Anderson Grotesk" fallback
- **Background**: High-resolution image with 55% black overlay
- **Colors**: Exact hex values from Figma design
- **Layout**: Absolute positioning to match the design precisely

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ✅ Pixel-perfect recreation of Figma design
- ✅ Responsive wrapper that maintains aspect ratio
- ✅ Optimized background image loading
- ✅ Custom font configurations with fallbacks
- ✅ Exact typography sizing and line heights
- ✅ Precise element positioning and spacing

## Project Structure

- `/src/app/page.tsx` - Main landing page component
- `/src/app/layout.tsx` - Root layout with font configuration
- `/src/app/globals.css` - Global styles and variables
- `/public/background.jpg` - Background image from Figma
- `/tailwind.config.ts` - Custom Tailwind configuration

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom configuration
- **Typography**: Next.js font optimization
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component

## Notes

- The design maintains its exact 1280×832px dimensions
- Custom fonts (Gacor Personal Use, Anderson Grotesk) use system fallbacks
- All measurements and positioning match the Figma specifications
- The layout is optimized for desktop viewing as per the original design
