import React from 'react';
import './resume.css'; // Arquivo de estilos do componente
import { education, experience } from '../../Data'; // Importa os dados de educação e experiência
import Card from './Card'; // Componente reutilizável para exibir itens de resumo

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      {/* Cabeçalho da seção de resumo */}
      <h2 className="section__title text-cs">Resumo</h2>
      <p className="section__subtitle">
        Minha <span>Trajetória</span>
      </p>

      {/* Container principal do conteúdo */}
      <div className="resume__container container grid">
        
        {/* Grupo de Educação */}
        <div className="resume__group">
          <h3 className="resume__heading">Educação</h3>

          {/* Itens de Educação */}
          <div className="resume__items">
            {education.map((val, id) => (
              <Card 
                key={id} 
                title={val.title} 
                subtitle={val.subtitle} 
                date={val.date} 
                description={val.description} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decoração opcional */}
      {/* <div className="section__deco deco__left"></div> */}
    </section>
  );
};

export default Resume;
