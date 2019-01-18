var xClick;
var yClick;
var isDivClicked = false;
var div;

var setCoordinates = function(event) {
    var divId = event.target.id;
    if (divId.includes('div-noteId')) {
        isDivClicked = true;
        div = document.getElementById(divId);

        xClick = event.clientX;
        yClick = event.clientY;
    }
}

var deleteMoveSetup = function(event) {
    xClick = null;
    yClick = null;
    isDivClicked = false;
    div = null;
}

var moveNote = function(event) {
    if (isDivClicked === true) {
        var moveX = event.clientX - xClick;
        var moveY = event.clientY - yClick;

        var oldX = parseInt(div.style.left);
        var oldY = parseInt(div.style.top);

        var newX = oldX + moveX;
        var newY = oldY + moveY;

        xClick = event.clientX;
        yClick = event.clientY;

        div.style.left = newX + 'px';
        div.style.top = newY + 'px';

    }
}
