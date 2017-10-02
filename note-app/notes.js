console.log('Loaded notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var getNotes = notes.filter((note) => {
        return note.title === title;
    });
    return getNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var removingNotes = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(removingNotes);

    return notes.length !== removingNotes.length
};

var logNote = (note) => {
    console.log('-----------------');
    console.log('Title', note.title);
    console.log(`Body: ${note.body}`);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
