const express = require('express');
const app = express();

// home
app.get('/', (request, response)=>{
    response.sendFile(__dirname+'/views/index.html');
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