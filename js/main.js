function choose() {
    var y = Math.random();
    var doge = '<h4>E o doge escolheu...</h4>\
        <h1>';
    
    if (document.getElementById('opt1').value == "" || document.getElementById('opt2').value == "") {
        alert("Preencha todos os campos!");
    } else {
        if (y < 0.5) {
            doge += document.getElementById('opt1').value;
        } else {
            doge += document.getElementById('opt2').value;
        }
    }
    
    doge += '</h1>\
    <a id="myButton" class="waves-effect waves-light btn blue darken-1" style="width: 50%; margin-top: 30px" onclick="backMain()">Voltar</a>';
    
    document.getElementById('batata').innerHTML = doge;
}

function backMain(){
    var html = '<h3>Pergunte ao doge</h3>\
        <div class="input-field col s12" style="width: 50%">\
            <input id="opt1" type="text" onkeydown="if (event.keyCode == 13)\
            document.getElementById("myButton").click()">\
            <label for="opt1">Opção 1</label>\
        </div>\
        <div class="input-field col s12" style="width: 50%" onkeydown="if (event.keyCode == 13)\
            document.getElementById("myButton").click()">\
            <input id="opt2" type="text">\
            <label for="opt2">Opção 2</label>\
        </div>\
        <a id="myButton" class="waves-effect waves-light btn blue darken-1" style="width: 50%" onclick="choose()">Adivinhar</a>\
    ';
    
    document.getElementById('batata').innerHTML = html;
}
