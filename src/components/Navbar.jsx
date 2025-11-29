import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import cvPdf from '../assets/SDE_CV_Ajit_Singh_V14.0.pdf';
import CVModal from './CVModal';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleCVClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    setIsOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Ajit_Singh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home">AS</a>
          </motion.div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.href} onClick={handleMenuClick}>
                  {item.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.1 }}
            >
              <button
                className="cv-download-btn"
                onClick={handleCVClick}
              >
                <FaDownload /> CV
              </button>
            </motion.li>
          </ul>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>

      <CVModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onDownload={handleDownload}
      />
    </>
  );
};

export default Navbar;
