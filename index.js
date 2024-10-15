require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8888 
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', function (req, res){
    res.send('pong pong mothafucka');
});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log(`serv running on port ${PORT}`);
});