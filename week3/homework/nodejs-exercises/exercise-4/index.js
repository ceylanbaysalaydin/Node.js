const Handlebars = require('handlebars');

const subjects = ['shark', 'popcorn', 'poison', 'fork', 'cherry', 'toothbrush', 'cannon'];
const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];
function randomElementOfArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const data = {
  subject: randomElementOfArray(subjects),
  punchline: randomElementOfArray(punchlines),
};
const source = `{{subject}} is great to {{punchline}}`;
const template = Handlebars.compile(source);
const result = template(data);

console.log(result);
