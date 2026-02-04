# Managerless Marketing Website

A modern, responsive marketing website for Managerless - a platform that empowers creators to manage their business without a manager.

## Features

- 🎨 Modern, creative design with brand colors
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js for optimal performance
- 🎯 SEO optimized
- 🚀 Fast page loads and smooth animations

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **CSS3** - Styling with CSS variables

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
managerless-marketing-website/
├── pages/
│   ├── _app.js          # App wrapper with global styles
│   ├── index.js         # Home page
│   ├── privacy-policy.js # Privacy policy page
│   └── terms-conditions.js # Terms and conditions page
├── components/
│   ├── Navbar.js        # Navigation component
│   └── Footer.js        # Footer component
├── styles/
│   └── globals.css      # Global styles
├── public/
│   └── assets/          # Images and logos
└── package.json
```

## Pages

1. **Home Page** (`/`) - Main landing page with hero, features, pricing, and CTA
2. **Privacy Policy** (`/privacy-policy`) - Privacy policy page
3. **Terms & Conditions** (`/terms-conditions`) - Terms and conditions page

## Customization

### Colors

Brand colors are defined in `styles/globals.css` as CSS variables:
- Primary Green: `#1a4d3a`
- Gold: `#d4af37`
- Beige: `#f5f1e8`

### Content

Edit the respective page files in the `pages/` directory to update content.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

© 2024 Managerless. All rights reserved.

