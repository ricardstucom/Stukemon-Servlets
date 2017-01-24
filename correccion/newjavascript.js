var app = angular.module('myApp', []); 

app.controller('controlador',['$scope',function($scope){
    $scope.lista=[1,2,3,5,2];
    $scope.addNumFinal = function(){
      $scope.lista.push($scope.numero);
    };
    $scope.addNumIni = function(){
        $scope.lista.unshift($scope.numero);
    };
    $scope.delLastNum=function(){
        $scope.lista.pop();
    };
     $scope.delFirstNum=function(){
        $scope.lista.shift();
    };
    $scope.calculaOper= function(){
        var operaciones="";
      for(var k=0; k < $scope.lista.length-1; k++)  {
          operaciones+=$scope.lista[k]+$scope.oper;
      }
      operaciones+=$scope.lista[k];
      
      console.log(operaciones);
      console.log( eval(operaciones));
        $scope.resulOper = eval(operaciones);
      
    };
        
        
}]);


