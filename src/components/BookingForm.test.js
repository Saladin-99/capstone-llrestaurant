import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the booking form labels and submit button', () => {
  const availableTimes = ['10:00', '11:30', '13:00'];
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit reservation/i })).toBeInTheDocument();
});
