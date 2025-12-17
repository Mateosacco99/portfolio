# Customization Guide

This guide will help you customize the portfolio website to make it your own.

## Quick Start Customization

### 1. Personal Information

#### Hero Section (`src/views/Hero.jsx`)
Replace placeholder text with your information:
```jsx
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
  Hi, I'm <span className="text-primary-600">Your Name</span>  {/* ← Change this */}
</h1>
<p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
  A passionate developer creating amazing web experiences  {/* ← Change this */}
</p>
<p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
  I specialize in building modern, responsive, and user-friendly applications
  using the latest technologies.  {/* ← Change this */}
</p>
```

### 2. About Section (`src/views/About.jsx`)

Update the about text and statistics:
```jsx
<p className="text-gray-700 leading-relaxed">
  I'm a full-stack developer...  {/* ← Update with your bio */}
</p>

// Update statistics
<div className="text-4xl font-bold text-primary-600 mb-2">5+</div>  {/* ← Your years */}
<div className="text-gray-600">Years Experience</div>
```

### 3. Projects Section (`src/views/Projects.jsx`)

Replace the example projects with your own:
```jsx
const projects = [
  {
    title: 'Your Project Name',           // ← Project title
    description: 'Project description',   // ← Short description
    technologies: ['React', 'Node.js'],   // ← Tech stack
    image: '🎨',                          // ← Emoji or image URL
    link: 'https://project-url.com',      // ← Project link
  },
  // Add more projects...
];
```

### 4. Skills Section (`src/views/Skills.jsx`)

Update your skills and proficiency levels:
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },      // ← Update skill and level
      { name: 'JavaScript', level: 95 },
      // Add or remove skills...
    ],
  },
  // Update other categories...
];
```

### 5. Contact Information (`src/views/Contact.jsx`)

Update your contact details:
```jsx
<p className="text-gray-600">your.email@example.com</p>  {/* ← Your email */}
<p className="text-gray-600">+1 (555) 123-4567</p>       {/* ← Your phone */}
<p className="text-gray-600">Your City, Country</p>      {/* ← Your location */}
```

### 6. Footer (`src/App.js`)

Update copyright and social links:
```jsx
<Footer
  copyright="© 2024 Your Name. All rights reserved."  {/* ← Your name */}
  links={footerLinks}
  socialLinks={[
    {
      label: 'GitHub',
      href: 'https://github.com/yourusername',  {/* ← Your GitHub */}
      icon: <svg>...</svg>,
    },
    // Update other social links...
  ]}
/>
```

## Advanced Customization

### Change Color Theme

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',   // ← Lightest shade
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // ← Main color
        600: '#0284c7',  // ← Used most frequently
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',  // ← Darkest shade
      },
    },
  },
}
```

**Color Generator Tools:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co/)

### Change Fonts

1. Add Google Fonts to `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

### Add New Sections

1. Create a new view in `src/views/`:
```jsx
// src/views/NewSection.jsx
import React from 'react';

const NewSection = () => {
  return (
    <section id="new-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. Export from `src/views/index.js`:
```javascript
export { default as NewSection } from './NewSection';
```

3. Add to `src/App.js`:
```jsx
import { NewSection } from './views';

// In the return statement:
<NewSection />
```

### Customize Component Styles

All components accept a `className` prop for additional styling:
```jsx
<Button className="shadow-lg hover:scale-105">
  Custom Styled Button
</Button>

<Card className="border-2 border-primary-500">
  Custom Styled Card
</Card>
```

### Add Images

1. Add images to `public/images/` folder
2. Reference in your code:
```jsx
<img src="/images/your-photo.jpg" alt="Your Name" />
```

Or use in project cards:
```jsx
{
  title: 'Project Name',
  image: '/images/project-screenshot.jpg',  // Instead of emoji
  // ...
}
```

### Deploy to GitHub Pages

1. Add homepage to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### Environment Variables

For sensitive data like API keys:

1. Create `.env` file:
```
REACT_APP_EMAIL_SERVICE_KEY=your_key_here
```

2. Use in code:
```javascript
const apiKey = process.env.REACT_APP_EMAIL_SERVICE_KEY;
```

3. Never commit `.env` (it's already in `.gitignore`)

## Common Customizations

### Remove a Section

Simply comment out or remove the section from `src/App.js`:
```jsx
<main>
  <Hero />
  <About />
  {/* <Projects /> */}  {/* ← Removed */}
  <Skills />
  <Contact />
</main>
```

### Change Section Order

Rearrange sections in `src/App.js`:
```jsx
<main>
  <Hero />
  <Skills />      {/* ← Moved up */}
  <About />
  <Projects />
  <Contact />
</main>
```

### Add Animation

Install framer-motion:
```bash
npm install framer-motion
```

Add to components:
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

### Make Contact Form Functional

#### Option 1: Using EmailJS

1. Install EmailJS:
```bash
npm install @emailjs/browser
```

2. Update Contact component:
```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    setSubmitStatus('success');
  })
  .catch(() => {
    setSubmitStatus('error');
  });
};
```

#### Option 2: Using Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Update form action:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Tips

1. **Test on Multiple Devices**: Always test your changes on mobile, tablet, and desktop
2. **Keep It Simple**: Don't overcomplicate the design
3. **Performance**: Optimize images before adding them
4. **Accessibility**: Ensure text has good contrast and is readable
5. **SEO**: Update the meta tags in `public/index.html`

## Need Help?

- Check the [COMPONENTS.md](COMPONENTS.md) for component API
- Review the [README.md](README.md) for setup instructions
- Open an issue on GitHub for bugs or questions

Good luck with your portfolio! 🚀
