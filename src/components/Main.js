import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from './bookingTimes';

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  )
}
export default Main;