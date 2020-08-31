var express = require("express");
var socket = require("socket.io");

// App setup
var app = express();
var server = app.listen(3001, function () {
  console.log("listening for requests on port 3001,");
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
