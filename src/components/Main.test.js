import { initializeTimes, updateTimes } from './bookingTimes';

describe('bookingTimes with fetchAPI', () => {
  beforeEach(() => {
    window.fetchAPI = jest.fn((date) => {
      if (date instanceof Date) {
        return ['10:00', '11:30'];
      }
      return [];
    });
  });

  afterEach(() => {
    delete window.fetchAPI;
  });

  test('initializeTimes calls fetchAPI and returns mocked API slots', () => {
    expect(initializeTimes()).toEqual(['10:00', '11:30']);
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('updateTimes returns mocked API slots for a selected date', () => {
    const newState = updateTimes([], { type: 'UPDATE_DATE', date: '2026-05-31' });
    expect(newState).toEqual(['10:00', '11:30']);
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2026-05-31'));
  });
});
