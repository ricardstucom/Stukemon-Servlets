var miCine = new Cine();
console.log(miCine.nombre_pelicula);

miCine.change_nombre("Mortadelo y Filemon");
console.log(miCine.nombre_pelicula);

miCine.aforo=100;
miCine.getAforo=function(){
   console.log(this.aforo);
};


miCine.getAforo();

function Cine(nombre_pelicula){
   this.nombre_pelicula = nombre_pelicula || "Avengers";
   this.numClientes;
   this.sillas = [];
   
   this.change_nombre = function(peli){
       this.nombre_pelicula = peli;
        pideValor(); 
   };
   
   this.addCliente=function(cliente,silla){
       //asignamos la silla al cliente
       this.sillas[silla] = cliente;
   };
   
   
   function pideValor(){
       return window.prompt("introduce un valor");
   }
}


function Cliente(){
   this.edad;
   this.nombre;
}