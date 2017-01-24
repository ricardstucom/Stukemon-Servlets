var coche = new Coche();
$(document).ready(start);
var extras = ["ABS", "cierre centralizado", "parabrisas", "rueda", "radio"];
function Coche() {
    this.modelo = "";
    this.precio = "";
    this.extras = [];

    this.addExtras = function (extra) {

        this.extras.push(extra);
        console.log(this.extras);
        var pos = this.extras.length - 1;
        console.log(pos);
        return parseFloat(pos);
        /* console.log("Elige tu extra");
         for(var key in extras){
         console.log(extras[key]);
         }
         return window.prompt("introduce el extra");*/
    };
    this.getExtras = function (pos) {

        console.log(this.extras[pos]);
        return this.extras[pos];
    };
}
function Concesionario() {
    this.nombre = "";
    this.direccion = "";
    this.pedido = [];

    this.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    this.setDireccion = function (dire) {
        this.direccion = dire;
    };
    this.addCoche = function (coche) {
        this.pedido.push(coche);
        var pos = this.pedido.length - 1;
        return pos;
    };
}

coche.modelo = "Fantastico";
coche.precio = "70000€";

var concesionario = new Concesionario();
concesionario.setNombre("Mario Kart");
concesionario.setDireccion("c/Mushroom Kingdom 1");

document.write('<br />Nompre Coche: ');
document.write(coche.modelo);
document.write('<br />Precio: ');
document.write(coche.precio);
var numExtra = coche.addExtras("Airbag");
var extra = coche.getExtras(numExtra);
document.write('<br />Extra: ');
document.write(extra);

var posicionComanda = concesionario.addCoche(coche);

document.write('<br />Nombre Concesionario: ');
document.write(concesionario.nombre);
document.write('<br />Direccion: ');
document.write(concesionario.direccion);
document.write('<br /> Nombre coche: ');
document.write(concesionario.pedido[posicionComanda].modelo);
document.write('<br /> Nombre extra: ');
document.write(concesionario.pedido[posicionComanda].extras[numExtra]);


/*************************************************************************************/

var concesionario2 = new Concesionario();
var coche2 = new Coche();
var coche3 = new Coche();
var coche4 = new Coche();
var coche5 = new Coche();

concesionario2.setNombre("Stumotor");
concesionario2.setDireccion("C/ pelay");

coche2.modelo = "algo";
coche2.precio = "100€";

for (var key = 0; key < 4; key++) {
    var len = extras.length - 1;
    var ran = Math.floor((Math.random() * len) + 0);
    console.log(extras[ran]);
    coche2.extras.push(extras[ran]);
}
;

coche3.modelo = "ferrari";
coche3.precio = "40043€";

for (var key = 0; key < 4; key++) {
    var len = extras.length - 1;
    var ran = Math.floor((Math.random() * len) + 0);
    coche3.extras.push(extras[ran]);
}
;

coche4.modelo = "stucomobil";
coche4.precio = "560€";

for (var key = 0; key < 4; key++) {
    var len = extras.length - 1;
    var ran = Math.floor((Math.random() * len) + 0);
    coche4.extras.push(extras[ran]);
}
;

coche5.modelo = "kk";
coche5.precio = "800€";

for (var key = 0; key < 4; key++) {
    var len = extras.length - 1;
    var ran = Math.floor((Math.random() * len) + 0);
    console.log(ran);
    coche5.extras.push(extras[ran]);
}
;

concesionario2.addCoche(coche2);
concesionario2.addCoche(coche3);
concesionario2.addCoche(coche4);
concesionario2.addCoche(coche5);

console.log(coche2);

function start() {
    for (key in concesionario2.pedido) {
        /*
         $("#base").append("<div class='row'>");
         $("#base").append("<div class='col-xs-1'>");
         $("#base").append(key+1);
         console.log(concesionario2.pedido[key].modelo);
         $("#base").append("</div>");
         $("#base").append("<div class='col-xs-3'>");
         $("#base").append(concesionario2.pedido[key].modelo);
         $("#base").append("</div>");
         $("#base").append("<div class='col-xs-3'>");
         $("#base").append(concesionario2.pedido[key].precio);
         $("#base").append("</div>");
         $("#base").append("<div class='col-xs-5'>");
         for(key in concesionario2.pedido[key].extras){
         $("#base").append("-"+concesionario2.pedido[key].extras[key]);
         $("#base").append("</br>");
         }
         $("#base").append("</div>");
         $("#base").append("</div>");
         */
        /*
         $("#base").html("<div class='row'>");
         $("#base").html("<div class='col-xs-1'>");
         $("#base").html(key+1);
         console.log(concesionario2.pedido[key].modelo);
         $("#base").html("</div>");
         $("#base").html("<div class='col-xs-3'>");
         $("#base").html(concesionario2.pedido[key].modelo);
         $("#base").html("</div>");
         $("#base").html("<div class='col-xs-3'>");
         $("#base").html(concesionario2.pedido[key].precio);
         $("#base").html("</div>");
         $("#base").html("<div class='col-xs-5'>");
         for(key in concesionario2.pedido[key].extras){
         $("#base").html("-"+concesionario2.pedido[key].extras[key]);
         $("#base").html("</br>");
         }
         $("#base").html("</div>");
         $("#base").html("</div>");
         */
        var txt = "<div class='row'>";
        txt += "<div class='col-xs-1'>";
        txt += (key + 1);
        console.log(concesionario2.pedido[key].modelo);
        txt += "</div>";
        txt += "<div class='col-xs-3'>";
        txt += concesionario2.pedido[key].modelo;
        txt += "</div>";
        txt += "<div class='col-xs-3'>";
        txt += concesionario2.pedido[key].precio;
        txt += "</div>";
        txt += "<div class='col-xs-5'>";
        for (key in concesionario2.pedido[key].extras) {
            txt += "-" + concesionario2.pedido[key].extras[key];
            txt += "</br>";
        }
        txt += "</div>";
        txt += "</div>";
        $("#base").append(txt);
    }
}