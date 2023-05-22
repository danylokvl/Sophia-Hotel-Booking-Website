import './Rooms.css';
import Room from './Room';

const Rooms = ({setShowBookingDetails}) => {
  return (
    <div className="Rooms__container">
      <Room setShowBookingDetails={setShowBookingDetails} />
    </div>
  );
};

export default Rooms;
