app.controller('referenciaCtrl', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	
	    $scope.setActive("mConsultasgenerales");

        //recoge en una variable el codigo que nos traemos de la otra pagina
		$scope.codidoInterno=$routeParams.ref_externa;
        
        var refExterna = $routeParams.ref_externa;

		$scope.bombo={};

		$http.get('php/servicios/bombos.php?c=' + refExterna).success(function(data){

        if(data.err != undefined){

        	window.location = "#/referencias";
        	return;

        }

         $scope.bombo = data;

		});
   

}]);