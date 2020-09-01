var express = require("express");
var socket = require("socket.io");
require("dotenv").config();

var port = process.env.PORT || 5000;
console.log(port);

// App setup
var app = express();
var server = app.listen(port, function () {
  console.log("listening for requests on port 5000,");
});

// Socket setup & pass server
var io = socket(server);
io.on("connection", (socket) => {
  // Handle chat event
  socket.on("chat", function (data) {
    // Broadcast the data to every client
    io.emit("broadcast", data);
  });
});
