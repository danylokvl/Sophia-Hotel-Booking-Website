import './Rooms.css';
import Room from './Room';

const Rooms = ({ setShowBookingDetails, roomsData }) => {
  console.log(roomsData);
  return (
    <div className="Rooms__container">
      {roomsData.content.map((room) => (
        <Room setShowBookingDetails={setShowBookingDetails} key={room.id} room={room} />
      ))}
    </div>
  );
};

export default Rooms;
