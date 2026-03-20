# Seva Trust - Religious & Charitable Trust Website

A beautiful, modern single-page website built with Next.js for a religious and charitable trust organization.

## Features

- 🏛️ **Hero Section** - Impactful landing with key statistics
- ℹ️ **About Section** - Mission, vision, and core values
- 📚 **Programs** - Showcase of charitable programs and services
- 📊 **Impact Statistics** - Visual representation of reach and impact
- 💰 **Donation System** - Easy-to-use donation form with multiple options
- 🤝 **Volunteer Section** - Volunteer opportunities and application form
- 📅 **Events Calendar** - Upcoming events and celebrations
- 📧 **Contact Form** - Easy way for people to get in touch
- 📱 **Fully Responsive** - Works beautifully on all devices

## Design Features

- **Distinctive Typography** - Using Cormorant Garamond and Crimson Pro for elegant, warm aesthetics
- **Warm Color Palette** - Earthy oranges and serene blues reflecting spiritual and charitable nature
- **Smooth Animations** - Subtle scroll animations and hover effects
- **Accessible** - Built with accessibility best practices
- **SEO Optimized** - Proper meta tags and semantic HTML

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS** - Custom styling with CSS variables
- **React Hooks** - Modern React patterns

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

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
seva-trust-website/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── package.json
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --color-primary: #D97706;      /* Main orange */
  --color-secondary: #0891B2;    /* Teal blue */
  --color-accent: #DC2626;       /* Red accent */
  /* ... more colors */
}
```

### Content

Update the content directly in `app/page.tsx`:
- Organization name and tagline
- Statistics and impact numbers
- Program descriptions
- Event listings
- Contact information

### Typography

Current fonts:
- **Display**: Cormorant Garamond (headings)
- **Accent**: Crimson Pro (subtitles)
- **Body**: Lato (body text)

Change fonts in the CSS import at the top of `globals.css`.

## Sections Overview

### 1. Navigation
Smooth scroll navigation with active section highlighting

### 2. Hero Section
- Eye-catching gradient background
- Mission statement
- Key statistics cards
- Call-to-action buttons

### 3. About Section
- Organization history
- Core values with icons
- Visual representation

### 4. Programs Section
- 6 program cards (Education, Healthcare, Food, Elder Care, Water, Spiritual)
- Each with description and key features

### 5. Impact Section
- Large impact statistics
- Beneficiary testimonials
- Trust indicators

### 6. Donate Section
- Multiple donation amounts
- One-time and recurring options
- Impact descriptions for donation levels
- Secure payment mention

### 7. Volunteer Section
- Volunteer opportunities
- Application form
- Volunteer benefits

### 8. Events Section
- Upcoming events calendar
- Event details and timing
- Location information

### 9. Contact Section
- Multiple contact methods
- Contact form
- Office hours

### 10. Footer
- Links and resources
- Social media
- Newsletter signup
- Registration details

## License

This is a template project. Feel free to customize and use for your charitable organization.

## Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ for humanitarian causes
