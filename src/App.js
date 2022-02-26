import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'About', },
    { name: 'Portfolio', },
    { name: 'Contact', },
    { name: 'Resume', },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        <div>
          {(currentCategory.name==="About") && (
            <About />
          )}
          {(currentCategory.name==="Portfolio") && (
            <Portfolio />
          )}
          {(currentCategory.name==="Contact") && (
            <ContactForm />
          )}
          {(currentCategory.name==="Resume") && (
            <Resume />
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;