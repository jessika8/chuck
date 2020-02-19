const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');

const app = express();

const getJoke = require('./lib/joke.js');

app.use(express.static(path.join(__dirname, 'public')));


app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}))

app.set('view engine', '.hbs');

app.get('/', async(req, res) => {

    let data = await getJoke();  
    // let description = data.weather[0].description
    // let locationName = data.name
    // let countryCode = data.sys.country
    // let temp = data.main.temp
    let jokeJoke = data.value
    console.log(data)

    // render the index.hbs page
    res.render('index', {jokeJoke});
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})