const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.get('/hi', (req, res) =>{
    res.send('Hi');
});

app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});