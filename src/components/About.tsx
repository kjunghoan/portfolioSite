import React from 'react';
import { aboutMeContent } from '../assets/data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl md:text-6xl font-bold">
                {aboutMeContent.heading
                  .split(' ')
                  .map((name: string) => name[0])
                  .join('')}
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {aboutMeContent.heading}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {aboutMeContent.subHeading}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {aboutMeContent.content.map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
