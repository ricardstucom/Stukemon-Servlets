var app = angular.module('myApp', []);
app.controller('nomControlador', ['$scope','miFactory',
    function ($scope,miFactory) {
        $scope.dishes1 =miFactory.getDishes();
        
        $scope.parInt=function(num){
            return parseInt(num);
        };
        $scope.setBackgr=function(){
            $scope.nomStyle="background-color";
        }
    }]);