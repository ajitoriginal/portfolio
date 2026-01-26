import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Made with <FaHeart className="heart-icon" /> by {personalInfo.name}
        </p>
        <p className="copyright">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
