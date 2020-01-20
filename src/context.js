import React, { Component } from 'react';
// import items from './data';
import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [], //houses and not sortedRooms, sortedRooms is what we'll be changing
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'immoD',
        order: 'fields.price'
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    // find vs filter : find returns first object found instead of array
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        // [name] to precise whatever the state name (capacity, type, price, etc)
        [name]: value
      },
      this.filterRooms
    );
    // setState() is async, we only need to run filterRooms method when state changes
  };

  filterRooms = () => {
    let {
      // let because we're gonna change the value later (parseInt capacity)
      rooms, // rooms and not sortedRooms, sortedRooms is what we'll be changing
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    // All the rooms
    let tempRooms = [...rooms]; // Spread operator for copying without modifying the original array

    // Transform value
    // Needed as input value changes to String by default
    capacity = parseInt(capacity);
    price = parseInt(price);

    // Filter by type
    if (type !== 'all') {
      // Only get rooms where type is the specified type
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // Filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // Filter by price
    tempRooms = tempRooms.filter(room => room.price < price);

    // Filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    // Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    // Filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    // change State
    this.setState({
      sortedRooms: tempRooms
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// A different way for accessing context. cfr RoomContainer.js
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomConsumer, RoomContext, RoomProvider };
