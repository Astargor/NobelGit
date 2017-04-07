app.controller('boletinCtrl', ['$scope','$interval','$filter','$routeParams','$uibModal', '$log','$http','$q','$rootScope', function($scope,$interval,$filter,$routeParams,$uibModal,$log,$http,$q,$rootScope){
	
	/**
	*variables que recogen el numero de operario y la referencia
	*/

   var numOper = $routeParams.operario;
	 var refere  = $routeParams.parametro;
   $scope.sumaHoras = 8;
   $scope.cc = "";
   $scope.cc_descrip = "";
   $scope.cargando = true;

    /**
    * recogemos el dia y la hora
    */

	$scope.hora        = $filter('date')(new Date(),'HH:mm');
	$scope.hoy2         = $filter('date')(new Date(),'dd-MM-yyyy');
	$scope.refInt      = refere;
	$scope.cantOpe     = 0;
	$scope.tiempoOP    = 0;
	$scope.piezasHoras = 0;
	$scope.pieFabri    = 0;
	$scope.boletinOpe  = {};
  $scope.boletin     = {};
  $scope.pruebas     = {};

	var hora = $scope.hora.value;



   /**
     * funcion calculamos el turno
     */

     $scope.calcularTurno = function () {

    if ($scope.hora > '14:15' && $scope.hora < '22:15'){

      $scope.turno = 'Tarde';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if ($scope.hora > '06:15' && $scope.hora < '14:15'){

      $scope.turno = 'Mañana';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else{

        /**
        *Se resta un dia para el turno de noche
        */

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

     }

   $scope.calcularTurno();


	/**
	* traemos lo que tenga el operario registrado en la BBDD
	*/
  $scope.traerBole = function (){

    self.cargarData = function() {

  $scope.cargando = true; 

  var q = $q.defer();

    $http({method: 'get',
                 url: 'php/servicios/traerBoletin.php', 
              params: {
                      operario: numOper,
                      fecha : $scope.hoyMysql
                      }}).then(function success(respuesta) {

                           q.resolve( respuesta.data);

                          //$scope.boletinOpe = respuesta;

                                           }, function error (response){

               console.log( " :( ");
               q.reject("Error");

          });

          return q.promise;



  };

        $rootScope.promise = self.cargarData();

        $rootScope.promise.then(

          function( data){

            $scope.cargando = false;

            $scope.boletinOpe = data;

        },function ( error) {

          console.error( error);

        });


     }

     /**
     * Funcion para traer el boletin
     **/

     $scope.traerBole();

     /**
     * Traemos los datos de la referencia cargada
     */

     $http({  method: 'get',
                 url: 'php/servicios/traerTiempoOptimo.php', 
              params: {
                      referencia: refere
                      
                      }}).success(function(respuesta) {

                      	   // $scope.tiempo = respuesta;

									$scope.cantOpe     = respuesta.tiempo;
									$scope.tiempoOP    = respuesta.operario;
									$scope.piezasHoras = respuesta.ph;

                                              

                                           }, function(x) {

                      $scope.cantOpe     = 0;
											$scope.tiempoOP    = 0;
											$scope.piezasHoras = 0;

                                                      // Request error
        });

    

    $scope.totalHoras = function(){

      var sum = 0;

      angular.forEach($scope.boletinOpe,function(value, key){

            sum = sum + parseFloat(value.bol_horas);
        });        
        return sum;



    }

    /**
    * Insertar y actualizar boletín
    */

    $scope.insertarBole = function (boletin) {

      $scope.calcularTurno();


     $http({  method: 'get',
                 url: 'php/servicios/guardarBoletin.php', 
              params: {   
                          operario: numOper,
                          turno : $scope.turno,
                          horas: boletin.horas,
                          piezas: boletin.piezas,
                          coste: $scope.cc, 
                          coste_descrip: $scope.cc_descrip, 
                          ref: $scope.refInt,
                          tiempoOP: $scope.tiempoOP,
                          piezas_hora: $scope.piezasHoras,
                          fecha: $scope.hoyMysql

                      }}).success(function(respuesta) {


                                                     
                                                     // $uibModalInstance.close('Guardado');

                                                     $scope.boletin.horas = "";
                                                     $scope.boletin.piezas = 0;
                                                     $scope.tiempoOP = 0;
                                                     $scope.refInt = "Sin Referencia";
                                                     $scope.cantOpe = 0;
                                                     $scope.piezasHoras = 0;

                                                     $scope.traerBole();


                                                    


                                                  }, function(x) {


                                                    console.log('No se puede actualizar');
                                                      // Request error
        });
     

    }

    /**
    * Modificación de boletin
    */
     
     $scope.modifiBole = function (idbole) {
      
      var id_bol = idbole;

      var modalInstance = $uibModal.open({

                animation: true,
                templateUrl: 'parciales/modalBole.html',
                controller: 'modalBoleCtrl',
                size: 'lg',               
                resolve: {
                  id_bol: function () {return  id_bol;}


                  
              }
                
                
          });
               modalInstance.result.then(function (refe){
               	
               	$scope.refInt      = refe.t_optimo_externa;
               	$scope.cantOpe     = refe.t_optimo_operarios;
               	$scope.tiempoOP    = refe.t_optimo_produccion;
               	$scope.piezasHoras = refe.PH;

                $scope.traerBole();
                
           }); 
      



     }
    
     
     $scope.eliminarBole = function(id){

       $http({  method: 'get',

            url: 'php/servicios/eliminarBole.php', 

            params: {

            idBole: id

            }}).success(function(respuesta) {

              if(respuesta.err === false){

                swal('Registro eliminado');

                $scope.traerBole();



              }else{

                swal("Oops...", "A ocurrido un error !!!", "error");
              }

            }, function(x) {

             });



     }
     /**
     * escoger valor del select
     */

     $scope.cambiarCC = function(cc) {

       $scope.cc = cc;
      
       if (cc == '061') {
         $scope.refInt         = 'Conformar';
         $scope.cantOpe        = 0;
         $scope.tiempoOP       = 0;
         $scope.piezasHoras    = 0;
         $scope.boletin.piezas = 0;

       }else if (cc == '062' || cc == '060' || cc == '032' || cc == '030') {

         //$scope.refInt         = 'Escoja Referencia';
         $scope.boletin.piezas = '';

       }else if (cc != '062' || cc != '060' || cc != '032' || cc != '030') {
        
         $scope.refInt         = 'Sin Referencia';
         $scope.cantOpe        = 0;
         $scope.tiempoOP       = 0;
         $scope.piezasHoras    = 0;
         $scope.boletin.piezas = 0;
       }


    $http.get('php/servicios/traerCoste.php?c=' + $scope.cc).success(function(data){

        if(data.err != undefined){

            window.location = "#/boletin";
            return;

        }else{

          $scope.cc_descrip = data.cc_Descripcion;
          
        }

        
        });
             
     }

     /**
     *centros de coste -- FUTURO -- CONSULTA
     */

    $scope.centroCoste = [
    {coste:'001', descripcion:'Arranque de fabricacion'},
    {coste:'002', descripcion:'Porteria'},
    {coste:'003', descripcion:'Limpieza General'},
    {coste:'004', descripcion:'Auditorias'},
    {coste:'005', descripcion:'Sub-Actividad'},
    {coste:'006', descripcion:'Falta de material'},
    {coste:'007', descripcion:'Taller Mecanico'},
    {coste:'008', descripcion:'Verificacion'},
    {coste:'009', descripcion:'Cambio de Turno/Orden y Limpieza'},
    {coste:'010', descripcion:'Reponer'},
    {coste:'011', descripcion:'Minimeeting'},
    {coste:'012', descripcion:'Reuniones informativas'},
    {coste:'013', descripcion:'Averia Maquinaría'},
    {coste:'014', descripcion:'Cambio de Utillajes o Etiquetas o Tinta'},
    {coste:'015', descripcion:'Lideres'},
    {coste:'017', descripcion:'Cortar tubos/marcajes etc.'},
    {coste:'018', descripcion:'Recuperacion'},
    {coste:'019', descripcion:'Recuperacion bolsa horaria'},
    {coste:'021', descripcion:'ERE'},
    {coste:'030', descripcion:'Verificacion a control con metodo degradado'},
    {coste:'032', descripcion:'Verificacion a control (con tiempo)'},
    {coste:'033', descripcion:'Verificacion sin control (sin tiempo)'},
    {coste:'042', descripcion:'Permisos remunerados'},
    {coste:'043', descripcion:'Reduccion de jornada'},
    {coste:'044', descripcion:'Bolsa de horas'},
    {coste:'045', descripcion:'Causa mayor remunerada'},
    {coste:'046', descripcion:'Formacion'},
    {coste:'047', descripcion:'Visita medica y revisiones anuales'},
    {coste:'049', descripcion:'Horas Reuniones Comite (delegados)'},
    {coste:'050', descripcion:'Bajas por accidente+IT'},
    {coste:'051', descripcion:'Ausencias no remuneradas'},
    {coste:'052', descripcion:'Huelga'},
    {coste:'060', descripcion:'Directas a control con metodo degradado'},
    {coste:'061', descripcion:'Conformar'},
    {coste:'062', descripcion:'Directas a Control'},
    {coste:'063', descripcion:'Directas sin control'},
    {coste:'069', descripcion:'Directas sin control de recambios'},
    {coste:'093', descripcion:'Almacen/Inventario fisico'},
    {coste:'099', descripcion:'Averia General (luz,agua,etc..)'}
  ];

  /**
  *ventana modal para la referencia
  */

  $scope.modalRef = function () {

    var modalInstance = $uibModal.open({

                animation: true,
                templateUrl: 'parciales/modalRef.html',
                controller: 'modalRefCtrl',
                size: 'lg',               
                resolve: {
                  ref: function () {return  $scope.estadoPoka;}
                  
              }
                
                
          });
               modalInstance.result.then(function (refe){
               	
               	$scope.refInt      = refe.t_optimo_externa;
               	$scope.cantOpe     = refe.t_optimo_operarios;
               	$scope.tiempoOP    = refe.t_optimo_produccion;
               	$scope.piezasHoras = refe.PH;

                
           }); 


  }
	



}]);