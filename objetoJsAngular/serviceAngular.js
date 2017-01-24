function Coche(modelo, precio, marca) {
    this.modelo = "";
    this.precio = 0;
    this.marca = "";
}
function Concesionario() {
    this.nombre = "";
    this.direccion = "";
    this.pedido = [];

    this.addCoche = function (coche) {
        this.pedido.push(coche);
        var pos = this.pedido.length - 1;
        return pos;
    };
}
app.service('datos', function () {
    
    this.concesionarios = [];

    this.createConcesionario = function (nombre, direccion) {

        var concesionario = new Concesionario();

        concesionario.nombre = nombre;
        concesionario.direccion = direccion;

        this.concesionarios.push(concesionario);
    };

    this.addCar = function (numC,modelo,precio,marca) {
        
        var coche = new Coche(modelo,precio,marca);
        
        coche.modelo = modelo;
        coche.precio = precio;
        coche.marca = marca;
        
        var c = this.concesionarios[numC];

        c.addCoche(coche);
    };
});
/*app.service(
 'concesionario', function () {
 
 
 
 },
 'coche', function () {
 
 this.modelo = "";
 this.precio = "";
 this.extras = [];
 
 this.addExtras = function (extra) {
 
 this.extras.push(extra);
 console.log(this.extras);
 var pos = this.extras.length - 1;
 console.log(pos);
 return parseFloat(pos);
 };
 this.getExtras = function (pos) {
 
 console.log(this.extras[pos]);
 return this.extras[pos];
 };
 }
 );*/