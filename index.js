const express = require('express');
const app = express();

// home
app.get('/', (request, response)=>{
    response.send('This is the Home Page!');
})
// about
app.get('/about', (request, response)=>{
    response.send('Some stuff about me will go here');
})
// blog
app.get('/blog', (request, response)=>{
    reesponse.send('A directory of all my blog posts will go here')
})