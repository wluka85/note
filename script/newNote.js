var noteId = 0;
var noteList = [];

var buttonNewNote = document.getElementById('addNote');

buttonNewNote.onclick = function(event) {
    var id =  generateNoteId();
    createNote(id);
    exportNoteList(id);
    saveNextId(noteId);
}

onLaunch();

function onLaunch() {
    noteId = loadNextId();
    noteList = loadNoteList();

    for (index = 0; index < noteList.length; index++) {
        id = noteList[index].id;
        createNote(id);
        refreshNote(noteList[index]);
    }
}

function createNote(id) {
    var newNote = document.createElement('div');
    newNote.setAttribute('class', 'note');
    newNote.setAttribute('id', 'div-' + id);
    newNote.style.left = '50px';
    newNote.style.top = '50px';

    var noteText = document.createElement('textarea');
    noteText.setAttribute('class', 'text');
    noteText.value = 'Type here text of note';

    var titleContent = createTitleContent(id);
    newNote.appendChild(titleContent);
    newNote.appendChild(noteText);
    noteContainer.appendChild(newNote);

    noteText.onkeyup = function(event) {
        exportNoteList(id);
    };

    newNote.onmousedown = function(event) {
        setCoordinates(event);
    }

    newNote.onmouseup = function(event) {
        deleteMoveSetup(event);
    }

    newNote.onmousemove = function(event) {
        moveNote(event);
        exportNoteList(id);
    }
}

function createTitleContent(id) {
    var titleContent = document.createElement('div');
    titleContent.setAttribute('class', 'titleContent');

    var buttonClose = document.createElement('button');
    buttonClose.setAttribute('id', id);
    buttonClose.innerHTML = 'X';

    var noteTitle = document.createElement('input');
    noteTitle.setAttribute('value', 'Type here title');
    noteTitle.setAttribute('class', 'title');

    generateCloseAction(buttonClose);

    noteTitle.onkeyup = function(event) {
        exportNoteList(id);
    }

    titleContent.appendChild(noteTitle);
    titleContent.appendChild(buttonClose);

    return titleContent;
}

var generateNoteId = function() {
    var id = 'noteId' + noteId++;
    return id;
}

var deleteNote = function(id) {
    var note = document.getElementById('div-' + id);
    var noteContainer = document.getElementById('noteContainer');
    noteContainer.removeChild(note);
    for (index = 0; index < noteList.length; ++index) {
        if (noteList[index].id === id) {
            noteList.splice(index, 1);
        }
    }
}

function generateCloseAction(button) {
    button.onclick = function(event) {
        deleteNote(this.id);
        saveNoteList(noteList);
    }
}

function exportNoteList(id) {
    var noteDOM = document.getElementById('div-' + id);
    var titleDOM = noteDOM.getElementsByClassName('title');
    var textDOM = noteDOM.getElementsByClassName('text');
    var note = new Note(id, titleDOM[0].value, textDOM[0].value, noteDOM.style.left, noteDOM.style.top);
    var isNoteOnList = false;
    for (index = 0; index < noteList.length; ++index) {
        if (noteList[index].id === note.id) {
            noteList[index] = note;
            isNoteOnList = true;
        }
    }

    if (!isNoteOnList) {
        noteList.push(note);
    }

    saveNoteList(noteList);
}

function refreshNote(note) {
    var noteDOM = document.getElementById('div-' + note.id);
    var titleDOM = noteDOM.getElementsByClassName('title');
    var textDOM = noteDOM.getElementsByClassName('text');
    titleDOM[0].value = note.title;
    textDOM[0].value = note.text;
    noteDOM.style.left = note.positionLeft;
    noteDOM.style.top = note.positionTop;
}
