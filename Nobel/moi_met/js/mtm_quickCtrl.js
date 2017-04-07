app.controller('mtm_quickCtrl', ['$scope','$http','$routeParams','$uibModal','$filter','$q','$rootScope', function($scope,$http,$routeParams,$uibModal,$filter,$q,$rootScope){
	
	$scope.setActive("mMetodos");

	$scope.mostrarNuevo = true;
    $scope.mostrarLoad = true;
    $scope.unidad = "";
    $scope.titulo = "";


    //Cargamos los proyectos al iniciar la pagina

	$http.get('php/servicios/traerProyectosMtm.php').success(function(data){

     $scope.listaProyectos = data;

	});


//Boton para mostrar el textbox para proyecto nuevo
$scope.newProyect = function(){


		if ($scope.mostrarNuevo == true){

			$scope.mostrarNuevo = false;
			$scope.mostrarLoad = true;

		}else{

			$scope.mostrarNuevo = true;
		}

}

//boton para mostrar la lista de proyectos

$scope.loadPage = function(){

		  if ($scope.mostrarLoad == true){

			$scope.mostrarLoad = false;
			$scope.mostrarNuevo = true;


		}else{

			$scope.mostrarLoad = true;

		}

}

$scope.loadProyect = function(idStudio,nameStudio){

 $rootScope.gIdStudio = idStudio ;
 $rootScope.gNameStudio = nameStudio;

window.location = '#/pizarra';



}

$scope.newMTM = function(){
    $scope.hoy    = $filter('date')(new Date(),'yyyy-MM-dd');
    
	$http({method: 'get',
                 url: 'php/servicios/newMTMproyect.php', 
              params: {
          	  unidad: unidad.value,
          	  titulo: $scope.titulo,
          	  fecha: $scope.hoy
                      }}).then(function success(respuesta) {

                        $scope.ur = respuesta;

                        console.log($scope.ur[0].err);
                     	if(respuesta.err == false){

                     		swal('Proyecto creado');

                     	}

                         }, function error (response){

              			 console.log( " :( ");
               
              

          });


}


}]);