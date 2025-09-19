# Font Usage Guide

This document outlines how fonts are applied throughout the Blck Grid website according to the Figma design specifications.

## Font Files
- `public/Gacor.ttf` - Gacor Personal Use font
- `public/anderson.otf` - Anderson Grotesk font
- Roboto Mono - Loaded from Google Fonts

## Font Applications

### Gacor Personal Use (`font-gacor`)
Used for major headings and navigation elements:
- **Main Brand Text**: "Blck Grid" (36.47px / 2.85vw)
- **Secondary Heading**: "CURATED" (36.47px / 2.85vw) 
- **Navigation Items**: Services, Pricing, Contact, Team (6.22px / 0.486vw)
- **About Text**: "about" (36.47px / 2.85vw)

**Specifications:**
- Font Weight: 400 (normal)
- Line Height: 1.883em

### Anderson Grotesk (`font-anderson`)
Used for specific accent text:
- **Motto Label**: "Motto" (8.73px / 0.681vw)

**Specifications:**
- Font Weight: 400 (normal)
- Line Height: 0.986em
- Text Alignment: Right

### Roboto Mono (`font-roboto-mono`)
Used for body text, descriptions, and technical content:
- **Main Heading**: "One Studio for your Idea With all the expertise at all the stages" (11.21px / 0.875vw)
- **Description Text**: Main paragraph content (11.21px / 0.875vw, weight: 300)
- **Project Titles**: "Shivas Eye Care", "XYZXXXYYYZZ" (11.21px / 0.875vw, weight: 500)
- **Project Descriptions**: Smaller description text (5.98px / 0.467vw, weight: 300)
- **Section Headers**: "description and Approach" (11.21px / 0.875vw, weight: 300)
- **Navigation Arrows**: "→" symbols (19.62px / 1.53vw)

**Specifications:**
- Font Weights: 300 (light), 400 (normal), 500 (medium)
- Line Height: 1.319em

## Responsive Scaling

All font sizes use `clamp()` CSS function for responsive scaling:
- Minimum size prevents text from becoming too small
- Maximum size maintains design integrity on large screens
- Viewport-relative units (vw) provide proportional scaling

## CSS Variables
- `--font-gacor`: Gacor Personal Use
- `--font-anderson`: Anderson Grotesk  
- `--font-roboto-mono`: Roboto Mono

These variables are applied through Tailwind CSS utility classes.