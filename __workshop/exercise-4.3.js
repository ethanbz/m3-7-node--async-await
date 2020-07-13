const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const a = await request('https://geek-jokes.sameerkumar.website/api?format=json');
    const b = JSON.parse(a);
    return b.joke;
  } catch(err) {
    console.log(err);
  }
};

getGeekJoke().then((data) => console.log(data));


module.exports = { getGeekJoke };