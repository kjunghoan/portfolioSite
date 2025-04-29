import useResponsive from '@/hooks/useResponsive';
import { ProjectContent } from '@/types/dataTypes';

interface ProjectCardProps {
  project: ProjectContent;
  id?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, id }) => {
  const { isMobile } = useResponsive();
  const { title, description, image, link, type, tags } = project;

  const typeMap = (type: string): string => {
    switch (type) {
      case 'config': {
        return '#ff796C'; // Light red
      }
      case 'full-stack': {
        return '#546778'; // Blue
      }
      case 'front-end': {
        return '#bd6e0e'; // Darker orange
      }
      case 'back-end': {
        return '#87AA82'; // Green
      }
      default: {
        return '#9c27b0'; // Purple
      }
    }
  };

  const mapTags = () => {
    return tags.map((tag, index) => (
      <span
        key={index}
        className="tag-badge"
        style={{ backgroundColor: tag.color }}
      >
        {tag.name}
      </span>
    ));
  };

  return (
    <div
      id={id}
      key={title}
      className={`bg-red relative aspect-[9/16] ${isMobile ? 'w-[80vw] h-[120vw] ' : 'w-[31vh] h-[45vh]'}`}
    >
      {/* Book container with perspective */}
      <div
        id={`project-card-${title}`}
        className="h-full rounded-r-md"
        style={{
          backgroundColor: `${typeMap(type)}`,
        }}
      >
        {/* Book spine */}
        <div
          className="w-[15px] origin-left rounded-l-md shadow-md z-10"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(15deg)',
            height: '100%',
          }}
        />

        {/* Book cover/page */}
        <div className="absolute left-[15px] right-0 top-0 bottom-0 bg-stone-100 rounded-r-md shadow-lg overflow-hidden flex flex-col pl-2">
          {/* Image section */}
          <div
            className="flex items-center justify-center py-6"
            style={{ height: '40%' }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title with divider */}
          <div className="px-4 pt-3 pb-2 z-10">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="w-full h-[2px] my-2 bg-yellow-300" />
          </div>

          {/* Content section */}
          <div className="flex flex-col p-4 pt-0 flex-grow">
            <p className={`mb-4 ${isMobile ? 'text-md' : 'text-lg'}`}>
              {description}
            </p>

            {/* Tags - Two rows layout to match design */}
            <div className="grid grid-cols-3 gap-1 mt-auto mb-2">
              {mapTags()}
            </div>

            {/* Link button */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-end px-3 py-1 mt-2 text-sm rounded-full"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
