import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    {
      value: '4+',
      label: 'Years Experience',
    },
    {
      value: '10+',
      label: 'Projects Completed',
    },
    {
      value: '15+',
      label: 'Technologies',
    },
    {
      value: '3+',
      label: 'Happy Companies',
    },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2>About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              Results-driven Software Engineer with <strong>4+ years of experience</strong> in
              building and optimizing scalable full-stack web applications. Proven
              expertise in integrating real-time communication tools, automating
              financial workflows, and deploying robust cloud-based solutions.
            </p>
            <p>
              Adept at designing RESTful APIs, optimizing MongoDB queries, and
              delivering high-performance user interfaces. Collaborative team
              player with strong communication and leadership skills, committed
              to agile practices and continuous improvement.
            </p>
          </motion.div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="stat-value">{stat.value}</h3>
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
