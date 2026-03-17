import { SiJavascript, SiReact, SiPython, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiDocker } from 'react-icons/si';
import { FaJava, FaSass } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import { DiDjango } from 'react-icons/di';
import { SiPostman, SiVite, SiVercel } from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';


const Technologies = () => {
  const { t } = useLanguage();
  const technologies = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Java', icon: FaJava, color: 'text-red-600' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'Sass', icon: FaSass, color: 'text-pink-500' },
    { name: 'Vite', icon: SiVite, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Oracle', icon: GrOracle, color: 'text-red-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
    { name: 'Vercel', icon: SiVercel, color: 'text-black' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'Django', icon: DiDjango, color: 'text-green-600' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('hero.techStack')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className={`${tech.color} mb-4 transition-transform duration-300 hover:scale-110`}>
                  <IconComponent size={64} />
                </div>
                <p className="text-gray-700 font-semibold text-center text-sm sm:text-base">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
