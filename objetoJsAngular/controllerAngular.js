var app = angular.module("myApp", []);

app.controller("control", ["$scope", "datos"
            , function ($scope, datos) {

                $scope.conSelec;
                $scope.concesionarios = datos.concesionarios;
                
                $scope.title = "algo";
                
                datos.createConcesionario("Mario kart", "mushroom kingdom");
                datos.addCar(0, "stucar", "3562", "cristian");

                datos.createConcesionario("concesionario", "Mushroom Street");
                datos.addCar(0, "Stutcar", "3562", "ford");
                datos.addCar(0, "AngulCar", "73627", "ferrari");

                datos.createConcesionario("StutKart", "Pelayo Street");
                datos.addCar(1, "DAWCAR", "234262", "maserati");
                datos.addCar(1, "Daw2CarPLusTurboOxiaction", "73627", "martini");
                
                $scope.addCar = function(){
                    datos.addCar($scope.conSelect,$scope.inputnc,$scope.inputpc,$scope.inputmc);
                };
            }]);