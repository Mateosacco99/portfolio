import React from 'react';
import { Card } from '../components';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card hoverable>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1+</div>
                <div className="text-gray-600">{t('about.experience')}</div>
              </div>
            </Card>
            <Card hoverable>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">{t('about.technologies')}</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
