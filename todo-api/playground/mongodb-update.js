// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59da8f228b6cc3dc07a6d472')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log('RESULT', result)
    });
    // db.close();
});
