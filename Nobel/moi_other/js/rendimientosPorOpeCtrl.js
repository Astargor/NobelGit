app.controller('rendimientosPorOpeCtrl', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	
	    $scope.setActive("mDocumentos");

      //llenamos el scope de los nombres de los operarios al abrir la pagina

      $scope.NombreOperarios = {};


       $http.get('php/servicios/NombreOperarios.php').success(function(data){

        $scope.NombreOperarios = data;



      });




}]);