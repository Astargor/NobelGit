app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/consultasgenerales',{
			templateUrl: 'parciales/consultasgenerales.html',
			controller: 'consultasgeneralesCtrl'
		})
		.when('/telefonos',{
			templateUrl: 'parciales/telefonos.html',
			controller: 'telefonosCtrl'
		})
		.when('/reservarSala',{
			templateUrl: 'parciales/reservarSala.html',
			controller: 'reservarsalaCtrl'
		})
		.when('/referencias',{
			templateUrl: 'parciales/referencias.html',
			controller: 'referenciasCtrl'
		})
		.when('/tiempos',{
			templateUrl: 'parciales/tiempos_optimos.html',
			controller: 'tiemposCtrl'
		})
		.when('/trabajadores',{
			templateUrl: 'parciales/trabajadores.html',
			controller: 'trabajadoresCtrl'
		})
		.when('/metodos',{
			templateUrl: 'parciales/metodos.html',
			controller: 'metodosCtrl'
		})
		.when('/rendimientos',{
			templateUrl: 'parciales/rendimientos.html',
			controller: 'rendimientosCtrl'
		})
		/*traer varios parametros ejemplo:
		'/referencia/:id_ref_codigo_interno/:ref_externa/:UAP'*/
		.when('/referencia/:ref_externa',{
			templateUrl: 'parciales/referencia.html',
			controller: 'referenciaCtrl'
		})
		.when('/tiempo/:id_t_optimo',{
			templateUrl: 'parciales/tiempos.html',
			controller: 'tiempoCtrl'
		})
		.when('/rendimientosPorRef',{
			templateUrl: 'parciales/rendimientosPorRef.html',
			controller: 'rendimientosPorRefCtrl'
		})
		.when('/rendimientosPorOpe',{
			templateUrl: 'parciales/rendimientosPorOpe.html',
			controller: 'rendimientosPorOpeCtrl'
		})
		
		.when('/revision_bole_metodos',{
			templateUrl: 'parciales/revision_bole_metodos.html',
			controller: 'revision_bole_metodosCtrl'
		})
		.when('/modificarBoletin',{
			templateUrl: 'parciales/modificarBoletin.html',
			controller: 'modificarBoletinCtrl'
		})
		.when('/consultaRendimientos',{
			templateUrl: 'parciales/consulta_rendimientos.html',
			controller: 'consulta_rendimientosCtrl'
		})
		.when('/fichasOpe',{
			templateUrl: 'parciales/fichasOpe.html',
			controller: 'fichasOpeCtrl'
		})
		
		.otherwise({
			redirectTo: '/'
		});


});