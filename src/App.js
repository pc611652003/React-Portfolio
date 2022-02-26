import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
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
          {(currentCategory.name=="About") && (
            <About />
          )}
          {(currentCategory.name=="Porfolio") && (
            <Portfolio />
          )}
          {(currentCategory.name=="Contact") && (
            <ContactForm />
          )}
          {(currentCategory.name=="Resume") && (
            <About></About>
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;