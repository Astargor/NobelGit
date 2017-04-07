app.controller('modalRefCtrl', ['$scope','$http','$interval','$uibModalInstance', '$log','ref', function($scope,$http,$interval,$uibModalInstance, $log,ref){

    //var buscar = element(by.model('buscar'));
    $scope.listaReferenciasCompleta ={};

	$http.get('php/servicios/referenciasCompleta.php').success(function(data){

     $scope.listaReferenciasCompleta = data;

	});


	$scope.selecRef = function (refe) {

		//$scope.estadoPoka = re;

		//console.log(refe.t_optimo_externa);

	    $uibModalInstance.close(refe);

	}


	}]);