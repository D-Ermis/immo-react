import React from 'react';

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

// Use class "defaultHero" by default
Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
