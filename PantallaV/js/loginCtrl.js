app.controller('loginCtrl', ['$scope','$interval','$http','$routeParams', function($scope,$interval,$http,$routeParams){
	
  $scope.usuario = {};
  $scope.invalido = true;

  $scope.parametro = $routeParams.referencia;



  $scope.logeo = function () {

    var user = $scope.usuario.operario;
    var pa   = $scope.usuario.pass;

     $http({  method: 'get',
                 url: 'php/servicios/login.php', 
              params: {
                      user: user, 
                      pa: pa }
                       }).success(function(data) {


                        

                        if ( data.err == 1 || data.err == 3 ){

                            swal("El usuario o la contraseña no coinciden");



                        } else {

                           
                            
                            window.location = "#/boletin/" + $scope.usuario.operario + "/" + $scope.parametro;

                        }

                        }, function(x) {
                                                      // Request error
        });


  }



}]);