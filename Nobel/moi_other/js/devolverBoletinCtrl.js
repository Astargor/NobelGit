app.controller('devolverBoletinCtrl', ['$scope','$http','$uibModalInstance','idop','operarop','fechaop','$filter', function($scope,$http,$uibModalInstance,idop,operarop,fechaop,$filter){
	
	  // $scope.setActive("mMetodos");
        
        //recoge en una variable el codigo que nos traemos de la otra pagina
        $scope.ope   = operarop;
        $scope.fecha = fechaop;
        $scope.lineaBol = {};
        var id = idop;
        $scope.motivo = "";

         $http.get('php/servicios/boletin_por_id.php?c=' + id).success(function(data){


        	 	$scope.lineaBol = data;

        	 	


                            },function ( error) {

                              console.error( error);

                            });




        $scope.devolverBoletin = function (motivo){

        	$scope.motivo = motivo;
        	$scope.hoy    = $filter('date')(new Date(),'yyyy-MM-dd');

        	$http({  method: 'get',
                 url: 'php/servicios/insertarLineaBoletin.php', 
              params: {
                      C_Coste: $scope.lineaBol.C_Coste,
                      Descripcion: $scope.lineaBol.Descripcion,
                      Fecha: $scope.lineaBol.Fecha,
                      Horas: $scope.lineaBol.Horas,
          					  ID: $scope.lineaBol.ID,
          					  Nombre: $scope.lineaBol.Nombre,
          					  Operario: $scope.lineaBol.Operario,
          					  Piezas: $scope.lineaBol.Piezas,
          					  Referencia: $scope.lineaBol.Referencia,
          					  Revisado: $scope.lineaBol.Revisado,
          					  Tiempo: $scope.lineaBol.Tiempo,
          					  Turno: $scope.lineaBol.Turno,
          					  Validado: $scope.lineaBol.Validado,
          					  Validado_por: $scope.lineaBol.Validado_por,
          					  zona: $scope.lineaBol.zona_numero,
          					  motivo: $scope.motivo

                  }
                       }).success(function(respuesta) {

                          $http({  method: 'get',
                 url: 'php/servicios/insertar_boletines_rechazados.php', 
                   params: {
                      
                      Fecha: $scope.lineaBol.Fecha,  
                      Operario: $scope.lineaBol.Operario,                  
                      ID: $scope.lineaBol.ID,          
                      Validado_por: $scope.lineaBol.Validado_por,
                      motivo: $scope.motivo,
                      fechaHoy : $scope.hoy 

                  }
                       }).success(function(respuesta) {

                            
                            


                                                  }, function(x) {

                                                       swal("ERROR, NO SE A DEVUELTO EL BOLETIN :(");
                                                       
                                                            });   

                         


                                                  }, function(x) {

                                                      // Request error

                                                      swal("ERROR, NO SE A DEVUELTO EL BOLETIN :(");
        });
           swal("Echo!!", "Boletin Devuelto", "success");
           $uibModalInstance.close('Guardado');          
        
 
        }
    

}]);