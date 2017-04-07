app.controller('documentacionCtrl', ['$scope','$interval','$http','$filter', function($scope,$interval,$http,$filter){
	
	$scope.setActive("mMetodos");

	$scope.operarios = {};
	$scope.referencias = {};
	$scope.auditorias = {};
	$scope.UAP = "";
	$scope.hora= $filter('date')(new Date(),'HH:mm');
	$scope.hoy= $filter('date')(new Date(),'dd-MM-yyyy');

	//Traemos todos los operario
	$http.get('php/servicios/trabajadores.php').success(function(data){



         $scope.operarios = data;

         


    });

	//Traemos todas las referencias
    $http.get('php/servicios/referenciasCompleta.php').success(function(data){



         $scope.referencias = data;



    });
    
    $scope.nombreOpe = function(operario){

    	for (var i = 0; i < $scope.operarios.length; i++) {

    		if ($scope.operarios[i].codigo == operario) {

                  $scope.nombre = $scope.operarios[i].Nombre + " " +$scope.operarios[i].Apellido1 + " " +$scope.operarios[i].Apellido2;
                  $scope.uap = $scope.operarios[i].Nombre

    		}
    	}

    	$scope.sacarTurno();

     }


   $scope.sacarTurno =  function(){

   
	var hora = $scope.hora.value;

    if ($scope.hora > '14:15' && $scope.hora < '22:15'){

      $scope.turno = 'Tarde';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if ($scope.hora > '06:15' && $scope.hora < '14:15'){

      $scope.turno = 'Mañana';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else{



    $scope.hoy         = $filter('date')(new Date(),'dd-MM-yyyy');
    $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

     var valores = $scope.hoy;

      var values = valores.split(" ");

      var value1 =  valores[0];
      var value2 =  valores[1];

      if (value2 == 0){

        var dia = (value1 - 1) + (value2 - 1);

      }else{

        var dia = value1 + (value2 - 1);
      }

      var mes = valores[3] + valores[4];

      var año = valores[6] + valores[7] + valores[8] + valores[9];

       $scope.hoyMysql = año + "-" + mes + "-" + dia;
       
       $scope.hoy = (dia) + "-" + mes + "-" + año ;


       $scope.turno = 'Noche';
      
      }

     console.log($scope.turno);
      
     }



}]);