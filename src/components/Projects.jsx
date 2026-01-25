import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: 'Tech Media Platform',
      description:
        'A professional networking platform for developers featuring public profiles showcasing skills and GitHub projects, social features for sharing insights via posts, likes, and comments, and real-time community engagement built with the MERN stack.',
      technologies: ['Node.js', 'React', 'Redux', 'MongoDB'],
      github: 'https://github.com/ajitoriginal/TechMedia',
      live: 'https://tech-media-platform-ui.onrender.com/',
      gradient: 'var(--gradient-1)',
    },
    {
      title: 'ERP',
      description:
        'An internal Enterprise Resource Planning system integrating inventory management, employee tracking, financial operations, and cross-departmental resource allocation. Features real-time analytics, automated workflows, and role-based access control for streamlined business operations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      github: 'https://github.com',
      live: 'https://erp.decorpot.com/',
      gradient: 'var(--gradient-2)',
    }
  ];

  return (
    <section className="projects" id="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2>Featured Projects</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div
                className="project-gradient"
                style={{ background: project.gradient }}
              ></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
