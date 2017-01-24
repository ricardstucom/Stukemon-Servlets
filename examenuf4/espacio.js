$(document).ready(start);
var source = 0;
var lista;
var nave = $("<img src='2iozev.png' id='subject'/>");
var points = 0;
var interval;
function start() {
    $("#boton").click(nombre);
    $("#start").click(start2);
    $("#espai").append(nave);
    $("#change").click(cambiar);
}
function nombre() {

    var nombre = $("#nombre").val();
    $.ajax({
        type: "POST",
        url: "espacio.php",
        dataType: "json",
        data: {"nombre": nombre, "puntuacion": 0},
        success: function (respuesta) {
            source = respuesta.posicion;
            puntos();
        }
    });
}
function puntos() {

    $.ajax({
        type: "POST",
        url: "espacio.php",
        dataType: "json",
        data: {"lista": "lista"},
        success: function (respuesta) {
            // lista = JSON.parse(respuesta);
            //console.log( array);
            //    usuarios();
            console.log(respuesta.jug);

            var elem = "<ul>";
            for (var nombre in respuesta.jug) {

                elem += "<li>Nombre: " + respuesta.jug[nombre].nombre + " - Puntos: " + respuesta.jug[nombre].puntos + "</li>";
            }
            elem += "</ul>";
            console.log(elem);
            $("#tabla").prepend(elem);
            $("#start").fadeIn();

        }
    });
}
function start2() {

    $("#puntos").fadeOut();
    $("#gameOver").fadeOut();
    $("#fondo").fadeIn(5000);
    $("#hud").fadeIn(5000);
    $("#espai").fadeIn(5000);

    $(document).keydown(function (a) {
        switch (a.which) {

            //s
            case 87:
                nave.stop().animate({
                    top: '-=100'
                });
                break;
                //w
            case 83:
                nave.stop().animate({
                    top: '+=100'
                });
                break;
                //a
            case 65:
                nave.stop().animate({
                    left: '-=100'
                });
                break;
                //d
            case 68:
                nave.stop().animate({
                    left: '+=100'
                });
                break;
            case 72:
                timerpng();
                break;
        }
    });
    time();
}
function time() {

    interval = window.setInterval(meteoro, 2000);
}
function meteoro() {

    var meteorito = $("<img src='Tie-Fighter-01-icon.png' class='enemy'/>");
    $("#espai").append(meteorito);
    var dis = $("#espai").width() - meteorito.width();
    var top;
    $.ajax({
        type: "POST",
        url: "espacio.php",
        dataType: "json",
        data: {"max": $("#espai").height() - meteorito.height()},
        success: function (respuesta) {
            top = respuesta.random;
            //console.log(respuesta.random);
            console.log(top);
            meteorito.css({"left": dis, "top": top + "px"});

            meteorito.animate({
                left: '0'
            }, {
                duration: 3000,
                step: function (now, fx) {
                    //puntuacion
                    $("#points").html(points);
                    //comprobar colision
                    if ($(meteorito).hittest($(nave))) {
                        meteorito.remove();
                        $("#salud").animate({
                            "width": "-=20"
                        },
                        {
                            step: function (now, fx) {
                                if ($("#salud").width() < 5) {
                                    clearInterval(interval);
                                    nave.stop();
                                    window.clearInterval(interval);
                                    $("#gameOver").fadeIn(5000);
                                    $("#espai").fadeOut();
                                    $("#hud").fadeOut();
                                    final();
                                }
                            }
                        });
                    }
                },
                complete: function () {
                    points++;
                    meteorito.remove();
                }

            });
        }
    });
}
function final() {
    $.ajax({
        type: "POST",
        url: "espacio.php",
        dataType: "json",
        data: {"posicion": source, "puntuacion": points},
        success: function (respuesta) {
            $("#tabla").remove("ul");
            puntos();
        }
    });
    $("#salud").css({
        "width": "250"
    });
    $("#puntos").fadeIn();
}
function timerpng() {


    var timer = $("<img src='timer.png' id='timer'>");
    $("#espai").append(timer);
    var timerl = 0;
    timerl = $("#espai").width() - timer.width();

    var timert = Math.floor((Math.random() * $("#espai").width()) + 20);

    timer.css({"left": timerl, "top": "50px"});
    //timerpng();
    
    //movimientoRandom(timer);
    
   // timer.animate({
       // top: Math.floor((Math.random() * $("#espai").width() - 50) + 100)
    //},{
       // duration: 1000
   // });
    
    
    timer.animate({
        left: '0'
    },{
        duration: 5000,
        step: function (now, fx) {
            //puntuacion
            //comprobar colision
            //movimientoRandom(timer);
            //movimientoRandom2(timer);
            if ($(timer).hittest($(nave))) {
                timer.remove();
                clearInterval(interval);
                window.clearInterval(interval);
                console.log("paro");
                $.ajax({
                    type: "POST",
                    url: "espacio.php",
                    dataType: "json",
                    data: {"espera": "nave"},
                    success: function (respuesta) {
                        console.log(respuesta.nave);
                        setTimeout(time, respuesta.nave);
                    }
                });
            }
        },
        complete: function () {
            timer.remove();
        }
    });
}
function cambiar(){
    
    var snave = Math.floor((Math.random() * 3) + 1);
    console.log("random " + snave);
    $.ajax({
        type: "POST",
        url: "espacio.php",
        dataType: "json",
        data: {"nave": "nave", "random": snave},
        success: function (respuesta) {
            console.log(respuesta.nave);
            $("#subject").attr("src", respuesta.nave);
             nave.remove();
            $("#espai").append(nave);
        }
    });
}