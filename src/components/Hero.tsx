import React from 'react';
import { aboutMeContent } from '../assets/data';

interface HeroProps {
  onLearnMoreClick: () => void;
  onViewProjectsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  onLearnMoreClick,
  onViewProjectsClick,
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 mt-8 md:mt-0">
          <div className="w-32 h-32 md:w-32 md:h-32 mx-auto mb-6 mt-4 md:mt-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {aboutMeContent.heading
              .split(' ')
              .map((name: string) => name[0])
              .join('')}
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          {aboutMeContent.heading}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          {aboutMeContent.subHeading}
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
          {aboutMeContent.content[0]}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button
            className="group inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform scroll-smooth"
            onClick={onLearnMoreClick}
          >
            <span className="inline-block group-hover:scale-105 transition-transform duration-300">
              Learn More
            </span>
          </button>
          <button
            className="group inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform scroll-smooth"
            onClick={onViewProjectsClick}
          >
            <span className="inline-block group-hover:scale-105 transition-transform duration-300">
              View Projects
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
