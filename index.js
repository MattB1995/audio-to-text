require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8888 
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'audio');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}.mp3`)
    }

});


const upload = multer({storage});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', function (req, res){
    res.send('pong pong mothafucka');
});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('audio'),async function(req, res) {
    res.send({success: true});
})




app.listen(PORT, function() {
    console.log(`serv running on port ${PORT}`);
});