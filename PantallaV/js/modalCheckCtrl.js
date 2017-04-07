app.controller('modalCheckCtrl', ['$scope','$http','$uibModalInstance','umusada','refe','$filter', function($scope,$http,$uibModalInstance,umusada,refe,$filter){
  
  $scope.um = umusada;
  $scope.referencia = refe;
  $scope.check = {};
  $scope.hoyMysql = "";    
  $scope.hoy = "";
  $scope.hora = "";
  $scope.observacion = "";


  $scope.registrarCheck = function () {


  	if ( $scope.check.switchStatus1 == true){
  		$scope.check.switchStatus1 = 1
  	}else{
  		$scope.check.switchStatus1 = 0
  	}

  	if ( $scope.check.switchStatus2 == true){
  		$scope.check.switchStatus2 = 1
  	}else{
  		$scope.check.switchStatus2 = 0
  	}

	if ( $scope.check.switchStatus3 == true){
  		$scope.check.switchStatus3 = 1
  	}else{
  		$scope.check.switchStatus3 = 0
  	}

	if ( $scope.check.switchStatus4 == true){
  		$scope.check.switchStatus4 = 1
  	}else{
  		$scope.check.switchStatus4 = 0
  	}

	if ( $scope.check.switchStatus5 == true){
  		$scope.check.switchStatus5 = 1
  	}else{
  		$scope.check.switchStatus5 = 0
  	}

	if ( $scope.check.switchStatus6 == true){
  		$scope.check.switchStatus6 = 1
  	}else{
  		$scope.check.switchStatus6 = 0
  	}

  	if ( $scope.check.switchStatus7 == true){
  		$scope.check.switchStatus7 = 1
  	}else{
  		$scope.check.switchStatus7 = 0
  	}
    

  	if( $scope.check.operario >= 1530){

    $scope.operario = $scope.check.operario;

    if($scope.check.observacion == null){

      $scope.observacion = 0;
 
    }else{

      $scope.observacion = $scope.check.observacion;
    }

    


    $scope.fecha = new Date();

    $scope.calcularTurno();

  

    //valores que retorno al uap5Ctrl.js,dentro de un array
    $scope.valorRetornado = [
      {operario:$scope.operario,
      check1:$scope.check.switchStatus1,
      check2:$scope.check.switchStatus2,
      check3:$scope.check.switchStatus3,
      check4:$scope.check.switchStatus4,
      check5:$scope.check.switchStatus5}
                            ];

    $uibModalInstance.close($scope.valorRetornado);


    $http({  method: 'get',
                 url: 'php/servicios/checklist.php', 
              params: {
                          refe: $scope.referencia,
                          fecha: $scope.hoyMysql, 
                          hora: $scope.hora,
                          turno: $scope.turno,
                          operario: $scope.operario, 
                          um: $scope.um,
                          traza: $scope.check.switchStatus1,
                          revi: $scope.check.switchStatus2,
                          seguridad: $scope.check.switchStatus3,
                          poka: $scope.check.switchStatus4,
                          inicio: $scope.check.switchStatus5,
                          cuatrohoras: $scope.check.switchStatus6,
                          averia: $scope.check.switchStatus7,
                          observacion:$scope.observacion


                      }}).success(function(respuesta) {

           
                                                    //console.log(navigator.onLine);
                                                     swal({
                                                            title: "CHECK LIST CORRECTO",
                                                            text: "Esta pantalla se cerrara en 2 segundos",
                                                            timer: 2000,
                                                            showConfirmButton: false
                                                          });

                                                      console.log(respuesta.mensaje);

                                                     if(respuesta.mensaje == "Error"){
                                                        swal("Oops...", "Error de Conexión!", "error");
                                                         $scope.valorRetornado = [{operario:null,
                                                         check1:$scope.check.switchStatus1,
                                                          check2:$scope.check.switchStatus2,
                                                          check3:$scope.check.switchStatus3,
                                                          check4:$scope.check.switchStatus4,
                                                          check5:$scope.check.switchStatus5}];
                                                      }
                                                      console.log(respuesta);
                                                       $uibModalInstance.close($scope.valorRetornado);


                                                     


                                                  }, function(x) {

                                                    

                                                   $uibModalInstance.close($scope.valorRetornado);                         
                                                    swal("Oops...", "Error de Conexión! Revisar Conexión", "error");    
                                                    $scope.valorRetornado = [{operario:null}];                                             
                                                    console.log('No se puede');
                                                     // Request error
        });


    

  	}else{

  		swal("Operario no valido, Por favor introduzca su número de operário correcto");

  	}

  	
  	

   



  }
   
	 $scope.calcularTurno = function () {
     //Sacamos la hora actual del sistema y le damos formato
    $scope.hora  = $filter('date')(new Date(),'HH:mm');    

    //comparamos la hora sacada con la franja horaria de los turnos
    if ($scope.hora > '14:01' && $scope.hora < '22:00'){

      $scope.turno = 'Tarde';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    } 

    if ($scope.hora > '06:01' && $scope.hora < '14:00'){

      $scope.turno = 'Mañana';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }

     if ($scope.hora > '22:01' && $scope.hora < '23:59'){
      $scope.turno = 'Noche';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');
    

    }

    if ($scope.hora > '00:00' && $scope.hora < '06:00'){

        /**
        *Se resta un dia para el turno de noche
        */

    $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
    $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

      //var values = new Array(3);
      var valores = $scope.hoyMysql;

      var resto = valores.split("-");


      var valueDia =  resto[2];
      var valueMes =  resto[1];
      var valueAño = resto[0];
      
      valueDia = valueDia - 1;

      if (valueDia == 0 || valueDia < 0){

        valueDia = 30 
        valueMes = valueMes - 1
      }
      
       if (valueMes == 0 || valueMes < 0){

        valueDia = 30 
        valueMes = 12
      }


      var mes = valueMes;

      var año = valueAño;

       $scope.hoyMysql = año + "-" + mes + "-" + valueDia;
       
       $scope.hoy = (valueDia) + "-" + mes + "-" + año ;


       $scope.turno = 'Noche';
      
      }

     console.log($scope.hoyMysql);

     }

   

}]);