const express = require('express');
const func = require('./functions')
const cors = require('cors');
const app = express();

const PORT = 3000

app.use(cors());

// api endpoint
// localhost:3000/ => hello back end world
// app - express aplikacija
// get - metodas http get, post, put, path, delete
// '/' - endpoint adresas
// request - atejusios uzklausos objektas
// response - atsakymo atgal objektas
// (request, response) => {ivyks kodas kai ateisime pagal adresa ir metoda}

app.get('/', (request, response) => {
    response.send('hello back end world');
});
app.get('/api/camel', (request, response) =>{
    console.log('we got get request to /api/camel');

    const rez = func.makeCamelCase('Camel goes in a desert');
    console.log(rez);
    response.json({message: rez});
});

app.get('/api/posts', (request, response) =>{
    const post1 = {
        title: 'My first post',
        body: ' Story of my first post',
    };
    response.json(post1);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
