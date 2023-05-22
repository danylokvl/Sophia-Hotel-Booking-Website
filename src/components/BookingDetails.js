import React from 'react';
import './BookingDetails.css';
import { useState } from 'react';

const BookingDetails = ({ range, data }) => {
  const [guestContacts, setGuestContacts] = useState({ name: '', surname: '', number: '' });

const handleFormSubmit  = (event) => {
    /*
	const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ data: data, range: range, guestContacts:guestContacts }),
    };
    fetch('http://62.171.156.155/danylo_ko/api/api.py', requestOptions)
	 .then((response) => response.json());
	 */

    alert('Бронювання пройшло успішно');
  }

  return (
    <div className="BookingDetails__container">
      <div className="BookingDetails-details">
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Ваше бронювання</h2>
        <h3 style={{ fontWeight: 'bold' }}>Дата приїзду</h3>
        <h3>{range[0].format('DD.MM.YYYY').toString()}</h3>
        <h3 style={{ fontWeight: 'bold' }}> Дата Від'їзду</h3>
        <h3>{range[1].format('DD.MM.YYYY').toString()}</h3>
        <h3 style={{ fontWeight: 'bold' }}> Ваша Кімната</h3>
        <h3> Sophia Room </h3>
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Підтвердіть ваші дані</h2>
      <form className="guest-data-form" onSubmit={handleFormSubmit}>
        <label>Ваше Ім'я</label>
        <input
          type="text"
          value={guestContacts.name}
          onChange={(event) => setGuestContacts({ ...guestContacts, name: event.target.value })}
        />

        <label>Ваше Прізвище</label>
        <input
          type="text"
          value={guestContacts.surname}
          onChange={(event) => setGuestContacts({ ...guestContacts, surname: event.target.value })}
        />

        <label>Ваш номер телефону</label>
        <input
          type="text"
          value={guestContacts.number}
          onChange={(event) => setGuestContacts({ ...guestContacts, number: event.target.value })}
        />

        <button type="submit">Підтвердити</button>
      </form>
    </div>
  );
};

export default BookingDetails;
