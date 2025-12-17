import React from 'react';
import { Card } from '../components';

/**
 * About Section Component
 */
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant solutions
              to complex problems. With years of experience in web development, I've
              worked on various projects ranging from small business websites to large-scale
              enterprise applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My expertise includes modern JavaScript frameworks, responsive design,
              and building scalable applications. I'm always eager to learn new technologies
              and stay up-to-date with industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card hoverable>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </Card>
            <Card hoverable>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
