import React from 'react';
import { Card, Button } from '../components';

const Projects = () => {
  const projects = [
    {
      title: 'Rent Insurance Calculator',
      description:
        'A responsive web application that calculates rent insurance costs in real time, allowing users to preview coverage and pricing instantly.',
      technologies: ['React', 'Vite', 'SASS'],
      image: '/cotizador-gestion.png',
      link: 'https://mateosacco99.github.io/cotizador-gestion/',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern portfolio website showcasing projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind'],
      image: '/portfolio.png',
      link: 'https://mateosacco99.github.io/cotizador-gestion/',
    },
    {
      title: 'Rent Insurance Calculator',
      description:
        'A responsive web application that calculates rent insurance costs in real time, allowing users to preview coverage and pricing instantly.',
      technologies: ['React', 'Vite', 'SASS'],
      image: '/cotizador-gestion.png',
      link: 'https://mateosacco99.github.io/cotizador-gestion/',
    },
    {
      title: 'Rent Insurance Calculator',
      description:
        'A responsive web application that calculates rent insurance costs in real time, allowing users to preview coverage and pricing instantly.',
      technologies: ['React', 'Vite', 'SASS'],
      image: '/cotizador-gestion.png',
      link: 'https://mateosacco99.github.io/cotizador-gestion/',
    },
    {
      title: 'Rent Insurance Calculator',
      description:
        'A responsive web application that calculates rent insurance costs in real time, allowing users to preview coverage and pricing instantly.',
      technologies: ['React', 'Vite', 'SASS'],
      image: '/cotizador-gestion.png',
      link: 'https://mateosacco99.github.io/cotizador-gestion/',
    },
    {
      title: 'Rent Insurance Calculator',
      description:
        'A responsive web application that calculates rent insurance costs in real time, allowing users to preview coverage and pricing instantly.',
      technologies: ['React', 'Vite', 'SASS'],
      image: '/cotizador-gestion.png',
      link: 'https://mateosacco99.github.io/cotizador-gestion/',
    },
  ];

  const openProject = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              hoverable
              className="flex flex-col h-full cursor-pointer"
              onClick={() => openProject(project.link)}
            >
              {/* Image / Preview */}
              <div className="relative mb-4 group">
                {project.image && project.image.startsWith('/') ? (
                  <div className="overflow-hidden rounded-lg shadow-sm">
                    {/* Browser mockup */}
                    <div className="h-7 bg-gray-200 flex items-center px-3 gap-2">
                      <span className="w-3 h-3 bg-red-400 rounded-full" />
                      <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <span className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>

                    {/* Screenshot */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-md">
                        Live Demo →
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-6xl text-center">{project.image}</div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full transition-transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={(e) => {
                  e.stopPropagation();
                  openProject(project.link);
                }}
              >
                Live Demo
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
