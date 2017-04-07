app.controller('validarBoletinesCtrl', ['$scope','$http','$routeParams','$uibModal','$filter', function($scope,$http,$routeParams,$uibModal,$filter){
	
	    $scope.setActive("mSupervisor");

	    //Scopes

	    $scope.totalBole = 0;
	    $scope.turnos = "";
	    $scope.operario = "";
	    $scope.mensaje2 = "";
	    $scope.animacion = "";
      $scope.nombreOp = "";

	    //cantidad de boletines pendientes

        $http.get('php/servicios/boletinesNoValidados.php').success(function(data){

        if(data.err != undefined){

        	window.location = "#/supervisor";
        	return;

        }

         $scope.totalBole = data.cuenta;

		});

		//traemos los boletines segun turno

		$scope.traerBoletinesTurno = function (turno){

             $scope.turnos = turno.turno;
             
			 $http.get('php/servicios/traerboletinesNovalidados.php?c=' + $scope.turnos).success(function(data){

                     $scope.pendientes = data;


		    });
		}

        //traemos el boletin seleccionado
       $scope.traerBoletin = function (operario){

       	 $scope.mensaje2 = "";
       	 $scope.animacion = "";
          
          $scope.operario = operario;

       	 $http({  method: 'get',
                 url: 'php/servicios/consultaBoletinPendiente.php', 
              params: {
                      operario: operario, 
                      turno: $scope.turnos 
                     }
                       }).success(function(respuesta) {

                                                    $scope.boletin = respuesta;
                                                    $scope.boletin.Fecha = $filter('date')($scope.boletin.Fecha,'dd-MM-yyyy');
                                                    $scope.nombreOp = $scope.boletin[0].Nombre + " " + $scope.boletin[0].Apellido1;
                                                    
                                                    
                                                
                                                  }, function(x) {
                                                      // Request error
        });



       }

       //validamos el boletin seleccionado y actualizamos todo excepto la tabla, por si a cometido un error

       $scope.validarBoletin = function (){
    	

       	$http({  method: 'get',
                 url: 'php/servicios/validarBoletin.php', 
              params: {
                      operario: $scope.operario, 
                      turno: $scope.turnos 
                     }
                       }).success(function(data) {

                                                    
                                                   $scope.mensaje2 = " Validados , escoja otro";
                                                   $scope.animacion = "flash";

                                                   $http.get('php/servicios/traerboletinesNovalidados.php?c=' + $scope.turnos).success(function(data){

											          $scope.pendientes = data;

													    });

														  $http.get('php/servicios/boletinesNoValidados.php').success(function(data){

											        if(data.err != undefined){

											        	window.location = "#/supervisor";
											        	return;

											        }

											         $scope.totalBole = data.cuenta;

													});




                                                
                                                  }, function(x) {

                                                  	console.log("ERROR");
                                                      // Request error
        });

          
         
             
		

       }


       //modificamos el boletin si en necesario


       $scope.Mofidicar = function(ID){

       	 
         $scope.operarioDev = ID;

                var modalInstance = $uibModal.open({
                animation: true,
                //backdrop: 'static',
                templateUrl: 'parciales/modalVerificar.html',
                controller: 'modalModificarCtrl',
                size: 'lg',
                
                resolve: {
                  idbole: function () {return $scope.operarioDev;}
              }
                
                
          });
               modalInstance.result.then(function (changed_threshold){
                $scope.threshold = changed_threshold;
                
           });

         }

         $scope.totalHoras = function(){

              var sum = 0;


         //  console.log($scope.boletin);

              angular.forEach($scope.boletin ,function(value, key){

                    sum = sum + parseFloat(value.Horas);
                    
                    
                }); 

              
              return sum;


          }
		
		

}]);