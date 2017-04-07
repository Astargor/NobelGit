app.controller('pokayokeCtrl', ['$scope','$http','$uibModalInstance', function($scope,$http,$uibModalInstance){

    $scope.estadoPoka = "ok";



	$scope.nok = function () {

		$scope.estadoPoka = "nok";

	    $uibModalInstance.close($scope.estadoPoka);

	}


	$scope.ok = function () {

		$scope.estadoPoka = "ok";

	    $uibModalInstance.close($scope.estadoPoka);


	}
	

   

}]);