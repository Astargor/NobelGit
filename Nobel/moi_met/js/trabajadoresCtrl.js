app.controller('trabajadoresCtrl', ['$scope','$http','$filter', function($scope,$http,$filter){
	
   $scope.setActive("mConsultasgenerales");

	$scope.listatrabajadores ={};

	$http.get('php/servicios/trabajadores.php').success(function(data){

     $scope.listatrabajadores = data;

	});

		
   

}]);