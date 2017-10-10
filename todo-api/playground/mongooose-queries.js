const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');


var id ='59dc905baa54b82764c1a700';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('TODOS', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('TODO', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('TODO by ID', todo);
}).catch((e) => console.log(e))
