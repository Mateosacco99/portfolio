import React from 'react';
import { Button } from '../components';

/**
 * Hero Section Component
 */
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary-600">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            A passionate developer creating amazing web experiences
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I specialize in building modern, responsive, and user-friendly applications
            using the latest technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => window.location.href = '#contact'}>
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '#projects'}>
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
