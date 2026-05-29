function getFetchAPI() {
  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    return window.fetchAPI;
  }
  return null;
}

function assertFetchAPI(api) {
  if (!api) {
    console.error('fetchAPI is not available. Make sure the api.js script is loaded in index.html.');
  }
}

export function initializeTimes() {
  const api = getFetchAPI();
  assertFetchAPI(api);
  if (!api) {
    return [];
  }

  return api(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_DATE': {
      const api = getFetchAPI();
      assertFetchAPI(api);
      if (!api) {
        return [];
      }
      const selectedDate = action.date ? new Date(action.date) : new Date();
      return api(selectedDate);
    }
    default:
      return state;
  }
}
