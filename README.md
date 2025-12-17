# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS featuring reusable components and a clean design.

![Portfolio Desktop View](https://github.com/user-attachments/assets/ee4da572-98a9-41ff-a9cd-55364c28cb5a)

## Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Project scaffolding and build tool

## Installation

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

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build` directory.

## Project Structure

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

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out through the contact form on the website.
