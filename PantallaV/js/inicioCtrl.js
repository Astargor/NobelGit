app.controller('inicioCtrl', ['$scope','$interval', function($scope,$interval){
	//macar la casilla superior como activa
	$scope.setActive("mInicio");
    //variables locales para almacenar datos
	  $scope.img = {};
    $scope.animacion ={};
    $scope.nombre={};
    $scope.nombre2={};
    //funcion para darle animacion a la foto de la pantalla principal
    $scope.Cargarimagen = function(){

    
     $scope.animacion ="animated bounceInLeft";
     $scope.img = "img/nobel.jpg";
     

     };
    //Funcion para animar la siguiente foto que entra por la izquierda
    $scope.InteCalarimagen = function(){

     $scope.animacion ="animated bounceOutLeft";

     };
  //intervalo de tiempo para la funcion intercalar
  $interval( function() { $scope.InteCalarimagen(); } , 10000,1 );
  //no funciona hay que revisar
  $scope.InteCalarimagen2 = function(){

      $scope.animacion ="animated bounceInRight";
     $scope.img = "img/nobel1.jpg";

     };
  
  $interval( function() { $scope.InteCalarimagen2(); } , 13000,1 );



}]);