import { initializeTimes, updateTimes } from './bookingTimes';

test('initializeTimes returns the expected default time slots', () => {
  expect(initializeTimes()).toEqual([
    '10:00',
    '11:30',
    '13:00',
    '15:30',
    '18:00',
    '19:30',
    '21:00',
  ]);
});

test('updateTimes returns unchanged state for unsupported action types', () => {
  const currentTimes = ['10:00', '11:30'];
  const newState = updateTimes(currentTimes, { type: 'NOOP' });
  expect(newState).toBe(currentTimes);
});
