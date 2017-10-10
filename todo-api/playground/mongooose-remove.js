const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');


// Todo.remove({}).then((result) => {
//     console.log('RESULT', result)
// });

// Todo.findOneAndRemove({})
Todo.findByIdAndRemove('59dcde02dc2f0b85065b0a70').then((todo) => {
    console.log('TODO', todo);
});
