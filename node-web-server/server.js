const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>');
    res.send({
        name: 'Andrew',
        likes:
            ['Bki',
            'Mom']

    })
});
app.get('/about', (req, res) => {
    res.send('about page')
})
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
