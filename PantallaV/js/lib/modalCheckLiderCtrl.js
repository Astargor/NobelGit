app.controller('modalCheckLiderCtrl', ['$scope','$http','$uibModalInstance','umusada','refe','$filter', function($scope,$http,$uibModalInstance,umusada,refe,$filter){
  
  $scope.um = umusada;
  $scope.referencia = refe;
  $scope.check = {};
  $scope.fecha = new Date();

  $scope.registrarCheck = function () {

  	

    $scope.fecha = new Date();

    var hoy = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');

    $http({  method: 'get',
                 url: 'php/servicios/checklist.php', 
              params: {
                          operario: $scope.operario, 
                          pass: $scope.password,
                          

                      }}).success(function(respuesta) {


                                                    
                                                      swal("OK", "CHECK LIST VALIDADO", "success");
                                                      $uibModalInstance.close('Guardado');




                                                     


                                                  }, function(x) {


                                                    console.log('No se puede');
                                                      // Request error
        });


    

  	}else{

  		swal("Operario no valido, Por favor introduzca su número de operário correcto");

  	}

  	
  	

   



  }
   
	

   

}]);