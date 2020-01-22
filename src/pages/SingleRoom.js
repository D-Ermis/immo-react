import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such house could be found...</h3>
          <Link to="/houses" className="btn-primary">
            back to houses
          </Link>
        </div>
      );
    }
    const {
      name,
      capacity,
      size,
      breakfast,
      description,
      price,
      extras,
      pets,
      images
    } = room;
    // Destructuring images array
    // Separate first image "mainImg" of array from the rest "...defaultImg"
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        {/* <StyledHero img={mainImg || this.state.defaultBcg}> */}
        {/* <Banner title={`${name} room`}>
            <Link to="/houses" className="btn-primary">
              back to houses
            </Link>
          </Banner> */}
        {/* </StyledHero> */}
        <section className="single-room">
          <p>test</p>
          {/* <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div> */}
          {/* <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : €{price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div> */}
        </section>
        {/* <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section> */}
      </>
    );
  }
}
