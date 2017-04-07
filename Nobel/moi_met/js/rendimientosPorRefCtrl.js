
app.controller('rendimientosPorRefCtrl', ['$scope','$http','$routeParams','$filter', function($scope,$http,$routeParams,$filter){
	
	    $scope.setActive("mDocumentos");

        $scope.listaReferencias ={};
        $scope.listadoRendimiento = {};
        $scope.formData = {};
        $scope.rendimientosChar = {};
        $scope.rendimientosChar32 = {};
        $scope.ocultar = false;
        
 





	    $http.get('php/servicios/referencias.php').success(function(data){

        $scope.listaReferencias = data;



	    });




    $scope.consularRendimiento = function(){

   $scope.ocultar = true;
   $('#RendimientoChart').empty();
   $('#RendimientoChart32').empty();
   


   $http({  method: 'get',
                 url: 'php/servicios/consultaRendimientos.php', 
              params: {
                      refe: $scope.formData.refe.ref_externa, 
                      fechafin: $scope.formData.fechaini, 
                      fechainicio: $scope.formData.fechafi}
                       }).success(function(respuesta) {

                                                    $scope.listadoRendimiento = respuesta;
                                                    
                                                
                                                  }, function(x) {
                                                      // Request error
        });

       $http({  method: 'get',
                 url: 'php/servicios/consultaRendimientos032.php', 
              params: {
                      refe: $scope.formData.refe.ref_externa, 
                      fechafin: $scope.formData.fechaini, 
                      fechainicio: $scope.formData.fechafi}
                       }).success(function(respuesta) {

                                                    $scope.rendimientosChar32  = respuesta;

                                                    var chart = new  Morris.Bar({
                                                            // ID of the element in which to draw the chart.
                                                            element: 'RendimientoChart32',
                                                            // Chart data records -- each entry in this array corresponds to a point on
                                                            // the chart.
                                                            data: $scope.rendimientosChar32,
                                                            // The name of the data record attribute that contains x-values.
                                                            xkey: 'Fecha',
                                                            // A list of names of data record attributes that contain y-values.
                                                            ykeys: ['Rendimientos'],
                                                            // Labels for the ykeys -- will be displayed when you hover over the
                                                            // chart.
                                                            labels: ['Rendimiento Medio']
                                                          });
                                                    
                                                
                                                  }, function(x) {
                                                      // Request error
        });




   $http({  method: 'get',
                 url: 'php/servicios/consultaRendimientosChar.php', 
              params: {
                      refe: $scope.formData.refe.ref_externa, 
                      fechafin: $scope.formData.fechaini, 
                      fechainicio: $scope.formData.fechafi}
                       }).success(function(respuestachar) {

                                                    $scope.rendimientosChar = respuestachar;
                                                    
                                                var chart = new  Morris.Bar({
                                                            // ID of the element in which to draw the chart.
                                                            element: 'RendimientoChart',
                                                            // Chart data records -- each entry in this array corresponds to a point on
                                                            // the chart.
                                                            data: $scope.rendimientosChar,
                                                            // The name of the data record attribute that contains x-values.
                                                            xkey: 'Fecha',
                                                            // A list of names of data record attributes that contain y-values.
                                                            ykeys: ['Rendimientos'],
                                                            // Labels for the ykeys -- will be displayed when you hover over the
                                                            // chart.
                                                            labels: ['Rendimiento Ensamblado']
                                                          });
                                                    
                                                         
                                                  }, function(x) {
                                                      // Request error
                                                      
        });  

      

  }



}]);