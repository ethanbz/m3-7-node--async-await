const request = require('request-promise');
const { response } = require('express');

// getDadJoke
const getDadJoke = async () => {
    const a = await request({ uri: "https://icanhazdadjoke.com/", headers: {"Accept": 'text/plain'} })
    return a;
}

// 4.1
getDadJoke().then((data) => console.log(data));
console.log(getDadJoke())

module.exports = { getDadJoke };
