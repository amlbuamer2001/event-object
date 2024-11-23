var inputField = document.getElementById('inputField');
var outputDiv = document.getElementById('output');

inputField.addEventListener('keydown', (event) => {
    var keyPressed = event.key;
    var keyCode = event.keyCode;
    var asciiCode = keyCode;

    var statusMessage = `Key Pressed: ${keyPressed} (ASCII Code: ${asciiCode})`;

    if (event.altKey) {
        statusMessage += ' - Alt key pressed';
        outputDiv.classList.add('alt-key');
    } else if (event.ctrlKey) {
        statusMessage += ' - Ctrl key pressed';
        outputDiv.classList.add('ctrl-key');
    } else if (event.shiftKey) {
        statusMessage += ' - Shift key pressed';
        outputDiv.classList.add('shift-key');
    } else {
        outputDiv.classList.remove('alt-key', 'ctrl-key', 'shift-key');
    }
    outputDiv.classList.add('typing');
    setTimeout(() => {
        outputDiv.classList.remove('typing');
    }, 1000);

    outputDiv.innerText = statusMessage;
});
