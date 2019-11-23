const leftPad = require('left-pad');
numbers = ['12', '846', '2', '1236', '12345678'];
numbers.forEach(item => {
  console.log(leftPad(item, 8, ' '));
});
