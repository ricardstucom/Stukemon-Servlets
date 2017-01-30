var app = angular.module("myApp", []);

app.controller("control", ["$scope", "datos"
    , function ($scope, datos) {

        datos.createTeam("stucom",12,15,"basquet");

        $scope.algo = "algo";
        $scope.teams = datos.teams;

        $scope.addTeam = function(){
            datos.createTeam($scope.equipon,$scope.equipov,$scope.equipod,$scope.equipoj);
        }
        $scope.changePlayer = function(){
            //TODO update no va
            datos.createPlayer($scope.jugadorni, $scope.jugadorn, $scope.jugadorf, $scope.jugadorp,$scope.selected);
        }
        $scope.borrar = function (nick,selected) {
            datos.delPlayer(nick,selected);
        }
        $scope.rellenar = function (index,team) {
            var p = $scope.teams[team].players[index];

            $scope.jugadorn = p.nombre;
            $scope.jugadorni = p.nick;
            $scope.jugadorp = p.puntos;
            $scope.jugadorf = p.funcion;
        }


        $scope.ordenar = function(objeto){
            $scope.orden = false;
            $scope.objeto = objeto;

            if($scope.objeto == true){
                $scope.orden = false;
            }else{
                $scope.orden = true;
            }
        }
    }]);
