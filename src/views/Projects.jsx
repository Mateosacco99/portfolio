import React from 'react';
import { Card, Button } from '../components';

/**
 * Projects Section Component
 */
const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: '📋',
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data and forecasts for any location.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: '🌤️',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '💼',
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for tracking social media metrics across multiple platforms.',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      image: '📊',
      link: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for creating and managing blog posts with markdown support.',
      technologies: ['React', 'Next.js', 'MDX', 'Prisma'],
      image: '✍️',
      link: '#',
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hoverable className="flex flex-col h-full">
              <div className="text-6xl text-center mb-4">{project.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => {
                  // For external project links, open in new tab
                  if (project.link && project.link !== '#') {
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                View Project
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
