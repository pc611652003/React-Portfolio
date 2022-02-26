import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Calvin Yan, a coding board gamer 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-2 ${currentCategory.name === category.name && `navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category);
              }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;