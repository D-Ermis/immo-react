import React, { Component } from 'react';
import Title from './Title';
// import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa';
import { FiActivity, FiHome, FiUsers, FiZoomIn } from 'react-icons/fi';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FiActivity />,
        title: 'Services',
        info: 'Search services across property types and industry sectors.'
      },
      {
        icon: <FiHome />,
        title: 'Properties',
        info: 'Find the right investment or leasing opportunity.'
      },
      {
        icon: <FiUsers />,
        title: 'People',
        info: 'Connect with the best real estate professionals in any location.'
      },
      {
        icon: <FiZoomIn />,
        title: 'Insights',
        info:
          'Explore research and critical thinking on trends and opportunities in real estate.'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
