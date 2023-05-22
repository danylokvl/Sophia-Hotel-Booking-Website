import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './DateRangePicker.css';

const DateRangePicker = ({ value, onChange }) => {
  const [startDate, setStartDate] = useState(value[0]);
  const [endDate, setEndDate] = useState(value[1]);

  useEffect(() => {
    setStartDate(value[0]);
    setEndDate(value[1]);
  }, [value]);

  const handleStartDateChange = (e) => {
    const newStartDate = moment(e.target.value);
    const newEndDate = moment(endDate);
    if (newStartDate.isAfter(newEndDate)) {
      newEndDate.add(1, 'day');
    }
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    onChange([newStartDate, newEndDate]);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = moment(e.target.value);
    const newStartDate = moment(startDate);
    if (newEndDate.isSameOrBefore(newStartDate)) {
      newStartDate.subtract(1, 'day');
    }
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    onChange([newStartDate, newEndDate]);
  };

  return (
    <div>
      <label>Дата приїзду</label>
      <input type="date" value={startDate.format('YYYY-MM-DD')} onChange={handleStartDateChange} />
      <label>Дата від'їзду</label>
      <input type="date" value={endDate.format('YYYY-MM-DD')} onChange={handleEndDateChange} />
    </div>
  );
};

export default DateRangePicker;
