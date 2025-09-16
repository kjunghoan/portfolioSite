import React from 'react';
import { aboutMeContent } from '../assets/data';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-8 bg-gray-900 text-white text-center">
      <p>
        &copy; 2024 {aboutMeContent.heading}. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
