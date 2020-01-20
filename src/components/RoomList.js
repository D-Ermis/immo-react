import React from 'react';
import Room from './Room';

const RoomList = ({ room }) => {
  if (room.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no houses matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {room.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;
