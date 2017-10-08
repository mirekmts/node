const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Mike',
        age: 27
    }, {
        name: 'Andrew',
        age: 25
    }, {
        name: 'Jen',
        age: 26
    }]);
});

app.listen(3000);

module.exports.app = app;
