console.log('app.js');
const functions = require('./functions');

const rez = functions.makeCamelCase('Ar tikrai veikia Camel Case?');
console.log('rez===', rez);
