// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'eat lunch'
    // }).then((result) => {
    //     console.log('RESULT', result)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat'}).then((result) => {
    //     console.log('RESULT', result)
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log('RESULT', result)
    })
    // db.close();
});
