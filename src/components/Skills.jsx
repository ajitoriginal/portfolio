import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiJira,
  SiCplusplus,
  SiMysql,
  SiRedux,
  SiSocketdotio,
} from 'react-icons/si';
import pythonLogo from '../assets/Python-logo-notext.svg.png';
import { skills as skillsData } from '../data';
import './Skills.css';

// Icon mapping for skills
const iconMap = {
  'Node.js': <FaNode />,
  'Python': <img src={pythonLogo} alt="Python" style={{ width: '80%', height: '90%', objectFit: 'contain' }} />,
  'MongoDB': <SiMongodb />,
  'React': <FaReact />,
  'JavaScript': <SiJavascript />,
  'TypeScript': <SiTypescript />,
  'HTML': <FaHtml5 />,
  'CSS': <FaCss3Alt />,
  'Redux': <SiRedux />,
  'MySQL': <SiMysql />,
  'C++': <SiCplusplus />,
  'WebSockets': <SiSocketdotio />,
  'Git': <FaGitAlt />,
  'Docker': <FaDocker />,
  'Linux': <FaLinux />,
  'JIRA': <SiJira />,
  'AWS': <FaAws />,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  // Combine data with icons
  const skills = skillsData.map(skill => ({
    ...skill,
    icon: iconMap[skill.name],
  }));

  return (
    <section className="skills section-padding" id="skills" ref={ref}>
      <motion.div
        className="skills-container max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="section-header flex-center" style={{ flexDirection: 'column' }}>
          <h2 className="heading-gradient">Skills & Technologies</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card glass-panel"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="card-glow"></div>
              <div
                className="skill-icon"
                style={skill.color ? { color: skill.color } : {}}
              >
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
