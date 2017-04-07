var app = angular.module('loginApp',['login.loginService','ngTouch']);

app.controller('mainCtrl', ['$scope','$http','LoginService', function($scope,$http,LoginService){
  
   $scope.invalido = false;
   $scope.cargando = false;
   $scope.mensaje  = "";
   $scope.semaforo = true;
   $scope.semaforo2= false;
   $scope.usuario  ={};
   $scope.datos    = {};
   $scope.usuairios= "";
   $scope.password ="";

   $scope.ingresar = function ( datos ){

   	if(datos.usuario.length != 4){

   		$scope.invalido = true;
   		$scope.mensaje = 'El usuario tiene que tener 4 caracteres';
   		return;

   	}else if (datos.pass.lenght < 3){

   		$scope.invalido = true;
   		$scope.mensaje = 'El password tiene que tener mas de 3 caracteres';
   		return;
   	}

   	$scope.invalido = false;
   	$scope.cargando = true;
   	
   	LoginService.login( datos ).then( function ( data ){

        

   		

         if( data.err ){
            $scope.invalido = true;
            $scope.cargando = false;
            $scope.mensaje  = data.mensaje;
            
         }else{
          
           // console.log( data.mensaje );
          //  console.log( data.rol );
            //console.log( data.url );
            
            
            window.location = (data.url);
         }

   	});

   };
   $scope.abrirUsuario = function (){

    $scope.semaforo = false;
      $scope.semaforo2 = true;

   };



   $scope.guardarUsuario = function (){

      

      $http.post('php/login/usuario.crear.php',$scope.usuarios).success(function(data){

      $scope.invalido = true;
      $scope.mensaje = data.mensaje;
      //console.log(data);
      $scope.semaforo = data.visible2;
      $scope.semaforo2 = data.visible;
       

      });

      

   }

}]);