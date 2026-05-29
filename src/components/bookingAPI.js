export function getSubmitAPI() {
  if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
    return window.submitAPI;
  }
  console.error('submitAPI is not available. Make sure the api.js script is loaded in index.html.');
  return null;
}
