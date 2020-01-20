import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
      },
      {
        icon: <FaHiking />,
        title: 'tree docktails',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
      },
      {
        icon: <FaBeer />,
        title: 'bree bocktails',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
      },
      {
        icon: <FaShuttleVan />,
        title: 'cree cocktails',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
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
