import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendar, FaClock, FaArrowRight, FaTag, FaHome, FaArrowLeft } from 'react-icons/fa';
import './PostsPage.css';

const PostsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const posts = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for production-ready applications.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'Backend',
      tags: ['Node.js', 'Microservices', 'Docker'],
      gradient: 'var(--gradient-primary)',
      featured: true,
    },
    {
      id: 2,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Discover advanced techniques to optimize React applications including memoization, code splitting, and lazy loading strategies.',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Frontend',
      tags: ['React', 'Performance', 'Optimization'],
      gradient: 'var(--gradient-secondary)',
      featured: true,
    },
    {
      id: 3,
      title: 'Complete Guide to REST API Design',
      excerpt: 'Best practices for designing RESTful APIs that are scalable, maintainable, and developer-friendly with real-world examples.',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      category: 'API Design',
      tags: ['REST', 'API', 'Backend'],
      gradient: 'var(--gradient-accent)',
      featured: false,
    },
    {
      id: 4,
      title: 'MongoDB Schema Design Patterns',
      excerpt: 'Explore common schema design patterns in MongoDB and learn when to embed vs reference documents for optimal performance.',
      date: 'Nov 28, 2024',
      readTime: '7 min read',
      category: 'Database',
      tags: ['MongoDB', 'NoSQL', 'Database'],
      gradient: 'var(--gradient-success)',
      featured: false,
    },
    {
      id: 5,
      title: 'WebSocket vs Server-Sent Events',
      excerpt: 'A deep dive into real-time communication protocols, comparing WebSockets and SSE with use cases and implementation examples.',
      date: 'Nov 20, 2024',
      readTime: '5 min read',
      category: 'Real-time',
      tags: ['WebSocket', 'SSE', 'Real-time'],
      gradient: 'var(--gradient-primary)',
      featured: false,
    },
    {
      id: 6,
      title: 'Authentication Strategies in Modern Web Apps',
      excerpt: 'Comprehensive guide to implementing JWT, OAuth 2.0, and session-based authentication with security best practices.',
      date: 'Nov 15, 2024',
      readTime: '9 min read',
      category: 'Security',
      tags: ['Authentication', 'JWT', 'Security'],
      gradient: 'var(--gradient-secondary)',
      featured: false,
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const handleBackClick = () => {
    window.close();
    // If window.close() doesn't work (opened normally, not via window.open), redirect
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };

  return (
    <div className="posts-page">
      {/* Header Navigation */}
      <motion.header
        className="posts-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="posts-header-container">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/">AS</a>
          </motion.div>
          <div className="header-actions">
            <motion.button
              className="back-btn"
              onClick={handleBackClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft /> Back to Portfolio
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Posts Content */}
      <section className="posts-content" ref={ref}>
        <motion.div
          className="posts-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h1>Latest Posts</h1>
            <div className="section-underline"></div>
            <p className="section-description">
              Thoughts, tutorials, and insights about web development and technology
            </p>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="featured-section">
              <motion.h3 variants={itemVariants} className="section-subtitle">
                Featured Articles
              </motion.h3>
              <div className="featured-posts-grid">
                {featuredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    className="post-card featured-card"
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                  >
                    <div className="post-gradient" style={{ background: post.gradient }}></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-category">{post.category}</span>
                        <span className="post-featured-badge">Featured</span>
                      </div>
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-tags">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="post-tag">
                            <FaTag /> {tag}
                          </span>
                        ))}
                      </div>
                      <div className="post-footer">
                        <div className="post-info">
                          <span>
                            <FaCalendar /> {post.date}
                          </span>
                          <span>
                            <FaClock /> {post.readTime}
                          </span>
                        </div>
                        <motion.button
                          className="read-more-btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Read More <FaArrowRight />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <motion.h3 variants={itemVariants} className="section-subtitle">
            All Articles
          </motion.h3>
          <div className="posts-grid">
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                className="post-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="post-gradient" style={{ background: post.gradient }}></div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="post-tag">
                        <FaTag /> {tag}
                      </span>
                    ))}
                  </div>
                  <div className="post-footer">
                    <div className="post-info">
                      <span>
                        <FaCalendar /> {post.date}
                      </span>
                      <span>
                        <FaClock /> {post.readTime}
                      </span>
                    </div>
                    <motion.button
                      className="read-more-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More <FaArrowRight />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="posts-footer">
        <div className="footer-content">
          <p>Made with ❤️ by Ajit Singh</p>
          <p className="copyright">© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PostsPage;