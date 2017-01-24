var arrayNumeros = new Array();
arrayNumeros[0] = 4;
arrayNumeros[1] = 2;
arrayNumeros[2] = 9;
arrayNumeros[3] = 0;
arrayNumeros[4] = 5;
arrayNumeros[5] = 7;
var div = $("<div></div>");
$(document).ready(start);

function start(){
    divs();
    $("#pyu").click(pyu);
    $("#añadirb").click(añadir);
    $("#añadirbp").click(añadirp);
    $("#eliminaru").click(eliminaru);
    $("#eliminarp").click(eliminarp);
    $("#operacion").click(operacion);
    $("#posicion").click(borrarp);
    $("#numero").click(borrarn);
}
function divs(){
    for(var key in arrayNumeros){
        $("#arrays").append("<div>" + arrayNumeros[key] + "</div>");
    }
}
function pyu(){
    $("#dpyu").prepend("<div>" + arrayNumeros[arrayNumeros.length-1] + "</div>");
    $("#dpyu").prepend("<div>" + arrayNumeros[0] + "</div>"); 
}
function añadir(){
    arrayNumeros[arrayNumeros.length] = $("#añadir").val();
    $("#arrays").html("");
    for(var key in arrayNumeros){
        $("#arrays").append("<div>" + arrayNumeros[key] + "</div>");
    }
}
function añadirp(){
    arrayNumeros.unshift($("#añadirp").val());
    $("#arrays").html("");
    for(var key in arrayNumeros){
        $("#arrays").append("<div>" + arrayNumeros[key] + "</div>");
    }
}
function eliminarp(){
     arrayNumeros.shift();
     $("#arrays").html("");
    for(var key in arrayNumeros){
        $("#arrays").append("<div>" + arrayNumeros[key] + "</div>");
    }
}
function eliminaru(){
   arrayNumeros.pop();
     $("#arrays").html("");
    for(var key in arrayNumeros){
        $("#arrays").append("<div>" + arrayNumeros[key] + "</div>");
    }
}
function operacion() {
    if ($("#operador").val() == "+") {
        for (var key in arrayNumeros) {
            var key2 = parseFloat(key)+1;
            var suma = arrayNumeros[key] + arrayNumeros[key2];
            $("#operaciones").append("<div>" + suma + "</div>");
        }
        $("#operaciones").append("<br>");
    }
    if ($("#operador").val() == "-") {
        for (var key in arrayNumeros) {
            
            var key2 = parseFloat(key)+1;
            $("#operaciones").append("<div>" + (arrayNumeros[key] - arrayNumeros[key2]) + "</div>");
        }
        $("#operaciones").append("<br>");
    }
    if ($("#operador").val() == "*") {
        for (var key in arrayNumeros) {
            var key2 = parseFloat(key)+1;
            $("#operaciones").append("<div>" + (arrayNumeros[key] * arrayNumeros[key2]) + "</div>");
            if(key2 == arrayNumeros.length-1){
                key2 = key2-1;
            }
        }
        $("#operaciones").append("<br>");
    }
    if ($("#operador").val() == "/") {
        for (var key in arrayNumeros) {
            var key2 = parseFloat(key)+1;
            $("#operaciones").append("<div>" + (arrayNumeros[key] / arrayNumeros[key2]) + "</div>");
        }
        $("#operaciones").append("<br>");
    }
}
function borrarp() {
    arrayNumeros.splice($("#bposicion").val() - 1,1);
    $("#arrays").html("");
    for (var key = arrayNumeros.length-1; key >= 0 ; key--) {
        $("#arrays").append("<div>" + arrayNumeros[key] + "</div>");
    }
}
function borrarn() {
    
    for (var key = arrayNumeros.length-1; key >= 0 ; key--) {
        if($("#bnumero").val() == arrayNumeros[key]){
            arrayNumeros.splice(key,1);
        }
    }
    $("#arrays").html("");
    for (var key in arrayNumeros) {
        $("#arrays").append("<div>" + arrayNumeros[key] + "</div>");
    }
}