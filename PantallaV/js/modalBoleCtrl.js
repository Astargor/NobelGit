app.controller('modalBoleCtrl', ['$scope','$http','$uibModalInstance','id_bol', function($scope,$http,$uibModalInstance,id_bol){

    $scope.id_bol  = id_bol;
    
    $scope.boletin = {};

 
     /**
     * Cargamos los datos del boletin
     */
     $http.get('php/servicios/modalBole.php?c=' + $scope.id_bol).success(function(data){

        if(data.err != undefined){

            window.location = "#/boletin";
            return;

        }else{

         $scope.boletin = data;

			}


        });

     /**
     *  Funcion para modificar datos
     */

     $scope.actualizar = function (coste) {

      $http.get('php/servicios/traerCoste.php?c=' + coste).success(function(data){

        if(data.err != undefined){

            window.location = "#/boletin";
            return;

        }else{


         console.log(data.cc_Descripcion);
         $scope.boletin.bol_cc_descrip = data.cc_Descripcion;

      }


        });



     }

     /**
     *  Funcion para guardar datos
     */


      $scope.modificarBoletin = function (boletin) {


    	 $http({  method: 'get',
                 url: 'php/servicios/updateBoletin.php', 
              params: {   
                          id: boletin.id_boletines,
                          refe: boletin.bol_refere,
                          horas: boletin.bol_horas, 
                          piezas: boletin.bol_piezas, 
                          tiempo: boletin.bol_tiempo_op,
                          coste: boletin.bol_c_coste,
                          descrip: boletin.bol_cc_descrip

                      }}).success(function(respuesta) {

                                                    

                                                      $uibModalInstance.close('Guardado');

                                                     


                                                  }, function(x) {


                                                    console.log('No se puede actualizar');
                                                      // Request error
        });
    
    }


                      

   

}]);