    var currentText = "";
    var textStack = [];
    var limit = 100;
    function loadContent() {
        var text = "";
        try {
            var storedStack = window.localStorage.getItem("currentDoc");
            textStack = JSON.parse(storedStack);
            currentText = textStack[0];
        } catch (e) {
            currentText = "";
            textStack = [];
        }
    }

loadContent();
document.getElementById("content").innerHTML = currentText;

window.setInterval(function() {
    var actuallyCurrentText = document.getElementById("content").innerHTML;
    if (actuallyCurrentText == currentText) {
        return;
        }
    currentText = actuallyCurrentText;
    textStack.unshift(currentText);
    textStack = textStack.splice(0, limit);
    window.localStorage.setItem("currentDoc", JSON.stringify(textStack));
}, 1000);


