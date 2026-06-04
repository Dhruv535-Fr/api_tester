# API Performance Testing Platform - Landing Page

A modern, premium SaaS-style landing page built with **React.js**, **Tailwind CSS**, and **Recharts**.

## Features

✨ **Premium Design** - Modern, clean UI inspired by Apidog, Vercel, and Linear  
⚡ **High Performance** - Lightning-fast build and load times with Vite  
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile  
📊 **Interactive Charts** - Real-time analytics dashboard with Recharts  
🎨 **Beautiful Animations** - Smooth transitions and fade-in effects  
🔧 **Production-Ready** - Clean component structure and best practices  

## Tech Stack

- **React 18** - UI library for building components
- **Vite** - Next-generation build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing with Autoprefixer

## Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar with logo and links
│   │   ├── Hero.jsx        # Hero section with headline and CTA
│   │   ├── Dashboard.jsx   # Product dashboard mockup with charts
│   │   ├── Features.jsx    # Feature grid with 4 cards
│   │   └── Footer.jsx      # Footer with links and attribution
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and animations
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn)

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The page will automatically open in your browser at `http://localhost:3000`

## Available Scripts

### `npm run dev`
Starts the development server with hot module reloading.

### `npm run build`
Creates an optimized production build in the `dist/` directory.

### `npm run preview`
Preview the production build locally before deployment.

## Key Components

### Navbar (`Navbar.jsx`)
- Logo with branding
- Navigation links (Features, Docs, GitHub)
- "Launch App" call-to-action button
- Sticky positioning with glass-effect styling

### Hero Section (`Hero.jsx`)
- Two-column layout
- Headline and subheadline
- Feature bullets with checkmarks
- Primary and secondary CTA buttons
- Social proof section

### Dashboard (`Dashboard.jsx`)
- 6 key metrics cards (Concurrent Users, Total Requests, Success Rate, Throughput, Avg Response, P95 Latency)
- Response time trend chart
- Throughput bar chart
- Success vs Failure pie chart
- Recent test activity table

### Features (`Features.jsx`)
- 4-card feature grid
- Icons from Lucide React
- Hover animations and effects
- Stats showing usage metrics

### Footer (`Footer.jsx`)
- Multi-column layout with links
- Social media links
- Attribution and copyright

## Customization

### Change Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: '#0F172A',
  secondary: '#1E293B',
  accent: '#3B82F6',
  // ... more colors
}
```

### Update Content
All text and data can be easily modified in each component. Dashboard metrics are hardcoded for demo purposes and can be connected to a real API.

### Add Your Charts Data
Recharts components use data objects. Update the data arrays in `Dashboard.jsx` to display real metrics.

## Performance Metrics

The dashboard displays:
- **Concurrent Users**: 500
- **Total Requests**: 10,000
- **Success Rate**: 99.2%
- **Throughput**: 1,250 req/s
- **Avg Response Time**: 180ms
- **P95 Latency**: 420ms

These are demo values and can be connected to your backend API.

## Responsive Design

The landing page is fully responsive:
- **Desktop**: Multi-column layouts with full charts
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Single-column layout with stacked components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## Styling Highlights

- **Glass-effect elements**: Semi-transparent backgrounds with backdrop blur
- **Gradient text**: Modern text gradients for headings
- **Smooth animations**: Fade-in and slide-in effects
- **Hover states**: Interactive elements with scale and color transitions
- **Shadow effects**: Glowing effects on interactive elements

## Future Enhancements

- [ ] Connect to real API backend
- [ ] User authentication
- [ ] Test configuration and scheduling
- [ ] Advanced filtering and search
- [ ] Export reports functionality
- [ ] Collaborative testing features
- [ ] Team management

## License

This project is part of the API Performance Testing Platform.

## Support

For issues, feature requests, or contributions, please visit the GitHub repository.

---

**Built with ❤️ for backend engineers and DevOps teams**
