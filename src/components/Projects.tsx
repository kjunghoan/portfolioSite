import React, { useState } from 'react';
import { projectsContent } from '../assets/data';
import type { Tag } from '@/types/dataTypes';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loadingProjects, setLoadingProjects] = useState<number[]>([]);
  const projectsToShow = projectsContent.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projectsContent.length;

  const loadMoreProjects = () => {
    const currentVisible = visibleProjects;
    const newProjectsToLoad = Math.min(
      6,
      projectsContent.length - currentVisible,
    );

    setVisibleProjects((prev) => prev + newProjectsToLoad);

    for (let i = 0; i < newProjectsToLoad; i++) {
      setTimeout(() => {
        setLoadingProjects((prev) =>
          prev.filter((idx) => idx !== currentVisible + i),
        );
      }, i * 400);
    }

    const newLoadingIndices = Array.from(
      { length: newProjectsToLoad },
      (_, i) => currentVisible + i,
    );
    setLoadingProjects((prev) => [...prev, ...newLoadingIndices]);

    setTimeout(
      () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          const rect = projectsSection.getBoundingClientRect();
          const scrollTarget =
            window.pageYOffset + rect.bottom - window.innerHeight + 100;

          const startPosition = window.pageYOffset;
          const distance = scrollTarget - startPosition;
          const duration = 1200;
          let start: number | null = null;

          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };

          const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          };

          requestAnimationFrame(animation);
        }

        setTimeout(() => {
          setLoadingProjects([]);
        }, 1400);
      },
      newProjectsToLoad * 400 + 200,
    );
  };

  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 px-4">
            A collection of my work and side projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsToShow.map((project, index) => {
            const isCurrentlyLoading = loadingProjects.includes(index);
            return (
              <div
                key={index}
                className={`group bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-1500 ${
                  isCurrentlyLoading
                    ? 'opacity-30 animate-pulse'
                    : 'opacity-100'
                }`}
              >
                <div className="mb-4">
                  <div className="w-full h-40 md:h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-gray-400">
                      {project.title
                        .split(' ')
                        .map((word: string) => word[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((skill: Tag, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {skill.title}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
                {project.link && (
                  <button
                    onClick={() =>
                      window.open(project.link, '_blank', 'noopener,noreferrer')
                    }
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group-hover:gap-3 transition-all"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreProjects}
              className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              <span className="font-medium">Load More Projects</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
