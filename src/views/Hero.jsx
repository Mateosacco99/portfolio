import React from 'react';
import { Button } from '../components';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Hero Section Component
 */
const Hero = () => {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    const fileName = language === 'en' 
      ? 'Mateo_Sacco_EN.pdf' 
      : 'Mateo_Sacco_ES.pdf';
    
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.greeting')} <span className="text-primary-600">Mateo</span>
          </h1>
          <div className="mb-8 flex justify-center items-center">
            <img 
              src="/Mateo.jpeg" 
              alt="Mateo" 
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-primary-600 shadow-lg"
              style={{ objectPosition: 'center 1%' }}
            />
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('hero.specialization')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t('hero.buttons.getInTouch')}
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t('hero.buttons.viewWork')}
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadCV}>
              {t('hero.buttons.downloadCV')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
