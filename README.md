# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS featuring reusable components and a clean design.

![Portfolio Desktop View](https://github.com/user-attachments/assets/ee4da572-98a9-41ff-a9cd-55364c28cb5a)

## 🚀 Features

- **Fully Responsive**: Works seamlessly on all devices from mobile to desktop
- **Reusable Components**: Generic, standalone components that can be used throughout the application
- **Modern Design**: Clean and professional UI with Tailwind CSS
- **Interactive Elements**: Functional contact form, mobile menu, and smooth navigation
- **Multiple Sections**: Hero, About, Projects, Skills, and Contact sections

## 📦 Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Project scaffolding and build tool

## 🧩 Generic Components

All components are located in the `src/components` directory and are fully reusable:

### Button
A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `fullWidth`: boolean
- `onClick`: function

**Example:**
```jsx
import { Button } from './components';

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

### Card
A flexible card component for displaying content.

**Props:**
- `title`: string
- `subtitle`: string
- `footer`: ReactNode
- `hoverable`: boolean
- `onClick`: function

**Example:**
```jsx
import { Card } from './components';

<Card title="Card Title" subtitle="Card Subtitle" hoverable>
  <p>Card content goes here</p>
</Card>
```

### Input
A form input component with label and error handling.

**Props:**
- `type`: string (default: 'text')
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `error`: string
- `required`: boolean
- `disabled`: boolean

**Example:**
```jsx
import { Input } from './components';

<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
/>
```

### Textarea
A form textarea component with label and error handling.

**Props:**
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `error`: string
- `rows`: number
- `required`: boolean
- `disabled`: boolean

**Example:**
```jsx
import { Textarea } from './components';

<Textarea
  label="Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={6}
  required
/>
```

### Table
A responsive table component with customizable columns.

**Props:**
- `columns`: array of objects with 'key', 'label', and optional 'render' function
- `data`: array of objects
- `striped`: boolean
- `hoverable`: boolean

**Example:**
```jsx
import { Table } from './components';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' }
];

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Developer' }
];

<Table columns={columns} data={data} striped hoverable />
```

### Modal
A modal dialog component with header, body, and footer sections.

**Props:**
- `isOpen`: boolean
- `onClose`: function
- `title`: string
- `footer`: ReactNode
- `size`: 'sm' | 'md' | 'lg' | 'xl'

**Example:**
```jsx
import { Modal } from './components';

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
>
  <p>Modal content goes here</p>
</Modal>
```

### Navbar
A responsive navigation bar with mobile menu support.

**Props:**
- `logo`: string or ReactNode
- `links`: array of objects with 'label' and 'href'
- `actions`: ReactNode

**Example:**
```jsx
import { Navbar } from './components';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' }
];

<Navbar logo="My Site" links={navLinks} />
```

### Footer
A footer component with links and social media icons.

**Props:**
- `copyright`: string
- `links`: array of objects with 'label' and 'href'
- `socialLinks`: array of objects with 'label', 'href', and 'icon'

**Example:**
```jsx
import { Footer } from './components';

<Footer
  copyright="© 2024 My Company"
  links={footerLinks}
  socialLinks={socialLinks}
/>
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px - 767px)
- Tablets (768px - 1023px)
- Desktop (1024px and above)

All components use Tailwind CSS's responsive utilities to ensure optimal display across all screen sizes.

### Mobile View
![Portfolio Mobile View](https://github.com/user-attachments/assets/18267051-fc83-4c30-867d-7810b952750f)

### Mobile Menu
![Portfolio Mobile Menu](https://github.com/user-attachments/assets/b18a50b3-5dd5-413f-8f93-7bad9c80943f)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Mateosacco99/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build` directory.

## 📁 Project Structure

```
portfolio/
├── public/             # Public assets
├── src/
│   ├── components/     # Reusable generic components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Table.jsx
│   │   ├── Textarea.jsx
│   │   └── index.js
│   ├── views/          # Page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── index.js
│   ├── App.js          # Main application component
│   ├── index.css       # Global styles with Tailwind directives
│   └── index.js        # Application entry point
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Project dependencies
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... more shades
      },
    },
  },
}
```

### Content
Update the content in the view files:
- `src/views/Hero.jsx` - Update name and introduction
- `src/views/About.jsx` - Update about information
- `src/views/Projects.jsx` - Add your projects
- `src/views/Skills.jsx` - Update your skills
- `src/views/Contact.jsx` - Update contact information

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please reach out through the contact form on the website.
