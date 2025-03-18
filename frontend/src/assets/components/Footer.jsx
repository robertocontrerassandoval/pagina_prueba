import React from "react";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import {} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <p>Desarrollado por Roberto Contreras</p>

      <div className="footer-icons">
        <a
          className="whatsapp-link"
          href="https://wa.me/56983812388?text=Hola,%20me%20interesa%20más%20información."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>

        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/roberto-contreras-sandoval"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>

        <a
          className="github-link"
          href="https://github.com/robertocontrerassandoval"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
