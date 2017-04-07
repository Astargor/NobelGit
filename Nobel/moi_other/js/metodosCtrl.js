app.controller('metodosCtrl', ['$scope','$http', function($scope,$http){
	

    $scope.setActive("mMetodos");

  /*  $scope.ocultar = false;
    $scope.ocultar_barra = function() {
        $scope.ocultar = !$scope.ocultar;

    }*/

    $scope.abrirValidar = function (){

    	 window.location = '#/revision_bole_metodos';
    }

    $scope.rendimientos = function (){

    	window.location = '#/consultaRendimientos';
    }

    $scope.fichasOpe = function (){

        window.location = '#/fichasOpe';
    }

  

}]);