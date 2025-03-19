import React from 'react';
import './home.css';
import profile from '../../assets/images.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CV from '../../assets/Victor.pdf'; // Link para o PDF do CV

const Home = () => {
  // Função para rolar suavemente até a seção de Skills
  const scrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.querySelector('#skills'); // Seleciona a seção de Skills pelo ID
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' }); // Faz o scroll suave
    }
  };

  return (
    <section className="home" id="home">
      <div className="home__container">
        {/* Conteúdo Principal */}
        <div className="home__content">
          <div className="home__text-content">
            <p className="home__subtitle">Olá, meu nome é</p>
            <h1 className="home__title">Victor Gomes</h1>
            <p className="home__job">Desenvolvedor Full Stack</p>
            <p className="home__description">
              Sou um desenvolvedor Full Stack, especializado em criar soluções eficientes e inovadoras que otimizam a performance e a usabilidade de sistemas. Tenho experiência sólida em JavaScript com Angular,C# com ASP.Net e Java com Spring Boot, além de trabalhar com bancos de dados como MySQL, SQL e PostgreSQL. Sou capaz de desenvolver soluções escaláveis e robustas, contribuindo para projetos que impactam positivamente a experiência do usuário. Estou sempre em busca de novos desafios para expandir minhas habilidades e entregar soluções.
            </p>

            {/* Links para Redes Sociais */}
            <div className="home__socials">
              <a
                href="https://www.linkedin.com/in/gomes-vg/"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar perfil no LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/GomesVH"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar perfil no GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* Botões de Ação */}
            <div className="home__buttons">
              <a download="" href={CV} className="btn" aria-label="Download do CV">
                Download CV
              </a>
              <a
                href="#skills"
                className="btn btn-secondary"
                onClick={scrollToSkills}
                aria-label="Ir para minhas skills"
              >
                Minhas Skills
              </a>
            </div>
          </div>

          {/* Imagem de Perfil */}
          <div className="home__image-content">
            <img
              src={profile}
              alt="Minha imagem de perfil"
              className="home__profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
