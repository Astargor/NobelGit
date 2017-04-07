 $scope.devolver = function(Operario,id,fecha){
          $scope.operarioDev = Operario;
          $scope.ID = id;
          $scope.deFecha = fecha;


         

                var modalInstance = $uibModal.open({
                animation: true,
                //backdrop: 'static',
                templateUrl: 'parciales/devolverBoletin.html',
                controller: 'devolverBoletinCtrl',
                size: 'lg',
                
                resolve: {
                  idop: function () {return $scope.ID;},
                  operarop: function () {return $scope.operarioDev;},
                  fechaop: function () {return $scope.deFecha;}
              }
                
                
          });
               modalInstance.result.then(function (changed_threshold){
                $scope.threshold = changed_threshold;
                
           });

         }
        



          $scope.open = function(ID){

                $scope.IdBole = ID;
                var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'parciales/modificarBoletin.html',
                controller: 'modificarBoletinCtrl',
                //windowClass: 'app-modal-window',
                size: 'lg',
                
                resolve: {
                  id_boletin: function () {return $scope.IdBole;}
              }
                
                
          });
               modalInstance.result.then(function (changed_threshold){
                $scope.threshold = changed_threshold;
                
           });
               //console.log($scope.IdBole);
       };
           
           $scope.condicional = function(ren){





           }
       


         //calcula la cantidad de boletines pendientes
        $http.get('php/servicios/cantidaBoletines.php').success(function(data){

        	

        if(data.err != undefined){


            window.location = "#/revision_bole_metodos";
            return;

        }

         $scope.cantidadBole = data;

        });

        




        $scope.usu = function(){

          $scope.animacion = "";
           
           $http.get('php/servicios/actualizarBoletinEntero.php?c=' + $scope.SelecOper[0].Operario).success(function(data){



                 //cargamos la lista de operarios
                           $rootScope.promise = self.cargarData();

                            $rootScope.promise.then(

                              function( data){

                                $scope.cargando = false;

                                $scope.operario = data;

                                $scope.mensaje ="Boletin Validado; Escoja y Carge otro";

                                $scope.animacion = "flash";

                            },function ( error) {

                              console.error( error);

                            });

                         /*  $http.get('php/servicios/operariosConboletinpendienterevision.php').success(function(data){

                           $scope.operario = data;
                          $scope.mensaje ="Boletin Validado; Escoja y Carge otro";
                          $scope.animacion = "flash";*/


                         //  });

                          


                           //calcula la cantidad de boletines pendientes
                          $http.get('php/servicios/cantidaBoletines.php').success(function(data){

                            

                          if(data.err != undefined){


                              window.location = "#/revision_bole_metodos";
                              return;

                          }

                           $scope.cantidadBole = data;

                          });



                        


                      });

        

        }


        $scope.traerBole = function(){


         
        $scope.mensaje = "";

         var valor = $scope.SelecOper[0].Operario;
         
         //console.log(valor);

         


         $http({  method: 'get',
                 url: 'php/servicios/traerBolePendiente.php', 
              params: {
                      opera: valor}
                       }).success(function(respuesta) {


                                                    $scope.boletin = respuesta;

                                                    $scope.nombre = $scope.boletin[0].Nombre + " " + $scope.boletin[0].Apellido1;





                                                  }, function(x) {

                                                      // Request error
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