import { useEffect, useRef, useState } from 'react';

const todayString = new Date().toISOString().slice(0, 10);

function BookingForm({ availableTimes = [], dispatch, submitForm = () => {} }) {
  const formRef = useRef(null);
  const [date, setDate] = useState(todayString);
  const [time, setTime] = useState(availableTimes[0] || '');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  useEffect(() => {
    setIsFormValid(formRef.current?.checkValidity() ?? false);
  }, [date, time, guests, occasion, availableTimes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    if (submitForm(formData)) {
      return;
    }

    alert(`Reservation received for ${date} at ${time}, ${guests} guest(s), occasion: ${occasion}.`);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} ref={formRef}>
      <fieldset>
        <legend>Reservation details</legend>

        <label htmlFor="res-date">
          Date
          <input
            id="res-date"
            type="date"
            value={date}
            min={todayString}
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
      </fieldset>

      <button
        type="submit"
        className="button button--primary"
        disabled={!isFormValid}
        aria-label="On Click"
      >
        Submit reservation
      </button>
    </form>
  );
}

export default BookingForm;
