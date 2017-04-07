app.controller('boletinSemanalCtrl', ['$scope','$http','$q','$rootScope', function($scope,$http,$q,$rootScope){
	
	    $scope.setActive("mSupervisor");


      $scope.listaDias = [];


      $scope.anadirDia = function(boletin){


 		$scope.listaDias.push({ 
 				coste: boletin.coste, 
 				turno: boletin.turno,
 				dia: boletin.dia 
 			});


      }

      $scope.borrarDia = function(index){
      	

      	$scope.listaDias.splice( index, 1 );

      }

      $scope.terminarBoletin = function() {

      $scope.contador = "";

      angular.forEach($scope.listaDias,function(value, key){	

      	$http({  method: 'get',

            url: 'php/servicios/boletinSemanal.php', 

            params: {

            coste: value.coste,
			turno: value.turno,
			fecha : value.dia

            }}).success(function(respuesta) {


            $scope.contador = $scope.contador + 1;
               


             
            }, function(x) {

             });

                


        });
         $scope.contador = $scope.contador + 1;

     		 console.log($scope.contador);

		       	if($scope.contador > 0){

		       		swal("Correcto!", "Boletines Insertados!", "success");

		       		$scope.listaDias = {};

		       	}
 

      }


}]);