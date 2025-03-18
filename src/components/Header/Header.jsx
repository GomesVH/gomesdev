import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './header.css';
import Logo from '../../assets/logo.png';

// Componente Header para o layout principal do site
const Header = () => {
    // Estado para controlar a visibilidade do menu
    const [showMenu, setShowMenu] = useState(false);

    // Alterna a visibilidade do menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Fecha o menu (útil ao clicar em links ou fora dele)
    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                {/* Logo que também age como link para voltar ao topo */}
                <Link 
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    className="nav__logo" 
                    onClick={closeMenu}
                    aria-label="Ir para a seção Home"
                >
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
                
                {/* Menu principal com links para diferentes seções */}
                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                    {/* Botão para fechar o menu */}
                    <button className="nav__close" onClick={toggleMenu} aria-label="Fechar menu">
                        <FaTimes />
                    </button>

                    {/* Lista de navegação */}
                    <ul className="nav__list">
                        {/* Link para a seção Home */}
                        <li className="nav__item">
                            <Link 
                                to="home" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                                aria-label="Ir para a seção Home"
                            >
                                Home
                            </Link>
                        </li>
                        
                        {/* Links para outras seções */}
                        <li className="nav__item">
                            <Link 
                                to="services" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                                aria-label="Ir para a seção Services"
                            >
                                Serviços
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="skills" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                                aria-label="Ir para a seção Skills"
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="resume" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                                aria-label="Ir para a seção Resume"
                            >
                                Resumo
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="contact" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                                aria-label="Ir para a seção Contact"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Botão para abrir o menu (aparece apenas quando o menu está fechado) */}
                {!showMenu && (
                    <div className="nav__toggle" onClick={toggleMenu} aria-label="Abrir menu">
                        <FaBars />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
