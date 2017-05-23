/* jshint esversion: 6 */

// Express.js
const express = require('express');
const app = express();
// Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

var generateJobs = require("./generateJobs.js");



app.set('view engine', 'ejs');

// Use public folder for static files
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  // res.render('index', {nav: 'index', entrys: generateJobs.returnEntrys});
  res.render('index', {nav: 'index', entrys: generateJobs.returnEntrys()});
});
console.log(generateJobs.returnEntrys());


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // MySocketStuff
  // setInterval(function(){
  //   generateJobs.genRndEntry();
  //   console.log(generateJobs.returnEntrys());
  //   // socket.emit('getEntrysFromServer', entrys[entrys.length-1]);
  // }, 5000);

  socket.on('getEntrys', () => {
    socket.emit('getEntrys', generateJobs.returnEntrys());
  });

});



http.listen(3000, () => {
  console.log('Listening on port 3000');
});

// setInterval(function(){
//   console.log(generateJobs.returnEntrys());
// }, 5000);
