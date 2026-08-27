# WFAGHTES

# The Wallace Foundation Website

A React + TypeScript website mirroring the design and structure of the Wallace Foundation Squarespace site.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern design with gold/metallic tones and dark background
- **Image Slideshow**: Auto-advancing hero section with manual navigation controls
- **Interactive Navigation**: Mobile-friendly hamburger menu
- **Social Media Integration**: Footer with social media links
- **Content Sections**: Mission statement, feature cards, and call-to-action sections

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### TypeScript Type Checking

Run TypeScript type checking without emitting files:
```bash
npm run type-check
```

### Building for Production

```bash
npm run build
```

This will run TypeScript compilation followed by Vite's production build. The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Adding Your Content and Images

### Updating Hero Images

Edit `/src/components/Hero.tsx` and replace the placeholder images in the `slides` array:

```typescript
const slides: Slide[] = [
  {
    id: 1,
    image: '/path/to/your/image1.jpg',  // Update this path
    alt: 'Description of image 1'
  },
  // Add more slides as needed
]
```

**To add your images:**
1. Place your images in the `/public` folder
2. Reference them as `/imagename.jpg` (e.g., `/hero1.jpg`)

### Updating Content

- **Mission Statement**: Edit `/src/components/Mission.tsx`
- **Header Navigation**: Edit `/src/components/Header.tsx`
- **Footer Content**: Edit `/src/components/Footer.tsx`

### Updating Social Media Links

Edit `/src/components/Footer.tsx` and update the `href` attributes in the social links:

```tsx
<a href="https://facebook.com/yourpage" className="social-link" aria-label="Facebook">
```

### Customizing Colors

All color variables are defined in `/src/index.css`:

```css
:root {
  --gold: #d4af37;
  --light-gold: #f4e5c2;
  --dark-bg: #1a1a1a;
  --darker-bg: #0f0f0f;
  --text-light: #ffffff;
  --text-gray: #cccccc;
}
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Header.css
│   ├── Hero.tsx            # Hero section with slideshow
│   ├── Hero.css
│   ├── Mission.tsx         # Mission and content sections
│   ├── Mission.css
│   ├── Footer.tsx          # Footer with social links
│   └── Footer.css
├── App.tsx                 # Main app component
├── App.css
├── main.tsx                # App entry point
└── index.css               # Global styles and variables
```

## Features to Implement

The current structure provides placeholders for:
- Gala 2025 section
- Forever 25 T-Shirt section
- Sponsor information
- "The Man" section
- "The Muscle" section
- Donation/Help the Cause functionality
- Login functionality

These can be added as separate components as needed.

## Technologies Used

- React 18
- TypeScript 5.3
- Vite 5
- CSS3 with CSS Variables
- Responsive Grid and Flexbox layouts

## Why Vite?

Vite was chosen as the build tool for several key reasons:

1. **Lightning Fast HMR**: Native ES modules provide instant Hot Module Replacement during development
2. **Optimized Builds**: Uses Rollup for production builds with advanced code splitting
3. **Modern Tooling**: Built-in TypeScript support without additional configuration
4. **Better DX**: Near-instant server start regardless of app size
5. **Official Support**: Now recommended by the React team as the successor to Create React App

## TypeScript Benefits

The project uses TypeScript to provide:

- **Type Safety**: Catch errors at compile-time instead of runtime
- **Better IDE Support**: Improved autocomplete and IntelliSense
- **Self-Documenting Code**: Interfaces and types serve as inline documentation
- **Refactoring Confidence**: Type checking ensures changes don't break contracts
- **Enhanced Team Collaboration**: Types make code intentions explicit

## License

Private - The Wallace Foundation
T