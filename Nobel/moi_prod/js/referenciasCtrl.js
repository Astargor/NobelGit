app.controller('referenciasCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mConsultasgenerales");

	$scope.listaReferencias ={};

	$http.get('php/servicios/referencias.php').success(function(data){

     $scope.listaReferencias = data;

	});

		
   

}]);