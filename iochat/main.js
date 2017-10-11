console.log('Loaded from main.js')
$(function() {
    var socket = io.connect();
    var $messageForm = $('#messageForm');
    var $message = $('#message');
    var $chat = $('#chat');
    var $messageArea = $('#messageArea');
    var $userForm = $('#userForm');
    var $userFormArea = $('#userFormArea');
    var $users = $('#users');
    var $username = $('#username');

    $messageForm.submit((e) => {
        e.preventDefault();
        socket.emit('send message', $message.val());
        $message.val('');
    });

    socket.on('new message', (data) => {
        $chat.append('<div class="well"><strong>' + data.user + '</strong>:' + data.msg + '</div>')
    });

    $userForm.submit((e) => {
        e.preventDefault();
        socket.emit('new user', $username.val(), (data) => {
            if(data) {
                $userFormArea.hide();
                $messageArea.css("display", "flex");
            }
        });
        $username.val('');
    });

    socket.on('get users', (data) => {
        var html = '';
        for(var i = 0; i <data.length; i++) {
            html += '<li class="list-group-item">' + data[i] +'</li>';
        }
        $users.html(html);
    })
});
