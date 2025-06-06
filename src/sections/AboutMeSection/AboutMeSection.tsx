import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';
import { aboutMeContent, contactContent } from '@/assets/data.ts';
import { ContactContent } from '@/types/dataTypes';

const AboutMeSection: React.FC = () => {
  const { isMobile } = useResponsive();
  const mapContent = (content: string[]) => {
    return content.map((paragraph, index) => (
      <div key={index}>
        <p
          id={`aboutMe-p-${index}`}
          key={`aboutMe-p-${index}`}
          className={isMobile ? 'text-body-mobile' : 'text-body-desktop'}
        >
          {paragraph}
        </p>
        <br />
      </div>
    ));
  };

  const mapSocials = (socials: ContactContent[]) => {
    const socialOnClick = (socialLink: string) => {
      window.open(socialLink, '_blank');
    };

    return socials.map((social, index) => (
      <div
        id={`social-${index}`}
        key={index}
        className="social-icon"
        onClick={() => socialOnClick(social.link)}
      >
        <img
          src={social.logo}
          alt={social.pointOfContact}
          className={isMobile ? 'social-icon-mobile' : 'social-icon-desktop'}
        />
      </div>
    ));
  };

  return (
    <SectionWrapper
      fullHeight={true}
      className={`bg-wood-one ${isMobile ? 'px-5' : 'p-20'}`}
      style={{}}
      id="aboutMe"
    >
      {/* Heading */}
      <div className="mt-[5vh] flex flex-col items-start ms-5 pt-10">
        <h1 className="heading-primary mb-2">{aboutMeContent.heading}</h1>
        <h2 className="heading-secondary mb-2 ps-2 underline-offset-8">
          {aboutMeContent.subHeading}
        </h2>
      </div>
      {/* Container */}
      {isMobile ? (
        <div
          id="aboutMe-content-container-mobile"
          className="flex flex-col w-full items-center min-h-[70vh] p-4"
        >
          {/* HeadShot - Mobile */}
          <div className="w-full flex justify-center items-center rounded-lg">
            <img
              src={aboutMeContent.image}
              alt="About Me"
              className="w-full shadow-lg min-w-[13rem] min-h-[13rem] max-w-[15rem] max-h-[15rem] rounded-xl"
            />
          </div>

          {/* Primary Content - Mobile */}
          <div className="w-full text-center my-4">
            {mapContent(aboutMeContent.content)}
          </div>

          {/* Socials - Mobile */}
          <div className="w-full flex flex-row justify-center items-center p-4 mt-auto mb-8">
            {mapSocials(contactContent)}
          </div>
        </div>
      ) : (
        <div
          id="aboutMe-content-container-desktop"
          className="grid grid-cols-5 grid-rows-2 gap-4 w-full p-4"
        >
          {/* Primary Content - Desktop */}
          <div className="row-span-2 col-span-3 flex flex-col items-start">
            {mapContent(aboutMeContent.content)}
          </div>

          {/* HeadShot - Desktop */}
          <div className="col-span-2 flex justify-center items-center rounded-lg">
            <img
              src={aboutMeContent.image}
              alt="About Me"
              className="w-full shadow-lg min-w-[13rem] min-h-[13rem] max-w-[20rem] max-h-[20rem] rounded-xl"
            />
          </div>

          {/* Socials - Desktop */}
          <div className="col-span-2 flex flex-row justify-center items-start p-4">
            {mapSocials(contactContent)}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default AboutMeSection;
