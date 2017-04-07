app.controller('telefonosCtrl', ['$scope','$http','$filter', function($scope,$http,$filter){
	
   $scope.setActive("mConsultasgenerales");

	$scope.listaTelefonos ={};

	$http.get('php/servicios/telefonos.php').success(function(data){

     $scope.listaTelefonos = data;

	});

		
   

}]);