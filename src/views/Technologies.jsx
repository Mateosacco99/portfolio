import { useState, useEffect } from 'react';
import { SiJavascript, SiReact, SiPython, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiDocker } from 'react-icons/si';
import { FaJava, FaSass } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import { DiDjango } from 'react-icons/di';
import { SiPostman, SiVite, SiVercel } from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';
import { db } from '../service/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Spinner } from '../components';

const iconMap = {
  SiJavascript,
  SiReact,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  FaJava,
  FaSass,
  GrOracle,
  DiDjango,
  SiPostman,
  SiVite,
  SiVercel,
};

const Technologies = () => {
  const { t } = useLanguage();
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Technologies'));
        const fetchedTechnologies = querySnapshot.docs.map(doc => doc.data());
        setTechnologies(fetchedTechnologies);
      } catch (error) {
        console.error('Error fetching technologies:', error);
        setTechnologies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('hero.techStack')}
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Spinner size="lg" />
          </div>
        ) : technologies.length === 0 ? (
          <p className="text-center text-gray-600">
            {t('technologies.noTechnologies') || 'No technologies found'}
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => {
              const IconComponent = iconMap[tech.icon];
              return (
                <div key={index} className="flex flex-col items-center justify-center">
                  {IconComponent ? (
                    <div className={`${tech.color} mb-4 transition-transform duration-300 hover:scale-110`}>
                      <IconComponent size={64} />
                    </div>
                  ) : (
                    <div className="mb-4 text-gray-400">
                      <span>Icon not found</span>
                    </div>
                  )}
                  <p className="text-gray-700 font-semibold text-center text-sm sm:text-base">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;
