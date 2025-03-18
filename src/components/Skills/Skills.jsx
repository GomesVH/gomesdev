import React from 'react';
import './skills.css'; // Importa o arquivo de estilos
import { skills } from '../../Data'; // Importa os dados das habilidades

// Componente para representar cada habilidade
const SkillItem = React.memo(({ name, image }) => {
  return (
    <div 
      className="skills__item" 
      role="listitem" 
      aria-labelledby={`skill-${name}`} 
    >
      {/* Imagem ou ícone da habilidade */}
      <div className="skills__image">{image}</div>

      {/* Nome da habilidade */}
      <h3 className="skills__name" id={`skill-${name}`}>{name}</h3>
    </div>
  );
});

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      {/* Cabeçalho da seção */}
      <h2 className="section__title text-cs">Skills Profissionais</h2>
      <p className="section__subtitle">
        Minhas <span>Habilidades</span>
      </p>

      {/* Container para as habilidades */}
      <div className="skills__container container grid" role="list">
        {skills.map(({ name, image }, index) => (
          <SkillItem key={index} name={name} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
