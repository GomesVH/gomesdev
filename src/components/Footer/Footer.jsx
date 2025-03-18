import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <p className="footer__copyright text-cs">
                    &copy; 2025 <span>Victor</span>. Todos os direitos Reservados
                </p>
                
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/gomes-vg/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/GomesVH" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>

                <p className="footer__copyright text-cs">
                    Desenvolvido por <span>GomesDev</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;