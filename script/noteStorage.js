var saveNoteList = function(noteList) {
    localStorage.setItem('noteList', JSON.stringify(noteList));
}

var loadNoteList = function() {
    if (JSON.parse(localStorage.getItem('noteList')) === null) {
        let note = new Note('noteId0', 'Type here title', 'Type here text of note', '50px', '50px');
        let noteList = [];
        noteList.push(note);

        return noteList;
    }
    return JSON.parse(localStorage.getItem('noteList'));
}

var saveNextId = function(nextId) {
    localStorage.setItem('nextId', nextId);
}

var loadNextId = function() {
    var nextId = parseInt(localStorage.getItem('nextId'));
    if (!nextId) {
        nextId = 1;
    }

    return nextId;
}

function Note(id, title, text, positionLeft, positionTop) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.positionLeft = positionLeft;
    this.positionTop = positionTop;
}
