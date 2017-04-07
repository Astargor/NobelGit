app.controller('supervisorCtrl', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	
	    $scope.setActive("mSupervisor");

        //ABRIR VENTANA DE VALIDACIÓN DE BOLETINES

        $scope.validar = function(){

           window.location = '#/validarBoletin';

        }

        //ABRIR VENTANA DE CONSULTA DE TIEMPOS OPTIMO

         $scope.Multi = function(){

           window.location = '#/boletinesmultiples';

        }

         $scope.rendimientos = function (){

         window.location = '#/consultaRendimientos';
         
        }   

         $scope.boletinSemanal = function (){

           window.location = '#/boletinSemanal';

        }

		

}]);