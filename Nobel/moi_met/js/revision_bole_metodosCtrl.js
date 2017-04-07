app.controller('revision_bole_metodosCtrl', ['$scope','$http','$routeParams','$uibModal','$q','$rootScope', function($scope,$http,$routeParams,$uibModal,$q,$rootScope){
	
	   // $scope.setActive("mMetodos");

     
      $scope.cantidadBole = {};
      $scope.boletin = {};
      $scope.operario = {};
      $scope.formData = {};
      $scope.SelecOper = [];
      $scope.mensaje = "";
      $scope.colorTabla = "fondoTabla";
      $scope.animacion = "";
      var variable = 0;
      var operario = "";
      $scope.nombre = "";
      $scope.cantidadBoletines = 1;

//CARGAMOS BOLETINES

  self.cargarData = function() {

  $scope.cargando = true; 

  var q = $q.defer();

         $http.get('php/servicios/operariosConboletinpendienterevision.php')
          .then(function success( respuesta ){



            q.resolve( respuesta.data);

          },

          function error (response){

               

               console.log( " :( ");

               $scope.cargando = false; 

               q.reject("Error");


          });


          return q.promise;



  };

        $rootScope.promise = self.cargarData();

        $rootScope.promise.then(

          function( data){

            $scope.cargando = false;

            $scope.operario = data;

            operario = $scope.operario[0].Operario;

             $scope.traerBoleAuto ( operario );

        },function ( error) {

          console.error( error);


        });

          //calcula la cantidad de boletines pendientes
                          $http.get('php/servicios/cantidaBoletines.php').success(function(data){

                            

                          if(data.err != undefined){


                              window.location = "#/revision_bole_metodos";
                              return;

                          }

                           $scope.cantidadBole = data;

                          })





//FUNCION PARA TRAER BOLETINES

           
  $scope.traerBoleAuto = function(ope){
      
        $scope.mensaje = "";

         $http({  method: 'get',
                 url: 'php/servicios/traerBolePendiente.php', 
              params: {
                      opera: ope}
                       }).success(function(respuesta) {

                                                    $scope.boletin = respuesta;

                                                    $scope.nombre = $scope.boletin[0].Nombre + " " + $scope.boletin[0].Apellido1;

                                                  }, function(x) {

                                                      // Request error
        });
            

        }
//VALIDAR EL BOLETIN CARGADO AUTOMATICAMENTE

 $scope.validarBoletin = function(){

  $scope.validarBoletinFuncion(operario);


 }

  

  //TRAEMOS BOLETIN SI SELECCIONAMOS OPERARIO DE FORMA MANUAL

  $scope.traerBole = function(){
       
        $scope.mensaje = "";

         var valor = $scope.SelecOper[0].Operario;

         $http({  method: 'get',
                 url: 'php/servicios/traerBolePendiente.php', 
              params: {
                      opera: valor}
                       }).success(function(respuesta) {


                                                    $scope.boletin = respuesta;

                                                    $scope.nombre = $scope.boletin[0].Nombre + " " + $scope.boletin[0].Apellido1;

                                                    operario =  $scope.boletin[0].Operario;

                                                    console.log(operario);

                                                  }, function(x) {

                                                      // Request error
        });
        

        

        }  

//FUNCION PARA VALIDAR BOLETIN
$scope.validarBoletinFuncion = function(operarioNumero){

    var valor = operarioNumero;

     $scope.animacion = "";
           
           $http.get('php/servicios/actualizarBoletinEntero.php?c=' + valor).success(function(data){

                           $rootScope.promise = self.cargarData();

                            $rootScope.promise.then(

                              function( data){

                                $scope.cargando = false;

                                $scope.operario = data;

                                $scope.mensaje ="Boletin Validado; Escoja y Carge otro";

                                $scope.animacion = "flash";

                    self.cargarData = function() {

                      $scope.cargando = true; 

                      var q = $q.defer();

                             $http.get('php/servicios/operariosConboletinpendienterevision.php')
                              .then(function success( respuesta ){



                                q.resolve( respuesta.data);

                              },

                              function error (response){

                                   

                                   console.log( " :( ");

                                   $scope.cargando = false; 

                                   q.reject("Error");


                              });


                              return q.promise;



                      };

                            $rootScope.promise = self.cargarData();

                            $rootScope.promise.then(

                              function( data){

                                $scope.cargando = false;

                                $scope.operario = data;

                                operario = $scope.operario[0].Operario;

                                 $scope.traerBoleAuto ( operario );

                            },function ( error) {

                              console.error( error);


                            });

                            },function ( error) {

                              console.error( error);

                            });

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

//CALCULO DE HORAS
   $scope.totalHoras = function(){

              var sum = 0;


         //  console.log($scope.boletin);

              angular.forEach($scope.boletin ,function(value, key){

                    sum = sum + parseFloat(value.Horas);
                    
                    
                }); 

              
              $scope.cantidadBoletines = sum / 8;

              return sum;

              


          }  


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

               $scope.traerBoleAuto();

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

               $scope.traerBoleAuto();
               
               //console.log($scope.IdBole);
       }       

       

              
}]);