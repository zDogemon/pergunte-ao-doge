$(document).ready(function () {
    backMain();
    $($("body").get(0)).children().get(1).remove();
    $(window).keydown(function (event) {
        if (event.keyCode == 13)
            $('#dogeButton').click();
    });
    $("#swdark").change(function (){
    	if($(this).find("input").is(":checked")){
            darkTheme();
            document.cookie = "dark=true";
        } else {
            lightTheme();
            document.cookie = "dark=false";
        }
    });
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
        if (y < 0.5) {
            doge += opt1.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        } else {
            doge += opt2.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        doge += '</h1>\
                <a id="dogeButton" class="waves-effect waves-light btn blue darken-1" style="width: 50%; margin-top: 24px" onclick="backMain()">Voltar</a>';

        $("#doge-content").html(doge);
        
        if($("#swdark").find("input").is(":checked")){
            darkTheme();
        }
    }
}

function backMain() {
    var html = '<h3>Pergunte ao doge</h3>\
        <div class="input-field col s12" style="width: 50%">\
            <input id="opt1" type="text">\
            <label for="opt1">Opção 1</label>\
        </div>\
        <div class="input-field col s12" style="width: 50%">\
            <input id="opt2" type="text">\
            <label for="opt2">Opção 2</label>\
        </div>\
        <a id="dogeButton" class="waves-effect waves-light btn blue darken-1" style="width: 50%" onclick="choose()">Perguntar</a>\
    ';

    $("#doge-content").html(html);

    if($("#swdark").find("input").is(":checked")){
        darkTheme();
    }
}

function darkTheme(){
    $("body").css("background-color", "#121212");
    $("h1").css("color", "white");
    $("h3").css("color", "white");
    $("h4").css("color", "white");
    $("textarea:focus, input:focus").css("color", "white");
    $("input, select, textarea").css("color", "white");
}

function lightTheme(){
    $("body").css("background-color", "Azure");
    $("h1").css("color", "black");
    $("h3").css("color", "black");
    $("h4").css("color", "black");
    $("textarea:focus, input:focus").css("color", "black");
    $("input, select, textarea").css("color", "black");
}