import { useState, useEffect } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Rooms from './components/Rooms';
import BookingDetails from './components/BookingDetails';
import moment from 'moment';

function App() {
  const [roomsData, setRoomsData] = useState({});
  const [showRooms, setShowRooms] = useState(false);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [range, setRange] = useState([moment(), moment().add(1, 'day')]);
  const [chosenRoom, setChosenRoom] = useState(0);
  const [data, setData] = useState({
    adults: 2,
    children: 0,	 
  });

  useEffect(() => {
    const element = document.getElementById('BookingDetails');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [showBookingDetails]);

  return (
    <div className="App">
      <main className="main">
        <h1>Sophia Hotel Booking</h1>
        <section className="Inputs">
          <Inputs
            showRooms={showRooms}
            setShowRooms={setShowRooms}
            range={range}
            setRange={setRange}
            data={data}
            setData={setData}
            setRoomsData={setRoomsData}
          />
        </section>
        {showRooms && (
          <section className="Rooms">
            <Rooms setShowBookingDetails={setShowBookingDetails} roomsData={roomsData} setChosenRoom={setChosenRoom} />
          </section>
        )}
        {showBookingDetails && (
          <section className="BookingDetails" id="BookingDetails">
            <BookingDetails range={range} data={data} chosenRoom={chosenRoom}/>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
