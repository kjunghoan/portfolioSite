import { projectsContent } from '@/assets/data';
import ProjectCard from '@/components/ProjectCard';
import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';
import { ProjectContent } from '@/types/dataTypes';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectsSection: React.FC = () => {
  const { isMobile, windowWidth } = useResponsive();

  // Determine responsive layout based on screen width
  const getSlidesPerView = () => {
    if (isMobile) {
      return 1;
    } else if (windowWidth < 1100) {
      return 2; // Small desktop
    } else if (windowWidth < 1650) {
      return 3; // Medium desktop
    } else {
      return 4; // Large desktop
    }
  };

  // Group projects for vertical stacking in swiper slides
  const createProjectGroups = (projects: ProjectContent[]) => {
    const projectPairs: ProjectContent[][] = [];

    for (let i = 0; i < projects.length; i += 2) {
      const pair: ProjectContent[] = [];
      pair.push(projects[i]);
      if (i + 1 < projects.length) {
        pair.push(projects[i + 1]);
      }
      projectPairs.push(pair);
    }
    return projectPairs;
  };

  // Create slides based on device
  const createProjectSlides = () => {
    if (isMobile) {
      return (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="h-full mobile-swiper"
        >
          {projectsContent.map((project: ProjectContent, index: number) => (
            <SwiperSlide
              key={project.title}
              className="flex justify-center items-center h-full py-5"
            >
              <ProjectCard
                id={`project-${index}-${project.title}`}
                project={project}
              />
            </SwiperSlide>
          ))}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center text-white text-sm">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
              <span>Swipe to see more projects</span>
            </div>
          </div>
        </Swiper>
      );
    } else {
      // Desktop: Vertical pairs (2 books stacked) with responsive slides per view
      const projectGroups = createProjectGroups(projectsContent);
      const slidesPerView = getSlidesPerView();

      return (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="h-full"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {projectGroups.map((pair, groupIndex) => (
            <SwiperSlide
              key={`group-${groupIndex}`}
              className="flex flex-col justify-between items-center h-full py-2"
            >
              {/* Top project (odd index) */}
              <div className="h-[48%] flex-center mb-4">
                <ProjectCard
                  id={`project-top-${groupIndex}`}
                  project={pair[0]}
                />
              </div>

              {/* Bottom project (even index) if it exists */}
              {pair.length > 1 && (
                <div className="h-[48%] flex-center">
                  <ProjectCard
                    id={`project-bottom-${groupIndex}`}
                    project={pair[1]}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  };

  return (
    <SectionWrapper
      fullHeight={true}
      className="overflow-hidden bg-wood-two"
      style={{}}
      id="projects"
    >
      <div className="z-10 flex-center h-full w-full">
        <div className="flex-center h-full w-full">{createProjectSlides()}</div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
