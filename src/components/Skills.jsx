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
  SiRedis,
  SiJira,
  SiCplusplus,
  SiMysql,
  SiRedux,
  SiSocketdotio,
} from 'react-icons/si';
import pythonLogo from '../assets/Python-logo-notext.svg.png';
import './Skills.css';

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

  const skills = [
    { name: 'Node.js', icon: <FaNode />, color: '#339933' },
    { name: 'Python', icon: <img src={pythonLogo} alt="Python" style={{ width: '80%', height: '90%', objectFit: 'contain' }} />, isImage: true },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'WebSockets', icon: <SiSocketdotio />, color: '#010101' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
    { name: 'JIRA', icon: <SiJira />, color: '#0052CC' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  ];

  return (
    <section className="skills" id="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2>Skills & Technologies</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="skill-icon"
                style={skill.color ? { color: skill.color } : {}}
              >
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
