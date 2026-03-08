import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats, aboutBio } from '../data';
import './About.css';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="about section-padding" id="about" ref={ref}>
      <motion.div
        className="about-container max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="section-header flex-center" style={{ flexDirection: 'column' }}>
          <h2 className="heading-gradient">About Me</h2>
          <div className="section-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            {aboutBio.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </motion.div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card glass-panel"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="stat-glow"></div>
                <h3 className="stat-value text-gradient">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
