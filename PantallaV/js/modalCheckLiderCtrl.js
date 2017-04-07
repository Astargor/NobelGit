app.controller('modalCheckLiderCtrl', ['$scope','$http','$uibModalInstance','operario','refe','fecha','$filter', function($scope,$http,$uibModalInstance,operario,refe,fecha,$filter){
  
  $scope.hoyMysql = "";    
  $scope.hora = "";
  $scope.checkList = "";
  $scope.operario = operario;
  $scope.ocultarCheck = false;
  $scope.referencia = refe;
  $scope.hoy = fecha;
  var user = "";
  var pa = "";


  
  $scope.registrarCheck = function(){

    $scope.calcularTurno();

  	user = $scope.check.operario;
    pa   = $scope.check.password;

    


     $http({  method: 'get',
                 url: 'php/servicios/loginLider.php', 
              params: {
                      user: user, 
                      pa: pa }
                       }).success(function(data) {


                        

                        if ( data.err == 1 || data.err == 3 ){



                            swal("El usuario o la contraseña no coinciden");



                        }else if(data.err == 4){

                          swal({
                                title: "No tienes permisos",
                                text: "Si eres el lider eventual introduce tu matricula",
                                type: "input",
                                showCancelButton: true,
                                closeOnConfirm: false,
                                animation: "slide-from-top",
                                inputPlaceholder: "MATRICULA"
                              },
                              function(inputValue){
                                if (inputValue === false) return false;
                                
                                if (inputValue === "") {
                                  swal.showInputError("Tienes que escribir tu matricula!");
                                  return false
                                }
                                //cogemos la matricula del co-lider
                                swal("Nice!", "You wrote: " + inputValue, "success");
                                 user = inputValue;
                                 $scope.ocultarCheck = true;

                            
                                 $http({  method: 'get',
                                       url: 'php/servicios/traerCheck.php', 
                                     params: {
                                      // refe :'164468096R',
                                            refe: $scope.referencia,
                                            fecha:  $scope.hoyMysql, 
                                           //operario : '2014'
                                            operario: $scope.operario, 
                                       
                               
                                    }}).success(function(respuesta) {

                                        
                                                          
                                        $scope.checkList = respuesta;
                           


                                                     


                              }, function(x) {

                                 //  console.log('No se puede');
                                                      // Request error
                                });

                              });
 
                         // swal("No tienes permisos");

                        } else {

                            $scope.ocultarCheck = true;

                            
                           $http({  method: 'get',
		                		 url: 'php/servicios/traerCheck.php', 
		            		 	 params: {
		            		  	// refe :'164468096R',
		                          refe: $scope.referencia,
		                          fecha:  $scope.hoyMysql, 
		                        // operario : '2914'
		                          operario: $scope.operario, 
                         
                         
                              }}).success(function(respuesta) {

                           
                                                    
                                  $scope.checkList = respuesta;
                           


                                                     


                              }, function(x) {

                                   console.log('No se puede');
                                                      // Request error
                                });

                        }

                        }, function(x) {
                                                      // Request error
        });


  
  

   


  }

  $scope.validar = function () {
    
  	//console.log($scope.checkList[0].check_list_referencia);
  	//console.log($scope.checkList[0].id_check_list);

  	 $http({  method: 'get',
                 url: 'php/servicios/validarCheckLider.php', 
              params: {
                      id: $scope.checkList[0].id_check_list,
                      lider: user }
                       }).success(function(data) {
                        
                        //console.log(data);

                        $uibModalInstance.close('estadoCheckLiderVerde');

                        }, function(x) {
                                                      // Request error
        });


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