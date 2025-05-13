import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importa los íconos

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Social Networks</h2>
      <div className="contact-buttons">
        {/* Botón de LinkedIn con enlace */}
        <a href="https://www.linkedin.com/in/brayan-alexis-rodriguez-ramirez-081058235" target="_blank" rel="noopener noreferrer">
          <button className="contact-button linkedin">
            <FaLinkedin size={30} /> {/* Ícono de LinkedIn */}
            <span>LinkedIn</span>
          </button>
        </a>

      </div>
    </div>
  );
};

export default Contact;
