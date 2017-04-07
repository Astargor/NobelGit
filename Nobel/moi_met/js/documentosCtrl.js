app.controller('documentosCtrl', ['$scope','$http','$filter','pdfDelegate', function($scope,$http,$filter,pdfDelegate){
	
   $scope.setActive("mDocumentos");

   $scope.listaReferenciasCompleta ={};

   $scope.pdfUrl = '';

   //npspbarsr005/PDF/5F6201220-FICA.pdf

	$http.get('php/servicios/referenciasCompleta.php').success(function(data){

     $scope.listaReferenciasCompleta = data;

	});

	$scope.opcion = "";
	$scope.ref = "";
	$scope.titulo = "";

	$scope.ficf = function (){
		$scope.opcion = 'FICF';

		$scope.titulo = $scope.opcion+ '  de  '+ $scope.ref;

	}
	$scope.fica = function (){
		$scope.opcion = 'FICA';

		$scope.titulo = $scope.opcion+ '  de  '+ $scope.ref;
	}

	$scope.met = function (){
		$scope.opcion = 'MET';

		$scope.titulo = $scope.opcion+ '  de  '+ $scope.ref;
	}

	$scope.consultaDoc = function (ref){

    $scope.ref = ref;

    $scope.titulo = $scope.opcion+ '  de  '+ $scope.ref;

    

	}

	$scope.buscar = function(){




     $scope.pdfUrl = pdfDelegate.load('../../PantallaV/img/pdf/'+$scope.ref+'-'+$scope.opcion+'.pdf');

     console.log($scope.pdfUrl);
    


	}



}]);