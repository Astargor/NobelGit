app.controller('fichasOpeCtrl', ['$scope','$http','$routeParams','$uibModal','$filter','$q','$rootScope', function($scope,$http,$routeParams,$uibModal,$filter,$q,$rootScope){
	
	$scope.setActive("mMetodos");

	$scope.listadOpcion2 = {};

	$scope.foto = "img/operarios/0.jpg";


	 $http.get('php/servicios/codigoOperarios.php').success(function(data){

     $scope.listadOpcion2 = data;

 });

 $scope.codigoOpe = function (operario){

 	$scope.foto = "";

	$scope.ur = operario;

	$scope.ren = $scope.ur.codigo;


         $scope.foto = "img/operarios/"+$scope.ren+".jpg";


          if($scope.foto){

			$scope.foto = "img/operarios/"+$scope.ren+".jpg";

          }else{


          	$scope.foto = "img/operarios/0.jpg";

          }

		}





    



}]);