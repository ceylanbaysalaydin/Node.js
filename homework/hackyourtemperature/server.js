const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');

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
    res.send(cityName);
  } else {
    res.send('You should enter a city name');
  }
});

server.listen(3000, () => {
  console.log('server started');
});
