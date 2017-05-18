/* jshint esversion: 6 */

// Express.js
const express = require('express');
const app = express();
// Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.set('view engine', 'ejs');

// Use public folder for static files
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.render('index', {nav: 'index'});
});



io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // MySocketStuff

});



http.listen(3000, () => {
  console.log('Listening on port 3000');
});
