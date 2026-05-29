import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { initializeTimes, updateTimes } from './bookingTimes';
import { getSubmitAPI } from './bookingAPI';

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const api = getSubmitAPI();
    if (!api) {
      return false;
    }

    if (api(formData)) {
      navigate('/booking/confirmed');
      return true;
    }

    return false;
  };

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
export default Main;