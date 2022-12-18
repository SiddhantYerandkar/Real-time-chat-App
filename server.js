const path = require('path')
const http = require('http');
const express = require('express')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)


// set static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Run when client connects
io.on('connection',function (socket) {
    console.log("New WS Connection...");
})



server.listen(3000, function () {
    console.log('Express app running on port' + ' ' + 3000)
});