import React from 'react';
import selfImage from "../../assets/images/self.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={selfImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <h3 id="profile">
        I, Calvin Yan, am a former freelance programmer. I have 12 years experience in IT industry as programmer and IT support. 
        I have experience working with Java, C++, javascript, HTML, MySQL. Moreover, I just finish a Bootcamp from University of Utah about web development.
        I am also a serious board game addict. I taught board games in GameNightGames for 4 years before pandemic happened.
      </h3>
    </section>

  );
}

export default About;