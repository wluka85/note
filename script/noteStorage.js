var saveNoteList = function(noteList) {
    localStorage.setItem('noteList', JSON.stringify(noteList));
}

var loadNoteList = function() {
    return JSON.parse(localStorage.getItem('noteList'));
}

var saveNextId = function(nextId) {
    localStorage.setItem('nextId', nextId);
}

var loadNextId = function() {
    var nextId = parseInt(localStorage.getItem('nextId'));
    return nextId;
}

function Note(id, title, text, positionLeft, positionTop) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.positionLeft = positionLeft;
    this.positionTop = positionTop;
}
