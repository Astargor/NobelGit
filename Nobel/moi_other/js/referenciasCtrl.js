app.controller('referenciasCtrl', ['$scope','$http','$filter', function($scope,$http,$filter){
	
	$scope.setActive("mConsultasgenerales");

	$scope.listaReferenciasCompleta ={};

	$http.get('php/servicios/referenciasCompleta.php').success(function(data){

     $scope.listaReferenciasCompleta = data;

	});

		
   

}]);