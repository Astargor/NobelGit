var app = angular.module('NobelApp',['ngRoute','ui.mask','ngTouch','toggle-switch','angularjs-datetime-picker','ui.bootstrap','ngAnimate','pdf','ui.sortable']);


app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.menuSuperior = 'parciales/menu.html';


	$scope.setActive = function(Opcion){

		$scope.mInicio              = "";
		$scope.mLogin               = "";
		$scope.mConsultasgenerales  = "";
		$scope.mDocumentos          = "";
		$scope.mMetodos             = "";
		$scope[Opcion]              = "active";

	}

	

}]);
