app.controller('tiemposCtrl', ['$scope','$http', function($scope,$http){
	
	    $scope.setActive("mConsultasgenerales");

        //recoge en una variable el codigo que nos traemos de la otra pagina
		

		$scope.tiempo={};

		$http.get('php/servicios/tiempos.php').success(function(data){

        if(data.err != undefined){

        	window.location = "#/tiempos_optimos";
        	return;

        }

         $scope.tiempo = data;

		});
   

}]);