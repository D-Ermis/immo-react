import React, { Component } from 'react';
import Title from './Title';
import { FiActivity, FiFilter, FiClipboard, FiZoomIn } from 'react-icons/fi';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FiActivity />,
        title: 'Fast',
        info: 'Single Page App for rapidly searching with no loading screen.'
      },
      {
        icon: <FiFilter />,
        title: 'Dynamic filtering',
        info: 'Find the right property using the dynamic filtering system.'
      },
      {
        icon: <FiClipboard />,
        title: 'CMS',
        info:
          'Modify data directly using a Content Management System (Contentful).'
      },
      {
        icon: <FiZoomIn />,
        title: 'Responsive',
        info: 'Mobile-first design for a full responsive experience.'
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
