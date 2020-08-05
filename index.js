const express = require('express'); // import express
const app = express(); // new express instance

// home
app.get('/', (request, response)=>{
    // use __dirname to get the absolute file path
    // instead of send() we call sendFile()
    response.sendFile(__dirname+'/views/index.html'); // need absolute path!
})
// about
app.get('/about', (request, response)=>{
    response.sendFile(__dirname+'/views/about.html');
})
// blog
app.get('/blog', (request, response)=>{
    response.sendFile(__dirname+'/views/blog-directory.html')
}) 

app.listen(8000);