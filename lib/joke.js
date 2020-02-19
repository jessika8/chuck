const request = require('request');  // npm i request
const {promisify} = require('util');  // util is built in - no need for npm
const promisifiedRequest = promisify(request);


require('dotenv').config()   // npm i dotenv

const getJoke = async () => {

    let options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        json: true,
        headers: {
          'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
          'x-rapidapi-key': `${process.env.APPID}`
        }
    }

    let data = await promisifiedRequest(options)
    
    
    return data.body
    // console.log(data.body)
    
    

}

getJoke();


module.exports = getJoke;