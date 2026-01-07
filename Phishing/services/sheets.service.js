
// Send data to server
const fetch = require('node-fetch');

exports.sendToSheets = async (data) => {
  return fetch("ENTER_OWN_GOOGLE_SHEETS_API_URL", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};
