function Team(nombre, victorias, derrotas, game) {
    this.nombre = nombre || "";
    this.victorias = victorias || 0;
    this.derrotas = derrotas || 0;
    this.game = game || "";
    this.players = [];

    this.addPlayer = function (player) {
        this.players.push(player);
    };

    this.getPlayer = function (name) {
        var player = new Player();
        for (var key in this.players) {
            if (this.players[key].nombre == name) {
                return this.players[key];
            }
        }
        return player;
    };

    this.delPlayer = function (nick) {
        for (var key in this.players) {
            if (this.players[key].nick == nick) {
                this.players.splice(key, 1);
            } else {}
        }
    };
    this.getPlayerMax = function () {
        var max = new Player();
        for (var key in this.players) {
            if (max.puntos < this.players[key].puntos) {
                max = this.players[key];
            }
        }
        return max;
    }
}
function Player(nick, nombre, funcion, puntos) {

    this.nick = nick || "";
    this.nombre = nombre || "";
    this.funcion = funcion || "";
    this.puntos = puntos || 0;

    this.updatePlayer = function (nombre, funcion, puntos) {
        console.log("entro");
        if (nombre != "") {
            this.nombre = nombre;
        }
        if (funcion != "") {
            this.funcion = funcion;
        }
        if (puntos != 0) {
            this.puntos = puntos;
        }
        console.log(this);
        return this;
    }
}

var team = new Team("stuprueba", 10, 8, "prueba");
var p = new Player("player", "playeronte", "pivot", 100);
var p2 = new Player("ricard", "ricaronte", "ala", 80);
var p3 = new Player("alex", "alexonte", "base", 43);

team.addPlayer(p);
document.write("nick: " + p.nick);
console.log(p.nick);
document.write("<br>");
document.write("nombre: " + p.nombre);
document.write("<br>");
document.write("funcion: " + p.funcion);
document.write("<br>");
document.write("puntos: " + p.puntos);
document.write("<br>");
team.addPlayer(p2);
document.write("nick: " + p2.nick);
document.write("<br>");
document.write("nombre: " + p2.nombre);
document.write("<br>");
document.write("funcion: " + p2.funcion);
document.write("<br>");
document.write("puntos: " + p2.puntos);
document.write("<br>");
team.addPlayer(p3);
document.write("nick: " + p3.nick);
document.write("<br>");
document.write("nombre: " + p3.nombre);
document.write("<br>");
document.write("funcion: " + p3.funcion);
document.write("<br>");
document.write("puntos: " + p3.puntos);
document.write("<br>");

var p4 = team.getPlayer("ricaronte");
console.log(p4);
document.write("nick: " + p4.nick);
document.write("<br>");
document.write("nombre: " + p4.nombre);
document.write("<br>");
document.write("funcion: " + p4.funcion);
document.write("<br>");
document.write("puntos: " + p4.puntos);
document.write("<br>");


var max = team.getPlayerMax();
document.write("maxPlayer");
document.write("<br>");
document.write("nick: " + max.nick);
document.write("<br>");
document.write("nombre: " + max.nombre);
document.write("<br>");
document.write("funcion: " + max.funcion);
document.write("<br>");
document.write("puntos: " + max.puntos);
document.write("<br>");


max = team.getPlayer("alexonte");
max.updatePlayer("", "", 999);
max = team.getPlayerMax();
document.write("maxPlayerUpdated");
document.write("<br>");
document.write("nick: " + max.nick);
document.write("<br>");
document.write("nombre: " + max.nombre);
document.write("<br>");
document.write("funcion: " + max.funcion);
document.write("<br>");
document.write("puntos: " + max.puntos);
document.write("<br>");


app.service('datos', function () {

    this.teams = [];
    this.teams.push(team);

    this.createTeam = function (nombre, victorias, derrotas, game) {

        var t = new Team(nombre, victorias, derrotas, game);
        this.teams.push(t);
    };
    this.createPlayer = function (nick, nombre, funcion, puntos, team) {

        var p = new Player(nick, nombre, funcion, puntos);
        console.log(p);
        if (team == null) {
            console.log("sin equipo");
        } else {
            var esta = false;
            for (key in this.teams[team].players) {
                if(this.teams[team].players[key].nick == nick){
                    p.updatePlayer(nombre,funcion,puntos);
                    this.teams[team].players[key] = p;
                    esta = true;
                }
            }
            if(esta == false){
                this.teams[team].addPlayer(p);
                console.log("jugador añadido");
            }else{}
        }
    };
    this.delPlayer =  function (nick,team) {
        this.teams[team].delPlayer(nick);
    }

});