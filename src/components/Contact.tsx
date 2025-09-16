import React from 'react';
import { contactContent } from '../assets/data';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 px-4">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactContent.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 px-4 md:px-6 py-6 md:py-8 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base md:text-lg">
                  {contact.pointOfContact[0]}
                </span>
              </div>
              <span className="font-medium text-base md:text-lg group-hover:text-blue-300 transition-colors">
                {contact.pointOfContact}
              </span>
            </a>
          ))}
        </div>
        <div className="border-t border-white/20 pt-6 md:pt-8">
          <p className="text-gray-400 text-sm md:text-base px-4">
            Currently available for freelance work and full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
