app.controller('uap5Ctrl', ['$scope','$interval','$uibModal', '$log','pdfDelegate','$filter', function($scope,$interval,$uibModal, $log,pdfDelegate,$filter){
	
	$scope.setActive("mUap5");
    
     // control del pokayoke
    $scope.activo = "";
    $scope.estado = "poka_yoke_gris";
    $scope.tama = 1.5;
    $scope.estadoCheck = "check";
    $scope.estadoCheckLider = "estadoCheckLider";
    $scope.operario = "";
    $scope.hoy = "";
    var contador = 0;
    var inicioCheck = 0;
    $scope.hoyMysql  =  "";
    $scope.semaforo = 0;

    //console.log(navigator.onLine);
    $scope.poka_mensaje = "POKA - YOKE Pendiente de Validar"

    //$scope.direccionimg = {};

    $scope.clase = "pdfVisor"

    $scope.pdfUrl ='';

    //variable para saber que referencia estan trabajando y um

    $scope.referencia = "";
    $scope.UM = "";

    //------------

   

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
    $scope.ocultarMetodoG =false;
    $scope.ocultarGama =false;
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
       $scope.ocultarGama =false;

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
       $scope.ocultarGama =false;


    

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
       $scope.ocultarGama =false;

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
$scope.ocultarGama =false;
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
      $scope.ocultarGama =false;
 
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
$scope.ocultarGama =false;
   

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
  $scope.ocultarGama =false;

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
  $scope.ocultarGama =false;

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
$scope.ocultarGama =false;
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
$scope.ocultarGama =false;
      
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
      $scope.ocultarGama =false;

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
       $scope.ocultarGama =false;

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
       $scope.ocultarGama =false;

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
       
$scope.ocultarGama =false;
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
       $scope.ocultarGama =false;

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
       
$scope.ocultarGama =false;
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
       $scope.ocultarGama =false;

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
       $scope.ocultarGama =false;

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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
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
 $scope.ocultarGama =false;
    }

    //Metodos para mostrar botones principales (Optimizado 2.0)

    $scope.ocultarMet = function(){
    
    $scope.ocultarM = !$scope.ocultarM;
    $scope.ocultarT = false;
 $scope.ocultarGama =false;
    }

    $scope.ocultarTiempo = function(){
    
    $scope.ocultarT = !$scope.ocultarT;
    $scope.ocultarM = false;
      $scope.ocultarGama =false;

    }

    $scope.ocultarAlimentacionM = function(){

      $scope.ocultarAliM = !$scope.ocultarAliM;
      $scope.ocultarRetM = false;
      $scope.ocultarBM = false;
 $scope.ocultarGama =false;
    }

    $scope.ocultarRetornoM = function(){

      $scope.ocultarRetM = !$scope.ocultarRetM;
      $scope.ocultarBM = false;
      $scope.ocultarAliM = false;
 $scope.ocultarGama =false;
    }

    $scope.ocultarBatM = function(){

      $scope.ocultarBM = !$scope.ocultarBM;
      $scope.ocultarRetM = false;
      $scope.ocultarAliM = false;
 $scope.ocultarGama =false;

    }

    $scope.ocultarAlimentacionT = function(){

      $scope.ocultarAliT = !$scope.ocultarAliT;
      $scope.ocultarRetT = false;
      $scope.ocultarBT = false;
 $scope.ocultarGama =false;
    }

    $scope.ocultarRetornoT = function(){

      $scope.ocultarRetT = !$scope.ocultarRetT;
      $scope.ocultarBT = false;
      $scope.ocultarAliT = false;
 $scope.ocultarGama =false;
    }

    $scope.ocultarBatT = function(){

      $scope.ocultarBT = !$scope.ocultarBT;
      $scope.ocultarRetT = false;
      $scope.ocultarAliT = false;
 $scope.ocultarGama =false;

    }
    $scope.ocultarGamas = function(){
        $scope.ocultarGama = !$scope.ocultarGama;
    }

    $scope.abrirDocG = function(va) {

        
   $scope.pdfUrl = pdfDelegate
       .$getByHandle('my-pdf-container')
       .load("img/pdf/"+ va +".pdf");
       // $scope.direccionimg = "img/refe/"+ valor +".jpg";
        $scope.clase = "pdfVisorpeque";

    }
    
    //funciones para mostrar ficheros ( implementar PDF ¿ 01/06/2016 ?)

    $scope.abrirCriterios = function() {

        
    $scope.direccionimg = "img/refe/No.jpg";
    $scope.clase = "pdfVisor";


    }
   

    $scope.abrirDoc = function (valor) {

       $scope.pdfUrl = pdfDelegate
       .$getByHandle('my-pdf-container')
       .load("img/pdf/"+ valor +".pdf");
       // $scope.direccionimg = "img/refe/"+ valor +".jpg";
        $scope.clase = "pdfVisor3";
       

    }
    $scope.abrirDoc2 = function (valor) {

        $scope.pdfUrl = pdfDelegate.load("img/pdf/"+ valor +".pdf");
       // $scope.direccionimg = "img/refe/"+ valor +".jpg";
        $scope.clase = "pdfVisorpeque";

    }

    $scope.abrirDocM = function (valor) {

        $scope.pdfUrl = pdfDelegate.load("img/pdf/"+ valor +".pdf");
        //$scope.direccionimg = "img/refe/"+ valor +".jpg";
        $scope.clase = "metodo";

    }

       $scope.openModalCheck = function(){

       //console.log($scope.estadoCheck);

       if($scope.estadoCheck == "checkVerde" || $scope.estadoCheck == "checkRojo"){
             
             $scope.estadoCheck = "check" 
             inicioCheck = 0;
             contador = 0;

       }else{
             
             inicioCheck = 1;
       
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
                          modalInstance.result.then(function (ope){
                            //recogemnos todos los datos en un objeto scope
                            $scope.resultado = ope;

                          
                             //sacamos todos los valores por separado
                            $scope.operario = $scope.resultado[0].operario;
                            $scope.check1   = $scope.resultado[0].check1;
                            $scope.check2   = $scope.resultado[0].check2;
                            $scope.check3   = $scope.resultado[0].check3;
                            $scope.check4   = $scope.resultado[0].check4;
                            $scope.check5   = $scope.resultado[0].check5;

                            //comprobamos que si algun valor es cero el boton se pondra rojo

                            console.log($scope.operario);

                                    if($scope.operario ==  null){

                                        $scope.estadoCheck = "poka_yoke_gris";
                                        

                                    }
                                    else if($scope.check1 == 0){

                                        $scope.estadoCheck = "checkRojo";

                                    }else if($scope.check2 == 0){

                                        $scope.estadoCheck = "checkRojo";

                                    }else if($scope.check3 == 0){

                                        $scope.estadoCheck = "checkRojo";

                                    }else if($scope.check4 == 0){

                                        $scope.estadoCheck = "checkRojo";

                                    }else if($scope.check5 == 0){

                                        $scope.estadoCheck = "checkRojo";

                                    }else{

                                        $scope.estadoCheck = "checkVerde";

                                    }


           }); 

        });

        
               
       };

       }

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
                  umusada: function () {return  $scope.UM;},
                  refe: function () {return $scope.referencia;}
                  
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
      
      $scope.openModalCheckLider = function (){
         if($scope.estadoCheckLider == "estadoCheckLiderVerde"){
             
             $scope.estadoCheckLider = "estadoCheckLider" 

       }else{
       $scope.calcularTurno();

        var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'parciales/modalCheckLider.html',
                controller: 'modalCheckLiderCtrl',
                //windowClass: 'app-modal-window',
                size: 'lg',               
                resolve: {
                operario: function () {return  $scope.operario;},
                refe: function () {return $scope.referencia;},
                fecha: function () {return $scope.hoyMysql;}
                  
              }
                
                
                
          });
              modalInstance.result.then(function (ope){

               $scope.estadoCheckLider = ope;
                
                
           }); 
          }
      }

      $scope.openModalbolten = function (){

        if ($scope.referencia == ""){

            swal("Escoja un referencia");

        }else{
            window.location = "#/login/"+$scope.referencia;
        }

        
        
      }

       // Funciones para la H60A

    $scope.ocultarH60Aref_1 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_1 = !$scope.ocultarH60A_1;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_9 = false;
                 



    }
    $scope.ocultarH60Aref_2 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_2 = !$scope.ocultarH60A_2;
        $scope.ocultarH60A_1 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_9 = false;



    }
    $scope.ocultarH60Aref_3 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_3 = !$scope.ocultarH60A_3;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_1 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_9 = false;



    }
    $scope.ocultarH60Aref_4 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_4 = !$scope.ocultarH60A_4;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_1 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_9 = false;



    }
    $scope.ocultarH60Aref_5 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_5 = !$scope.ocultarH60A_5;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_1 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_9 = false;



    }
    $scope.ocultarH60Aref_6 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_6 = !$scope.ocultarH60A_6;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_1 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_9 = false;



    }
    $scope.ocultarH60Aref_7 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_7 = !$scope.ocultarH60A_7;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_1 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_9 = false;



    }
    $scope.ocultarH60Aref_8 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_8 = !$scope.ocultarH60A_8;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_1 = false;
        $scope.ocultarH60A_9 = false;



    }
    $scope.ocultarH60Aref_9 = function(ref){

        $scope.referencia = ref;
        $scope.ocultarH60A_9 = !$scope.ocultarH60A_9;
        $scope.ocultarH60A_2 = false;
        $scope.ocultarH60A_3 = false;
        $scope.ocultarH60A_4 = false;
        $scope.ocultarH60A_5 = false;
        $scope.ocultarH60A_6 = false;
        $scope.ocultarH60A_7 = false;
        $scope.ocultarH60A_8 = false;
        $scope.ocultarH60A_1 = false;



    }
    
  $interval( function() { 




    $scope.hora   = $filter('date')(new Date(),'HH:mm');

    //console.log($scope.hora);

    if(($scope.hora >= '14:00') && ($scope.hora <= '14:02')){

     //  $scope.estado = "poka_yoke_gris";
      
       $scope.estadoCheckLider = "estadoCheckLider";
    }
   
    if(($scope.hora >= '06:00') && ($scope.hora <= '06:02')){

     // $scope.estado = "poka_yoke_gris";
       
       $scope.estadoCheckLider = "estadoCheckLider";
    }
     
    if(($scope.hora >= '22:00') && ($scope.hora <= '22:02')){

     //  $scope.estado = "poka_yoke_gris";
      
       $scope.estadoCheckLider = "estadoCheckLider";
    } 
    
    

    //console.log(contador);

   if (inicioCheck == 1){
        
       /* $scope.semaforo = 1;
        $scope.estadoCheck = "checkNaranja";*/



    contador = contador + 1;

        if (contador == 14400){
            contador = 0;
            inicioCheck = 0;
            $scope.semaforo = 1;
            $scope.estadoCheck = "check";
            $scope.operario = "";
        }

    }else{

        if($scope.semaforo == 1){
       
        $scope.estadoCheck = "checkNaranja";
        $scope.semaforo = 2;

        }else if ( $scope.semaforo == 2) { 

        $scope.estadoCheck = "check";
        $scope.semaforo = 1;


        }else{

        $scope.estadoCheck = "check";
        $scope.semaforo = 0;


        }
    }

} , 1000,0 );

  /**
     * funcion calculamos el turno
     */

     $scope.calcularTurno = function () {
     //Sacamos la hora actual del sistema y le damos formato
    $scope.hora  = $filter('date')(new Date(),'HH:mm');    

    //comparamos la hora sacada con la franja horaria de los turnos
    if ($scope.hora > '14:01' && $scope.hora < '22:00'){

      $scope.turno = 'Tarde';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if ($scope.hora > '06:01' && $scope.hora < '14:00'){

      $scope.turno = 'Mañana';
      $scope.hoy = {value: $filter('date')(new Date(),'dd-MM-yyyy')};
      $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if ($scope.hora > '22:01' && $scope.hora < '00:00'){

      $scope.hoy         = $filter('date')(new Date(),'dd-MM-yyyy');
    $scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    


       $scope.turno = 'Noche';

    }
    else if ($scope.hora > '00:01' && $scope.hora < '06:00'){

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


}]);
