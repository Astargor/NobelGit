app.controller('inicioCtrl', ['$scope','$interval', function($scope,$interval){
	
	$scope.setActive("mInicio");

	  $scope.img = {};
    $scope.animacion ={};
    $scope.nombre={};
    $scope.nombre2={};

    $scope.Cargarimagen = function(){

    
     $scope.animacion ="animated bounceInLeft";
     $scope.img = "img/nobel.jpg";
     

     };

$scope.InteCalarimagen = function(){

     $scope.animacion ="animated bounceOutLeft";

     };
  
  $interval( function() { $scope.InteCalarimagen(); } , 10000,1 );
  $scope.InteCalarimagen2 = function(){

      $scope.animacion ="animated bounceInRight";
     $scope.img = "img/nobel1.jpg";

     };
  
  $interval( function() { $scope.InteCalarimagen2(); } , 13000,1 );



}]);