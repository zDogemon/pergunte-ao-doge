function choose() {
    var y = Math.random();
    var h1 = document.getElementById("result");
    var h4 = document.getElementById("top");
    if (document.getElementById('opt1').value == "" || document.getElementById('opt2').value == "") {
        alert("Prencha todos os campos!");
    } else {
        if (y < 0.5) {
            h4.textContent = "E o doge escolheu...";
            h1.textContent = document.getElementById('opt1').value;
        } else {
            h4.textContent = "E o doge escolheu...";
            h1.textContent = document.getElementById('opt2').value;
        }
    }
    hideKeyboard();
}

function hideKeyboard(element) {
    element.setAttribute('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.setAttribute('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttribute('readonly');
        element.removeAttribute('disabled');
    }, 100);
}