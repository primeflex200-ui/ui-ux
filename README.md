# InfluenzAI Landing Page

A modern, responsive landing page for InfluenzAI - an AI-powered platform designed to help Gen Z creators automate their social media workflow and focus on creating amazing content.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: GSAP-powered text animations and smooth transitions
- **Modern UI Components**: Built with shadcn/ui components for a polished look
- **Interactive Elements**: Hover effects, animated decorations, and dynamic visual elements
- **Theme Support**: Light and dark mode compatibility
- **Performance Optimized**: Efficient rendering and smooth scrolling experience

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── figma/           # Figma-exported components
│   ├── AboutSection.tsx # About and services section
│   ├── CustomerCare.tsx # Customer support section
│   ├── FeatureBlocks.tsx # Feature showcase
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Hero section with CTA
│   ├── LandingPage.tsx  # Main landing page component
│   ├── Plasma.tsx       # Animated background effects
│   ├── SplitText.tsx    # Text animation component
│   └── ThemeToggle.tsx  # Dark/light mode toggle
├── styles/
│   └── globals.css      # Global styles and theme variables
├── App.tsx              # Root component
└── main.tsx             # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd influenzai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### LandingPage
Main component that orchestrates all sections with animated decorative elements and smooth scrolling effects.

### HeroSection
Eye-catching hero section with animated text, CTA button, and statistics display.

### FeatureBlocks
Showcases key features with animated cards and icons.

### CustomerCare
Highlights customer support features with interactive elements.

### AboutSection
Detailed information about the platform, services, and how it works.

### SplitText
Reusable component for creating smooth text reveal animations using GSAP.

## Customization

### Colors
Theme colors can be customized in `src/styles/globals.css` using CSS variables.

### Content
Update text content directly in the component files:
- Hero text: `src/components/HeroSection.tsx`
- Features: `src/components/FeatureBlocks.tsx`
- About content: `src/components/AboutSection.tsx`

### Animations
Animation timings and effects can be adjusted in individual components using GSAP parameters.

## Design Features

- **Pink Gradient Background**: Soft, modern gradient from light pink to white
- **Animated Decorations**: Floating shapes and glowing orbs throughout the page
- **Hanging Elements**: Social media icons suspended with glowing threads
- **Smooth Transitions**: GPU-accelerated animations for optimal performance
- **Interactive Cards**: Hover effects on feature cards and buttons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using `will-change` and GPU acceleration
- Lazy loading for images
- Efficient re-renders with React best practices
- Minimal bundle size with tree-shaking

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact the InfluenzAI team.
