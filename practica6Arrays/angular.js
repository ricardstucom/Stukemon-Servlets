angular.module('arrays', [])
        .controller('contrarrays', ['$scope', function ($scope) {
                $scope.arrayNumeros = [4, 5, 4, 7, 8];
                var primero;
                var ultimo;
                $scope.operaciones = [];

                $scope.ejercicio1 = function () {
                    $scope.primero = $scope.arrayNumeros[0];
                    $scope.ultimo = $scope.arrayNumeros[$scope.arrayNumeros.length - 1];
                };
                $scope.ejercicio2 = function () {
                    var numero;
                    do {
                        numero = (window.prompt("Escribe un numero"));
                    } while (isNaN(numero) || numero == null || numero == "");
                    $scope.arrayNumeros.push(numero);
                };
                $scope.ejercicio3 = function(){
                    var numero;
                    do {
                        numero = (window.prompt("Escribe un numero"));
                    } while (isNaN(numero) || numero == null || numero == "");
                    $scope.arrayNumeros.unshift(numero);
                };
                $scope.ejercicio4 = function(){
                    $scope.arrayNumeros.pop();
                };
                $scope.ejercicio5 = function(){
                    $scope.arrayNumeros.shift();
                };
                $scope.ejercicio6 = function () {
                    $scope.operaciones =[];
                    var op;
                    do {
                        op = (window.prompt("Escribe el signo de operación: +/-/*"));
                    } while (!isNaN(op) || op == null || op == "");
                    /*var texto=$scope.arrayNumeros[0];
                    texto+=op+$scope.arrayNumeros[1];
                    var resul= eval(texto); */
                    for(var key = 0;key < $scope.arrayNumeros.length-1;key++){
                        var key2 = parseFloat(key)+1;
                        $scope.operaciones.push(eval($scope.arrayNumeros[key]+op+$scope.arrayNumeros[key2]));
                    }
                    /*if(op == "+"){
                        for(var key = 0;key < $scope.arrayNumeros.length-1;key++){
                            var key2 = parseFloat(key)+1;
                            $scope.operaciones.push($scope.arrayNumeros[key] + $scope.arrayNumeros[key2]);
                        }
                    }
                    if(op == "-"){
                        for(var key = 0;key < $scope.arrayNumeros.length-1;key++){
                            var key2 = parseFloat(key)+1;
                            $scope.operaciones.push($scope.arrayNumeros[key] - $scope.arrayNumeros[key2]);
                        }
                    }
                    if(op == "/"){
                        for(var key = 0;key < $scope.arrayNumeros.length-1;key++){
                            var key2 = parseFloat(key)+1;
                            $scope.operaciones.push($scope.arrayNumeros[key] / $scope.arrayNumeros[key2]);
                        }
                    }
                    if(op == "*"){
                       for(var key = 0;key < $scope.arrayNumeros.length-1;key++){
                            var key2 = parseFloat(key)+1;
                            $scope.operaciones.push($scope.arrayNumeros[key] * $scope.arrayNumeros[key2]);
                        } 
                    }*/
                };
                $scope.function7 = function(){
                    var numero;
                    do {
                        numero = (window.prompt("Escribe un numero"));
                    } while (isNaN(numero) || numero == null || numero == "");
                    $scope.arrayNumeros.splice(numero,1);
                };
                $scope.ejercicio8 = function(){
                    var numero;
                    do {
                        numero = (window.prompt("Escribe un numero"));
                    } while (isNaN(numero) || numero == null || numero == "");
                    for (var key = $scope.arrayNumeros.length - 1; key >= 0; key--) {
                        if (numero == $scope.arrayNumeros[key]) {
                            $scope.arrayNumeros.splice(key, 1);
                        }
                    }
                }; 
            }]);