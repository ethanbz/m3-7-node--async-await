// nothing here yet...
const  { getDadJoke } = require('./__workshop/exercise-4.1')
const {getTronaldDumpQuote} = require('./__workshop/exercise-4.2')
const {getGeekJoke} = require('./__workshop/exercise-4.3')

handleJoke = async (req, res) => {
    if (req.params.type === 'dad') {
        res.send({ status: 200, 'joke': await getDadJoke()})
    }
    if (req.params.type === 'tronald') {
        res.send({ status: 200, 'joke': await getTronaldDumpQuote()})
    }
    if (req.params.type ==='geek') {
        res.send({ status: 200, 'joke': await getGeekJoke()})
    }
}


module.exports = { handleJoke };