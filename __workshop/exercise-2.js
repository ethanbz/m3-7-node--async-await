// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

const getIssPosition = () => {
  // write some code...
  return request(' http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      const { latitude, longitude } = parsedResponse.iss_position;
      return { lat: latitude, lng: longitude };
    })
};

const handleIssPosition = async () => {
  try {
    const result = await getIssPosition();
    console.log(result);
  } catch (err) {
    console.log('Error: ', err);
  }
};

handleIssPosition();
