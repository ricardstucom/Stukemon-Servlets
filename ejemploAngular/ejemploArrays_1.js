angular.module('ejArrays', [])
        .controller('contrArrays',['$scope', function ($scope) {
                        $scope.usuarios = [{nombre: "Speedy",
                                apellido: "Gonzalez",
                                edad: 33,
                                estudios: ["andele!"]
                            }];
                    }]);



var usuarios = new Array();
var usu = new Array();
usu["nombre"] = "Juan";
usu["apellido"] = "Sense por";
usu.edad = 33;
usu["estudios"] = [];
usuarios[1] = usu;

var usuarios = [{nombre: "Speedy",
        apellido: "Gonzalez",
        edad: 33,
        estudios: ["andele!"]
    }];


var usuario = usuarios[0];
document.write('<br />Edad: ' + usuario.edad);
document.write('<br />Nombre Usuario: ');
document.write(usuario.nombre);
document.write('<br />Apellido: ');
document.write(usuario.apellido);
usuario.estudios.push("mecanica");

var estudio1 = usuario.estudios[0];
document.write('<br />Estudio1: ');
document.write(estudio1);



