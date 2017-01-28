var app = angular.module("myApp", []);

app.controller("control", ["$scope", "datos"
    , function ($scope, datos) {

        datos.createTeam("stucom",12,15,"basquet");

        $scope.algo = "algo";
        $scope.teams = datos.teams;

        $scope.addTeam = function(equipon,equipov,equipod,equipoj){
            datos.addTeam(equipon,equipov,equipod,equipoj);
        }
    }]);
