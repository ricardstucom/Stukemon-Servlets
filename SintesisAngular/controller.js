var app = angular.module("myApp", []);

app.controller("control", ["$scope", "datos"
    , function ($scope, datos) {

        datos.createTeam("stucom",12,15,"basquet");
    }]);
