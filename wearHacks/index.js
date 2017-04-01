var Myo = require('myo');
var express = require('express');
var app = express();
var pug = require('pug');
var http = require('http').createServer(app);
var io = require('socket.io')(http);


var currStatus = 'notSet';
//app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function (req, res) {
    //res.render('index', { text: currStatus });
    res.sendFile(__dirname + '/index.html');
    // setTimeout(() => {
    //     io.emit('move event', "I'm a message");
    // }, 3000)
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

Myo.connect('com.example.app', require('ws'));
//console.log (Myo.myos);

Myo.on('connected', function () {
    //console.log('connected!', this.id)
});
Myo.on("fist", function () {
    currStatus = "I'm OK";
    //res.render('index', { text: currStatus });
    io.emit('move event', currStatus);
    console.log("I'm OK");
    this.vibrate();
});
Myo.on("wave_out", function () {
    currStatus = "Help me";
    io.emit('move event', currStatus);
    console.log('Help me');
    this.vibrate();
});
Myo.on("fingers_spread", function () {
    currStatus = "I want something";
    io.emit('move event', currStatus);
    console.log('I want someting');
    this.vibrate();
});
Myo.on("rest", function () {
    //console.log('Rested');
});


http.listen(3000, function () {
    console.log('Listening on port 3000');
})
