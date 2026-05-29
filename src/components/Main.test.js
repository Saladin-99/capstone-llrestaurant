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

  test('initializeTimes returns mocked API slots', () => {
    expect(initializeTimes()).toEqual(['10:00', '11:30']);
  });

  test('updateTimes returns unchanged state for unsupported action types', () => {
    const currentTimes = ['10:00', '11:30'];
    const newState = updateTimes(currentTimes, { type: 'NOOP' });
    expect(newState).toBe(currentTimes);
  });
});
