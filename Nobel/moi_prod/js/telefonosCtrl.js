app.controller('telefonosCtrl', ['$scope','$http', function($scope,$http){
	
   $scope.setActive("mConsultasgenerales");

	$scope.listaTelefonos ={};

	$http.get('php/servicios/telefonos.php').success(function(data){

     $scope.listaTelefonos = data;

	});

		
   

}]);