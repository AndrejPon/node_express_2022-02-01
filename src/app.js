// console.log('app.js');
// const functions = require('./functions');

// const rez = functions.makeCamelCase('Ar tikrai veikia Camel Case?');
// console.log('rez===', rez);

const http = require('http'); // Importuojame http į mūsų JS kodą
// O štai apačioje sukuriame serverį, kuris priims ir paduos informaciją.
// Kol kas nieko naudingo nepasiimame ir nepaduodam, bet kodo - jau nemažai.

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body ===', body);
  });
}).listen(8080); // Activates this server, listening on port 8080.