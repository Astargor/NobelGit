app.controller('consulta_rendimientosCtrl', ['$scope','$http','$routeParams','$uibModal','$filter','$q','$rootScope', function($scope,$http,$routeParams,$uibModal,$filter,$q,$rootScope){
	
	    $scope.setActive("mMetodos");

	    $scope.rendimiento    = {};
	    $scope.listadOpcion2  = {};
	    $scope.referencias    = {};
	    $scope.opcionEscogida = "";
	    $scope.cargando       = false;
	    var rendimientos   = [];



	    $scope.opcion2  = false;
	    $scope.opcion3  = false;
	    $scope.opcion4  = false;
	    $scope.cabecera = false;
	    $scope.fechaini = "";
	    $scope.fechafi  = "";
	    //Variable de cabecera
	    $scope.ren      = "";


	    //traer todas las referencias


   $http.get('php/servicios/referencias.php').success(function(data){

        if(data.err != undefined){

        	
 				
            return;


        }

        $scope.referencias  =  data;
});

	   
 $scope.opcion = function (opc){

	    	

 		if( opc == 1 ){
          $scope.opcion4 = false;
          $scope.opcion3 = false;
	        $scope.opcion2 = true;
	      

	     

	      $scope.listadOpcion2 = [
            
            {UAP:'UAP-5'} ,
            {UAP:'UAP-1-2'},
            {UAP:'VAPOR'},
            {UAP:'METAL'},
            {UAP:'EXTRUSION'}

	      ];



	    }else if ( opc == 2 ) {
          $scope.opcion4 = false;
          $scope.opcion2 = false;
          $scope.opcion3 = true;

          $http.get('php/servicios/codigoOperarios.php').success(function(data){

       	  $scope.listadOpcion2 = data;


     	 });


	    }else if ( opc == 3 ) {


	    	$scope.listadOpcion2 = $scope.referencias;
        


           $scope.opcion2 = false;
           $scope.opcion3 = false;
           $scope.opcion4 = true;


	    }else{

          $scope.opcion2 = false;
          $scope.opcion3 = false;
          $scope.opcion4 = false;

	    }

}


$scope.codigoUAP = function (uap){

	$scope.ur = uap;

	$scope.ren = $scope.ur.UAP;

	$scope.cabecera = true;
	$scope.cabecerafecha = true;

	$scope.opcionEscogida = 1;

}

$scope.codigoOpe = function (operario){

	$scope.ur = operario;

	$scope.ren = $scope.ur.codigo;

	$scope.cabecera = true;
	$scope.cabecerafecha = false;

	$scope.opcionEscogida = 2;


}

$scope.codigoRef = function (ref){


$scope.ln = ref;
$scope.ren = $scope.ln.ref_externa;

$scope.cabecera = true;
$scope.cabecerafecha = false;

$scope.opcionEscogida = 3;


}

$scope.ejecutarBusqueda = function () {



switch($scope.opcionEscogida){

   case 1:


		    switch($scope.ren){

		    	case 'UAP-5':

		    	$scope.graficosUap(5,$scope.fechaini,$scope.fechafi);


		    	break;

		    	case 'UAP-1-2':

		    	$scope.graficosUap(1,$scope.fechaini,$scope.fechafi);


		    	break;

		    	case 'VAPOR':

		    	$scope.graficosUap(3,$scope.fechaini,$scope.fechafi);


		    	break;

		    	case 'METAL':

		    	$scope.graficosUap(7,$scope.fechaini,$scope.fechafi);


		    	break;

		    	case 'EXTRUSION':

		    	$scope.graficosUap(10,$scope.fechaini,$scope.fechafi);
		 

		    	break;
		    }

   


   break;

   case 2:
   
    $scope.graficosOperario($scope.ren,$scope.fechaini,$scope.fechafi);


    
   break;
   case 3:



   $scope.graficosReferencia($scope.ren);
    

    
    

   break;

   default:

   swal('Ninguna opcion correcta');



}
  



}

$scope.graficosReferencia = function(referencia){

$('#RendimientoChart').empty();
  self.cargarData = function() {

  $scope.cargando = true; 

  var q = $q.defer();

 $http({method: 'get',
                 url: 'php/servicios/consultaRendimientosRef.php', 
              params: {
          ref: referencia
                      }}).then(function success(respuesta) {

                           q.resolve( respuesta.data);

                       $scope.listadoRendimiento = respuesta.data;

                                           }, function error (response){

               console.log( " :( ");
               
               q.reject("Error");
               swal('Error de consulta, este operario puede que no tenga boletines');

          });

          return q.promise;



  };

   $rootScope.promise = self.cargarData();

        $rootScope.promise.then(

          function( data){

           Morris.Bar({
                   // ID of the element in which to draw the chart.
                   element: 'RendimientoChart',
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    barColors:["#A4A4A4", "#A4A4A4"],

                    data: $scope.listadoRendimiento,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'Fecha',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['totalRen'],

                    integerYLabels: true,

                    xLabelMargin: 10,

                    gridTextSize: 12,

                    ymax: 120,

                    goals: [100 , 95],

                    goalStrokeWidth: 2,

                    goalLineColors: ["#00688B","#FD0C1F"],

                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Rendimiento Medio']

                                      });
            
          
    $scope.cargando = false;

        },function ( error) {

          


          });


}

$scope.graficosOperario = function (operario,fechainicio,fechafinal){

	$('#RendimientoChart').empty();
  self.cargarData = function() {

  $scope.cargando = true; 

  var q = $q.defer();

 $http({method: 'get',
                 url: 'php/servicios/consultaRendimientosOpe.php', 
              params: {
 					ope: operario
                      }}).then(function success(respuesta) {

                           q.resolve( respuesta.data);

                       $scope.listadoRendimiento = respuesta.data;

                                           }, function error (response){

               console.log( " :( ");
               
               q.reject("Error");
               swal('Error de consulta, este operario puede que no tenga boletines');

          });

          return q.promise;



  };

   $rootScope.promise = self.cargarData();

        $rootScope.promise.then(

          function( data){

           Morris.Bar({
                   // ID of the element in which to draw the chart.
                   element: 'RendimientoChart',
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    barColors:["#A4A4A4", "#A4A4A4"],

                    data: $scope.listadoRendimiento,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'Fecha',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['totalRen'],

                    integerYLabels: true,

                    xLabelMargin: 10,

                    gridTextSize: 12,

                    ymax: 120,

                    goals: [100 , 95],

                    goalStrokeWidth: 2,

                    goalLineColors: ["#00688B","#FD0C1F"],

                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Rendimiento Medio']

                                      });
          	
         	
 		$scope.cargando = false;

        },function ( error) {

        	


        	});

}



$scope.graficosUap = function (uap,fechainicio,fechafinal){

	
 $('#RendimientoChart').empty();

self.cargarData = function() {

  $scope.cargando = true; 

  var q = $q.defer();

    $http({method: 'get',
                 url: 'php/servicios/consultaRendimientosPorUAP.php', 
              params: {
                      zona: uap,
                      fechaini: fechainicio,
                      fechafi: fechafinal
                      }}).then(function success(respuesta) {

                           q.resolve( respuesta.data);

                        //    $scope.refe15 = respuesta.data;

                                           }, function error (response){

               console.log( " :( ");
               
               q.reject("Error");

          });

          return q.promise;



  };

        $rootScope.promise = self.cargarData();

        $rootScope.promise.then(

          function( data){

          	$scope.refe15 = data;


          	Morris.Bar({
                   // ID of the element in which to draw the chart.
                   element: 'RendimientoChart',
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    barColors:["#A4A4A4", "#A4A4A4"],
                    data: $scope.refe15,

                    integerYLabels: true,

                    xLabelAngle: 60,

                    xLabelMargin: 10,

                    gridTextSize: 14,

                    ymax: 120,

                    goals: [100 , 95],

                    goalStrokeWidth: 2,

                    goalLineColors: ["#00688B","#FD0C1F"],

                    // The name of the data record attribute that contains x-values.
                    xkey: 'Referencia',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['totalRen'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Rendimiento Medio']
                                      });

          	
         	
 		$scope.cargando = false;

        },function ( error) {

        	 $('#RendimientoChart').empty();

self.cargarData = function() {

  $scope.cargando = true; 

  var q = $q.defer();

    $http({method: 'get',
                 url: 'php/servicios/consultaRendimientosPorUAP.php', 
              params: {
                      zona: uap,
                      fechaini: fechainicio,
                      fechafi: fechafinal
                      }}).then(function success(respuesta) {

                           q.resolve( respuesta.data);

                        //    $scope.refe15 = respuesta.data;

                                           }, function error (response){

               console.log( " :( ");
               
               q.reject("Error");

          });

          return q.promise;



  };

        $rootScope.promise = self.cargarData();

        $rootScope.promise.then(

          function( data){

          	$scope.refe15 = data;


          	Morris.Bar({
                   // ID of the element in which to draw the chart.
                   element: 'RendimientoChart',
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    barColors:["#A4A4A4", "#A4A4A4"],

                    //para inclinar las letras

                    xLabelAngle: 60,

                    data: $scope.refe15,

                    integerYLabels: true,

                    xLabelMargin: 10,

                    gridTextSize: 14,

                    ymax: 120,

                    goals: [100 , 95],

                    goalStrokeWidth: 2,

                    goalLineColors: ["#00688B","#FD0C1F"],


                    // The name of the data record attribute that contains x-values.
                    xkey: 'Referencia',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['totalRen'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Rendimiento Medio']
                                      });

          	
         	
 		$scope.cargando = false;

        },function ( error) {

        	

          console.error( error);



          swal('Error de consulta, por favor vuelva a pulsar EJECUTAR BUSQUEDA');


        });



          //console.error( error);



         // swal('Error de consulta, por favor vuelva a pulsar EJECUTAR BUSQUEDA');


        });




    }


	

}]);