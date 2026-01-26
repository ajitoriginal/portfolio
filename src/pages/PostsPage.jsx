import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendar, FaClock, FaArrowRight, FaTag, FaArrowLeft } from 'react-icons/fa';
import { posts, personalInfo } from '../data';
import './PostsPage.css';

const PostsPage = () => {
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
          <p>Made with ❤️ by {personalInfo.name}</p>
          <p className="copyright">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PostsPage;