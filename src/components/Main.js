import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function initializeTimes() {
  return [
    '10:00',
    '11:30',
    '13:00',
    '15:30',
    '18:00',
    '19:30',
    '21:00',
  ];
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_DATE':
      return initializeTimes();
    default:
      return state;
  }
}

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