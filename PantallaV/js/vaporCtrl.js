app.controller('vaporCtrl', ['$scope','$interval','$uibModal', '$log','pdfDelegate','$http', function($scope,$interval,$uibModal, $log,pdfDelegate,$http){
	
	$scope.setActive("mVapor");

	$scope.activo = "";
    $scope.estado = "poka_yoke_verde";

    $scope.pdfUrl = '';
   // $scope.pdfUrl="";
    

    $scope.poka_mensaje = "POKA - YOKE Pendiente de Validar"

    //$scope.direccionimg = {};

    $scope.clase = "pdfVisor"

    //variable para saber que referencia estan trabajando y um

    $scope.referencia = "";
    $scope.UM = "";

    $scope.direccionimg = "";

    $scope.ocultarM    = false;
    $scope.ocultarRetT = false;
    $scope.ocultarBT   = false;
    $scope.ocultarAliT = false;
    $scope.ocultarAliM = false;
    $scope.ocultarRetM = false;
    $scope.ocultarBM   = false;
    $scope.ocultarM    = false;
    $scope.ocultarT    = false;
    $scope.ocultarMetodoG = false;
    $scope.ocultarH = false;
    

    $scope.ocultar = false;
    $scope.ocultar2 = false;
    $scope.ocultar3 = false;
    $scope.ocultar4 = false;
    $scope.ocultar5 = false;
    $scope.ocultar6 = false;
    $scope.ocultar7 = false;
    $scope.ocultar8 = false; 
    $scope.ocultar9 = false;
    $scope.ocultar10 = false;
    $scope.ocultar11 = false;
    $scope.ocultar12 = false;
    $scope.ocultar13 = false;
    $scope.ocultar14 = false;
    $scope.ocultar15 = false;
    $scope.ocultar16 = false;
    $scope.ocultar17 = false;
    $scope.ocultar18 = false;

    
     $scope.referencia = "";
     $scope.UM = ""

    $scope.ocultarH60A = function(){

        $scope.ocultarH = !$scope.ocultarH;
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
    




     $scope.ocultarRef1 = function(refe){

        $scope.referencia = refe;

        $scope.ocultar = !$scope.ocultar;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       


    

    }
    $scope.ocultarRef2 = function(refe){

        $scope.referencia = refe;

        $scope.ocultar = false;
        $scope.ocultar2 = !$scope.ocultar2;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
    $scope.ocultarRef3 = function(refe){

        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = !$scope.ocultar3;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;

    }

    $scope.ocultarRef4 = function(refe){

        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = !$scope.ocultar4;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
      
 
    }

        $scope.ocultarRef5 = function(refe){

         $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = !$scope.ocultar5;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       
        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;

   

    }

        $scope.ocultarRef6 = function(refe){

        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = !$scope.ocultar6;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
  

    }

    $scope.ocultarRef7 = function(refe){

        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = !$scope.ocultar7;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
  

    }

        $scope.ocultarRef8 = function(refe){

         $scope.referencia = refe;   

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = !$scope.ocultar8;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;

    }

    $scope.ocultarRef9 = function(refe){

        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = !$scope.ocultar9;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       
        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;

      
    }
    $scope.ocultarRef10 = function (refe) {
     
      $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar11 = false;
        $scope.ocultar10 = !$scope.ocultar10;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
      

    }
    $scope.ocultarRef11 = function (refe) {
     
      $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = !$scope.ocultar11;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }

        $scope.ocultarRef12 = function (refe) {
     
        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = !$scope.ocultar12;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
        $scope.ocultarRef13 = function (refe) {
     
        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = !$scope.ocultar13;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
     $scope.ocultarRef14 = function (refe) {
     
        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = !$scope.ocultar14;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
    $scope.ocultarRef15 = function (refe) {
     
        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = !$scope.ocultar15;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
    $scope.ocultarRef16 = function (refe) {
     
        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = !$scope.ocultar16;
        $scope.ocultar17 = false;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
    $scope.ocultarRef17 = function (refe) {
     
        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = !$scope.ocultar17;
        $scope.ocultar18 = false;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
    $scope.ocultarRef18 = function (refe) {
     
        $scope.referencia = refe;

        
        $scope.ocultar = false;
        $scope.ocultar2 = false;
        $scope.ocultar3 = false;
        $scope.ocultar4 = false;
        $scope.ocultar5 = false;
        $scope.ocultar6 = false;
        $scope.ocultar7 = false;
        $scope.ocultar8 = false;
        $scope.ocultar9 = false;
        $scope.ocultar10 = false;
        $scope.ocultar11 = false;
        $scope.ocultar12 = false;
        $scope.ocultar13 = false;
        $scope.ocultar14 = false;
        $scope.ocultar15 = false;
        $scope.ocultar16 = false;
        $scope.ocultar17 = false;
        $scope.ocultar18 = !$scope.ocultar18;
         $scope.ocultarH = false;
       

        $scope.ocultarM    = false;
        $scope.ocultarT    = false;
        $scope.ocultarMetodoG =false;
       

    }
    $scope.ocultarU1 = function(um){

    $scope.UM = um;
    
    $scope.ocultar1U = !$scope.ocultar1U;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;
    $scope.ocultarMetodoG = false;

    }

    $scope.ocultarU2 = function(um){

    $scope.UM = um;   

   $scope.ocultar1U = false;
    $scope.ocultar2U = !$scope.ocultar2U;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;

    }
    $scope.ocultarU3 = function(um){

    $scope.UM = um;   
    
   $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = !$scope.ocultar3U;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;

    }
      $scope.ocultarU4 = function(um){

    $scope.UM = um;   
    
    $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = !$scope.ocultar4U;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;

    }
      $scope.ocultarU5 = function(um){

    $scope.UM = um;   
    
    $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = !$scope.ocultar5U;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;

    }
      $scope.ocultarU6 = function(um){

    $scope.UM = um;   
    
    $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = !$scope.ocultar6U;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;

    }
      $scope.ocultarU7 = function(um){

    $scope.UM = um;   
    
   $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = !$scope.ocultar7U;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;

    }
      $scope.ocultarU8 = function(um){

    $scope.UM = um;   
    
    $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = !$scope.ocultar8U;
    $scope.ocultar9U = false;
    $scope.ocultar10U = false;

    }
      $scope.ocultarU9 = function(um){

    $scope.UM = um;   
    
    $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = !$scope.ocultar9U;
    $scope.ocultar10U = false;

    }
      $scope.ocultarU10 = function(um){

    $scope.UM = um;   
    
    $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;
    $scope.ocultar10U = !$scope.ocultar10U;

    }

    $scope.ocultarMetodoGe = function(){

    $scope.ocultarMetodoG = !$scope.ocultarMetodoG;
    $scope.ocultar1U = false;
    $scope.ocultar2U = false;
    $scope.ocultar3U = false;
    $scope.ocultar4U = false;
    $scope.ocultar5U = false;
    $scope.ocultar6U = false;
    $scope.ocultar7U = false;
    $scope.ocultar8U = false;
    $scope.ocultar9U = false;

    }

    //Metodos para mostrar botones principales (Optimizado 2.0)

    $scope.ocultarMet = function(){
    
    $scope.ocultarM = !$scope.ocultarM;
    $scope.ocultarT = false;

    }

    $scope.ocultarTiempo = function(){
    
    $scope.ocultarT = !$scope.ocultarT;
    $scope.ocultarM = false;
     

    }

    $scope.ocultarAlimentacionM = function(){

      $scope.ocultarAliM = !$scope.ocultarAliM;
      $scope.ocultarRetM = false;
      $scope.ocultarBM = false;

    }

    $scope.ocultarRetornoM = function(){

      $scope.ocultarRetM = !$scope.ocultarRetM;
      $scope.ocultarBM = false;
      $scope.ocultarAliM = false;

    }

    $scope.ocultarBatM = function(){

      $scope.ocultarBM = !$scope.ocultarBM;
      $scope.ocultarRetM = false;
      $scope.ocultarAliM = false;


    }

    $scope.ocultarAlimentacionT = function(){

      $scope.ocultarAliT = !$scope.ocultarAliT;
      $scope.ocultarRetT = false;
      $scope.ocultarBT = false;

    }

    $scope.ocultarRetornoT = function(){

      $scope.ocultarRetT = !$scope.ocultarRetT;
      $scope.ocultarBT = false;
      $scope.ocultarAliT = false;

    }

    $scope.ocultarBatT = function(){

      $scope.ocultarBT = !$scope.ocultarBT;
      $scope.ocultarRetT = false;
      $scope.ocultarAliT = false;


    }


    
    //funciones para mostrar ficheros ( implementar PDF ¿ 01/06/2016 ?)

    $scope.abrirCriterios = function() {

        
    $scope.direccionimg = "img/refe/No.jpg";
    $scope.clase = "pdfVisor";


    }
   

    $scope.abrirDoc = function (valor) {



		$scope.pdfUrl =pdfDelegate.load("img/pdf/"+ valor +".pdf");
        //$scope.direccionimg = "img/refe/"+ valor +".jpg";
        //$scope.clase = "pdfVisor";

    }
    $scope.abrirDoc2 = function (valor) {


        $scope.direccionimg = "img/refe/"+ valor +".jpg";
        $scope.clase = "pdfVisorpeque";

    }

    $scope.abrirDocM = function (valor) {


        $scope.direccionimg = "img/refe/"+ valor +".jpg";
        $scope.clase = "metodo";

    }

       $scope.openModalCheck = function(){


        if ( $scope.UM == "" || $scope.referencia == "" ){

          swal("Por Favor, Escoja una Referencia y una UM");

                
                
      }else{

        swal({   title: "Esta Usted Trabajando  en :", 
        text: "La  " + $scope.UM + " Y en la referencia " + $scope.referencia, 
        type: "warning", 
        showCancelButton: true,   
        confirmButtonColor: "#088A08",  
        confirmButtonText: "SÍ , ES CORRECTO",  
        closeOnConfirm: true }, function(){ 

            var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'parciales/modalCheck.html',
                controller: 'modalCheckCtrl',
                //windowClass: 'app-modal-window',
                size: 'lg',
                
                resolve: {
                  umusada: function () {return  $scope.UM;},
                  refe: function () {return $scope.referencia;}
              }
                
                
          });
               modalInstance.result.then(function (changed_threshold){
                $scope.threshold = changed_threshold;
                
                
           }); 

        });

        
               
       };

       // $scope.UM         = "";
       // $scope.referencia = "";

      }

      $scope.abrirPoka = function (){
        
        

        var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'parciales/pokayoke.html',
                controller: 'pokayokeCtrl',
                //windowClass: 'app-modal-window',
                size: 'lg',               
                resolve: {
                  pokayo: function () {return  $scope.estadoPoka;}
                  
              }
                
                
          });
               modalInstance.result.then(function (pokayoke){

                $scope.estadoPoka = pokayoke;

                    if( $scope.estadoPoka == "nok"){
                         $scope.estado = "poka_yoke_rojo";
                         $scope.poka_mensaje = "POKA - YOKE ERRONEO AVISAR AL LIDER";
                    }else{
                         $scope.estado = "poka_yoke_verde";
                         $scope.poka_mensaje = "POKA - YOKE VALIDADO";
                    }


                
           }); 
      }

      $scope.openModalbolten = function (){

        if ($scope.referencia == ""){

            swal("Escoja un referencia");

        }else{
            window.location = "#/login/"+$scope.referencia;
        }

        
        
      }


    
  

}]);





