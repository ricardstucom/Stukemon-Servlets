function team(nombre,victorias,derrotas,game) {
    this.nombre = "";
    this.victorias = 0;
    this.derrotas = 0;
    this.game = "";
    this.players = [];

    this.addPlayer = function(player){
        players[jugador.name] = jugador;
    }

    this.getPlayer = function(name){

        return this.players[name];
    }

    this.delPlayer = function(name){
        this.players.splice(name,1);
    }
    this.getPlayerMax = function(){
        var max = new Player;
        for(key in this.players){
            if(max.puntos < key.puntos){
                max = key;
            }
        }
    }
}
function player(nick,nombre,funcion,puntos) {

    this.nick = "";
    this.nombre = "";
    this.funcion = "";
    this.puntos = 0;

    this.updatePlayer = function(nombre,funcion,puntos){
        if(nombre != ""){
            this.nombre = nombre;
        }
        if(funcion != ""){
            this.funcion = funcion;
        }
        if(puntos != 0){
            this.puntos = puntos;
        }
    }
}