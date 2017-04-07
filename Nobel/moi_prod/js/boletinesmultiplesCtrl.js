app.controller('boletinesmultiplesCtrl', ['$scope','$http','$filter', function($scope,$http,$filter){
	
   $scope.setActive("mSupervisor");

  var Operarios = [];

  $scope.listaOperarios = {};

  $scope.borrarOpe = function(ope){

 

  	$scope.listaOperarios.splice( ope, 1 );
	Operarios.splice( ope, 1 );

  }
   


   $scope.anadiralista = function(ope){


	   $scope.operario = ope;

	   if(Operarios == ""){

	   	Operarios.push($scope.operario);

	   	 $scope.listaOperarios = Operarios;

	   }else{

	   	Operarios.forEach(function(entry) {

		   	if (entry != $scope.operario){
		   		
		   			Operarios.push($scope.operario);	

		   			 $scope.listaOperarios = Operarios;	    

		   	}else{

		   		swal('Operario ya introducido');
			  
		   	}

	    

		});



	   }

   }



}]);