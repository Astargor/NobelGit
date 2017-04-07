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
		.when('/supervisor',{
			templateUrl: 'parciales/supervisor.html',
			controller: 'supervisorCtrl'
		})
		.when('/validarBoletin',{
			templateUrl: 'parciales/validarBoletines.html',
			controller: 'validarBoletinesCtrl'
		})
		/*traer varios parametros ejemplo:
		'/referencia/:id_ref_codigo_interno/:ref_externa/:UAP'*/
		.when('/referencia/:ref_externa',{
			templateUrl: 'parciales/referencia.html',
			controller: 'referenciaCtrl'
		})

		.when('/boletinSemanal',{
			templateUrl: 'parciales/boletin_semanal.html',
			controller: 'boletinSemanalCtrl'
		})
		.when('/consultaRendimientos',{
			templateUrl: 'parciales/consulta_rendimientos.html',
			controller: 'consulta_rendimientosCtrl'
		})
		.when('/boletinesmultiples',{
			templateUrl: 'parciales/boletinesmultiples.html',
			controller: 'boletinesmultiplesCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});