app.controller('modificarBoletinCtrl', ['$scope','$http','$uibModalInstance','id_boletin', function($scope,$http,$uibModalInstance,id_boletin){
	
	  // $scope.setActive("mMetodos");
        
        //recoge en una variable el codigo que nos traemos de la otra pagina
        $scope.id_boletin = id_boletin;
 
       // var id = $routeParams.ID;

        var ide = $scope.id_boletin;

        $scope.boletin={};

        //cargamos el boletin en el scope

        $http.get('php/servicios/boletin_por_id.php?c=' + ide).success(function(data){

        if(data.err != undefined){

            window.location = "#/revision_bole_metodos";
            return;

        }

         $scope.boletin = data;



        });

        
         $scope.ok = function () {

           $scope.boletin.Rendimentos = ($scope.boletin.Piezas * $scope.boletin.Tiempo) / $scope.boletin.Horas;

            
           


          };

         /* $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };*/



         
         //guardamos la modificacion
        
   

       $scope.modificarBoletin = function(){

        

            $http({  method: 'get',
                 url: 'php/servicios/updateBoletin.php', 
              params: {
                          id_boletin: $scope.id_boletin,
                          fecha: $scope.boletin.Fecha, 
                          operario: $scope.boletin.Operario, 
                          referencia: $scope.boletin.Referencia,
                          horas: $scope.boletin.Horas,
                          piezas: $scope.boletin.Piezas,
                          tiempo: $scope.boletin.Tiempo,
                          coste: $scope.boletin.C_Coste,
                          descripcion: $scope.boletin.Descripcion

                      }}).success(function(respuesta) {

                                                    

                                                      $uibModalInstance.close('Guardado');

                                                     


                                                  }, function(x) {


                                                    console.log('No se puede');
                                                      // Request error
        });




       }
   

}]);