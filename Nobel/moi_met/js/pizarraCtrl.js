app.controller('pizarraCtrl', ['$scope','$http','$rootScope','$uibModal', function($scope,$http,$rootScope,$uibModal){
	
	$scope.setActive("mMetodos");

   var idStudio = $rootScope.gIdStudio;
   $scope.titleProyect = $rootScope.gNameStudio;
   $scope.pizarra ={};
   $scope.k = {};

  
  //cargamos el proyecto que traemos del otro formulario y lo almacenamos en un scope de datos
	$http.get('php/servicios/traerPizarra.php?c=' + idStudio).success(function(data){

        if(data.err != undefined){
            
            swal('Error al cargar el estudio');

        }

         $scope.pizarra = data;

		});

  //cargamos el proyecto quelos ceficientes parta cargarlos en el select
  $http.get('php/servicios/coeficientesK.php').success(function(data2){

    $scope.k = data2;

  });


 //añadir nueva linea a la pizarra
 $scope.openModalNewLine = function(){

   var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'parciales/newLinePizarraModel.html',
                controller: 'newLinePizarraModelCtrl',
                size: 'lg',               
                resolve: {
                
                  
                   }

               });


              modalInstance.result.then(function (ope){

               
                
                
           }); 

   }
  


}]);