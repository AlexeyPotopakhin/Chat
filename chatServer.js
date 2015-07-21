var express = require("express");
var app = express();
var socket = require("socket.io");

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/views/js"));
app.use(express.static(__dirname + "/angular-socket-io"));

var server = app.listen(1337);
var io = socket.listen(server);

console.log("Server running at http://127.0.0.1:1337/");

var messages = [];

app.get("/chat", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) {
    console.log("Connected new user");

    socket.on("disconnected", function() {
       console.log("User disconnected")
    });

    socket.on("chat message", function(msg) {
        messages.push(msg);
        io.emit("chat message", msg);
    });

    socket.emit("chat history", messages);
});