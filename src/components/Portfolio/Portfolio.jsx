import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './portfolio.css';

import List from './List';
import Items from './Items';
  

const allNavList = ['All', 'React', 'JavaScript', 'Python/Django', 'Java/Spring Boot'];

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(projects);
  const [navList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === 'All') {
      setProjectItems(projects);
      return;
    }

    const newProjectItem = projects.filter((item) => item.category === category);
    setProjectItems(newProjectItem);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        Meus <span>Projetos</span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;