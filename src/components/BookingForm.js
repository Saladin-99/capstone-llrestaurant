import { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Reservation received for ${date} at ${time}, ${guests} guest(s), occasion: ${occasion}.`);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">
        Date
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={(event) => {
            const selectedDate = event.target.value;
            setDate(selectedDate);
            dispatch({ type: 'UPDATE_DATE', date: selectedDate });
          }}
          required
        />
      </label>

      <label htmlFor="res-time">
        Time
        <select
          id="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="guests">
        Number of guests
        <input
          id="guests"
          type="number"
          min="1"
          max="12"
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          required
        />
      </label>

      <label htmlFor="occasion">
        Occasion
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <button type="submit" className="button button--primary">
        Submit reservation
      </button>
    </form>
  );
}

export default BookingForm;
