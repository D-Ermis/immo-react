import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Immo-D"
          subtitle="Find real estate for sale in Luxembourg"
        >
          <Link to="/houses" className="btn-primary">
            our houses
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms className="featured-rooms"></FeaturedRooms>
    </>
  );
};

export default Home;
