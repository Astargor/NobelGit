app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/uap5',{
			templateUrl: 'parciales/uap5.html',
			controller: 'uap5Ctrl'
		})
		.when('/uap12',{
			templateUrl: 'parciales/uap12.html',
			controller: 'uap12Ctrl'
		})
		.when('/vapor',{
			templateUrl: 'parciales/vapor.html',
			controller: 'vaporCtrl'
		})
		.when('/FICF',{
			templateUrl: 'parciales/FICF.html',
			controller: 'ficfCtrl'
		})
		.when('/FICA',{
			templateUrl: 'parciales/FICA.html',
			controller: 'ficaCtrl'
		})
		.when('/login/:referencia',{
			templateUrl: 'parciales/login.html',
			controller: 'loginCtrl'
		})
		.when('/boletin/:operario/:parametro',{
			templateUrl: 'parciales/boletin.html',
			controller: 'boletinCtrl'
		})
		
		.otherwise({
			redirectTo: '/'
		});


});