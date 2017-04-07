var app = angular.module('NobelApp',['ngRoute','ui.mask','ngTouch','ui.bootstrap','ngAnimate','toggle-switch','pdf']);


app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.menuSuperior = 'parciales/menu.html';

   //funcion para el menu superior
	$scope.setActive = function(Opcion){
        $scope.mInicio            = "";
		$scope.mUap5              = "";
		$scope.mUap12             = "";
		$scope.mVapor             = "";

		$scope[Opcion]              = "active";

	}

   




}]);


