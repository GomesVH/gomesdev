import React from 'react';
import './App.css';

// Importação dos Componentes
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Estrutura Principal */}
      <main className="main">
        <Header />
        <Home />
        <Services />
        <Skills />
        <Resume />
        <Contact />
      </main>
      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default App;
