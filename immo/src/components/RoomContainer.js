import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      hello from rooms container
      <RoomFilter room={rooms} />
      <RoomList room={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// Code above can also be written like below

// import { RoomConsumer } from '../context';

// const RoomContainer = () => {
//   return (
//     // Different syntax for accessing context
//     // just to see the difference when using class components
//     // and functional component like this one
//     <RoomConsumer>
//       {value => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from rooms container
//             <RoomFilter room={rooms} />
//             <RoomList room={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
