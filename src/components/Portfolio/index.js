import React, { useState } from 'react';

function Portfolio() {
  const [photos] = useState([
    {
      name: 'FEEDback',
      imageLink: 'feedback',
      description: 'A forum allow users to discussing and sharing their application',
      ApplicationLink: "https://polar-mountain-81832.herokuapp.com/",
      RepositoryLink: "https://github.com/pc611652003/FEEDback",
    },
    {
      name: 'Allergy Finder',
      imageLink: 'allergy-finder',
      description: 'A website allow users to find grocery products with allergy filter',
      ApplicationLink: "https://whispering-chamber-78611.herokuapp.com/",
      RepositoryLink: "https://github.com/pc611652003/Allergy-Finder",
    },
    {
      name: 'Travel Agent',
      imageLink: 'travel-agent',
      description: 'An application allow users to check the hotel and weather of their destination',
      ApplicationLink: "https://maxh1231.github.io/travel-agent/",
      RepositoryLink: "https://github.com/pc611652003/travel-agent/",
    },
    {
      name: 'Budget Tracker',
      imageLink: 'budget-tracker',
      description: 'An application allow users to keep track their transaction even offline',
      ApplicationLink: "https://vast-wildwood-92684.herokuapp.com/",
      RepositoryLink: "https://github.com/pc611652003/Budget-Tracker",
    },
    {
      name: 'Note Taker',
      imageLink: 'note-taker',
      description: 'An application allow user to create, edit and delete notes',
      ApplicationLink: "https://thawing-depths-69202.herokuapp.com/notes",
      RepositoryLink: "https://github.com/pc611652003/Note-Taker",
    },
    {
      name: 'Weather Dashboard',
      imageLink: 'weather-dashboard',
      description: 'An application allow users to get real time weather broadcast and 5 days forecast for specific location',
      ApplicationLink: "https://pc611652003.github.io/Weather-Dashboard/",
      RepositoryLink: "https://github.com/pc611652003/Weather-Dashboard/",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {photos.map((image) => (
          <div className='imageContainer'>
            <h2 className='imageTitle'>{image.name}</h2>
            <h4 className='imageDescription'>{image.description}</h4>
            <img
              src={require(`../../assets/images/${image.imageLink}.PNG`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.imageLink}
            />
            <div className="link-row">
              <a href={image.ApplicationLink}>Application</a>
              <a href={image.RepositoryLink}>GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;