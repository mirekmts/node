// var obj = {
//     name: 'Andrew'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log('STRINGOBJ typeof', typeof stringObj);
// console.log('STRINGOBJ', stringObj);

// var personString = '{"name": "Andrew", "age": 25}';
// console.log('PERSONSTRING', typeof personString);
// console.log('PERSONSTRING', personString);
// var person = JSON.parse(personString);
// console.log('PERSON typeof', typeof person);
// console.log('PERSON', person);
const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString  = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log('NOTE typeof', typeof note);
console.log('NOTE', note);
