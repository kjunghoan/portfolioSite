import { skills } from '@/assets/data';

// Currently this is only being used to verify components before I use them elsewhere
const Footer: React.FC = () => {
  const skillImageMap = () =>
    Object.values(skills).map((skill) => {
      return <img src={skill.logo} alt={skill.title} width={50} height={50} />;
    });
  return <div className="flex flex-wrap">{skillImageMap()}</div>;
};

export default Footer;
