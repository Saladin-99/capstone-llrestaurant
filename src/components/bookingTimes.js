export function initializeTimes() {
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

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_DATE':
      return initializeTimes();
    default:
      return state;
  }
}
