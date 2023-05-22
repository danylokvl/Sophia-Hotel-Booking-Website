import { useState } from 'react';
import './Inputs.css';

import DateRangePicker from './DateRangePicker';

const Inputs = ({ setShowRooms, range, setRange, data, setData }) => {

  function handleFormSubmit(event) {
  /*  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ data: data, range: range }),
    };
    fetch('http://62.171.156.155/danylo_ko/api/api.py', requestOptions)
	 .then((response) => response.json()
    );*/

    event.preventDefault();
    setShowRooms(true);
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
