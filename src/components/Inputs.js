import { useState } from 'react';
import './Inputs.css';

import DateRangePicker from './DateRangePicker';

const Inputs = ({ setRoomsData, setShowRooms, showRooms, range, setRange, data, setData }) => {
  function handleFormSubmit(event) {
    if (showRooms === true) setShowRooms(false);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data, range: range, type: 'get_rooms' }),
    };

    async function fetchRoomsDetails() {
      const response = await fetch('link.com', requestOptions);
      const roomsDetails = await response.json();
      await setRoomsData(roomsDetails);
      setShowRooms(true);
    }
    fetchRoomsDetails();
    event.preventDefault();
  }

  return (
    <div className="Inputs__container">
      <form className="Inputs__form" onSubmit={handleFormSubmit}>
        <div className="Inputs__dates">
          <div className="Inputs__dates__content">
            <h2>Дати</h2>
            <div className="form__labels">
              <DateRangePicker value={range} onChange={setRange} />
            </div>
          </div>
        </div>
        <div className="Inputs__persons">
          <div className="Inputs__persons__content">
            <h2>Особи</h2>
            <div className="form__labels">
              <label> Дорослих </label>
              <input
                type="number"
                value={data.adults}
                onChange={(event) => setData({ ...data, adults: +event.target.value })}
              />
              <label>Дітей</label>
              <input
                type="number"
                value={data.children}
                onChange={(event) => setData({ ...data, children: +event.target.value })}
              />
            </div>
          </div>
        </div>
        <button type="submit">Перевірити наявність номерів</button>
      </form>
    </div>
  );
};

export default Inputs;
