import useResponsive from '@/hooks/useResponsive';
import { ProjectContent } from '@/types/dataTypes';

interface ProjectCardProps {
  project: ProjectContent;
  id?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, id }) => {
  const { isMobile, windowHeight, windowWidth } = useResponsive();
  const { title, description, image, link, type, tags } = project;
  const defaultImage = '/assets/images/gear-icon.svg';

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
  const imageSrc = (image: string | null) => {
    if (image) {
      return image;
    } else {
      return defaultImage;
    }
  };

  // Calculate content scale based on viewport size
  const getContentScale = () => {
    if (isMobile) return 1;
    // Scale content down for smaller viewports while keeping card proportions
    if (windowHeight < 800 || windowWidth < 1400) {
      return 0.85;
    }
    return 1;
  };

  const contentScale = getContentScale();

  const mapTags = () => {
    return tags.map((tag, index) => (
      <span
        key={index}
        className="tag-badge"
        style={{
          backgroundColor: tag.color,
          fontSize: `${0.75 * contentScale}rem`,
          padding: `${0.25 * contentScale}rem ${0.5 * contentScale}rem`,
        }}
        onClick={() => window.open(tag.link, '_blank')}
      >
        {tag.title}
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
            className="flex items-center justify-center"
            style={{
              height: '40%',
              padding: `${1.5 * contentScale}rem`,
            }}
          >
            <img
              src={imageSrc(image)}
              alt={title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Title with divider */}
          <div
            className="z-10"
            style={{
              padding: `${0.75 * contentScale}rem ${1 * contentScale}rem ${0.5 * contentScale}rem ${1 * contentScale}rem`,
            }}
          >
            <h2
              className="font-semibold"
              style={{ fontSize: `${1.125 * contentScale}rem` }}
            >
              {title}
            </h2>
            <div
              className="w-full bg-yellow-300"
              style={{
                height: `${2 * contentScale}px`,
                margin: `${0.5 * contentScale}rem 0`,
              }}
            />
          </div>

          {/* Content section */}
          <div
            className="flex flex-col pt-0 flex-grow"
            style={{
              padding: `0 ${1 * contentScale}rem ${1 * contentScale}rem ${1 * contentScale}rem`,
            }}
          >
            <p
              style={{
                fontSize: `${isMobile ? 1 : 1 * contentScale}rem`,
                marginBottom: `${1 * contentScale}rem`,
              }}
            >
              {description}
            </p>

            {/* Tags - Two rows layout to match design */}
            <div
              className="grid grid-cols-3 mt-auto mb-2"
              style={{ gap: `${0.25 * contentScale}rem` }}
            >
              {mapTags()}
            </div>

            {/* Link button */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-end rounded-full"
              style={{
                padding: `${0.25 * contentScale}rem ${0.75 * contentScale}rem`,
                marginTop: `${0.5 * contentScale}rem`,
                fontSize: `${0.875 * contentScale}rem`,
              }}
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
