import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaLock } from 'react-icons/fa';
import './CVModal.css';

const CVModal = ({ isOpen, onClose, onDownload }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const secretCode = import.meta.env.VITE_CV_SECRET_CODE;

    // Prevent access if no secret code is configured or if input is empty
    if (!secretCode) {
      setError('Secret code not configured. Please contact Ajit.');
      return;
    }

    if (!code || code.trim() === '') {
      setError('Please enter a code.');
      return;
    }

    if (code === secretCode) {
      setError('');
      onDownload();
      setCode('');
      // Delay closing modal to allow download to initiate
      setTimeout(() => {
        onClose();
      }, 100);
    } else {
      setError('Incorrect code. Please try again.');
      setCode('');
    }
  };

  const handleClose = () => {
    setCode('');
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={handleClose}>
              <FaTimes />
            </button>

            <div className="modal-content">
              <div className="modal-icon">
                <FaLock />
              </div>

              <h2>Enter Secret Code</h2>
              <p className="modal-description">
                This CV is password protected. Please enter the secret code to download.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="modal-input-group">
                  <input
                    type="password"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter secret code"
                    autoFocus
                    className={error ? 'error' : ''}
                  />
                  {error && <p className="error-message">{error}</p>}
                </div>

                <button type="submit" className="modal-submit-btn">
                  Download CV
                </button>
              </form>

              <p className="modal-hint">
                Don't have the code? Ask Ajit for the secret code.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CVModal;