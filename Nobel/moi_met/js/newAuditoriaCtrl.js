app.controller('newAuditoriaCtrl', ['$scope','$http','$filter','turnoFactory','fechaFactory', function($scope,$http,$filter,turnoFactory,fechaFactory){


$scope.turno = turnoFactory;
$scope.hora   = $filter('date')(new Date(),'HH:mm');
$scope.hoy= fechaFactory;
$scope.usuario;
$scope.Auditorias = [];
$scope.listaReferencias =[];
$scope.listaOpe = [];
$scope.listaLider = [];
$scope.listaSuper = [];
//traemos todos las referencias
 $http.get('php/servicios/referencias.php').success(function(data){

        $scope.listaReferencias = data;



      });

  //traemos todos los operarios

 $http.get('php/servicios/codigoOperarios.php').success(function(data){

     $scope.listaOpe = data;
      //Sacamos los lideres
     for (var i = 0; i < data.length; i++) {

          if(data[i].Rol == "lidervapor" || data[i].Rol == "liderfac"){

             $scope.listaLider.push(data[i]);

          }else if(data[i].Rol == "super"){

            $scope.listaSuper.push(data[i]);

          }
      
     }

     console.log( $scope.listaLider);
 });





//Funcion para obtener el auditor que ha iniciado sesion
 $scope.usuario = function(){


 $http.get('php/servicios/obtenerSesion.php').success(function(data){

     $scope.usuario = data;
   

});



}

    $scope.usuario();
    //$scope.turno();
}]);
