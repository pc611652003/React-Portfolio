import React from 'react';

function Project({ images }) {

    return (
        <div className='imageContainer'>
            <h2 className='imageTitle'>{images.name}</h2>
            <h4 className='imageDescription'>{images.description}</h4>
            <img
              src={require(`../../assets/images/${images.imageLink}.PNG`)}
              alt={images.name}
              className="img-thumbnail mx-1"
              key={images.imageLink}
            />
            <div className="link-row">
              <a href={images.ApplicationLink}>Application</a>
              <a href={images.RepositoryLink}>GitHub Repo</a>
            </div>
          </div>
    )
}

export default Project;