const request = require('request-promise');
const { json } = require('body-parser');

const getTronaldDumpQuote = async () => {
  // write write write
  const a = await request({ uri: "https://api.tronalddump.io/random/quote", headers: {"Accept": 'application/json'} })
  const b = JSON.parse(a)
  return b.value;
}

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };