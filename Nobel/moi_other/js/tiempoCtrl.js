app.controller('tiempoCtrl', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	
	    $scope.setActive("mConsultasgenerales");

        //recoge en una variable el codigo que nos traemos de la otra pagina
		$scope.codigoExterno=$routeParams.id_t_optimo;


        $scope.tim = {};
        
        var tiempo = $routeParams.id_t_optimo;

        $scope.tiempo={};



        $http.get('php/servicios/tiempos_optimos.php?c=' + tiempo).success(function(data){

        if(data.err != undefined){

            window.location = "#/tiempos";
            return;

        }

         $scope.tiempo = data;

         $scope.tim.tiemOp = $scope.tiempo.t_optimo_produccion;
         $scope.tim.piezasHoras =  $scope.tiempo.PH;

         console.log($scope.tiempo);


         if($scope.tiempo.tiempos_activos == "sí"){

            $scope.tim.switchStatus = true;

         }else{

            $scope.tim.switchStatus = false;

         }

        });


        $scope.registrarCambio = function(){
            console.log($scope.tim);
        }
   
   

}]);