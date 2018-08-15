$(document).ready(function () {
    backMain();
    $($("body").get(0)).children().get(1).remove();
});

function choose() {
    var y = Math.random();
    var opt1 = $("#opt1");
    var opt2 = $("#opt2");

    var doge = '<h4><b>' + opt1.val().replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</b> ou <b>' + opt2.val().replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</b>?<br />o doge escolheu...</h4>\
        <h1> ';

    if (opt1.val() == "" || opt2.val() == "") {
        alert("Preencha todos os campos!");
    } else {
        if (opt1.val().toLowerCase().indexOf("crystian") > -1 && opt1.val().toLowerCase().indexOf("gay") > -1 && opt1.val().toLowerCase().indexOf("não") == -1) {
            doge += opt1.val().toString();
        } else if (opt2.val().toLowerCase().indexOf("crystian") > -1 && opt2.val().toLowerCase().indexOf("gay") > -1 && opt2.val().toLowerCase().indexOf("não") == -1) {
            doge += opt2.val().toString();
        } else if (y < 0.5) {
            doge += opt1.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        } else {
            doge += opt2.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        doge += '</h1>\
                <a id="myButton" class="waves-effect waves-light btn blue darken-1" style="width: 50%; margin-top: 30px" onclick="backMain()">Voltar</a>';
        
        $("#doge-content").html(doge);
    }
}

function backMain() {
    var html = '<h3>Pergunte ao doge</h3>\
        <div class="input-field col s12" style="width: 50%">\
            <input id="opt1" type="text" onkeydown="if (event.keyCode == 13) document.getElementById(\'myButton\').click();">\
            <label for="opt1">Opção 1</label>\
        </div>\
        <div class="input-field col s12" style="width: 50%" onkeydown="if (event.keyCode == 13) document.getElementById(\'myButton\').click();">\
            <input id="opt2" type="text">\
            <label for="opt2">Opção 2</label>\
        </div>\
        <a id="myButton" class="waves-effect waves-light btn blue darken-1" style="width: 50%" onclick="choose()">Adivinhar</a>\
    ';

    $("#doge-content").html(html);
}