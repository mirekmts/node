var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Tolstoy',
        bookId: 656,
        read: false
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        bookId: 24280,
        read: true
    },
    {
        title: 'The Time Machine',
        genre: 'Sci-Fi',
        author: 'H. G. Wells',
        read: false
    }
];
var router = function(nav) {
    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url = "mongodb://localhost:27017/mydb";

            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });

            });
        });
    return adminRouter;
}

module.exports = router;
