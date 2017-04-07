app.controller('trabajadoresCtrl', ['$scope','$http', function($scope,$http){
	
   $scope.setActive("mConsultasgenerales");

	$scope.listatrabajadores ={};

	$http.get('php/servicios/trabajadores.php').success(function(data){

     $scope.listatrabajadores = data;

	});

		
   

}]);