const President = require('./models/president');

const president = President.instance();

console.log(president.name);