const fetch = require('node-fetch');

const body = {
  name: 'Ceylan',
  numberOfPeople: 4,
};

fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => {
    if (res.ok) {
      return res.text();
    } else throw new Error();
  })
  .then(res => console.log(res))
  .catch(err => console.log(err));
