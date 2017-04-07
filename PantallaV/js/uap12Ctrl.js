app.controller('uap12Ctrl', ['$scope','$interval', function($scope,$interval){
	
	$scope.setActive("mUap12");

    
    $scope.direccionimg = {};

    $scope.direccionimg = "";

    $scope.ocultar = false;
    $scope.ocultarUM = false;
    $scope.ocultarUM2 = false;
    $scope.ocultarUM3 = false;
    $scope.ocultarUM4 = false;
    $scope.ocultarUM5 = false;
    $scope.ocultarUM6 = false;
    $scope.ocultarUM7 = false;


    //funciones para ocultar y mostrar botones
    $scope.ocultarRef1 = function(){

        $scope.ocultar = !$scope.ocultar;
         $scope.ocultar2 = false;
       
    }
     $scope.ocultarRef2 = function(){
        $scope.ocultar = false;
        $scope.ocultar2 = !$scope.ocultar2;
       
    }
    $scope.ocultarrefUM = function(){

        $scope.ocultarUM = !$scope.ocultarUM;
    	$scope.ocultarUM2 = false;
    	$scope.ocultarUM3 = false;
    	$scope.ocultarUM4 = false;
    	$scope.ocultarUM5 = false;
    	$scope.ocultarUM6 = false;
    	$scope.ocultarUM7 = false;

    }
    $scope.ocultarrefUM2 = function(){
       
    	$scope.ocultarUM = false;
    	$scope.ocultarUM2 = !$scope.ocultarUM2;
    	$scope.ocultarUM3 = false;
    	$scope.ocultarUM4 = false;
    	$scope.ocultarUM5 = false;
    	$scope.ocultarUM6 = false;
    	$scope.ocultarUM7 = false;

    }
    $scope.ocultarrefUM3 = function(){
       
    	$scope.ocultarUM = false;
    	$scope.ocultarUM2 = false;
    	$scope.ocultarUM3 = !$scope.ocultarUM3;
    	$scope.ocultarUM4 = false;
    	$scope.ocultarUM5 = false;
    	$scope.ocultarUM6 = false;
    	$scope.ocultarUM7 = false;

    }
    $scope.ocultarrefUM4 = function(){
       
    	$scope.ocultarUM = false;
    	$scope.ocultarUM2 = false;
    	$scope.ocultarUM3 = false
    	$scope.ocultarUM4 = !$scope.ocultarUM4;
    	$scope.ocultarUM5 = false;
    	$scope.ocultarUM6 = false;
    	$scope.ocultarUM7 = false;

    }
    $scope.ocultarrefUM5 = function(){
       
    	$scope.ocultarUM = false;
    	$scope.ocultarUM2 = false;
    	$scope.ocultarUM3 = false
    	$scope.ocultarUM4 = false;
    	$scope.ocultarUM5 = !$scope.ocultarUM5;
    	$scope.ocultarUM6 = false;
    	$scope.ocultarUM7 = false;

    }
    $scope.ocultarrefUM6 = function(){
       
    	$scope.ocultarUM = false;
    	$scope.ocultarUM2 = false;
    	$scope.ocultarUM3 = false
    	$scope.ocultarUM4 = false;
    	$scope.ocultarUM5 = false;
    	$scope.ocultarUM6 = !$scope.ocultarUM6;
    	$scope.ocultarUM7 = false;

    }
    $scope.ocultarrefUM7 = function(){
       
    	$scope.ocultarUM = false;
    	$scope.ocultarUM2 = false;
    	$scope.ocultarUM3 = false
    	$scope.ocultarUM4 = false;
    	$scope.ocultarUM5 = false;
    	$scope.ocultarUM6 = false;
    	$scope.ocultarUM7 = !$scope.ocultarUM6;

    }


    //funciones para mostrar

    $scope.abrir1 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FICF.jpg";


    }
     $scope.abrir2 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FICA.jpg";


    }
     $scope.abrir3 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FIPE-642.jpg";


    }

     $scope.abrir4 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-DSPR-642.jpg";


    }
    
    $scope.abrirCriterios5 = function() {

        
    $scope.direccionimg = "";


    }
    $scope.abrir6 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FIPE-1010.jpg";


    }
    $scope.abrir7 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-DSPR-1010.jpg";


    }
    $scope.abrirCriterios8 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-CRAU-1010.jpg";


    }
    $scope.abrir9 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FIPE-1012.jpg";


    }
    $scope.abrir10 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-DSPR-1012.jpg";


    }
    $scope.abrirCriterios11 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-CRAU-1012.jpg";


    }
    $scope.abrir12 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FIPE-1014.jpg";


    }
    $scope.abrir13 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-DSPR-1014.jpg";


    }
    $scope.abrirCriterios14 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-CRAU-1014.jpg";


    }
    $scope.abrir15 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FIPE-1015.jpg";


    }
    $scope.abrir16 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-DSPR-1015.jpg";


    }
    $scope.abrirCriterios17 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-CRAU-1015.jpg";


    }
    $scope.abrir18 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-FIPE-1016.jpg";


    }
    $scope.abrir19 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-DSPR-1016.jpg";


    }
    $scope.abrirCriterios20 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-CRAU-1016.jpg";


    }
    $scope.abrir22 = function() {

        
    $scope.direccionimg = "img/refe/166714557R-DSPR-1321.jpg";


    }
    $scope.abrir23 = function() {

        
    $scope.direccionimg = "img/refe/164464EB0B-FICF.jpg";


    }
    $scope.abrir24 = function() {

        
    $scope.direccionimg = "img/refe/164464EB0B-FICA.jpg";


    }
    $scope.abrir25 = function() {

        
    $scope.direccionimg = "img/refe/164464EB0B-rusia-FICF.jpg";


    }
    $scope.abrir26 = function() {

        
    $scope.direccionimg = "img/refe/164464EB0B-FIPE-1257.jpg";


    }
    $scope.abrir27 = function() {

        
    $scope.direccionimg = "img/refe/164464EB0B-DSPR-1257.jpg";


    }
     $scope.abrirCriterios28 = function() {

        
    $scope.direccionimg = "";


    }
     $scope.abrirCriterios22 = function() {

        
    $scope.direccionimg = "";


    }
   
   
    


}]);