import React, { useState } from 'react';

const Card = ({ title, subtitle, date, description }) => {
    // Estado para controlar a visibilidade das informações
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    // Função para alternar a visibilidade do conteúdo
    const toggleInfo = () => setIsInfoVisible((prev) => !prev);

    return (
        <div className="resume__item">
            {/* Cabeçalho do cartão: Título e botão de expansão */}
            <div 
                className="resume__header" 
                onClick={toggleInfo} 
                aria-expanded={isInfoVisible} 
                aria-label={`Toggle ${title} details`}
            >
                <h3 className="resume__subtitle">{title}</h3>
                <span className="resume__icon">{isInfoVisible ? '-' : '+'}</span>
            </div>

            {/* Conteúdo do cartão: Exibido quando o estado é verdadeiro */}
            <div className={`${isInfoVisible ? "show-content" : ""} resume__content`}>
                <div className="resume__date--title">
                    <h3 className="resume__title">{subtitle}</h3>
                    <span className="resume__date text-cs">{date}</span>
                </div>

                <p className="resume__description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
