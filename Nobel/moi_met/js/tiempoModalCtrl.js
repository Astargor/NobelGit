app.controller('tiempoModalCtrl', ['$scope','$http','$interval','$uibModalInstance','$filter','refExt','refInt','UAP', function($scope,$http,$interval,$uibModalInstance,$filter,refExt,refInt,UAP){

   $scope.externa = refExt;
   $scope.interna = refInt;
   $scope.uap     = UAP;
   $scope.procesoShow = false;
   $scope.umShow = true;
   $scope.frase   = 'PROCESO NUEVO';
   $scope.fraseUM = 'UM NUEVA';
   $scope.umSecun = false;
   $scope.switchStatus2 = false;
   $scope.switchStatus = false;
   $scope.num_mol = 0;
   $scope.listadotiempos = {};
   
  

   $http.get('php/servicios/tiempos_optimos_por_ref.php?c=' + $scope.externa).success(function(data){
  
     
     $scope.listadotiempos = data;

     console.log($scope.listadotiempos);
      console.log($scope.listadotiempos.id_t_optimo);
     console.log($scope.externa);
     

    });


   $http.get('php/servicios/procesos.php').success(function(data){

     $scope.procesos = data;

    

 });

    $http.get('php/servicios/traerUm.php').success(function(data){

     $scope.ums = data;
    

 });

    $scope.crearUmNueva = function(){

      if($scope.switchStatus2 == false){

        $scope.secundaria = 'no';

      }else{

        $scope.secundaria = $scope.um_secundaria;

      }


      if($scope.switchStatus == true){

       $scope.primaria = 'sí';


      }else{

        $scope.primaria = 'no';
      }

      
       $http({  method: 'get',
                   url: 'php/servicios/insertarUM.php', 
                 params: {
                      id_um:$scope.num_um,
                      refe:$scope.externa,
                      moldes:$scope.num_mol,
                      um_descript:$scope.um_descript,
                      primaria:$scope.primaria,
                      secundaria:$scope.secundaria,
                      id_proceso:$scope.proceso.id_tipo_proceso
                      

                      }
                       }).success(function(respuesta) {


                        console.log(respuesta);
                        

                                                  }, function(x) {

                                                    console.log(x);

                                                      // Request error
                  });





    }

   $scope.cambio = function(){

    if($scope.switchStatus2 == true){

      $scope.umSecun = true;

    }else{

      $scope.umSecun = false;
    }
    

   }


    $scope.umNuevo = function(){

    

     if($scope.proceso == null ){

      swal('Escoger o Crear un Proceso antes');

     }else{

      $scope.umShow = !$scope.umShow;

     }

    }

   $scope.procesoNuevo = function(){

   	$scope.procesoShow = !$scope.procesoShow;

    console.log($scope.proceso);

    if($scope.procesoShow == true){


      $scope.frase = 'GUARDAR PROCESO';

     

    }else if ($scope.procesoShow == false){

     
        $http({  method: 'get',
                   url: 'php/servicios/insertarProceso.php', 
                 params: {

                      proceso:$scope.newProceso
                      

                      }
                       }).success(function(respuesta) {

                        $scope.frase = 'PROCESO NUEVO';

                        console.log(respuesta);

                         $http.get('php/servicios/procesos.php').success(function(data){

                          $scope.procesos = data;

                          swal('Nuevo Proceso Creado Escojalo en el selector');
                          
                          
    

                        });


                                                  


                                                
                                                  }, function(x) {

                                                    console.log(x);

                                                      // Request error
                  });


    }




   }

   $scope.crearTiempoNuevo = function(){

    $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');
     $scope.crearUmNueva();
    


     $http({  method: 'get',
                   url: 'php/servicios/insertarTiempoOptimo.php', 
                 params: {
                      
                      Ext:$scope.externa,
                      Int:$scope.interna,
                      uapPHP:$scope.uap,
                      um:$scope.num_um,
                      descripUm:$scope.um_descript,
                      proceso:$scope.proceso.id_tipo_proceso,
                      tiempo:$scope.tiempoOptimo,
                      operarios:$scope.tiempoOpe,
                      dia:$scope.hoyMysql
                      

                      }
                       }).success(function(respuesta) {

                       

                        console.log(respuesta);

                        $scope.traerTiempo($scope.externa);



                                                
                                  }, function(x) {

                                  console.log(x);

                                  // Request error
                  });
    



   }

   $scope.traerTiempo = function(){

    
    $http.get('php/servicios/tiempos_optimos_por_ref.php?c=' + $scope.externa).success(function(data){
  
    
    $scope.listadotiempos = data;


    });


   }

   /*$scope.listadotiempos =[

   {tiempo:'0.000',operarios:4,ref:'12237489' }


   ]*/


	}]);