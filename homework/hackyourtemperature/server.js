const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');

const API_KEY = require('./sources/keys.json').API_KEY;

const server = express();
server.use(express.urlencoded({ extended: true }));

server.set('view engine', 'handlebars');
server.engine('handlebars', exphbs({ defaultLayout: 'main' }));

server.get('/', (req, res) => {
  res.render('index');
});

server.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  if (cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}&units=metric`;
    axios
      .get(url)
      .then(response =>
        res.render('index', {
          weatherText: `${cityName}: ${response.data.main.temp}`,
        }),
      )
      .catch(() => res.render('index', { weatherText: 'City is not found' }));
  } else res.status(400).send('Bad request');
});

server.listen(3000, () => {
  console.log('server started');
});
