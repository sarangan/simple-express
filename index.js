const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

function logger(req, res, next){
    console.log("SIMPLE-EXPRESS-APP - listening request");
    next();
}
app.use(logger);

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.get('/hi', (req, res) =>{
    res.send('Hi');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});