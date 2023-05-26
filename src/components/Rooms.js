import './Rooms.css';
import Room from './Room';

const Rooms = ({ setShowBookingDetails, roomsData, setChosenRoom }) => {
  return (
    <div className="Rooms__container">
      {roomsData.content.map((room) => (
        <Room
          setShowBookingDetails={setShowBookingDetails}
          setChosenRoom={setChosenRoom}
          key={room.id}
          room={room}
        />
      ))}
    </div>
  );
};

export default Rooms;
