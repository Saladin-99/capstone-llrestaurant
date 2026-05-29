import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

test('renders the booking form labels and submit button', () => {
  const availableTimes = ['10:00', '11:30', '13:00'];
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByText(/Submit reservation/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /on click/i })).toBeInTheDocument();
});

test('booking form inputs have correct HTML5 validation attributes', () => {
  const todayString = new Date().toISOString().slice(0, 10);
  const availableTimes = ['10:00', '11:30'];
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  const dateInput = screen.getByLabelText(/Date/i);
  const timeInput = screen.getByLabelText(/Time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const occasionInput = screen.getByLabelText(/Occasion/i);

  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('min', todayString);
  expect(timeInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '12');
  expect(occasionInput).toHaveAttribute('required');
});

test('submit button is disabled when the form is invalid and enabled when valid', async () => {
  const invalidTimes = [];
  const dispatch = jest.fn();

  const { rerender } = render(<BookingForm availableTimes={invalidTimes} dispatch={dispatch} />);

  const button = screen.getByRole('button', { name: /on click/i });
  expect(button).toBeDisabled();

  const validTimes = ['17:00'];
  rerender(<BookingForm availableTimes={validTimes} dispatch={dispatch} />);

  const validButton = screen.getByRole('button', { name: /on click/i });
  await waitFor(() => expect(validButton).toBeEnabled());
});

test('calls submitForm when the form is valid and submitted', async () => {
  const availableTimes = ['10:00'];
  const dispatch = jest.fn();
  const submitForm = jest.fn(() => true);

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );

  const button = screen.getByRole('button', { name: /on click/i });
  await waitFor(() => expect(button).toBeEnabled());
  userEvent.click(button);

  expect(submitForm).toHaveBeenCalledWith({
    date: expect.any(String),
    time: '10:00',
    guests: 2,
    occasion: 'Birthday',
  });
});
