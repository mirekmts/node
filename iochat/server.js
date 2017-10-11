const express = require('express');
var app = express();
var server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = process.env.PORT || 3000;
users = [];
connections = [];

server.listen(port);
    console.log('Started on port: ', port)

// app.listen(port, () => {
//     console.log('Started on port: ', port)
// });

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log(`Connected ${connections.length} sockets connected`);

    //Disconnected
    socket.on('disconnect', (data) => {

        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log(`Disconnected ${connections.length} sockets connected`);
    })

    // Send Message
    socket.on('send message', (data) => {
        io.sockets.emit('new message', {msg: data, user: socket.username});
    });

    //New USer
    socket.on('new user', (data, callback) => {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users', users);
    };


});
