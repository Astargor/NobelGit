app.controller('nuevoproyectoCtrl', ['$scope','$http','$filter','$uibModal', function($scope,$http,$filter,$uibModal){
	
   $scope.setActive("mMetodos");

   /*

   0 = NO

   1 = SI

   2 = EN CURSO

   3 = NP

   */

   $scope.listaReferencias = "";
   

	$http.get('php/servicios/referenciasProyectos.php').success(function(data){

     $scope.listaReferencias = data;


	});

	
   $scope.versionPro = "";
   $scope.ocultar = false;
   $scope.botonNuevo = true;
   $scope.botonActualiza = false;
   $scope.ocultaruap = true;
   $scope.ocultaruap2 = false;
   $scope.proyecto = {};
   $scope.frase ='RECUPERAR PROYECTO';
   $scope.actualizacion = "PROYECTO NUEVO";
   $scope.cambiosRealizados = "";
   $scope.UapEle = "";
   $scope.RefExtEle = "";
   $scope.RefIntEle = "";


    $scope.verRefeBBDD = function(){

 

	$http.get('php/servicios/referencias.php').success(function(data){

     $scope.refesBBDD = data;
     $scope.semaforo2 = 0;

 

      angular.forEach($scope.refesBBDD, function(value, key){


		    	 $scope.result = angular.equals($scope.refExt, value.ref_externa);

		    		

		    	 if ( $scope.result == true) {

		    	 	$scope.semaforo2 = 1;
		    	 	

		    	 }	    

		    
		    	
		   		 });

      if($scope.semaforo2 == 0){

          swal({   title: "Esta Referencia No existe en la base de datos !!!",   
          	       text: "Deseas Crearla ???",   
          	       type: "success",   
          	       showCancelButton: true,   
          	       confirmButtonColor: "#DD6B55",   
          	       confirmButtonText: "Sí, crearla !",   
          	       closeOnConfirm: true }, 

          	       function(){  

          	       	$http({  method: 'get',
	                 url: 'php/servicios/insertarReferencia.php', 
	             	 params: {

	              	    refeExt:$scope.RefExtEle,
	              	    refeInt:$scope.RefIntEle,
	              	    UAP:$scope.UapEle
	              	    

                  		}
                       }).success(function(respuesta) {



                                                   console.log(respuesta);


                                                   


                                                
                                                  }, function(x) {

                                                  	console.log(x);

                                                      // Request error
        					}); 


                         	
			$http({  method: 'get',
	                 url: 'php/servicios/insertarReferencia_MET.php', 
	              params: {
	              	    refeExt:$scope.RefExtEle,
	              	    UAP:$scope.UapEle

                  		}
                       }).success(function(respuesta) {

                                                   // $scope.listadoRendimiento = respuesta;

                                                   console.log(respuesta);

                                                   $scope.UapEle = "";
												   $scope.RefExtEle = "";
												   $scope.RefIntEle = "";
                                                
                                                  }, function(x) {

                                                  	console.log(x);

                                                      // Request error
        }); 


          	       	 });

      }


	});




} 

  
   $scope.proyectoActualizar = function(uap,refe){


    
   	$scope.uaps = uap;
   	$scope.re = refe;


   

   
   swal({   title: "Quiere Cambiar la Versión??",
             text: "La version aumentara en 1",   
             type: "warning",   
             showCancelButton: true,   
             confirmButtonColor: "#DD6B55",   
             confirmButtonText: "Sí",   
             cancelButtonText: "No",   
             closeOnConfirm: false,   
             closeOnCancel: false }, 
             function(isConfirm){  

             	if (isConfirm) { 



             	$scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd HH:mm');

             	$scope.compararVersion(1);
			$http({  method: 'get',
	                 url: 'php/servicios/proyectoActualizar.php', 
	              params: {
	              	    cambios:$scope.cambiosRealizados,
	              	    version:$scope.versionPro,
	              	    refeExt:$scope.re,
	              	    UAP:$scope.uaps,
	              	    fecha:$scope.hoyMysql,
	                    radioModelCajonera:$scope.radioModelCajonera,
					   	radioModelCajonera2:$scope.radioModelCajonera2,
					   	radioModel3:$scope.radioModel3,
					   	radioModel4:$scope.radioModel4,
					   	radioModel:$scope.radioModel,
					   	radioModelFICA:$scope.radioModelFICA,
					   	radioModelLAYOUT:$scope.radioModelLAYOUT,
					   	radioModelFIPE:$scope.radioModelFIPE,
					   	radioModelMYT:$scope.radioModelMYT,
					   	radioModelDSPR:$scope.radioModelDSPR,
					   	radioModelPdfFicf:$scope.radioModelPdfFicf,
					   	radioModelPdfFica:$scope.radioModelPdfFica,
					   	radioModelPdfMyt:$scope.radioModelPdfMyt,  	
					   	radioModel5:$scope.radioModel5,
					   	radioModel6:$scope.radioModel6,
					   	radioModel7:$scope.radioModel7,
					   	radioModel8:$scope.radioModel8,
					   	radioModel9:$scope.radioModel9,
					   	radioModel10:$scope.radioModel10,
					   	radioModel11:$scope.radioModel11,
					   	radioModel12:$scope.radioModel12,
					   	radioModel13:$scope.radioModel13,
					   	radioModel14:$scope.radioModel14,
					   	radioModel15:$scope.radioModel15,
					   	radioModel16:$scope.radioModel16,
					   	radioModel18:$scope.radioModel18,
					   	radioModel19:$scope.radioModel19,
					   	radioModel20:$scope.radioModel20,
					   	radioModel21:$scope.radioModel21,
					   	radioModel22:$scope.radioModel22,
					   	radioModel23:$scope.radioModel23,
					   	radioModel24:$scope.radioModel24,
					   	radioModel25:$scope.radioModel25,
					   	radioModel26:$scope.radioModel26,
					   	radioModel27:$scope.radioModel27,
					   	radioModel28:$scope.radioModel28,
					   	CajoneraComent:$scope.CajoneraComent,
					    CajoneraComent2:$scope.CajoneraComent2,
					    Coment3:$scope.Coment3,
					    Coment4:$scope.Coment4,
					 	FICFComent:$scope.FICFComent,
					    FICAComent:$scope.FICAComent,
					    LAYOUTComent:$scope.LAYOUTComent,
					    MYTComent:$scope.MYTComent,
					    FIPEComent:$scope.FIPEComent,
					    DSPRComent:$scope.DSPRComent,
					    Coment5:$scope.Coment5,
					    Coment6:$scope.Coment6,
					    Coment7:$scope.Coment7,
					    Coment8:$scope.Coment8,
					    Coment9:$scope.Coment9,
					    Coment10:$scope.Coment10,
					    Coment11:$scope.Coment11,
					    Coment12:$scope.Coment12,
					    Coment13:$scope.Coment13,
					    Coment14:$scope.Coment14,
					    Coment15:$scope.Coment15,
					    Coment16:$scope.Coment16,
					    Coment18:$scope.Coment18,
					   	Coment19:$scope.Coment19,
					   	Coment20:$scope.Coment20,
					   	Coment21:$scope.Coment21,
					   	Coment22:$scope.Coment22,
					   	Coment23:$scope.Coment23,
					    Coment24:$scope.Coment24,
					    Coment25:$scope.Coment25,
					    Coment26:$scope.Coment26,
					    Coment27:$scope.Coment27,
					    Coment28:$scope.Coment28

                  		}
                       }).success(function(respuesta) {

                                                   // $scope.listadoRendimiento = respuesta;

                                                   console.log(respuesta);

                                                    //$scope.proyecnuevo();
													//$scope.botones();
													//$scope.traerRefes();
                                                    //$scope.semaforo = 0;
                                                
                                                  }, function(x) {

                                                  	console.log(x);

                                                      // Request error
        }); 

             		




             	  swal("Actualizado", "Version Y Proyecto Actualizado.", "success"); 

             	  } 
             	else {   

             		$scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd HH:mm');

             		$scope.compararVersion(0);

             		$http({  method: 'get',
	                 url: 'php/servicios/proyectoActualizar.php', 
	              params: {
	              	    cambios:$scope.cambiosRealizados,
	              	    version:$scope.versionPro,
	              	    refeExt:$scope.re,
	              	    UAP:$scope.uaps,
	              	    fecha:$scope.hoyMysql,
	                    radioModelCajonera:$scope.radioModelCajonera,
					   	radioModelCajonera2:$scope.radioModelCajonera2,
					   	radioModel3:$scope.radioModel3,
					   	radioModel4:$scope.radioModel4,
					   	radioModel:$scope.radioModel,
					   	radioModelFICA:$scope.radioModelFICA,
					   	radioModelLAYOUT:$scope.radioModelLAYOUT,
					   	radioModelFIPE:$scope.radioModelFIPE,
					   	radioModelMYT:$scope.radioModelMYT,
					   	radioModelDSPR:$scope.radioModelDSPR,
					   	radioModelPdfFicf:$scope.radioModelPdfFicf,
					   	radioModelPdfFica:$scope.radioModelPdfFica,
					   	radioModelPdfMyt:$scope.radioModelPdfMyt,  	
					   	radioModel5:$scope.radioModel5,
					   	radioModel6:$scope.radioModel6,
					   	radioModel7:$scope.radioModel7,
					   	radioModel8:$scope.radioModel8,
					   	radioModel9:$scope.radioModel9,
					   	radioModel10:$scope.radioModel10,
					   	radioModel11:$scope.radioModel11,
					   	radioModel12:$scope.radioModel12,
					   	radioModel13:$scope.radioModel13,
					   	radioModel14:$scope.radioModel14,
					   	radioModel15:$scope.radioModel15,
					   	radioModel16:$scope.radioModel16,
					   	radioModel18:$scope.radioModel18,
					   	radioModel19:$scope.radioModel19,
					   	radioModel20:$scope.radioModel20,
					   	radioModel21:$scope.radioModel21,
					   	radioModel22:$scope.radioModel22,
					   	radioModel23:$scope.radioModel23,
					   	radioModel24:$scope.radioModel24,
					   	radioModel25:$scope.radioModel25,
					   	radioModel26:$scope.radioModel26,
					   	radioModel27:$scope.radioModel27,
					   	radioModel28:$scope.radioModel28,
					   	CajoneraComent:$scope.CajoneraComent,
					    CajoneraComent2:$scope.CajoneraComent2,
					    Coment3:$scope.Coment3,
					    Coment4:$scope.Coment4,
					 	FICFComent:$scope.FICFComent,
					    FICAComent:$scope.FICAComent,
					    LAYOUTComent:$scope.LAYOUTComent,
					    MYTComent:$scope.MYTComent,
					    FIPEComent:$scope.FIPEComent,
					    DSPRComent:$scope.DSPRComent,
					    Coment5:$scope.Coment5,
					    Coment6:$scope.Coment6,
					    Coment7:$scope.Coment7,
					    Coment8:$scope.Coment8,
					    Coment9:$scope.Coment9,
					    Coment10:$scope.Coment10,
					    Coment11:$scope.Coment11,
					    Coment12:$scope.Coment12,
					    Coment13:$scope.Coment13,
					    Coment14:$scope.Coment14,
					    Coment15:$scope.Coment15,
					    Coment16:$scope.Coment16,
					    Coment18:$scope.Coment18,
					   	Coment19:$scope.Coment19,
					   	Coment20:$scope.Coment20,
					   	Coment21:$scope.Coment21,
					   	Coment22:$scope.Coment22,
					   	Coment23:$scope.Coment23,
					    Coment24:$scope.Coment24,
					    Coment25:$scope.Coment25,
					    Coment26:$scope.Coment26,
					    Coment27:$scope.Coment27,
					    Coment28:$scope.Coment28

                  		}
                       }).success(function(respuesta) {

                                                   // $scope.listadoRendimiento = respuesta;

                                                   console.log(respuesta);

                                                    //$scope.proyecnuevo();
													//$scope.botones();
													//$scope.traerRefes();
                                                    //$scope.semaforo = 0;
                                                
                                                  }, function(x) {

                                                  	console.log(x);

                                                      // Request error
        }); 


             	  swal("Actualizado", "Proyecto Actualizado.", "error");  

             	   }

             	    });


$scope.cambiosRealizados = "";

   }

   $scope.traerRefes = function(){
   $scope.listaReferencias = "";
   

	$http.get('php/servicios/referenciasProyectos.php').success(function(data){

     $scope.listaReferencias = data;


	});
   }

   $scope.traerProyecto = function(refe){

   	$scope.proyecnuevo();

   	var ref = refe.proy_referencia_externa;

   	 $http.get('php/servicios/traerProyecto.php?c=' + ref).success(function(data){
                 


        	 	$scope.proyecto = data;
        	 	//console.log($scope.proyecto);

        	 	$scope.actualizacion = "Versión :" + $scope.proyecto.ver_version +" , Fecha de Actualización : "
        	 	+$scope.proyecto.ver_fecha+ " , Actualizado por : "+$scope.proyecto.ver_usuario +" , Se Actualizó : "
        	 	+$scope.proyecto.ver_datos_actualilzados;
        	 	$scope.versionPro = $scope.proyecto.ver_version;


                $scope.refExt = $scope.proyecto.proy_referencia_externa;
              	$scope.refInt = $scope.proyecto.proy_referencia_interna;
              	$scope.uapre = $scope.proyecto.proy_uap;



              

                $scope.radioModelCajonera = $scope.proyecto.proy_carpeta_cajonera_ens;
				$scope.radioModelCajonera2 = $scope.proyecto.proy_carpeta_cajonera_estq;
				$scope.radioModel3 = $scope.proyecto.proy_carpeta_carpeta_ens;
				$scope.radioModel4 = $scope.proyecto.proy_carpeta_carpeta_estq;
				$scope.radioModel = $scope.proyecto.proy_carpeta_FICF;
				$scope.radioModelFICA = $scope.proyecto.proy_carpeta_FICA;
				$scope.radioModelLAYOUT = $scope.proyecto.proy_carpeta_LAYOUT;
				$scope.radioModelFIPE = $scope.proyecto.proy_panel_FIPE;
				$scope.radioModelMYT = $scope.proyecto.proy_carpeta_MYT;
				$scope.radioModelDSPR = $scope.proyecto.proy_panel_DSPR;
				$scope.radioModelPdfFicf = $scope.proyecto.proy_pdf_ficf;
				$scope.radioModelPdfFica = $scope.proyecto.proy_pdf_fica;
				$scope.radioModelPdfMyt = $scope.proyecto.proy_pdf_myt;
				$scope.radioModel5 = $scope.proyecto.proy_medios_cubetas;
				$scope.radioModel6 = $scope.proyecto.proy_medios_bacs_accss;
				$scope.radioModel7 = $scope.proyecto.proy_medios_eti_estanteria;
				$scope.radioModel8 = $scope.proyecto.proy_medios_tuberas;
				$scope.radioModel9 = $scope.proyecto.proy_medios_ccbb_maqueta_estq;
				$scope.radioModel10 = $scope.proyecto.proy_kanban_bacs_kanban;
				$scope.radioModel11 = $scope.proyecto.proy_kanban_eti_frontal;
				$scope.radioModel12 = $scope.proyecto.proy_kanban_eti_lateral;
				$scope.radioModel13 = $scope.proyecto.proy_kanban_eti_kanban;
				$scope.radioModel14 = $scope.proyecto.proy_ccbb_materia_prima;
				$scope.radioModel15 = $scope.proyecto.proy_ccbb_trazabilidad;
				$scope.radioModel16 = $scope.proyecto.proy_ccbb_boletin;
				$scope.radioModel18 = $scope.proyecto.proy_mapics_mp;
				$scope.radioModel19 = $scope.proyecto.proy_mapics_se;
				$scope.radioModel20 = $scope.proyecto.proy_mapics_pa;
				$scope.radioModel21 = $scope.proyecto.proy_mapics_proceso;
				$scope.radioModel22 = $scope.proyecto.proy_bbdd_top;
				$scope.radioModel23 = $scope.proyecto.proy_bbdd_bombo;
				$scope.radioModel24 = $scope.proyecto.proy_bbdd_um;
				$scope.radioModel25 = $scope.proyecto.proy_carpeta_conformado;
				$scope.radioModel26 = $scope.proyecto.proy_video_ens;
				$scope.radioModel27 = $scope.proyecto.proy_video_estq;
				$scope.radioModel28 = $scope.proyecto.proy_video_otro;
				$scope.CajoneraComent = $scope.proyecto.comen_carpeta_cajonera_ens;
				$scope.CajoneraComent2 = $scope.proyecto.comen_carpeta_cajonera_estq;
				$scope.Coment3 = $scope.proyecto.comen_carpeta_carpeta_ens;
				$scope.Coment4 = $scope.proyecto.comen_carpeta_carpeta_estq;
				$scope.FICFComent = $scope.proyecto.comen_carpeta_FICF;
				$scope.FICAComent = $scope.proyecto.comen_carpeta_FICA;
				$scope.LAYOUTComent = $scope.proyecto.comen_carpeta_LAYOUT;
				$scope.MYTComent = $scope.proyecto.comen_carpeta_MYT;
				$scope.FIPEComent = $scope.proyecto.comen_panel_FIPE;
				$scope.DSPRComent = $scope.proyecto.comen_panel_DSPR;
				$scope.Coment5 = $scope.proyecto.comen_medios_cubetas;
				$scope.Coment6 = $scope.proyecto.comen_medios_bacs_accss;
				$scope.Coment7 = $scope.proyecto.comen_medios_eti_estanteria;
				$scope.Coment8 = $scope.proyecto.comen_medios_tuberas;
				$scope.Coment9 = $scope.proyecto.comen_medios_ccbb_maqueta_estq;
				$scope.Coment10 = $scope.proyecto.comen_kanban_bacs_kanban;
				$scope.Coment11 = $scope.proyecto.comen_kanban_eti_frontal;
				$scope.Coment12 = $scope.proyecto.comen_kanban_eti_lateral;
				$scope.Coment13 = $scope.proyecto.comen_kanban_eti_kanban;
				$scope.Coment14 = $scope.proyecto.comen_ccbb_materia_prima;
				$scope.Coment15 = $scope.proyecto.comen_ccbb_trazabilidad;
				$scope.Coment16 = $scope.proyecto.comen_ccbb_boletin;
				$scope.Coment18 = $scope.proyecto.comen_mapics_mp;
				$scope.Coment19 = $scope.proyecto.comen_mapics_se;
				$scope.Coment20 = $scope.proyecto.comen_mapics_pa;
				$scope.Coment21 = $scope.proyecto.comen_mapics_proceso;
				$scope.Coment22 = $scope.proyecto.comen_bbdd_top;
				$scope.Coment23 = $scope.proyecto.comen_bbdd_bombo;
				$scope.Coment24 = $scope.proyecto.comen_bbdd_um;
				$scope.Coment25 = $scope.proyecto.comen_cojonera_conformado;
				$scope.Coment26 = $scope.proyecto.comen_videos_ens;
				$scope.Coment27 = $scope.proyecto.comen_videos_estq;
				$scope.Coment28 = $scope.proyecto.comen_videos_otro;

                $scope.botones();


                            },function ( error) {

                              console.error( error);

                            });

   }




   $scope.creacionProyecto = function(){

         $scope.UapEle = $scope.UAP.UAP;
		 $scope.RefExtEle = $scope.refExt;
		 $scope.RefIntEle = $scope.refInt;
         

         $scope.semaforo = 0;

		 $http.get('php/servicios/referenciasProyectos.php').success(function(data){

		     $scope.refeArray = data;


		    angular.forEach($scope.refeArray, function(value, key){


		    	 $scope.result = angular.equals($scope.refExt, value.proy_referencia_externa);

		    		

		    	 if ( $scope.result == true) {

		    	 	$scope.semaforo = 1;
		    	 	swal('Esta Referencia ya tiene proyecto');

		    	 }	    

		    
		    	
		   		 });



   	if($scope.semaforo == 0){

   	$scope.hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd HH:mm');

   	
    $scope.verRefeBBDD();


   	$http({  method: 'get',
                 url: 'php/servicios/proyectoNuevo.php', 
              params: {
              	    refeExt:$scope.refExt,
              	    refInt:$scope.refInt,
              	    UAP:$scope.UAP.UAP,
              	    fecha:$scope.hoyMysql,
                    radioModelCajonera:$scope.radioModelCajonera,
				   	radioModelCajonera2:$scope.radioModelCajonera2,
				   	radioModel3:$scope.radioModel3,
				   	radioModel4:$scope.radioModel4,
				   	radioModel:$scope.radioModel,
				   	radioModelFICA:$scope.radioModelFICA,
				   	radioModelLAYOUT:$scope.radioModelLAYOUT,
				   	radioModelFIPE:$scope.radioModelFIPE,
				   	radioModelMYT:$scope.radioModelMYT,
				   	radioModelDSPR:$scope.radioModelDSPR,
				   	radioModelPdfFicf:$scope.radioModelPdfFicf,
				   	radioModelPdfFica:$scope.radioModelPdfFica,
				   	radioModelPdfMyt:$scope.radioModelPdfMyt,  	
				   	radioModel5:$scope.radioModel5,
				   	radioModel6:$scope.radioModel6,
				   	radioModel7:$scope.radioModel7,
				   	radioModel8:$scope.radioModel8,
				   	radioModel9:$scope.radioModel9,
				   	radioModel10:$scope.radioModel10,
				   	radioModel11:$scope.radioModel11,
				   	radioModel12:$scope.radioModel12,
				   	radioModel13:$scope.radioModel13,
				   	radioModel14:$scope.radioModel14,
				   	radioModel15:$scope.radioModel15,
				   	radioModel16:$scope.radioModel16,
				   	radioModel18:$scope.radioModel18,
				   	radioModel19:$scope.radioModel19,
				   	radioModel20:$scope.radioModel20,
				   	radioModel21:$scope.radioModel21,
				   	radioModel22:$scope.radioModel22,
				   	radioModel23:$scope.radioModel23,
				   	radioModel24:$scope.radioModel24,
				   	radioModel25:$scope.radioModel25,
				   	radioModel26:$scope.radioModel26,
				   	radioModel27:$scope.radioModel27,
				   	radioModel28:$scope.radioModel28,
				   	CajoneraComent:$scope.CajoneraComent,
				    CajoneraComent2:$scope.CajoneraComent2,
				    Coment3:$scope.Coment3,
				    Coment4:$scope.Coment4,
				 	FICFComent:$scope.FICFComent,
				    FICAComent:$scope.FICAComent,
				    LAYOUTComent:$scope.LAYOUTComent,
				    MYTComent:$scope.MYTComent,
				    FIPEComent:$scope.FIPEComent,
				    DSPRComent:$scope.DSPRComent,
				    Coment5:$scope.Coment5,
				    Coment6:$scope.Coment6,
				    Coment7:$scope.Coment7,
				    Coment8:$scope.Coment8,
				    Coment9:$scope.Coment9,
				    Coment10:$scope.Coment10,
				    Coment11:$scope.Coment11,
				    Coment12:$scope.Coment12,
				    Coment13:$scope.Coment13,
				    Coment14:$scope.Coment14,
				    Coment15:$scope.Coment15,
				    Coment16:$scope.Coment16,
				    Coment18:$scope.Coment18,
				   	Coment19:$scope.Coment19,
				   	Coment20:$scope.Coment20,
				   	Coment21:$scope.Coment21,
				   	Coment22:$scope.Coment22,
				   	Coment23:$scope.Coment23,
				    Coment24:$scope.Coment24,
				    Coment25:$scope.Coment25,
				    Coment26:$scope.Coment26,
				    Coment27:$scope.Coment27,
				    Coment28:$scope.Coment28

                  		}
                       }).success(function(respuesta) {

                                                   // $scope.listadoRendimiento = respuesta;

                                                   console.log(respuesta);

                                                    $scope.proyecnuevo();
													$scope.botones();
													$scope.traerRefes();
                                                    $scope.semaforo = 0;

                                                    //swal("PROYECTO CREADO", "Pulse boton para seguir", "success");

                                                    $scope.UAP = null;
													$scope.refExt = "";
													$scope.refInt = "";
                                                
                                                  }, function(x) {

                                                  	console.log(x);

                                                      // Request error
			        });

			}
			   	});

			$scope.semaforo = 0;


			//reiniciamos la uap

			
   }

   





	$scope.recuperarRef = function(){
		$scope.semaforo = 0;

		if ($scope.frase == 'PROYECTO NUEVO'){

			$scope.frase = 'RECUPERAR PROYECTO';
			$scope.ocultaruap = true;
			$scope.ocultaruap2 = false;
			$scope.proyecnuevo();
			$scope.botones();
			

		}else{

            $scope.frase = 'PROYECTO NUEVO';
            $scope.ocultaruap = false;
            $scope.ocultaruap2 = true;
           

		}



        
		$scope.ocultar = !$scope.ocultar;
		$scope.botonNuevo = !$scope.botonNuevo;
		$scope.botonActualiza = !$scope.botonActualiza;

	}


// FUNCIONAMIENTO Y COLORES DE LOS BOTONES NO MODIFICAR NI TOCAR
   $scope.confirmarPdfFicf = function(){

   	if($scope.radioModelPdfFicf == 1){

   		$scope.verdePdfFicf = "btn btn-success";	   	
   	
   }else if($scope.radioModelPdfFicf == null) {

   	    $scope.verdePdfFicf = "btn btn-default";
   }
}

  $scope.confirmarPdfFica = function(){

    	if($scope.radioModelPdfFica == 1){

   		$scope.verdePdfFica = "btn btn-success";	   	
   	
   }else if($scope.radioModelPdfFica == null) {

   	    $scope.verdePdfFica = "btn btn-default";
   }

  }

   $scope.confirmarPdfMyt = function(){
  	
    	if($scope.radioModelPdfMyt == 1){

   		$scope.verdePdfMyt = "btn btn-success";	   	
   	
   }else if($scope.radioModelPdfMyt == null) {

   	    $scope.verdePdfMyt = "btn btn-default";
   }

  }
	

	$scope.confirmarFICF = function(){


		   if($scope.radioModel == 0){

		     $scope.claseverdeFICF = "btn btn-default";
		     $scope.claserojaFICF = "btn btn-danger";
		     $scope.claseamarillaFICF = "btn btn-default";
		     $scope.clasenegroFICF = "btn btn-default";
		     $scope.FICFComentOcultar = false;

		   }else if($scope.radioModel == 1){

		   	$scope.claserojaFICF = "btn btn-default";
		   	$scope.claseverdeFICF  = "btn btn-success";
		   	$scope.claseamarillaFICF = "btn btn-default";
		   	$scope.clasenegroFICF = "btn btn-default";
		   	$scope.FICFComentOcultar = false;
		    

		   }else if($scope.radioModel == 2){

		   	$scope.claseverdeFICF = "btn btn-default";
		    $scope.claserojaFICF = "btn btn-default";
		    $scope.claseamarillaFICF = "btn btn-warning";
		    $scope.clasenegroFICF = "btn btn-default";
		    $scope.FICFComentOcultar = true;




		   }else if($scope.radioModel == 3){

		   	$scope.claseverdeFICF = "btn btn-default";
		    $scope.claserojaFICF = "btn btn-default";
		    $scope.claseamarillaFICF = "btn btn-default";
		    $scope.clasenegroFICF = "btn btn-info";
		    $scope.FICFComentOcultar = false;




		   }
		   
}

$scope.confirmarFICA = function(){


		   if($scope.radioModelFICA == 0){

		     $scope.claseverdeFICA = "btn btn-default";
		     $scope.claserojaFICA = "btn btn-danger";
		     $scope.claseamarillaFICA = "btn btn-default";
		     $scope.clasenegroFICA = "btn btn-default";
		     $scope.FICAComentOcultar = false;

		   }else if($scope.radioModelFICA == 1){

		   	$scope.claserojaFICA = "btn btn-default";
		   	$scope.claseverdeFICA  = "btn btn-success";
		   	$scope.claseamarillaFICA = "btn btn-default";
		   	$scope.clasenegroFICA = "btn btn-default";
		   	$scope.FICAComentOcultar = false;
		    

		   }else if($scope.radioModelFICA == 2){

		   	$scope.claseverdeFICA = "btn btn-default";
		    $scope.claserojaFICA = "btn btn-default";
		    $scope.claseamarillaFICA = "btn btn-warning";
		    $scope.clasenegroFICA = "btn btn-default";
		    $scope.FICAComentOcultar = true;




		   }else if($scope.radioModelFICA == 3){

		   	$scope.claseverdeFICA = "btn btn-default";
		    $scope.claserojaFICA = "btn btn-default";
		    $scope.claseamarillaFICA = "btn btn-defalut";
		    $scope.clasenegroFICA = "btn btn-info";
		    $scope.FICAComentOcultar = false;
		}

		   
}
$scope.confirmarLAYOUT = function(){


		   if($scope.radioModelLAYOUT == 0){

		     $scope.claseverdeLAYOUT = "btn btn-default";
		     $scope.claserojaLAYOUT = "btn btn-danger";
		     $scope.claseamarillaLAYOUT = "btn btn-default";
		     $scope.clasenegroLAYOUT = "btn btn-default";
		     $scope.LAYOUTComentOcultar = false;

		   }else if($scope.radioModelLAYOUT == 1){

		   	$scope.claserojaLAYOUT = "btn btn-default";
		   	$scope.claseverdeLAYOUT  = "btn btn-success";
		   	$scope.claseamarillaLAYOUT = "btn btn-default";
		   	$scope.clasenegroLAYOUT = "btn btn-default";
		   	$scope.LAYOUTComentOcultar = false;
		    

		   }else if($scope.radioModelLAYOUT == 2){

		   	$scope.claseverdeLAYOUT = "btn btn-default";
		    $scope.claserojaLAYOUT = "btn btn-default";
		    $scope.claseamarillaLAYOUT = "btn btn-warning";
		    $scope.clasenegroLAYOUT = "btn btn-default";
		    $scope.LAYOUTComentOcultar = true;




		   }else if($scope.radioModelLAYOUT == 3){

		   	$scope.claseverdeLAYOUT = "btn btn-default";
		    $scope.claserojaLAYOUT = "btn btn-default";
		    $scope.claseamarillaLAYOUT = "btn btn-default";
		    $scope.clasenegroLAYOUT = "btn btn-info";
		    $scope.LAYOUTComentOcultar = false;




		   }
		   
}
$scope.confirmarMYT = function(){


		   if($scope.radioModelMYT == 0){

		     $scope.claseverdeMYT = "btn btn-default";
		     $scope.claserojaMYT = "btn btn-danger";
		     $scope.claseamarillaMYT = "btn btn-default";
		     $scope.clasenegroMYT = "btn btn-default";
		     $scope.MYTComentOcultar = false;

		   }else if($scope.radioModelMYT == 1){

		   	$scope.claserojaMYT = "btn btn-default";
		   	$scope.claseverdeMYT  = "btn btn-success";
		   	$scope.claseamarillaMYT = "btn btn-default";
		   	$scope.clasenegroMYT = "btn btn-default";
		   	$scope.MYTComentOcultar = false;
		    

		   }else if($scope.radioModelMYT == 2){

		   	$scope.claseverdeMYT = "btn btn-default";
		    $scope.claserojaMYT = "btn btn-default";
		    $scope.claseamarillaMYT = "btn btn-warning";
		    $scope.clasenegroMYT = "btn btn-default";
		    $scope.MYTComentOcultar = true;




		   }else if($scope.radioModelMYT == 3){

		   	$scope.claseverdeMYT = "btn btn-default";
		    $scope.claserojaMYT = "btn btn-default";
		    $scope.claseamarillaMYT = "btn btn-default";
		    $scope.clasenegroMYT = "btn btn-info";
		    $scope.MYTComentOcultar = false;
		}
		   
}
$scope.confirmarFIPE = function(){


		   if($scope.radioModelFIPE == 0){

		     $scope.claseverdeFIPE = "btn btn-default";
		     $scope.claserojaFIPE = "btn btn-danger";
		     $scope.claseamarillaFIPE = "btn btn-default";
		     $scope.clasenegroFIPE = "btn btn-default";
		     $scope.FIPEComentOcultar = false;

		   }else if($scope.radioModelFIPE == 1){

		   	$scope.claserojaFIPE = "btn btn-default";
		   	$scope.claseverdeFIPE  = "btn btn-success";
		   	$scope.claseamarillaFIPE = "btn btn-default";
		   	$scope.clasenegroFIPE = "btn btn-default";
		   	$scope.FIPEComentOcultar = false;
		    

		   }else if($scope.radioModelFIPE == 2){

		   	$scope.claseverdeFIPE = "btn btn-default";
		    $scope.claserojaFIPE = "btn btn-default";
		    $scope.claseamarillaFIPE = "btn btn-warning";
		    $scope.clasenegroFIPE = "btn btn-default";
		    $scope.FIPEComentOcultar = true;




		   }else if($scope.radioModelFIPE == 3){

		   	$scope.claserojaFIPE = "btn btn-default";
		   	$scope.claseverdeFIPE  = "btn btn-default";
		   	$scope.claseamarillaFIPE = "btn btn-default";
		   	$scope.clasenegroFIPE = "btn btn-info";
		   	$scope.FIPEComentOcultar = false;
		    

		   }
		   
}
$scope.confirmarDSPR = function(){


		   if($scope.radioModelDSPR == 0){

		     $scope.claseverdeDSPR = "btn btn-default";
		     $scope.claserojaDSPR = "btn btn-danger";
		     $scope.claseamarillaDSPR = "btn btn-default";
		     $scope.clasenegroDSPR = "btn btn-default";
		     $scope.DSPRComentOcultar = false;

		   }else if($scope.radioModelDSPR == 1){

		   	$scope.claserojaDSPR = "btn btn-default";
		   	$scope.claseverdeDSPR = "btn btn-success";
		   	$scope.claseamarillaDSPR = "btn btn-default";
		   	$scope.clasenegroDSPR = "btn btn-default";
		   	$scope.DSPRComentOcultar = false;
		    

		   }else if($scope.radioModelDSPR == 2){

		   	$scope.claseverdeDSPR = "btn btn-default";
		    $scope.claserojaDSPR = "btn btn-default";
		    $scope.claseamarillaDSPR = "btn btn-warning";
		    $scope.clasenegroDSPR = "btn btn-default";
		    $scope.DSPRComentOcultar = true;




		   }else if($scope.radioModelDSPR == 3){

		   	$scope.claserojaDSPR = "btn btn-default";
		   	$scope.claseverdeDSPR = "btn btn-default";
		   	$scope.claseamarillaDSPR = "btn btn-default";
		   	$scope.clasenegroDSPR = "btn btn-info";
		   	$scope.DSPRComentOcultar = false;
		    

		   }
		   
}
$scope.confirmarCajonera = function(){


		   if($scope.radioModelCajonera == 0){

		     $scope.claseverdeCajonera = "btn btn-default";
		     $scope.claserojaCajonera = "btn btn-danger";
		     $scope.claseamarillaCajonera = "btn btn-default";
		     $scope.clasenegroCajonera = "btn btn-default";
		     $scope.CajoneraComentOcultar = false;

		   }else if($scope.radioModelCajonera == 1){

		   	$scope.claserojaCajonera = "btn btn-default";
		   	$scope.claseverdeCajonera = "btn btn-success";
		   	$scope.claseamarillaCajonera = "btn btn-default";
		   	$scope.clasenegroCajonera = "btn btn-default";
		   	$scope.CajoneraComentOcultar = false;
		    

		   }else if($scope.radioModelCajonera == 2){

		   	$scope.claseverdeCajonera = "btn btn-default";
		    $scope.claserojaCajonera = "btn btn-default";
		    $scope.claseamarillaCajonera = "btn btn-warning";
		    $scope.CajoneraComentOcultar = true;

		   }else if($scope.radioModelCajonera == 3){

		   	$scope.claseverdeCajonera = "btn btn-default";
		    $scope.claserojaCajonera = "btn btn-default";
		    $scope.claseamarillaCajonera = "btn btn-default";
		    $scope.clasenegroCajonera = "btn btn-info";
		    $scope.CajoneraComentOcultar = false;




		   }
		   
}
$scope.confirmarCajonera2 = function(){


		   if($scope.radioModelCajonera2 == 0){

		     $scope.claseverdeCajonera2 = "btn btn-default";
		     $scope.claserojaCajonera2 = "btn btn-danger";
		     $scope.claseamarillaCajonera2 = "btn btn-default";
		     $scope.clasenegroCajonera2 = "btn btn-default";
		     $scope.CajoneraComentOcultar2 = false;

		   }else if($scope.radioModelCajonera2 == 1){

		   	$scope.claserojaCajonera2 = "btn btn-default";
		   	$scope.claseverdeCajonera2 = "btn btn-success";
		   	$scope.claseamarillaCajonera2 = "btn btn-default";
		   	$scope.clasenegroCajonera2 = "btn btn-default";
		   	$scope.CajoneraComentOcultar2 = false;
		    

		   }else if($scope.radioModelCajonera2 == 2){

		   	$scope.claseverdeCajonera2 = "btn btn-default";
		    $scope.claserojaCajonera2 = "btn btn-default";
		    $scope.clasenegroCajonera2 = "btn btn-default";
		    $scope.claseamarillaCajonera2 = "btn btn-warning";
		    $scope.CajoneraComentOcultar2 = true;




		   }else if($scope.radioModelCajonera2 == 3){

		   	$scope.claserojaCajonera2 = "btn btn-default";
		   	$scope.claseverdeCajonera2 = "btn btn-default";
		   	$scope.claseamarillaCajonera2 = "btn btn-default";
		   	$scope.clasenegroCajonera2 = "btn btn-info";
		   	$scope.CajoneraComentOcultar2 = false;
		    

		   }
		   
}
$scope.confirmar3 = function(){


		   if($scope.radioModel3 == 0){

		    $scope.claseverde3 = "btn btn-default";
		    $scope.claseroja3 = "btn btn-danger";
		    $scope.claseamarilla3 = "btn btn-default";
		    $scope.clasenegro3 = "btn btn-default";
		    $scope.ComentOcultar3 = false;

		   }else if($scope.radioModel3 == 1){

		   	$scope.claseroja3 = "btn btn-default";
		   	$scope.claseverde3 = "btn btn-success";
		   	$scope.claseamarilla3 = "btn btn-default";
		   	$scope.clasenegro3 = "btn btn-default";
		   	$scope.ComentOcultar3 = false;
		    

		   }else if($scope.radioModel3 == 2){

		   	$scope.claseverde3 = "btn btn-default";
		    $scope.claseroja3 = "btn btn-default";
		    $scope.claseamarilla3 = "btn btn-warning";
		    $scope.clasenegro3 = "btn btn-default";
		    $scope.ComentOcultar3 = true;




		   }else if($scope.radioModel3 == 3){

		   	$scope.claseroja3 = "btn btn-default";
		   	$scope.claseverde3 = "btn btn-default";
		   	$scope.claseamarilla3 = "btn btn-default";
		   	$scope.clasenegro3 = "btn btn-info";
		   	$scope.ComentOcultar3 = false;
		    

		   }
		   
}
$scope.confirmar4 = function(){


		  if($scope.radioModel4 == 0){

		    $scope.claseverde4 = "btn btn-default";
		    $scope.claseroja4 = "btn btn-danger";
		    $scope.claseamarilla4 = "btn btn-default";
		    $scope.clasenegro4 = "btn btn-default";
		    $scope.ComentOcultar4 = false;

		   }else if($scope.radioModel4 == 1){

		   	$scope.claseroja4 = "btn btn-default";
		   	$scope.claseverde4 = "btn btn-success";
		   	$scope.claseamarilla4 = "btn btn-default";
		   	$scope.clasenegro4 = "btn btn-default";
		   	$scope.ComentOcultar4 = false;
		    

		   }else if($scope.radioModel4 == 2){

		   	$scope.claseverde4 = "btn btn-default";
		    $scope.claseroja4 = "btn btn-default";
		    $scope.claseamarilla4 = "btn btn-warning";
		    $scope.clasenegro4 = "btn btn-default";
		    $scope.ComentOcultar4 = true;




		   }else if($scope.radioModel4 == 3){

		   	$scope.claseroja4 = "btn btn-default";
		   	$scope.claseverde4 = "btn btn-default";
		   	$scope.claseamarilla4 = "btn btn-default";
		   	$scope.clasenegro4 = "btn btn-info";
		   	$scope.ComentOcultar4 = false;
		    

		   }
		   
}
$scope.confirmar5 = function(){


		  if($scope.radioModel5 == 0){

		    $scope.claseverde5 = "btn btn-default";
		    $scope.claseroja5 = "btn btn-danger";
		    $scope.claseamarilla5 = "btn btn-default";
		    $scope.clasenegro5 = "btn btn-default";
		    $scope.ComentOcultar5 = false;

		   }else if($scope.radioModel5 == 1){

		   	$scope.claseroja5 = "btn btn-default";
		   	$scope.claseverde5 = "btn btn-success";
		   	$scope.claseamarilla5 = "btn btn-default";
		   	$scope.clasenegro5 = "btn btn-default";
		   	$scope.ComentOcultar5 = false;
		    

		   }else if($scope.radioModel5 == 2){

		   	$scope.claseverde5 = "btn btn-default";
		    $scope.claseroja5 = "btn btn-default";
		    $scope.claseamarilla5 = "btn btn-warning";
		    $scope.clasenegro5 = "btn btn-default";
		    $scope.ComentOcultar5 = true;




		   }else if($scope.radioModel5 == 3){

		   	$scope.claseroja5 = "btn btn-default";
		   	$scope.claseverde5 = "btn btn-default";
		   	$scope.claseamarilla5 = "btn btn-default";
		   	$scope.clasenegro5 = "btn btn-info";
		   	$scope.ComentOcultar5 = false;
		    

		   }
		   
}
$scope.confirmar6 = function(){


		   if($scope.radioModel6 == 0){

		    $scope.claseverde6 = "btn btn-default";
		    $scope.claseroja6 = "btn btn-danger";
		    $scope.claseamarilla6 = "btn btn-default";
		    $scope.clasenegro6 = "btn btn-default";
		    $scope.ComentOcultar6 = false;

		   }else if($scope.radioModel6 == 1){

		   	$scope.claseroja6 = "btn btn-default";
		   	$scope.claseverde6 = "btn btn-success";
		   	$scope.claseamarilla6 = "btn btn-default";
		   	$scope.clasenegro6 = "btn btn-default";
		   	$scope.ComentOcultar6 = false;
		    

		   }else if($scope.radioModel6 == 2){

		   	$scope.claseverde6 = "btn btn-default";
		    $scope.claseroja6 = "btn btn-default";
		    $scope.claseamarilla6 = "btn btn-warning";
		    $scope.clasenegro6 = "btn btn-default";
		    $scope.ComentOcultar6 = true;




		   }else if($scope.radioModel6 == 3){

		   	$scope.claseroja6 = "btn btn-default";
		   	$scope.claseverde6 = "btn btn-default";
		   	$scope.claseamarilla6 = "btn btn-default";
		   	$scope.clasenegro6 = "btn btn-info";
		   	$scope.ComentOcultar6 = false;
		    

		   }
		   
}
$scope.confirmar7 = function(){


		  if($scope.radioModel7 == 0){

		    $scope.claseverde7 = "btn btn-default";
		    $scope.claseroja7 = "btn btn-danger";
		    $scope.claseamarilla7 = "btn btn-default";
		    $scope.clasenegro7 = "btn btn-default";
		    $scope.ComentOcultar7 = false;

		   }else if($scope.radioModel7 == 1){

		   	$scope.claseroja7 = "btn btn-default";
		   	$scope.claseverde7 = "btn btn-success";
		   	$scope.claseamarilla7 = "btn btn-default";
		   	$scope.clasenegro7 = "btn btn-default";
		   	$scope.ComentOcultar7 = false;
		    

		   }else if($scope.radioModel7 == 2){

		   	$scope.claseverde7 = "btn btn-default";
		    $scope.claseroja7 = "btn btn-default";
		    $scope.claseamarilla7 = "btn btn-warning";
		    $scope.clasenegro7 = "btn btn-default";
		    $scope.ComentOcultar7 = true;




		   }else if($scope.radioModel7 == 3){

		   	$scope.claseroja7 = "btn btn-default";
		   	$scope.claseverde7 = "btn btn-default";
		   	$scope.claseamarilla7 = "btn btn-default";
		   	$scope.clasenegro7 = "btn btn-info";
		   	$scope.ComentOcultar7 = false;
		    

		   }
		   
}
$scope.confirmar8 = function(){


		  if($scope.radioModel8 == 0){

		    $scope.claseverde8 = "btn btn-default";
		    $scope.claseroja8 = "btn btn-danger";
		    $scope.claseamarilla8 = "btn btn-default";
		    $scope.clasenegro8 = "btn btn-default";
		    $scope.ComentOcultar8 = false;

		   }else if($scope.radioModel8 == 1){

		   	$scope.claseroja8 = "btn btn-default";
		   	$scope.claseverde8 = "btn btn-success";
		   	$scope.claseamarilla8 = "btn btn-default";
		   	$scope.clasenegro8 = "btn btn-default";
		   	$scope.ComentOcultar8 = false;
		    

		   }else if($scope.radioModel8 == 2){

		   	$scope.claseverde8 = "btn btn-default";
		    $scope.claseroja8 = "btn btn-default";
		    $scope.claseamarilla8 = "btn btn-warning";
		    $scope.clasenegro8 = "btn btn-default";
		    $scope.ComentOcultar8 = true;




		   }else if($scope.radioModel8 == 3){

		   	$scope.claseroja8 = "btn btn-default";
		   	$scope.claseverde8 = "btn btn-default";
		   	$scope.claseamarilla8 = "btn btn-default";
		   	$scope.clasenegro8 = "btn btn-info";
		   	$scope.ComentOcultar8 = false;
		    

		   }
		   
}
$scope.confirmar9 = function(){


		  if($scope.radioModel9 == 0){

		    $scope.claseverde9 = "btn btn-default";
		    $scope.claseroja9 = "btn btn-danger";
		    $scope.claseamarilla9 = "btn btn-default";
		    $scope.clasenegro9 = "btn btn-default";
		    $scope.ComentOcultar9 = false;

		   }else if($scope.radioModel9 == 1){

		   	$scope.claseroja9 = "btn btn-default";
		   	$scope.claseverde9 = "btn btn-success";
		   	$scope.claseamarilla9 = "btn btn-default";
		   	$scope.clasenegro9 = "btn btn-default";
		   	$scope.ComentOcultar9 = false;
		    

		   }else if($scope.radioModel9 == 2){

		   	$scope.claseverde9 = "btn btn-default";
		    $scope.claseroja9 = "btn btn-default";
		    $scope.claseamarilla9 = "btn btn-warning";
		    $scope.clasenegro9 = "btn btn-default";
		    $scope.ComentOcultar9 = true;




		   }else if($scope.radioModel9 == 3){

		   	$scope.claseroja9 = "btn btn-default";
		   	$scope.claseverde9 = "btn btn-default";
		   	$scope.claseamarilla9 = "btn btn-default";
		   	$scope.clasenegro9 = "btn btn-info";
		   	$scope.ComentOcultar9 = false;
		    

		   }
		   
}
$scope.confirmar10 = function(){


		  if($scope.radioModel10 == 0){

		    $scope.claseverde10 = "btn btn-default";
		    $scope.claseroja10 = "btn btn-danger";
		    $scope.claseamarilla10 = "btn btn-default";
		    $scope.clasenegro10 = "btn btn-default";
		    $scope.ComentOcultar10 = false;

		   }else if($scope.radioModel10 == 1){

		   	$scope.claseroja10 = "btn btn-default";
		   	$scope.claseverde10 = "btn btn-success";
		   	$scope.claseamarilla10 = "btn btn-default";
		   	$scope.clasenegro10 = "btn btn-default";
		   	$scope.ComentOcultar10 = false;
		    

		   }else if($scope.radioModel10 == 2){

		   	$scope.claseverde10 = "btn btn-default";
		    $scope.claseroja10 = "btn btn-default";
		    $scope.claseamarilla10 = "btn btn-warning";
		    $scope.clasenegro10 = "btn btn-default";
		    $scope.ComentOcultar10 = true;




		   }else if($scope.radioModel10 == 3){

		   	$scope.claseroja10 = "btn btn-default";
		   	$scope.claseverde10 = "btn btn-default";
		   	$scope.claseamarilla10 = "btn btn-default";
		   	$scope.clasenegro10 = "btn btn-info";
		   	$scope.ComentOcultar10 = false;
		    

		   }
		   
}
$scope.confirmar11 = function(){


		 if($scope.radioModel11 == 0){

		    $scope.claseverde11 = "btn btn-default";
		    $scope.claseroja11 = "btn btn-danger";
		    $scope.claseamarilla11 = "btn btn-default";
		    $scope.clasenegro11 = "btn btn-default";
		    $scope.ComentOcultar11 = false;

		   }else if($scope.radioModel11 == 1){

		   	$scope.claseroja11 = "btn btn-default";
		   	$scope.claseverde11 = "btn btn-success";
		   	$scope.claseamarilla11 = "btn btn-default";
		   	$scope.clasenegro11 = "btn btn-default";
		   	$scope.ComentOcultar11 = false;
		    

		   }else if($scope.radioModel11 == 2){

		   	$scope.claseverde11 = "btn btn-default";
		    $scope.claseroja11 = "btn btn-default";
		    $scope.claseamarilla11 = "btn btn-warning";
		    $scope.clasenegro11 = "btn btn-default";
		    $scope.ComentOcultar11 = true;




		   }else if($scope.radioModel11 == 3){

		   	$scope.claseroja11 = "btn btn-default";
		   	$scope.claseverde11 = "btn btn-default";
		   	$scope.claseamarilla11 = "btn btn-default";
		   	$scope.clasenegro11 = "btn btn-info";
		   	$scope.ComentOcultar11 = false;
		    

		   }
		   
}
$scope.confirmar12 = function(){


		  if($scope.radioModel12 == 0){

		    $scope.claseverde12 = "btn btn-default";
		    $scope.claseroja12 = "btn btn-danger";
		    $scope.claseamarilla12 = "btn btn-default";
		    $scope.clasenegro12 = "btn btn-default";
		    $scope.ComentOcultar12 = false;

		   }else if($scope.radioModel12 == 1){

		   	$scope.claseroja12 = "btn btn-default";
		   	$scope.claseverde12 = "btn btn-success";
		   	$scope.claseamarilla12 = "btn btn-default";
		   	$scope.clasenegro12 = "btn btn-default";
		   	$scope.ComentOcultar12 = false;
		    

		   }else if($scope.radioModel12 == 2){

		   	$scope.claseverde12 = "btn btn-default";
		    $scope.claseroja12 = "btn btn-default";
		    $scope.claseamarilla12 = "btn btn-warning";
		    $scope.clasenegro12 = "btn btn-default";
		    $scope.ComentOcultar12 = true;




		   }else if($scope.radioModel12 == 3){

		   	$scope.claseroja12 = "btn btn-default";
		   	$scope.claseverde12 = "btn btn-default";
		   	$scope.claseamarilla12 = "btn btn-default";
		   	$scope.clasenegro12 = "btn btn-info";
		   	$scope.ComentOcultar12 = false;
		    

		   }
		   
}
$scope.confirmar13 = function(){


		  if($scope.radioModel13 == 0){

		    $scope.claseverde13 = "btn btn-default";
		    $scope.claseroja13 = "btn btn-danger";
		    $scope.claseamarilla13 = "btn btn-default";
		    $scope.clasenegro13 = "btn btn-default";
		    $scope.ComentOcultar13 = false;

		   }else if($scope.radioModel13 == 1){

		   	$scope.claseroja13 = "btn btn-default";
		   	$scope.claseverde13 = "btn btn-success";
		   	$scope.claseamarilla13 = "btn btn-default";
		   	$scope.clasenegro13 = "btn btn-default";
		   	$scope.ComentOcultar13 = false;
		    

		   }else if($scope.radioModel13 == 2){

		   	$scope.claseverde13 = "btn btn-default";
		    $scope.claseroja13 = "btn btn-default";
		    $scope.claseamarilla13 = "btn btn-warning";
		    $scope.clasenegro13 = "btn btn-default";
		    $scope.ComentOcultar13 = true;




		   }else if($scope.radioModel13 == 3){

		   	$scope.claseroja13 = "btn btn-default";
		   	$scope.claseverde13 = "btn btn-default";
		   	$scope.claseamarilla13 = "btn btn-default";
		   	$scope.clasenegro13 = "btn btn-info";
		   	$scope.ComentOcultar13 = false;
		    

		   }
}
$scope.confirmar14 = function(){


		   if($scope.radioModel14 == 0){

		    $scope.claseverde14 = "btn btn-default";
		    $scope.claseroja14 = "btn btn-danger";
		    $scope.claseamarilla14 = "btn btn-default";
		    $scope.clasenegro14 = "btn btn-default";
		    $scope.ComentOcultar14 = false;

		   }else if($scope.radioModel14 == 1){

		   	$scope.claseroja14 = "btn btn-default";
		   	$scope.claseverde14 = "btn btn-success";
		   	$scope.claseamarilla14 = "btn btn-default";
		   	$scope.clasenegro14 = "btn btn-default";
		   	$scope.ComentOcultar14 = false;
		    

		   }else if($scope.radioModel14 == 2){

		   	$scope.claseverde14 = "btn btn-default";
		    $scope.claseroja14 = "btn btn-default";
		    $scope.claseamarilla14 = "btn btn-warning";
		    $scope.clasenegro14 = "btn btn-default";
		    $scope.ComentOcultar14 = true;




		   }else if($scope.radioModel14 == 3){

		   	$scope.claseroja14 = "btn btn-default";
		   	$scope.claseverde14 = "btn btn-default";
		   	$scope.claseamarilla14 = "btn btn-default";
		   	$scope.clasenegro14 = "btn btn-info";
		   	$scope.ComentOcultar14 = false;
		    

		   }
		   
}
$scope.confirmar15 = function(){


		 if($scope.radioModel15 == 0){

		    $scope.claseverde15 = "btn btn-default";
		    $scope.claseroja15 = "btn btn-danger";
		    $scope.claseamarilla15 = "btn btn-default";
		    $scope.clasenegro15 = "btn btn-default";
		    $scope.ComentOcultar15 = false;

		   }else if($scope.radioModel15 == 1){

		   	$scope.claseroja15 = "btn btn-default";
		   	$scope.claseverde15 = "btn btn-success";
		   	$scope.claseamarilla15 = "btn btn-default";
		   	$scope.clasenegro15 = "btn btn-default";
		   	$scope.ComentOcultar15 = false;
		    

		   }else if($scope.radioModel15 == 2){

		   	$scope.claseverde15 = "btn btn-default";
		    $scope.claseroja15 = "btn btn-default";
		    $scope.claseamarilla15 = "btn btn-warning";
		    $scope.clasenegro15 = "btn btn-default";
		    $scope.ComentOcultar15 = true;




		   }else if($scope.radioModel15 == 3){

		   	$scope.claseroja15 = "btn btn-default";
		   	$scope.claseverde15 = "btn btn-default";
		   	$scope.claseamarilla15 = "btn btn-default";
		   	$scope.clasenegro15 = "btn btn-info";
		   	$scope.ComentOcultar15 = false;
		    

		   }
		   
}
$scope.confirmar16 = function(){


		  if($scope.radioModel16 == 0){

		    $scope.claseverde16 = "btn btn-default";
		    $scope.claseroja16 = "btn btn-danger";
		    $scope.claseamarilla16 = "btn btn-default";
		    $scope.clasenegro16 = "btn btn-default";
		    $scope.ComentOcultar16 = false;

		   }else if($scope.radioModel16 == 1){

		   	$scope.claseroja16 = "btn btn-default";
		   	$scope.claseverde16 = "btn btn-success";
		   	$scope.claseamarilla16 = "btn btn-default";
		   	$scope.clasenegro16 = "btn btn-default";
		   	$scope.ComentOcultar16 = false;
		    

		   }else if($scope.radioModel16 == 2){

		   	$scope.claseverde16 = "btn btn-default";
		    $scope.claseroja16 = "btn btn-default";
		    $scope.claseamarilla16 = "btn btn-warning";
		    $scope.clasenegro16 = "btn btn-default";
		    $scope.ComentOcultar16 = true;




		   }else if($scope.radioModel16 == 3){

		   	$scope.claseroja16 = "btn btn-default";
		   	$scope.claseverde16 = "btn btn-default";
		   	$scope.claseamarilla16 = "btn btn-default";
		   	$scope.clasenegro16 = "btn btn-info";
		   	$scope.ComentOcultar16 = false;
		    

		   }
		   
}

$scope.confirmar18 = function(){


		  if($scope.radioModel18 == 0){

		    $scope.claseverde18 = "btn btn-default";
		    $scope.claseroja18 = "btn btn-danger";
		    $scope.claseamarilla18 = "btn btn-default";
		    $scope.clasenegro18 = "btn btn-default";
		    $scope.ComentOcultar18 = false;

		   }else if($scope.radioModel18 == 1){

		   	$scope.claseroja18 = "btn btn-default";
		   	$scope.claseverde18 = "btn btn-success";
		   	$scope.claseamarilla18 = "btn btn-default";
		   	$scope.clasenegro18 = "btn btn-default";
		   	$scope.ComentOcultar18 = false;
		    

		   }else if($scope.radioModel18 == 2){

		   	$scope.claseverde18 = "btn btn-default";
		    $scope.claseroja18 = "btn btn-default";
		    $scope.claseamarilla18 = "btn btn-warning";
		    $scope.clasenegro18 = "btn btn-default";
		    $scope.ComentOcultar18 = true;




		   }else if($scope.radioModel18 == 3){

		   	$scope.claseroja18 = "btn btn-default";
		   	$scope.claseverde18 = "btn btn-default";
		   	$scope.claseamarilla18 = "btn btn-default";
		   	$scope.clasenegro18 = "btn btn-info";
		   	$scope.ComentOcultar18 = false;
		    

		   }
		   
}
$scope.confirmar19 = function(){


		   if($scope.radioModel19 == 0){

		    $scope.claseverde19 = "btn btn-default";
		    $scope.claseroja19 = "btn btn-danger";
		    $scope.claseamarilla19 = "btn btn-default";
		    $scope.clasenegro19 = "btn btn-default";
		    $scope.ComentOcultar19 = false;

		   }else if($scope.radioModel19 == 1){

		   	$scope.claseroja19 = "btn btn-default";
		   	$scope.claseverde19 = "btn btn-success";
		   	$scope.claseamarilla19 = "btn btn-default";
		   	$scope.clasenegro19 = "btn btn-default";
		   	$scope.ComentOcultar19 = false;
		    

		   }else if($scope.radioModel19 == 2){

		   	$scope.claseverde19 = "btn btn-default";
		    $scope.claseroja19 = "btn btn-default";
		    $scope.claseamarilla19 = "btn btn-warning";
		    $scope.clasenegro19 = "btn btn-default";
		    $scope.ComentOcultar19 = true;




		   }else if($scope.radioModel19 == 3){

		   	$scope.claseroja19 = "btn btn-default";
		   	$scope.claseverde19 = "btn btn-default";
		   	$scope.claseamarilla19 = "btn btn-default";
		   	$scope.clasenegro19 = "btn btn-info";
		   	$scope.ComentOcultar19 = false;
		    

		   }
		   
}
$scope.confirmar20 = function(){


		  if($scope.radioModel20 == 0){

		    $scope.claseverde20 = "btn btn-default";
		    $scope.claseroja20 = "btn btn-danger";
		    $scope.claseamarilla20 = "btn btn-default";
		    $scope.clasenegro20 = "btn btn-default";
		    $scope.ComentOcultar20 = false;

		   }else if($scope.radioModel20 == 1){

		   	$scope.claseroja20 = "btn btn-default";
		   	$scope.claseverde20 = "btn btn-success";
		   	$scope.claseamarilla20 = "btn btn-default";
		   	$scope.clasenegro20 = "btn btn-default";
		   	$scope.ComentOcultar20 = false;
		    

		   }else if($scope.radioModel20 == 2){

		   	$scope.claseverde20 = "btn btn-default";
		    $scope.claseroja20 = "btn btn-default";
		    $scope.claseamarilla20 = "btn btn-warning";
		    $scope.clasenegro20 = "btn btn-default";
		    $scope.ComentOcultar20 = true;




		   }else if($scope.radioModel20 == 3){

		   	$scope.claseroja20 = "btn btn-default";
		   	$scope.claseverde20 = "btn btn-default";
		   	$scope.claseamarilla20 = "btn btn-default";
		   	$scope.clasenegro20 = "btn btn-info";
		   	$scope.ComentOcultar20 = false;
		    

		   }
		   
}
$scope.confirmar21 = function(){


		  if($scope.radioModel21 == 0){

		    $scope.claseverde21 = "btn btn-default";
		    $scope.claseroja21 = "btn btn-danger";
		    $scope.claseamarilla21 = "btn btn-default";
		    $scope.clasenegro21 = "btn btn-default";
		    $scope.ComentOcultar21 = false;

		   }else if($scope.radioModel21 == 1){

		   	$scope.claseroja21 = "btn btn-default";
		   	$scope.claseverde21 = "btn btn-success";
		   	$scope.claseamarilla21 = "btn btn-default";
		   	$scope.clasenegro21 = "btn btn-default";
		   	$scope.ComentOcultar21 = false;
		    

		   }else if($scope.radioModel21 == 2){

		   	$scope.claseverde21 = "btn btn-default";
		    $scope.claseroja21 = "btn btn-default";
		    $scope.claseamarilla21 = "btn btn-warning";
		    $scope.clasenegro21 = "btn btn-default";
		    $scope.ComentOcultar21 = true;




		   }else if($scope.radioModel21 == 3){

		   	$scope.claseroja21 = "btn btn-default";
		   	$scope.claseverde21 = "btn btn-default";
		   	$scope.claseamarilla21 = "btn btn-default";
		   	$scope.clasenegro21 = "btn btn-info";
		   	$scope.ComentOcultar21 = false;
		    

		   }
		   
}
$scope.confirmar22 = function(){


		  if($scope.radioModel22 == 0){

		    $scope.claseverde22 = "btn btn-default";
		    $scope.claseroja22 = "btn btn-danger";
		    $scope.claseamarilla22 = "btn btn-default";
		    $scope.clasenegro22 = "btn btn-default";
		    $scope.ComentOcultar22 = false;

		   }else if($scope.radioModel22 == 1){

		   	$scope.claseroja22 = "btn btn-default";
		   	$scope.claseverde22 = "btn btn-success";
		   	$scope.claseamarilla22 = "btn btn-default";
		   	$scope.clasenegro22 = "btn btn-default";
		   	$scope.ComentOcultar22 = false;
		    

		   }else if($scope.radioModel22 == 2){

		   	$scope.claseverde22 = "btn btn-default";
		    $scope.claseroja22 = "btn btn-default";
		    $scope.claseamarilla22 = "btn btn-warning";
		    $scope.clasenegro22 = "btn btn-default";
		    $scope.ComentOcultar22 = true;




		   }else if($scope.radioModel22 == 3){

		   	$scope.claseroja22 = "btn btn-default";
		   	$scope.claseverde22 = "btn btn-default";
		   	$scope.claseamarilla22 = "btn btn-default";
		   	$scope.clasenegro22 = "btn btn-info";
		   	$scope.ComentOcultar22 = false;
		    

		   }
		   
}
$scope.confirmar23 = function(){


		  if($scope.radioModel23 == 0){

		    $scope.claseverde23 = "btn btn-default";
		    $scope.claseroja23 = "btn btn-danger";
		    $scope.claseamarilla23 = "btn btn-default";
		    $scope.clasenegro23 = "btn btn-default";
		    $scope.ComentOcultar23 = false;

		   }else if($scope.radioModel23 == 1){

		   	$scope.claseroja23 = "btn btn-default";
		   	$scope.claseverde23 = "btn btn-success";
		   	$scope.claseamarilla23 = "btn btn-default";
		   	$scope.clasenegro23 = "btn btn-default";
		   	$scope.ComentOcultar23 = false;
		    

		   }else if($scope.radioModel23 == 2){

		   	$scope.claseverde23 = "btn btn-default";
		    $scope.claseroja23 = "btn btn-default";
		    $scope.claseamarilla23 = "btn btn-warning";
		    $scope.clasenegro23 = "btn btn-default";
		    $scope.ComentOcultar23 = true;




		   }else if($scope.radioModel23 == 3){

		   	$scope.claseroja23 = "btn btn-default";
		   	$scope.claseverde23 = "btn btn-default";
		   	$scope.claseamarilla23 = "btn btn-default";
		   	$scope.clasenegro23 = "btn btn-info";
		   	$scope.ComentOcultar23 = false;
		    

		   }
		   
}
$scope.confirmar24 = function(){


		  if($scope.radioModel24 == 0){

		    $scope.claseverde24 = "btn btn-default";
		    $scope.claseroja24 = "btn btn-danger";
		    $scope.claseamarilla24 = "btn btn-default";
		    $scope.clasenegro24 = "btn btn-default";
		    $scope.ComentOcultar24 = false;

		   }else if($scope.radioModel24 == 1){

		   	$scope.claseroja24 = "btn btn-default";
		   	$scope.claseverde24 = "btn btn-success";
		   	$scope.claseamarilla24 = "btn btn-default";
		   	$scope.clasenegro24 = "btn btn-default";
		   	$scope.ComentOcultar24 = false;
		    

		   }else if($scope.radioModel24 == 2){

		   	$scope.claseverde24 = "btn btn-default";
		    $scope.claseroja24 = "btn btn-default";
		    $scope.claseamarilla24 = "btn btn-warning";
		    $scope.clasenegro24 = "btn btn-default";
		    $scope.ComentOcultar24 = true;




		   }else if($scope.radioModel24 == 3){

		   	$scope.claseroja24 = "btn btn-default";
		   	$scope.claseverde24 = "btn btn-default";
		   	$scope.claseamarilla24 = "btn btn-default";
		   	$scope.clasenegro24 = "btn btn-info";
		   	$scope.ComentOcultar24 = false;
		    

		   }
		   
}
$scope.confirmar25 = function(){


		  if($scope.radioModel25 == 0){

		    $scope.claseverde25 = "btn btn-default";
		    $scope.claseroja25 = "btn btn-danger";
		    $scope.claseamarilla25 = "btn btn-default";
		    $scope.clasenegro25 = "btn btn-default";
		    $scope.ComentOcultar25 = false;

		   }else if($scope.radioModel25 == 1){

		   	$scope.claseroja25 = "btn btn-default";
		   	$scope.claseverde25 = "btn btn-success";
		   	$scope.claseamarilla25 = "btn btn-default";
		   	$scope.clasenegro25 = "btn btn-default";
		   	$scope.ComentOcultar25 = false;
		    

		   }else if($scope.radioModel25 == 2){

		   	$scope.claseverde25 = "btn btn-default";
		    $scope.claseroja25 = "btn btn-default";
		    $scope.claseamarilla25 = "btn btn-warning";
		    $scope.clasenegro25 = "btn btn-default";
		    $scope.ComentOcultar25 = true;




		   }else if($scope.radioModel25 == 3){

		   	$scope.claseroja25 = "btn btn-default";
		   	$scope.claseverde25 = "btn btn-default";
		   	$scope.claseamarilla25 = "btn btn-default";
		   	$scope.clasenegro25 = "btn btn-info";
		   	$scope.ComentOcultar25 = false;
		    

		   }
		   
}
//---
$scope.confirmar26 = function(){


		  if($scope.radioModel26 == 0){

		    $scope.claseverde26 = "btn btn-default";
		    $scope.claseroja26 = "btn btn-danger";
		    $scope.claseamarilla26 = "btn btn-default";
		    $scope.clasenegro26 = "btn btn-default";
		    $scope.ComentOcultar26 = false;

		   }else if($scope.radioModel26 == 1){

		   	$scope.claseroja26 = "btn btn-default";
		   	$scope.claseverde26 = "btn btn-success";
		   	$scope.claseamarilla26 = "btn btn-default";
		   	$scope.clasenegro26 = "btn btn-default";
		   	$scope.ComentOcultar26 = false;
		    

		   }else if($scope.radioModel26 == 2){

		   	$scope.claseverde26 = "btn btn-default";
		    $scope.claseroja26 = "btn btn-default";
		    $scope.claseamarilla26 = "btn btn-warning";
		    $scope.clasenegro26 = "btn btn-default";
		    $scope.ComentOcultar26 = true;




		   }else if($scope.radioModel26 == 3){

		   	$scope.claseroja26 = "btn btn-default";
		   	$scope.claseverde26 = "btn btn-default";
		   	$scope.claseamarilla26 = "btn btn-default";
		   	$scope.clasenegro26 = "btn btn-info";
		   	$scope.ComentOcultar26 = false;
		    

		   }
		   
}
$scope.confirmar27 = function(){


		  if($scope.radioModel27 == 0){

		    $scope.claseverde27 = "btn btn-default";
		    $scope.claseroja27 = "btn btn-danger";
		    $scope.claseamarilla27 = "btn btn-default";
		    $scope.clasenegro27 = "btn btn-default";
		    $scope.ComentOcultar27 = false;

		   }else if($scope.radioModel27 == 1){

		   	$scope.claseroja27 = "btn btn-default";
		   	$scope.claseverde27 = "btn btn-success";
		   	$scope.claseamarilla27 = "btn btn-default";
		   	$scope.clasenegro27 = "btn btn-default";
		   	$scope.ComentOcultar27 = false;
		    

		   }else if($scope.radioModel27 == 2){

		   	$scope.claseverde27 = "btn btn-default";
		    $scope.claseroja27 = "btn btn-default";
		    $scope.claseamarilla27 = "btn btn-warning";
		    $scope.clasenegro27 = "btn btn-default";
		    $scope.ComentOcultar27 = true;




		   }else if($scope.radioModel27 == 3){

		   	$scope.claseroja27 = "btn btn-default";
		   	$scope.claseverde27 = "btn btn-default";
		   	$scope.claseamarilla27 = "btn btn-default";
		   	$scope.clasenegro27 = "btn btn-info";
		   	$scope.ComentOcultar27 = false;
		    

		   }
		   
}
$scope.confirmar28 = function(){


		  if($scope.radioModel28 == 0){

		    $scope.claseverde28 = "btn btn-default";
		    $scope.claseroja28 = "btn btn-danger";
		    $scope.claseamarilla28 = "btn btn-default";
		    $scope.clasenegro28 = "btn btn-default";
		    $scope.ComentOcultar28 = false;

		   }else if($scope.radioModel28 == 1){

		   	$scope.claseroja28 = "btn btn-default";
		   	$scope.claseverde28 = "btn btn-success";
		   	$scope.claseamarilla28 = "btn btn-default";
		   	$scope.clasenegro28 = "btn btn-default";
		   	$scope.ComentOcultar28 = false;
		    

		   }else if($scope.radioModel28 == 2){

		   	$scope.claseverde28 = "btn btn-default";
		    $scope.claseroja28 = "btn btn-default";
		    $scope.claseamarilla28 = "btn btn-warning";
		    $scope.clasenegro28 = "btn btn-default";
		    $scope.ComentOcultar28 = true;




		   }else if($scope.radioModel28 == 3){

		   	$scope.claseroja28 = "btn btn-default";
		   	$scope.claseverde28 = "btn btn-default";
		   	$scope.claseamarilla28 = "btn btn-default";
		   	$scope.clasenegro28 = "btn btn-info";
		   	$scope.ComentOcultar28 = false;
		    

		   }
		   
}
$scope.claseverdeFICF = "btn btn-default";
   $scope.claserojaFICF = "btn btn-default";
   $scope.claseamarillaFICF = "btn btn-default";
   $scope.clasenegroFICF = "btn btn-default";

   $scope.claseverdeFICA = "btn btn-default";
   $scope.claserojaFICA = "btn btn-default";
   $scope.claseamarillaFICA = "btn btn-default";
   $scope.clasenegroFICA = "btn btn-default";

   $scope.claseverdeLAYOUT = "btn btn-default";
   $scope.claserojaLAYOUT = "btn btn-default";
   $scope.claseamarillaLAYOUT = "btn btn-default";
   $scope.clasenegroLAYOUT = "btn btn-default";

   $scope.claseverdeMYT = "btn btn-default";
   $scope.claserojaMYT = "btn btn-default";
   $scope.claseamarillaMYT = "btn btn-default";
   $scope.clasenegroMYT = "btn btn-default";

   $scope.claseverdeFIPE = "btn btn-default";
   $scope.claserojaFIPE = "btn btn-default";
   $scope.claseamarillaFIPE = "btn btn-default";
   $scope.clasenegroFIPE = "btn btn-default";

   $scope.claseverdeDSPR = "btn btn-default";
   $scope.claserojaDSPR = "btn btn-default";
   $scope.claseamarillaDSPR = "btn btn-default";
   $scope.clasenegroDSPR = "btn btn-default";

   $scope.claseverdeCajonera = "btn btn-default";
   $scope.claserojaCajonera = "btn btn-default";
   $scope.claseamarillaCajonera = "btn btn-default";
   $scope.clasenegroCajonera = "btn btn-default";

   $scope.claseverdeCajonera2 = "btn btn-default";
   $scope.claserojaCajonera2 = "btn btn-default";
   $scope.claseamarillaCajonera2 = "btn btn-default";
   $scope.clasenegroCajonera2 = "btn btn-default";

   $scope.claseverde3 = "btn btn-default";
   $scope.claseroja3 = "btn btn-default";
   $scope.claseamarilla3 = "btn btn-default";
   $scope.clasenegro3 = "btn btn-default";

   $scope.claseverde4 = "btn btn-default";
   $scope.claseroja4 = "btn btn-default";
   $scope.claseamarilla4 = "btn btn-default";
    $scope.clasenegro4 = "btn btn-default";

   $scope.claseverde5 = "btn btn-default";
   $scope.claseroja5 = "btn btn-default";
   $scope.claseamarilla5 = "btn btn-default";
    $scope.clasenegro5 = "btn btn-default";

   $scope.claseverde6 = "btn btn-default";
   $scope.claseroja6 = "btn btn-default";
   $scope.claseamarilla6 = "btn btn-default";
    $scope.clasenegro6 = "btn btn-default";

   $scope.claseverde7 = "btn btn-default";
   $scope.claseroja7 = "btn btn-default";
   $scope.claseamarilla7 = "btn btn-default";
    $scope.clasenegro7 = "btn btn-default";

   $scope.claseverde8 = "btn btn-default";
   $scope.claseroja8 = "btn btn-default";
   $scope.claseamarilla8 = "btn btn-default";
    $scope.clasenegro8 = "btn btn-default";

   $scope.claseverde9 = "btn btn-default";
   $scope.claseroja9 = "btn btn-default";
   $scope.claseamarilla9 = "btn btn-default";
    $scope.clasenegro9 = "btn btn-default";

   $scope.claseverde10 = "btn btn-default";
   $scope.claseroja10 = "btn btn-default";
   $scope.claseamarilla10 = "btn btn-default";
    $scope.clasenegro10 = "btn btn-default";

   $scope.claseverde11 = "btn btn-default";
   $scope.claseroja11 = "btn btn-default";
   $scope.claseamarilla11 = "btn btn-default";
    $scope.clasenegro11 = "btn btn-default";

   $scope.claseverde12 = "btn btn-default";
   $scope.claseroja12 = "btn btn-default";
   $scope.claseamarilla12 = "btn btn-default";
    $scope.clasenegro12 = "btn btn-default";

   $scope.claseverde13 = "btn btn-default";
   $scope.claseroja13 = "btn btn-default";
   $scope.claseamarilla13 = "btn btn-default";
    $scope.clasenegro13 = "btn btn-default";

   $scope.claseverde14 = "btn btn-default";
   $scope.claseroja14 = "btn btn-default";
   $scope.claseamarilla14 = "btn btn-default";
    $scope.clasenegro14 = "btn btn-default";

   $scope.claseverde15 = "btn btn-default";
   $scope.claseroja15 = "btn btn-default";
   $scope.claseamarilla15 = "btn btn-default";
    $scope.clasenegro15 = "btn btn-default";

   $scope.claseverde16 = "btn btn-default";
   $scope.claseroja16 = "btn btn-default";
   $scope.claseamarilla16 = "btn btn-default";
    $scope.clasenegro16 = "btn btn-default";


   $scope.claseverde19 = "btn btn-default";
   $scope.claseroja19 = "btn btn-default";
   $scope.claseamarilla19 = "btn btn-default";
    $scope.clasenegro19 = "btn btn-default";

   $scope.claseverde18 = "btn btn-default";
   $scope.claseroja18 = "btn btn-default";
   $scope.claseamarilla18 = "btn btn-default";
    $scope.clasenegro18 = "btn btn-default";

   $scope.claseverde20 = "btn btn-default";
   $scope.claseroja20 = "btn btn-default";
   $scope.claseamarilla20 = "btn btn-default";
    $scope.clasenegro20 = "btn btn-default";

   $scope.claseverde21 = "btn btn-default";
   $scope.claseroja21 = "btn btn-default";
   $scope.claseamarilla21 = "btn btn-default";
    $scope.clasenegro21 = "btn btn-default";

   $scope.claseverde22 = "btn btn-default";
   $scope.claseroja22 = "btn btn-default";
   $scope.claseamarilla22 = "btn btn-default";
   $scope.clasenegro22 = "btn btn-default";

   $scope.claseverde23 = "btn btn-default";
   $scope.claseroja23 = "btn btn-default";
   $scope.claseamarilla23 = "btn btn-default";
   $scope.clasenegro23 = "btn btn-default";

   $scope.claseverde24 = "btn btn-default";
   $scope.claseroja24 = "btn btn-default";
   $scope.claseamarilla24 = "btn btn-default";
   $scope.clasenegro24 = "btn btn-default";

   $scope.claseverde25 = "btn btn-default";
   $scope.claseroja25 = "btn btn-default";
   $scope.claseamarilla25 = "btn btn-default";
   $scope.clasenegro25 = "btn btn-default";

   $scope.claseverde26 = "btn btn-default";
   $scope.claseroja26 = "btn btn-default";
   $scope.claseamarilla26 = "btn btn-default";
   $scope.clasenegro26 = "btn btn-default";

   $scope.claseverde27 = "btn btn-default";
   $scope.claseroja27 = "btn btn-default";
   $scope.claseamarilla27 = "btn btn-default";
   $scope.clasenegro27 = "btn btn-default";

   $scope.claseverde28 = "btn btn-default";
   $scope.claseroja28 = "btn btn-default";
   $scope.claseamarilla28 = "btn btn-default";
   $scope.clasenegro28 = "btn btn-default";

   $scope.verdePdfFicf = "btn btn-default";
   $scope.verdePdfFica = "btn btn-default";
   $scope.verdePdfMyt = "btn btn-default";


   $scope.FICFComentOcultar = false;
   $scope.FICAComentOcultar = false;
   $scope.LAYOUTComentOcultar = false;
   $scope.MYTComentOcultar = false;
   $scope.FIPEComentOcultar = false;
   $scope.DSPRComentOcultar = false;
   $scope.CajoneraComentOcultar = false;
   $scope.CajoneraComentOcultar2 = false;
   $scope.ComentOcultar3 = false;
   $scope.ComentOcultar4 = false;
   $scope.ComentOcultar5 = false;
   $scope.ComentOcultar6 = false;
   $scope.ComentOcultar7 = false;
   $scope.ComentOcultar8 = false;
   $scope.ComentOcultar9 = false;
   $scope.ComentOcultar10 = false;
   $scope.ComentOcultar11 = false;
   $scope.ComentOcultar12 = false;
   $scope.ComentOcultar13 = false;
   $scope.ComentOcultar14 = false;
   $scope.ComentOcultar15 = false;
   $scope.ComentOcultar16 = false;
   $scope.ComentOcultar19 = false;
   $scope.ComentOcultar18 = false;
   $scope.ComentOcultar20 = false;
   $scope.ComentOcultar21 = false;
   $scope.ComentOcultar22 = false;
   $scope.ComentOcultar23 = false;
   $scope.ComentOcultar24 = false;
   $scope.ComentOcultar25 = false;
   $scope.ComentOcultar26 = false;
   $scope.ComentOcultar27 = false;
   $scope.ComentOcultar28 = false;
    
   $scope.radioModelCajonera = 0;
   $scope.radioModelCajonera2 = 0;
   $scope.radioModel3 = 0;
   $scope.radioModel4 = 0;
   $scope.radioModel  = 0;
   $scope.radioModelFICA = 0;
   $scope.radioModelLAYOUT = 0;
   $scope.radioModelFIPE = 0;
   $scope.radioModelMYT = 0;
   $scope.radioModelDSPR = 0;
   $scope.radioModel5 = 0;
   $scope.radioModel6 = 0;
   $scope.radioModel7 = 0;
   $scope.radioModel8 = 0;
   $scope.radioModel9 = 0;
   $scope.radioModel10 = 0;
   $scope.radioModel11 = 0;
   $scope.radioModel12 = 0;
   $scope.radioModel13 = 0;
   $scope.radioModel14 = 0;
   $scope.radioModel15 = 0;
   $scope.radioModel16 = 0;
   $scope.radioModel18 = 0;
   $scope.radioModel19 = 0;
   $scope.radioModel20 = 0;
   $scope.radioModel21 = 0; 
   $scope.radioModel22 = 0;
   $scope.radioModel23 = 0;
   $scope.radioModel24 = 0;
   $scope.radioModel25 = 0;
   $scope.radioModel26 = 0;
   $scope.radioModel27 = 0;
   $scope.radioModel28 = 0;
   $scope.radioModelPdfFicf = 0;
   $scope.radioModelPdfFica = 0;
   $scope.radioModelPdfMyt = 0;

   $scope.proyecnuevo = function(){

 	

   $scope.actualizacion = "PROYECTO NUEVO";
   $scope.refExt = "";
   $scope.refInt = "";
   $scope.FICFComentOcultar = false;
   $scope.FICAComentOcultar = false;
   $scope.LAYOUTComentOcultar = false;
   $scope.MYTComentOcultar = false;
   $scope.FIPEComentOcultar = false;
   $scope.DSPRComentOcultar = false;
   $scope.CajoneraComentOcultar = false;
   $scope.CajoneraComentOcultar2 = false;
   $scope.ComentOcultar3 = false;
   $scope.ComentOcultar4 = false;
   $scope.ComentOcultar5 = false;
   $scope.ComentOcultar6 = false;
   $scope.ComentOcultar7 = false;
   $scope.ComentOcultar8 = false;
   $scope.ComentOcultar9 = false;
   $scope.ComentOcultar10 = false;
   $scope.ComentOcultar11 = false;
   $scope.ComentOcultar12 = false;
   $scope.ComentOcultar13 = false;
   $scope.ComentOcultar14 = false;
   $scope.ComentOcultar15 = false;
   $scope.ComentOcultar16 = false;
   $scope.ComentOcultar19 = false;
   $scope.ComentOcultar18 = false;
   $scope.ComentOcultar20 = false;
   $scope.ComentOcultar21 = false;
   $scope.ComentOcultar22 = false;
   $scope.ComentOcultar23 = false;
   $scope.ComentOcultar24 = false;
   $scope.ComentOcultar25 = false;
   $scope.ComentOcultar26 = false;
   $scope.ComentOcultar27 = false;
   $scope.ComentOcultar28 = false;
   $scope.CajoneraComent = "";
   $scope.CajoneraComent2 = "";
   $scope.Coment3 = "";
   $scope.Coment4 = "";
   $scope.FICFComent = "";
	$scope.FICAComent = "";
	$scope.LAYOUTComent = "";
	$scope.MYTComent = "";
	$scope.FIPEComent = "";
	$scope.DSPRComent = "";
	$scope.Coment5 = "";
	$scope.Coment6 = "";
	$scope.Coment7 = "";
	$scope.Coment8 = "";
	$scope.Coment9 = "";
	$scope.Coment10 = "";
	$scope.Coment11 = "";
	$scope.Coment12 = "";
	$scope.Coment13 = "";
	$scope.Coment14 = "";
	$scope.Coment15 = "";
	$scope.Coment16 = "";
	$scope.Coment18 = "";
	$scope.Coment19 = "";
	$scope.Coment20 = "";
	$scope.Coment21 = "";
	$scope.Coment22 = "";
	$scope.Coment23 = "";
	$scope.Coment24 = "";
	$scope.Coment25 = "";
	$scope.Coment26 = "";
	$scope.Coment27 = "";
	$scope.Coment28 = "";
    
   $scope.radioModelCajonera = 0;
   $scope.radioModelCajonera2 = 0;
   $scope.radioModel3 = 0;
   $scope.radioModel4 = 0;
   $scope.radioModel  = 0;
   $scope.radioModelFICA = 0;
   $scope.radioModelLAYOUT = 0;
   $scope.radioModelFIPE = 0;
   $scope.radioModelMYT = 0;
   $scope.radioModelDSPR = 0;
   $scope.radioModel5 = 0;
   $scope.radioModel6 = 0;
   $scope.radioModel7 = 0;
   $scope.radioModel8 = 0;
   $scope.radioModel9 = 0;
   $scope.radioModel10 = 0;
   $scope.radioModel11 = 0;
   $scope.radioModel12 = 0;
   $scope.radioModel13 = 0;
   $scope.radioModel14 = 0;
   $scope.radioModel15 = 0;
   $scope.radioModel16 = 0;
   $scope.radioModel18 = 0;
   $scope.radioModel19 = 0;
   $scope.radioModel20 = 0;
   $scope.radioModel21 = 0; 
   $scope.radioModel22 = 0;
   $scope.radioModel23 = 0;
   $scope.radioModel24 = 0;
   $scope.radioModel25 = 0;
   $scope.radioModel26 = 0;
   $scope.radioModel27 = 0;
   $scope.radioModel28 = 0;
   $scope.radioModelPdfFicf = 0;
   $scope.radioModelPdfFica = 0;
   $scope.radioModelPdfMyt = 0;

   $scope.verdePdfFicf = "btn btn-default";
   $scope.verdePdfFica = "btn btn-default";
   $scope.verdePdfMyt = "btn btn-default";

   }






		   if($scope.radioModel == 0){

		     $scope.claseverdeFICF = "btn btn-default";
		     $scope.claserojaFICF = "btn btn-danger";
		     $scope.claseamarillaFICF = "btn btn-default";
		     $scope.clasenegroFICF = "btn btn-default";
		     $scope.FICFComentOcultar = false;

		   }else if($scope.radioModel == 1){

		   	$scope.claserojaFICF = "btn btn-default";
		   	$scope.claseverdeFICF  = "btn btn-success";
		   	$scope.claseamarillaFICF = "btn btn-default";
		   	$scope.clasenegroFICF = "btn btn-default";
		   	$scope.FICFComentOcultar = false;
		    

		   }else if($scope.radioModel == 2){

		   	$scope.claseverdeFICF = "btn btn-default";
		    $scope.claserojaFICF = "btn btn-default";
		    $scope.claseamarillaFICF = "btn btn-warning";
		    $scope.clasenegroFICF = "btn btn-default";
		    $scope.FICFComentOcultar = true;




		   }else if($scope.radioModel == 3){

		   	$scope.claseverdeFICF = "btn btn-default";
		    $scope.claserojaFICF = "btn btn-default";
		    $scope.claseamarillaFICF = "btn btn-default";
		    $scope.clasenegroFICF = "btn btn-info";
		    $scope.FICFComentOcultar = false;




		   }
		   



		   if($scope.radioModelFICA == 0){

		     $scope.claseverdeFICA = "btn btn-default";
		     $scope.claserojaFICA = "btn btn-danger";
		     $scope.claseamarillaFICA = "btn btn-default";
		     $scope.clasenegroFICA = "btn btn-default";
		     $scope.FICAComentOcultar = false;

		   }else if($scope.radioModelFICA == 1){

		   	$scope.claserojaFICA = "btn btn-default";
		   	$scope.claseverdeFICA  = "btn btn-success";
		   	$scope.claseamarillaFICA = "btn btn-default";
		   	$scope.clasenegroFICA = "btn btn-default";
		   	$scope.FICAComentOcultar = false;
		    

		   }else if($scope.radioModelFICA == 2){

		   	$scope.claseverdeFICA = "btn btn-default";
		    $scope.claserojaFICA = "btn btn-default";
		    $scope.claseamarillaFICA = "btn btn-warning";
		    $scope.clasenegroFICA = "btn btn-default";
		    $scope.FICAComentOcultar = true;




		   }else if($scope.radioModelFICA == 3){

		   	$scope.claseverdeFICA = "btn btn-default";
		    $scope.claserojaFICA = "btn btn-default";
		    $scope.claseamarillaFICA = "btn btn-defalut";
		    $scope.clasenegroFICA = "btn btn-info";
		    $scope.FICAComentOcultar = false;
		}

		   


		   if($scope.radioModelLAYOUT == 0){

		     $scope.claseverdeLAYOUT = "btn btn-default";
		     $scope.claserojaLAYOUT = "btn btn-danger";
		     $scope.claseamarillaLAYOUT = "btn btn-default";
		     $scope.clasenegroLAYOUT = "btn btn-default";
		     $scope.LAYOUTComentOcultar = false;

		   }else if($scope.radioModelLAYOUT == 1){

		   	$scope.claserojaLAYOUT = "btn btn-default";
		   	$scope.claseverdeLAYOUT  = "btn btn-success";
		   	$scope.claseamarillaLAYOUT = "btn btn-default";
		   	$scope.clasenegroLAYOUT = "btn btn-default";
		   	$scope.LAYOUTComentOcultar = false;
		    

		   }else if($scope.radioModelLAYOUT == 2){

		   	$scope.claseverdeLAYOUT = "btn btn-default";
		    $scope.claserojaLAYOUT = "btn btn-default";
		    $scope.claseamarillaLAYOUT = "btn btn-warning";
		    $scope.clasenegroLAYOUT = "btn btn-default";
		    $scope.LAYOUTComentOcultar = true;




		   }else if($scope.radioModelLAYOUT == 3){

		   	$scope.claseverdeLAYOUT = "btn btn-default";
		    $scope.claserojaLAYOUT = "btn btn-default";
		    $scope.claseamarillaLAYOUT = "btn btn-default";
		    $scope.clasenegroLAYOUT = "btn btn-info";
		    $scope.LAYOUTComentOcultar = false;




		   }
		   


		   if($scope.radioModelMYT == 0){

		     $scope.claseverdeMYT = "btn btn-default";
		     $scope.claserojaMYT = "btn btn-danger";
		     $scope.claseamarillaMYT = "btn btn-default";
		     $scope.clasenegroMYT = "btn btn-default";
		     $scope.MYTComentOcultar = false;

		   }else if($scope.radioModelMYT == 1){

		   	$scope.claserojaMYT = "btn btn-default";
		   	$scope.claseverdeMYT  = "btn btn-success";
		   	$scope.claseamarillaMYT = "btn btn-default";
		   	$scope.clasenegroMYT = "btn btn-default";
		   	$scope.MYTComentOcultar = false;
		    

		   }else if($scope.radioModelMYT == 2){

		   	$scope.claseverdeMYT = "btn btn-default";
		    $scope.claserojaMYT = "btn btn-default";
		    $scope.claseamarillaMYT = "btn btn-warning";
		    $scope.clasenegroMYT = "btn btn-default";
		    $scope.MYTComentOcultar = true;




		   }else if($scope.radioModelMYT == 3){

		   	$scope.claseverdeMYT = "btn btn-default";
		    $scope.claserojaMYT = "btn btn-default";
		    $scope.claseamarillaMYT = "btn btn-default";
		    $scope.clasenegroMYT = "btn btn-info";
		    $scope.MYTComentOcultar = false;
		}
		   



		   if($scope.radioModelFIPE == 0){

		     $scope.claseverdeFIPE = "btn btn-default";
		     $scope.claserojaFIPE = "btn btn-danger";
		     $scope.claseamarillaFIPE = "btn btn-default";
		     $scope.clasenegroFIPE = "btn btn-default";
		     $scope.FIPEComentOcultar = false;

		   }else if($scope.radioModelFIPE == 1){

		   	$scope.claserojaFIPE = "btn btn-default";
		   	$scope.claseverdeFIPE  = "btn btn-success";
		   	$scope.claseamarillaFIPE = "btn btn-default";
		   	$scope.clasenegroFIPE = "btn btn-default";
		   	$scope.FIPEComentOcultar = false;
		    

		   }else if($scope.radioModelFIPE == 2){

		   	$scope.claseverdeFIPE = "btn btn-default";
		    $scope.claserojaFIPE = "btn btn-default";
		    $scope.claseamarillaFIPE = "btn btn-warning";
		    $scope.clasenegroFIPE = "btn btn-default";
		    $scope.FIPEComentOcultar = true;




		   }else if($scope.radioModelFIPE == 3){

		   	$scope.claserojaFIPE = "btn btn-default";
		   	$scope.claseverdeFIPE  = "btn btn-default";
		   	$scope.claseamarillaFIPE = "btn btn-default";
		   	$scope.clasenegroFIPE = "btn btn-info";
		   	$scope.FIPEComentOcultar = false;
		    

		   }



		   if($scope.radioModelDSPR == 0){

		     $scope.claseverdeDSPR = "btn btn-default";
		     $scope.claserojaDSPR = "btn btn-danger";
		     $scope.claseamarillaDSPR = "btn btn-default";
		     $scope.clasenegroDSPR = "btn btn-default";
		     $scope.DSPRComentOcultar = false;

		   }else if($scope.radioModelDSPR == 1){

		   	$scope.claserojaDSPR = "btn btn-default";
		   	$scope.claseverdeDSPR = "btn btn-success";
		   	$scope.claseamarillaDSPR = "btn btn-default";
		   	$scope.clasenegroDSPR = "btn btn-default";
		   	$scope.DSPRComentOcultar = false;
		    

		   }else if($scope.radioModelDSPR == 2){

		   	$scope.claseverdeDSPR = "btn btn-default";
		    $scope.claserojaDSPR = "btn btn-default";
		    $scope.claseamarillaDSPR = "btn btn-warning";
		    $scope.clasenegroDSPR = "btn btn-default";
		    $scope.DSPRComentOcultar = true;




		   }else if($scope.radioModelDSPR == 3){

		   	$scope.claserojaDSPR = "btn btn-default";
		   	$scope.claseverdeDSPR = "btn btn-default";
		   	$scope.claseamarillaDSPR = "btn btn-default";
		   	$scope.clasenegroDSPR = "btn btn-info";
		   	$scope.DSPRComentOcultar = false;
		    

		   }
		   



		   if($scope.radioModelCajonera == 0){

		     $scope.claseverdeCajonera = "btn btn-default";
		     $scope.claserojaCajonera = "btn btn-danger";
		     $scope.claseamarillaCajonera = "btn btn-default";
		     $scope.clasenegroCajonera = "btn btn-default";
		     $scope.CajoneraComentOcultar = false;

		   }else if($scope.radioModelCajonera == 1){

		   	$scope.claserojaCajonera = "btn btn-default";
		   	$scope.claseverdeCajonera = "btn btn-success";
		   	$scope.claseamarillaCajonera = "btn btn-default";
		   	$scope.clasenegroCajonera = "btn btn-default";
		   	$scope.CajoneraComentOcultar = false;
		    

		   }else if($scope.radioModelCajonera == 2){

		   	$scope.claseverdeCajonera = "btn btn-default";
		    $scope.claserojaCajonera = "btn btn-default";
		    $scope.claseamarillaCajonera = "btn btn-warning";
		    $scope.CajoneraComentOcultar = true;

		   }else if($scope.radioModelCajonera == 3){

		   	$scope.claseverdeCajonera = "btn btn-default";
		    $scope.claserojaCajonera = "btn btn-default";
		    $scope.claseamarillaCajonera = "btn btn-default";
		    $scope.clasenegroCajonera = "btn btn-info";
		    $scope.CajoneraComentOcultar = false;




		   }
		   



		   if($scope.radioModelCajonera2 == 0){

		     $scope.claseverdeCajonera2 = "btn btn-default";
		     $scope.claserojaCajonera2 = "btn btn-danger";
		     $scope.claseamarillaCajonera2 = "btn btn-default";
		     $scope.clasenegroCajonera2 = "btn btn-default";
		     $scope.CajoneraComentOcultar2 = false;

		   }else if($scope.radioModelCajonera2 == 1){

		   	$scope.claserojaCajonera2 = "btn btn-default";
		   	$scope.claseverdeCajonera2 = "btn btn-success";
		   	$scope.claseamarillaCajonera2 = "btn btn-default";
		   	$scope.clasenegroCajonera2 = "btn btn-default";
		   	$scope.CajoneraComentOcultar2 = false;
		    

		   }else if($scope.radioModelCajonera2 == 2){

		   	$scope.claseverdeCajonera2 = "btn btn-default";
		    $scope.claserojaCajonera2 = "btn btn-default";
		    $scope.clasenegroCajonera2 = "btn btn-default";
		    $scope.claseamarillaCajonera2 = "btn btn-warning";
		    $scope.CajoneraComentOcultar2 = true;




		   }else if($scope.radioModelCajonera2 == 3){

		   	$scope.claserojaCajonera2 = "btn btn-default";
		   	$scope.claseverdeCajonera2 = "btn btn-default";
		   	$scope.claseamarillaCajonera2 = "btn btn-default";
		   	$scope.clasenegroCajonera2 = "btn btn-info";
		   	$scope.CajoneraComentOcultar2 = false;
		    

		   }
		   



		   if($scope.radioModel3 == 0){

		    $scope.claseverde3 = "btn btn-default";
		    $scope.claseroja3 = "btn btn-danger";
		    $scope.claseamarilla3 = "btn btn-default";
		    $scope.clasenegro3 = "btn btn-default";
		    $scope.ComentOcultar3 = false;

		   }else if($scope.radioModel3 == 1){

		   	$scope.claseroja3 = "btn btn-default";
		   	$scope.claseverde3 = "btn btn-success";
		   	$scope.claseamarilla3 = "btn btn-default";
		   	$scope.clasenegro3 = "btn btn-default";
		   	$scope.ComentOcultar3 = false;
		    

		   }else if($scope.radioModel3 == 2){

		   	$scope.claseverde3 = "btn btn-default";
		    $scope.claseroja3 = "btn btn-default";
		    $scope.claseamarilla3 = "btn btn-warning";
		    $scope.clasenegro3 = "btn btn-default";
		    $scope.ComentOcultar3 = true;




		   }else if($scope.radioModel3 == 3){

		   	$scope.claseroja3 = "btn btn-default";
		   	$scope.claseverde3 = "btn btn-default";
		   	$scope.claseamarilla3 = "btn btn-default";
		   	$scope.clasenegro3 = "btn btn-info";
		   	$scope.ComentOcultar3 = false;
		    

		   }


		  if($scope.radioModel4 == 0){

		    $scope.claseverde4 = "btn btn-default";
		    $scope.claseroja4 = "btn btn-danger";
		    $scope.claseamarilla4 = "btn btn-default";
		    $scope.clasenegro4 = "btn btn-default";
		    $scope.ComentOcultar4 = false;

		   }else if($scope.radioModel4 == 1){

		   	$scope.claseroja4 = "btn btn-default";
		   	$scope.claseverde4 = "btn btn-success";
		   	$scope.claseamarilla4 = "btn btn-default";
		   	$scope.clasenegro4 = "btn btn-default";
		   	$scope.ComentOcultar4 = false;
		    

		   }else if($scope.radioModel4 == 2){

		   	$scope.claseverde4 = "btn btn-default";
		    $scope.claseroja4 = "btn btn-default";
		    $scope.claseamarilla4 = "btn btn-warning";
		    $scope.clasenegro4 = "btn btn-default";
		    $scope.ComentOcultar4 = true;




		   }else if($scope.radioModel4 == 3){

		   	$scope.claseroja4 = "btn btn-default";
		   	$scope.claseverde4 = "btn btn-default";
		   	$scope.claseamarilla4 = "btn btn-default";
		   	$scope.clasenegro4 = "btn btn-info";
		   	$scope.ComentOcultar4 = false;
		    

		   }


		  if($scope.radioModel5 == 0){

		    $scope.claseverde5 = "btn btn-default";
		    $scope.claseroja5 = "btn btn-danger";
		    $scope.claseamarilla5 = "btn btn-default";
		    $scope.clasenegro5 = "btn btn-default";
		    $scope.ComentOcultar5 = false;

		   }else if($scope.radioModel5 == 1){

		   	$scope.claseroja5 = "btn btn-default";
		   	$scope.claseverde5 = "btn btn-success";
		   	$scope.claseamarilla5 = "btn btn-default";
		   	$scope.clasenegro5 = "btn btn-default";
		   	$scope.ComentOcultar5 = false;
		    

		   }else if($scope.radioModel5 == 2){

		   	$scope.claseverde5 = "btn btn-default";
		    $scope.claseroja5 = "btn btn-default";
		    $scope.claseamarilla5 = "btn btn-warning";
		    $scope.clasenegro5 = "btn btn-default";
		    $scope.ComentOcultar5 = true;




		   }else if($scope.radioModel5 == 3){

		   	$scope.claseroja5 = "btn btn-default";
		   	$scope.claseverde5 = "btn btn-default";
		   	$scope.claseamarilla5 = "btn btn-default";
		   	$scope.clasenegro5 = "btn btn-info";
		   	$scope.ComentOcultar5 = false;
		    

		   }
		   



		   if($scope.radioModel6 == 0){

		    $scope.claseverde6 = "btn btn-default";
		    $scope.claseroja6 = "btn btn-danger";
		    $scope.claseamarilla6 = "btn btn-default";
		    $scope.clasenegro6 = "btn btn-default";
		    $scope.ComentOcultar6 = false;

		   }else if($scope.radioModel6 == 1){

		   	$scope.claseroja6 = "btn btn-default";
		   	$scope.claseverde6 = "btn btn-success";
		   	$scope.claseamarilla6 = "btn btn-default";
		   	$scope.clasenegro6 = "btn btn-default";
		   	$scope.ComentOcultar6 = false;
		    

		   }else if($scope.radioModel6 == 2){

		   	$scope.claseverde6 = "btn btn-default";
		    $scope.claseroja6 = "btn btn-default";
		    $scope.claseamarilla6 = "btn btn-warning";
		    $scope.clasenegro6 = "btn btn-default";
		    $scope.ComentOcultar6 = true;




		   }else if($scope.radioModel6 == 3){

		   	$scope.claseroja6 = "btn btn-default";
		   	$scope.claseverde6 = "btn btn-default";
		   	$scope.claseamarilla6 = "btn btn-default";
		   	$scope.clasenegro6 = "btn btn-info";
		   	$scope.ComentOcultar6 = false;
		    

		   }
		   


		  if($scope.radioModel7 == 0){

		    $scope.claseverde7 = "btn btn-default";
		    $scope.claseroja7 = "btn btn-danger";
		    $scope.claseamarilla7 = "btn btn-default";
		    $scope.clasenegro7 = "btn btn-default";
		    $scope.ComentOcultar7 = false;

		   }else if($scope.radioModel7 == 1){

		   	$scope.claseroja7 = "btn btn-default";
		   	$scope.claseverde7 = "btn btn-success";
		   	$scope.claseamarilla7 = "btn btn-default";
		   	$scope.clasenegro7 = "btn btn-default";
		   	$scope.ComentOcultar7 = false;
		    

		   }else if($scope.radioModel7 == 2){

		   	$scope.claseverde7 = "btn btn-default";
		    $scope.claseroja7 = "btn btn-default";
		    $scope.claseamarilla7 = "btn btn-warning";
		    $scope.clasenegro7 = "btn btn-default";
		    $scope.ComentOcultar7 = true;




		   }else if($scope.radioModel7 == 3){

		   	$scope.claseroja7 = "btn btn-default";
		   	$scope.claseverde7 = "btn btn-default";
		   	$scope.claseamarilla7 = "btn btn-default";
		   	$scope.clasenegro7 = "btn btn-info";
		   	$scope.ComentOcultar7 = false;
		    

		   }
		   



		  if($scope.radioModel8 == 0){

		    $scope.claseverde8 = "btn btn-default";
		    $scope.claseroja8 = "btn btn-danger";
		    $scope.claseamarilla8 = "btn btn-default";
		    $scope.clasenegro8 = "btn btn-default";
		    $scope.ComentOcultar8 = false;

		   }else if($scope.radioModel8 == 1){

		   	$scope.claseroja8 = "btn btn-default";
		   	$scope.claseverde8 = "btn btn-success";
		   	$scope.claseamarilla8 = "btn btn-default";
		   	$scope.clasenegro8 = "btn btn-default";
		   	$scope.ComentOcultar8 = false;
		    

		   }else if($scope.radioModel8 == 2){

		   	$scope.claseverde8 = "btn btn-default";
		    $scope.claseroja8 = "btn btn-default";
		    $scope.claseamarilla8 = "btn btn-warning";
		    $scope.clasenegro8 = "btn btn-default";
		    $scope.ComentOcultar8 = true;




		   }else if($scope.radioModel8 == 3){

		   	$scope.claseroja8 = "btn btn-default";
		   	$scope.claseverde8 = "btn btn-default";
		   	$scope.claseamarilla8 = "btn btn-default";
		   	$scope.clasenegro8 = "btn btn-info";
		   	$scope.ComentOcultar8 = false;
		    

		   }
		   


		  if($scope.radioModel9 == 0){

		    $scope.claseverde9 = "btn btn-default";
		    $scope.claseroja9 = "btn btn-danger";
		    $scope.claseamarilla9 = "btn btn-default";
		    $scope.clasenegro9 = "btn btn-default";
		    $scope.ComentOcultar9 = false;

		   }else if($scope.radioModel9 == 1){

		   	$scope.claseroja9 = "btn btn-default";
		   	$scope.claseverde9 = "btn btn-success";
		   	$scope.claseamarilla9 = "btn btn-default";
		   	$scope.clasenegro9 = "btn btn-default";
		   	$scope.ComentOcultar9 = false;
		    

		   }else if($scope.radioModel9 == 2){

		   	$scope.claseverde9 = "btn btn-default";
		    $scope.claseroja9 = "btn btn-default";
		    $scope.claseamarilla9 = "btn btn-warning";
		    $scope.clasenegro9 = "btn btn-default";
		    $scope.ComentOcultar9 = true;




		   }else if($scope.radioModel9 == 3){

		   	$scope.claseroja9 = "btn btn-default";
		   	$scope.claseverde9 = "btn btn-default";
		   	$scope.claseamarilla9 = "btn btn-default";
		   	$scope.clasenegro9 = "btn btn-info";
		   	$scope.ComentOcultar9 = false;
		    

		   }
		   



		  if($scope.radioModel10 == 0){

		    $scope.claseverde10 = "btn btn-default";
		    $scope.claseroja10 = "btn btn-danger";
		    $scope.claseamarilla10 = "btn btn-default";
		    $scope.clasenegro10 = "btn btn-default";
		    $scope.ComentOcultar10 = false;

		   }else if($scope.radioModel10 == 1){

		   	$scope.claseroja10 = "btn btn-default";
		   	$scope.claseverde10 = "btn btn-success";
		   	$scope.claseamarilla10 = "btn btn-default";
		   	$scope.clasenegro10 = "btn btn-default";
		   	$scope.ComentOcultar10 = false;
		    

		   }else if($scope.radioModel10 == 2){

		   	$scope.claseverde10 = "btn btn-default";
		    $scope.claseroja10 = "btn btn-default";
		    $scope.claseamarilla10 = "btn btn-warning";
		    $scope.clasenegro10 = "btn btn-default";
		    $scope.ComentOcultar10 = true;




		   }else if($scope.radioModel10 == 3){

		   	$scope.claseroja10 = "btn btn-default";
		   	$scope.claseverde10 = "btn btn-default";
		   	$scope.claseamarilla10 = "btn btn-default";
		   	$scope.clasenegro10 = "btn btn-info";
		   	$scope.ComentOcultar10 = false;
		    

		   }
		   



		 if($scope.radioModel11 == 0){

		    $scope.claseverde11 = "btn btn-default";
		    $scope.claseroja11 = "btn btn-danger";
		    $scope.claseamarilla11 = "btn btn-default";
		    $scope.clasenegro11 = "btn btn-default";
		    $scope.ComentOcultar11 = false;

		   }else if($scope.radioModel11 == 1){

		   	$scope.claseroja11 = "btn btn-default";
		   	$scope.claseverde11 = "btn btn-success";
		   	$scope.claseamarilla11 = "btn btn-default";
		   	$scope.clasenegro11 = "btn btn-default";
		   	$scope.ComentOcultar11 = false;
		    

		   }else if($scope.radioModel11 == 2){

		   	$scope.claseverde11 = "btn btn-default";
		    $scope.claseroja11 = "btn btn-default";
		    $scope.claseamarilla11 = "btn btn-warning";
		    $scope.clasenegro11 = "btn btn-default";
		    $scope.ComentOcultar11 = true;




		   }else if($scope.radioModel11 == 3){

		   	$scope.claseroja11 = "btn btn-default";
		   	$scope.claseverde11 = "btn btn-default";
		   	$scope.claseamarilla11 = "btn btn-default";
		   	$scope.clasenegro11 = "btn btn-info";
		   	$scope.ComentOcultar11 = false;
		    

		   }
		   



		  if($scope.radioModel12 == 0){

		    $scope.claseverde12 = "btn btn-default";
		    $scope.claseroja12 = "btn btn-danger";
		    $scope.claseamarilla12 = "btn btn-default";
		    $scope.clasenegro12 = "btn btn-default";
		    $scope.ComentOcultar12 = false;

		   }else if($scope.radioModel12 == 1){

		   	$scope.claseroja12 = "btn btn-default";
		   	$scope.claseverde12 = "btn btn-success";
		   	$scope.claseamarilla12 = "btn btn-default";
		   	$scope.clasenegro12 = "btn btn-default";
		   	$scope.ComentOcultar12 = false;
		    

		   }else if($scope.radioModel12 == 2){

		   	$scope.claseverde12 = "btn btn-default";
		    $scope.claseroja12 = "btn btn-default";
		    $scope.claseamarilla12 = "btn btn-warning";
		    $scope.clasenegro12 = "btn btn-default";
		    $scope.ComentOcultar12 = true;




		   }else if($scope.radioModel12 == 3){

		   	$scope.claseroja12 = "btn btn-default";
		   	$scope.claseverde12 = "btn btn-default";
		   	$scope.claseamarilla12 = "btn btn-default";
		   	$scope.clasenegro12 = "btn btn-info";
		   	$scope.ComentOcultar12 = false;
		    

		   }
		   



		  if($scope.radioModel13 == 0){

		    $scope.claseverde13 = "btn btn-default";
		    $scope.claseroja13 = "btn btn-danger";
		    $scope.claseamarilla13 = "btn btn-default";
		    $scope.clasenegro13 = "btn btn-default";
		    $scope.ComentOcultar13 = false;

		   }else if($scope.radioModel13 == 1){

		   	$scope.claseroja13 = "btn btn-default";
		   	$scope.claseverde13 = "btn btn-success";
		   	$scope.claseamarilla13 = "btn btn-default";
		   	$scope.clasenegro13 = "btn btn-default";
		   	$scope.ComentOcultar13 = false;
		    

		   }else if($scope.radioModel13 == 2){

		   	$scope.claseverde13 = "btn btn-default";
		    $scope.claseroja13 = "btn btn-default";
		    $scope.claseamarilla13 = "btn btn-warning";
		    $scope.clasenegro13 = "btn btn-default";
		    $scope.ComentOcultar13 = true;




		   }else if($scope.radioModel13 == 3){

		   	$scope.claseroja13 = "btn btn-default";
		   	$scope.claseverde13 = "btn btn-default";
		   	$scope.claseamarilla13 = "btn btn-default";
		   	$scope.clasenegro13 = "btn btn-info";
		   	$scope.ComentOcultar13 = false;
		    

		   }



		   if($scope.radioModel14 == 0){

		    $scope.claseverde14 = "btn btn-default";
		    $scope.claseroja14 = "btn btn-danger";
		    $scope.claseamarilla14 = "btn btn-default";
		    $scope.clasenegro14 = "btn btn-default";
		    $scope.ComentOcultar14 = false;

		   }else if($scope.radioModel14 == 1){

		   	$scope.claseroja14 = "btn btn-default";
		   	$scope.claseverde14 = "btn btn-success";
		   	$scope.claseamarilla14 = "btn btn-default";
		   	$scope.clasenegro14 = "btn btn-default";
		   	$scope.ComentOcultar14 = false;
		    

		   }else if($scope.radioModel14 == 2){

		   	$scope.claseverde14 = "btn btn-default";
		    $scope.claseroja14 = "btn btn-default";
		    $scope.claseamarilla14 = "btn btn-warning";
		    $scope.clasenegro14 = "btn btn-default";
		    $scope.ComentOcultar14 = true;




		   }else if($scope.radioModel14 == 3){

		   	$scope.claseroja14 = "btn btn-default";
		   	$scope.claseverde14 = "btn btn-default";
		   	$scope.claseamarilla14 = "btn btn-default";
		   	$scope.clasenegro14 = "btn btn-info";
		   	$scope.ComentOcultar14 = false;
		    

		   }
		   



		 if($scope.radioModel15 == 0){

		    $scope.claseverde15 = "btn btn-default";
		    $scope.claseroja15 = "btn btn-danger";
		    $scope.claseamarilla15 = "btn btn-default";
		    $scope.clasenegro15 = "btn btn-default";
		    $scope.ComentOcultar15 = false;

		   }else if($scope.radioModel15 == 1){

		   	$scope.claseroja15 = "btn btn-default";
		   	$scope.claseverde15 = "btn btn-success";
		   	$scope.claseamarilla15 = "btn btn-default";
		   	$scope.clasenegro15 = "btn btn-default";
		   	$scope.ComentOcultar15 = false;
		    

		   }else if($scope.radioModel15 == 2){

		   	$scope.claseverde15 = "btn btn-default";
		    $scope.claseroja15 = "btn btn-default";
		    $scope.claseamarilla15 = "btn btn-warning";
		    $scope.clasenegro15 = "btn btn-default";
		    $scope.ComentOcultar15 = true;




		   }else if($scope.radioModel15 == 3){

		   	$scope.claseroja15 = "btn btn-default";
		   	$scope.claseverde15 = "btn btn-default";
		   	$scope.claseamarilla15 = "btn btn-default";
		   	$scope.clasenegro15 = "btn btn-info";
		   	$scope.ComentOcultar15 = false;
		    

		   }
		   



		  if($scope.radioModel16 == 0){

		    $scope.claseverde16 = "btn btn-default";
		    $scope.claseroja16 = "btn btn-danger";
		    $scope.claseamarilla16 = "btn btn-default";
		    $scope.clasenegro16 = "btn btn-default";
		    $scope.ComentOcultar16 = false;

		   }else if($scope.radioModel16 == 1){

		   	$scope.claseroja16 = "btn btn-default";
		   	$scope.claseverde16 = "btn btn-success";
		   	$scope.claseamarilla16 = "btn btn-default";
		   	$scope.clasenegro16 = "btn btn-default";
		   	$scope.ComentOcultar16 = false;
		    

		   }else if($scope.radioModel16 == 2){

		   	$scope.claseverde16 = "btn btn-default";
		    $scope.claseroja16 = "btn btn-default";
		    $scope.claseamarilla16 = "btn btn-warning";
		    $scope.clasenegro16 = "btn btn-default";
		    $scope.ComentOcultar16 = true;




		   }else if($scope.radioModel16 == 3){

		   	$scope.claseroja16 = "btn btn-default";
		   	$scope.claseverde16 = "btn btn-default";
		   	$scope.claseamarilla16 = "btn btn-default";
		   	$scope.clasenegro16 = "btn btn-info";
		   	$scope.ComentOcultar16 = false;
		    

		   }
		   



		  if($scope.radioModel18 == 0){

		    $scope.claseverde18 = "btn btn-default";
		    $scope.claseroja18 = "btn btn-danger";
		    $scope.claseamarilla18 = "btn btn-default";
		    $scope.clasenegro18 = "btn btn-default";
		    $scope.ComentOcultar18 = false;

		   }else if($scope.radioModel18 == 1){

		   	$scope.claseroja18 = "btn btn-default";
		   	$scope.claseverde18 = "btn btn-success";
		   	$scope.claseamarilla18 = "btn btn-default";
		   	$scope.clasenegro18 = "btn btn-default";
		   	$scope.ComentOcultar18 = false;
		    

		   }else if($scope.radioModel18 == 2){

		   	$scope.claseverde18 = "btn btn-default";
		    $scope.claseroja18 = "btn btn-default";
		    $scope.claseamarilla18 = "btn btn-warning";
		    $scope.clasenegro18 = "btn btn-default";
		    $scope.ComentOcultar18 = true;




		   }else if($scope.radioModel18 == 3){

		   	$scope.claseroja18 = "btn btn-default";
		   	$scope.claseverde18 = "btn btn-default";
		   	$scope.claseamarilla18 = "btn btn-default";
		   	$scope.clasenegro18 = "btn btn-info";
		   	$scope.ComentOcultar18 = false;
		    

		   }
		   



		   if($scope.radioModel19 == 0){

		    $scope.claseverde19 = "btn btn-default";
		    $scope.claseroja19 = "btn btn-danger";
		    $scope.claseamarilla19 = "btn btn-default";
		    $scope.clasenegro19 = "btn btn-default";
		    $scope.ComentOcultar19 = false;

		   }else if($scope.radioModel19 == 1){

		   	$scope.claseroja19 = "btn btn-default";
		   	$scope.claseverde19 = "btn btn-success";
		   	$scope.claseamarilla19 = "btn btn-default";
		   	$scope.clasenegro19 = "btn btn-default";
		   	$scope.ComentOcultar19 = false;
		    

		   }else if($scope.radioModel19 == 2){

		   	$scope.claseverde19 = "btn btn-default";
		    $scope.claseroja19 = "btn btn-default";
		    $scope.claseamarilla19 = "btn btn-warning";
		    $scope.clasenegro19 = "btn btn-default";
		    $scope.ComentOcultar19 = true;




		   }else if($scope.radioModel19 == 3){

		   	$scope.claseroja19 = "btn btn-default";
		   	$scope.claseverde19 = "btn btn-default";
		   	$scope.claseamarilla19 = "btn btn-default";
		   	$scope.clasenegro19 = "btn btn-info";
		   	$scope.ComentOcultar19 = false;
		    

		   }
		   



		  if($scope.radioModel20 == 0){

		    $scope.claseverde20 = "btn btn-default";
		    $scope.claseroja20 = "btn btn-danger";
		    $scope.claseamarilla20 = "btn btn-default";
		    $scope.clasenegro20 = "btn btn-default";
		    $scope.ComentOcultar20 = false;

		   }else if($scope.radioModel20 == 1){

		   	$scope.claseroja20 = "btn btn-default";
		   	$scope.claseverde20 = "btn btn-success";
		   	$scope.claseamarilla20 = "btn btn-default";
		   	$scope.clasenegro20 = "btn btn-default";
		   	$scope.ComentOcultar20 = false;
		    

		   }else if($scope.radioModel20 == 2){

		   	$scope.claseverde20 = "btn btn-default";
		    $scope.claseroja20 = "btn btn-default";
		    $scope.claseamarilla20 = "btn btn-warning";
		    $scope.clasenegro20 = "btn btn-default";
		    $scope.ComentOcultar20 = true;




		   }else if($scope.radioModel20 == 3){

		   	$scope.claseroja20 = "btn btn-default";
		   	$scope.claseverde20 = "btn btn-default";
		   	$scope.claseamarilla20 = "btn btn-default";
		   	$scope.clasenegro20 = "btn btn-info";
		   	$scope.ComentOcultar20 = false;
		    

		   }
		   



		  if($scope.radioModel21 == 0){

		    $scope.claseverde21 = "btn btn-default";
		    $scope.claseroja21 = "btn btn-danger";
		    $scope.claseamarilla21 = "btn btn-default";
		    $scope.clasenegro21 = "btn btn-default";
		    $scope.ComentOcultar21 = false;

		   }else if($scope.radioModel21 == 1){

		   	$scope.claseroja21 = "btn btn-default";
		   	$scope.claseverde21 = "btn btn-success";
		   	$scope.claseamarilla21 = "btn btn-default";
		   	$scope.clasenegro21 = "btn btn-default";
		   	$scope.ComentOcultar21 = false;
		    

		   }else if($scope.radioModel21 == 2){

		   	$scope.claseverde21 = "btn btn-default";
		    $scope.claseroja21 = "btn btn-default";
		    $scope.claseamarilla21 = "btn btn-warning";
		    $scope.clasenegro21 = "btn btn-default";
		    $scope.ComentOcultar21 = true;




		   }else if($scope.radioModel21 == 3){

		   	$scope.claseroja21 = "btn btn-default";
		   	$scope.claseverde21 = "btn btn-default";
		   	$scope.claseamarilla21 = "btn btn-default";
		   	$scope.clasenegro21 = "btn btn-info";
		   	$scope.ComentOcultar21 = false;
		    

		   }
		   



		  if($scope.radioModel22 == 0){

		    $scope.claseverde22 = "btn btn-default";
		    $scope.claseroja22 = "btn btn-danger";
		    $scope.claseamarilla22 = "btn btn-default";
		    $scope.clasenegro22 = "btn btn-default";
		    $scope.ComentOcultar22 = false;

		   }else if($scope.radioModel22 == 1){

		   	$scope.claseroja22 = "btn btn-default";
		   	$scope.claseverde22 = "btn btn-success";
		   	$scope.claseamarilla22 = "btn btn-default";
		   	$scope.clasenegro22 = "btn btn-default";
		   	$scope.ComentOcultar22 = false;
		    

		   }else if($scope.radioModel22 == 2){

		   	$scope.claseverde22 = "btn btn-default";
		    $scope.claseroja22 = "btn btn-default";
		    $scope.claseamarilla22 = "btn btn-warning";
		    $scope.clasenegro22 = "btn btn-default";
		    $scope.ComentOcultar22 = true;




		   }else if($scope.radioModel22 == 3){

		   	$scope.claseroja22 = "btn btn-default";
		   	$scope.claseverde22 = "btn btn-default";
		   	$scope.claseamarilla22 = "btn btn-default";
		   	$scope.clasenegro22 = "btn btn-info";
		   	$scope.ComentOcultar22 = false;
		    

		   }



		  if($scope.radioModel23 == 0){

		    $scope.claseverde23 = "btn btn-default";
		    $scope.claseroja23 = "btn btn-danger";
		    $scope.claseamarilla23 = "btn btn-default";
		    $scope.clasenegro23 = "btn btn-default";
		    $scope.ComentOcultar23 = false;

		   }else if($scope.radioModel23 == 1){

		   	$scope.claseroja23 = "btn btn-default";
		   	$scope.claseverde23 = "btn btn-success";
		   	$scope.claseamarilla23 = "btn btn-default";
		   	$scope.clasenegro23 = "btn btn-default";
		   	$scope.ComentOcultar23 = false;
		    

		   }else if($scope.radioModel23 == 2){

		   	$scope.claseverde23 = "btn btn-default";
		    $scope.claseroja23 = "btn btn-default";
		    $scope.claseamarilla23 = "btn btn-warning";
		    $scope.clasenegro23 = "btn btn-default";
		    $scope.ComentOcultar23 = true;




		   }else if($scope.radioModel23 == 3){

		   	$scope.claseroja23 = "btn btn-default";
		   	$scope.claseverde23 = "btn btn-default";
		   	$scope.claseamarilla23 = "btn btn-default";
		   	$scope.clasenegro23 = "btn btn-info";
		   	$scope.ComentOcultar23 = false;
		    

		   }
		   



		  if($scope.radioModel24 == 0){

		    $scope.claseverde24 = "btn btn-default";
		    $scope.claseroja24 = "btn btn-danger";
		    $scope.claseamarilla24 = "btn btn-default";
		    $scope.clasenegro24 = "btn btn-default";
		    $scope.ComentOcultar24 = false;

		   }else if($scope.radioModel24 == 1){

		   	$scope.claseroja24 = "btn btn-default";
		   	$scope.claseverde24 = "btn btn-success";
		   	$scope.claseamarilla24 = "btn btn-default";
		   	$scope.clasenegro24 = "btn btn-default";
		   	$scope.ComentOcultar24 = false;
		    

		   }else if($scope.radioModel24 == 2){

		   	$scope.claseverde24 = "btn btn-default";
		    $scope.claseroja24 = "btn btn-default";
		    $scope.claseamarilla24 = "btn btn-warning";
		    $scope.clasenegro24 = "btn btn-default";
		    $scope.ComentOcultar24 = true;




		   }else if($scope.radioModel24 == 3){

		   	$scope.claseroja24 = "btn btn-default";
		   	$scope.claseverde24 = "btn btn-default";
		   	$scope.claseamarilla24 = "btn btn-default";
		   	$scope.clasenegro24 = "btn btn-info";
		   	$scope.ComentOcultar24 = false;
		    

		   }
		   		  if($scope.radioModel25 == 0){

		    $scope.claseverde25 = "btn btn-default";
		    $scope.claseroja25 = "btn btn-danger";
		    $scope.claseamarilla25 = "btn btn-default";
		    $scope.clasenegro25 = "btn btn-default";
		    $scope.ComentOcultar25 = false;

		   }else if($scope.radioModel25 == 1){

		   	$scope.claseroja25 = "btn btn-default";
		   	$scope.claseverde25 = "btn btn-success";
		   	$scope.claseamarilla25 = "btn btn-default";
		   	$scope.clasenegro25 = "btn btn-default";
		   	$scope.ComentOcultar25 = false;
		    

		   }else if($scope.radioModel25 == 2){

		   	$scope.claseverde25 = "btn btn-default";
		    $scope.claseroja25 = "btn btn-default";
		    $scope.claseamarilla25 = "btn btn-warning";
		    $scope.clasenegro25 = "btn btn-default";
		    $scope.ComentOcultar25 = true;




		   }else if($scope.radioModel25 == 3){

		   	$scope.claseroja25 = "btn btn-default";
		   	$scope.claseverde25 = "btn btn-default";
		   	$scope.claseamarilla25 = "btn btn-default";
		   	$scope.clasenegro25 = "btn btn-info";
		   	$scope.ComentOcultar25 = false;
		    

		   }

		   if($scope.radioModel26 == 0){

		    $scope.claseverde26 = "btn btn-default";
		    $scope.claseroja26 = "btn btn-danger";
		    $scope.claseamarilla26 = "btn btn-default";
		    $scope.clasenegro26 = "btn btn-default";
		    $scope.ComentOcultar26 = false;

		   }else if($scope.radioModel26 == 1){

		   	$scope.claseroja26 = "btn btn-default";
		   	$scope.claseverde26 = "btn btn-success";
		   	$scope.claseamarilla26 = "btn btn-default";
		   	$scope.clasenegro26 = "btn btn-default";
		   	$scope.ComentOcultar26 = false;
		    

		   }else if($scope.radioModel26 == 2){

		   	$scope.claseverde26 = "btn btn-default";
		    $scope.claseroja26 = "btn btn-default";
		    $scope.claseamarilla26 = "btn btn-warning";
		    $scope.clasenegro26 = "btn btn-default";
		    $scope.ComentOcultar26 = true;




		   }else if($scope.radioModel26 == 3){

		   	$scope.claseroja26 = "btn btn-default";
		   	$scope.claseverde26 = "btn btn-default";
		   	$scope.claseamarilla26 = "btn btn-default";
		   	$scope.clasenegro26 = "btn btn-info";
		   	$scope.ComentOcultar26 = false;
		    

		   }

		   if($scope.radioModel27 == 0){

		    $scope.claseverde27 = "btn btn-default";
		    $scope.claseroja27 = "btn btn-danger";
		    $scope.claseamarilla27 = "btn btn-default";
		    $scope.clasenegro27 = "btn btn-default";
		    $scope.ComentOcultar27 = false;

		   }else if($scope.radioModel27 == 1){

		   	$scope.claseroja27 = "btn btn-default";
		   	$scope.claseverde27 = "btn btn-success";
		   	$scope.claseamarilla27 = "btn btn-default";
		   	$scope.clasenegro27 = "btn btn-default";
		   	$scope.ComentOcultar27 = false;
		    

		   }else if($scope.radioModel27 == 2){

		   	$scope.claseverde27 = "btn btn-default";
		    $scope.claseroja27= "btn btn-default";
		    $scope.claseamarilla27 = "btn btn-warning";
		    $scope.clasenegro27 = "btn btn-default";
		    $scope.ComentOcultar27 = true;




		   }else if($scope.radioModel27 == 3){

		   	$scope.claseroja27 = "btn btn-default";
		   	$scope.claseverde27 = "btn btn-default";
		   	$scope.claseamarilla27 = "btn btn-default";
		   	$scope.clasenegro27 = "btn btn-info";
		   	$scope.ComentOcultar27 = false;
		    

		   }

		   if($scope.radioModel28 == 0){

		    $scope.claseverde28 = "btn btn-default";
		    $scope.claseroja28 = "btn btn-danger";
		    $scope.claseamarilla28 = "btn btn-default";
		    $scope.clasenegro28 = "btn btn-default";
		    $scope.ComentOcultar28 = false;

		   }else if($scope.radioModel28 == 1){

		   	$scope.claseroja28 = "btn btn-default";
		   	$scope.claseverde28 = "btn btn-success";
		   	$scope.claseamarilla28 = "btn btn-default";
		   	$scope.clasenegro28 = "btn btn-default";
		   	$scope.ComentOcultar28 = false;
		    

		   }else if($scope.radioModel28 == 2){

		   	$scope.claseverde28 = "btn btn-default";
		    $scope.claseroja28 = "btn btn-default";
		    $scope.claseamarilla28 = "btn btn-warning";
		    $scope.clasenegro28 = "btn btn-default";
		    $scope.ComentOcultar28 = true;




		   }else if($scope.radioModel28 == 3){

		   	$scope.claseroja28 = "btn btn-default";
		   	$scope.claseverde28 = "btn btn-default";
		   	$scope.claseamarilla28 = "btn btn-default";
		   	$scope.clasenegro28 = "btn btn-info";
		   	$scope.ComentOcultar28 = false;
		    

		   }



	
	
		   
 $scope.botones = function(){




   	if($scope.radioModelPdfFicf == 1){

   		$scope.verdePdfFicf = "btn btn-success";	   	
   	
   }else if($scope.radioModelPdfFicf == null) {

   	    $scope.verdePdfFicf = "btn btn-default";
   }

  

    	if($scope.radioModelPdfFica == 1){

   		$scope.verdePdfFica = "btn btn-success";	   	
   	
   }else if($scope.radioModelPdfFica == null) {

   	    $scope.verdePdfFica = "btn btn-default";
   }

  

   
  	
    	if($scope.radioModelPdfMyt == 1){

   		$scope.verdePdfMyt = "btn btn-success";	   	
   	
		   }else if($scope.radioModelPdfMyt == null) {

		   	    $scope.verdePdfMyt = "btn btn-default";
		   }

  
 	                if($scope.radioModel == 0){

		     $scope.claseverdeFICF = "btn btn-default";
		     $scope.claserojaFICF = "btn btn-danger";
		     $scope.claseamarillaFICF = "btn btn-default";
		     $scope.clasenegroFICF = "btn btn-default";
		     $scope.FICFComentOcultar = false;

		   }else if($scope.radioModel == 1){

		   	$scope.claserojaFICF = "btn btn-default";
		   	$scope.claseverdeFICF  = "btn btn-success";
		   	$scope.claseamarillaFICF = "btn btn-default";
		   	$scope.clasenegroFICF = "btn btn-default";
		   	$scope.FICFComentOcultar = false;
		    

		   }else if($scope.radioModel == 2){

		   	$scope.claseverdeFICF = "btn btn-default";
		    $scope.claserojaFICF = "btn btn-default";
		    $scope.claseamarillaFICF = "btn btn-warning";
		    $scope.clasenegroFICF = "btn btn-default";
		    $scope.FICFComentOcultar = true;




		   }else if($scope.radioModel == 3){

		   	$scope.claseverdeFICF = "btn btn-default";
		    $scope.claserojaFICF = "btn btn-default";
		    $scope.claseamarillaFICF = "btn btn-default";
		    $scope.clasenegroFICF = "btn btn-info";
		    $scope.FICFComentOcultar = false;




		   }
		   



		   if($scope.radioModelFICA == 0){

		     $scope.claseverdeFICA = "btn btn-default";
		     $scope.claserojaFICA = "btn btn-danger";
		     $scope.claseamarillaFICA = "btn btn-default";
		     $scope.clasenegroFICA = "btn btn-default";
		     $scope.FICAComentOcultar = false;

		   }else if($scope.radioModelFICA == 1){

		   	$scope.claserojaFICA = "btn btn-default";
		   	$scope.claseverdeFICA  = "btn btn-success";
		   	$scope.claseamarillaFICA = "btn btn-default";
		   	$scope.clasenegroFICA = "btn btn-default";
		   	$scope.FICAComentOcultar = false;
		    

		   }else if($scope.radioModelFICA == 2){

		   	$scope.claseverdeFICA = "btn btn-default";
		    $scope.claserojaFICA = "btn btn-default";
		    $scope.claseamarillaFICA = "btn btn-warning";
		    $scope.clasenegroFICA = "btn btn-default";
		    $scope.FICAComentOcultar = true;




		   }else if($scope.radioModelFICA == 3){

		   	$scope.claseverdeFICA = "btn btn-default";
		    $scope.claserojaFICA = "btn btn-default";
		    $scope.claseamarillaFICA = "btn btn-defalut";
		    $scope.clasenegroFICA = "btn btn-info";
		    $scope.FICAComentOcultar = false;
		}

		   


		   if($scope.radioModelLAYOUT == 0){

		     $scope.claseverdeLAYOUT = "btn btn-default";
		     $scope.claserojaLAYOUT = "btn btn-danger";
		     $scope.claseamarillaLAYOUT = "btn btn-default";
		     $scope.clasenegroLAYOUT = "btn btn-default";
		     $scope.LAYOUTComentOcultar = false;

		   }else if($scope.radioModelLAYOUT == 1){

		   	$scope.claserojaLAYOUT = "btn btn-default";
		   	$scope.claseverdeLAYOUT  = "btn btn-success";
		   	$scope.claseamarillaLAYOUT = "btn btn-default";
		   	$scope.clasenegroLAYOUT = "btn btn-default";
		   	$scope.LAYOUTComentOcultar = false;
		    

		   }else if($scope.radioModelLAYOUT == 2){

		   	$scope.claseverdeLAYOUT = "btn btn-default";
		    $scope.claserojaLAYOUT = "btn btn-default";
		    $scope.claseamarillaLAYOUT = "btn btn-warning";
		    $scope.clasenegroLAYOUT = "btn btn-default";
		    $scope.LAYOUTComentOcultar = true;




		   }else if($scope.radioModelLAYOUT == 3){

		   	$scope.claseverdeLAYOUT = "btn btn-default";
		    $scope.claserojaLAYOUT = "btn btn-default";
		    $scope.claseamarillaLAYOUT = "btn btn-default";
		    $scope.clasenegroLAYOUT = "btn btn-info";
		    $scope.LAYOUTComentOcultar = false;




		   }
		   


		   if($scope.radioModelMYT == 0){

		     $scope.claseverdeMYT = "btn btn-default";
		     $scope.claserojaMYT = "btn btn-danger";
		     $scope.claseamarillaMYT = "btn btn-default";
		     $scope.clasenegroMYT = "btn btn-default";
		     $scope.MYTComentOcultar = false;

		   }else if($scope.radioModelMYT == 1){

		   	$scope.claserojaMYT = "btn btn-default";
		   	$scope.claseverdeMYT  = "btn btn-success";
		   	$scope.claseamarillaMYT = "btn btn-default";
		   	$scope.clasenegroMYT = "btn btn-default";
		   	$scope.MYTComentOcultar = false;
		    

		   }else if($scope.radioModelMYT == 2){

		   	$scope.claseverdeMYT = "btn btn-default";
		    $scope.claserojaMYT = "btn btn-default";
		    $scope.claseamarillaMYT = "btn btn-warning";
		    $scope.clasenegroMYT = "btn btn-default";
		    $scope.MYTComentOcultar = true;




		   }else if($scope.radioModelMYT == 3){

		   	$scope.claseverdeMYT = "btn btn-default";
		    $scope.claserojaMYT = "btn btn-default";
		    $scope.claseamarillaMYT = "btn btn-default";
		    $scope.clasenegroMYT = "btn btn-info";
		    $scope.MYTComentOcultar = false;
		}
		   



		   if($scope.radioModelFIPE == 0){

		     $scope.claseverdeFIPE = "btn btn-default";
		     $scope.claserojaFIPE = "btn btn-danger";
		     $scope.claseamarillaFIPE = "btn btn-default";
		     $scope.clasenegroFIPE = "btn btn-default";
		     $scope.FIPEComentOcultar = false;

		   }else if($scope.radioModelFIPE == 1){

		   	$scope.claserojaFIPE = "btn btn-default";
		   	$scope.claseverdeFIPE  = "btn btn-success";
		   	$scope.claseamarillaFIPE = "btn btn-default";
		   	$scope.clasenegroFIPE = "btn btn-default";
		   	$scope.FIPEComentOcultar = false;
		    

		   }else if($scope.radioModelFIPE == 2){

		   	$scope.claseverdeFIPE = "btn btn-default";
		    $scope.claserojaFIPE = "btn btn-default";
		    $scope.claseamarillaFIPE = "btn btn-warning";
		    $scope.clasenegroFIPE = "btn btn-default";
		    $scope.FIPEComentOcultar = true;




		   }else if($scope.radioModelFIPE == 3){

		   	$scope.claserojaFIPE = "btn btn-default";
		   	$scope.claseverdeFIPE  = "btn btn-default";
		   	$scope.claseamarillaFIPE = "btn btn-default";
		   	$scope.clasenegroFIPE = "btn btn-info";
		   	$scope.FIPEComentOcultar = false;
		    

		   }



		   if($scope.radioModelDSPR == 0){

		     $scope.claseverdeDSPR = "btn btn-default";
		     $scope.claserojaDSPR = "btn btn-danger";
		     $scope.claseamarillaDSPR = "btn btn-default";
		     $scope.clasenegroDSPR = "btn btn-default";
		     $scope.DSPRComentOcultar = false;

		   }else if($scope.radioModelDSPR == 1){

		   	$scope.claserojaDSPR = "btn btn-default";
		   	$scope.claseverdeDSPR = "btn btn-success";
		   	$scope.claseamarillaDSPR = "btn btn-default";
		   	$scope.clasenegroDSPR = "btn btn-default";
		   	$scope.DSPRComentOcultar = false;
		    

		   }else if($scope.radioModelDSPR == 2){

		   	$scope.claseverdeDSPR = "btn btn-default";
		    $scope.claserojaDSPR = "btn btn-default";
		    $scope.claseamarillaDSPR = "btn btn-warning";
		    $scope.clasenegroDSPR = "btn btn-default";
		    $scope.DSPRComentOcultar = true;




		   }else if($scope.radioModelDSPR == 3){

		   	$scope.claserojaDSPR = "btn btn-default";
		   	$scope.claseverdeDSPR = "btn btn-default";
		   	$scope.claseamarillaDSPR = "btn btn-default";
		   	$scope.clasenegroDSPR = "btn btn-info";
		   	$scope.DSPRComentOcultar = false;
		    

		   }
		   



		   if($scope.radioModelCajonera == 0){

		     $scope.claseverdeCajonera = "btn btn-default";
		     $scope.claserojaCajonera = "btn btn-danger";
		     $scope.claseamarillaCajonera = "btn btn-default";
		     $scope.clasenegroCajonera = "btn btn-default";
		     $scope.CajoneraComentOcultar = false;

		   }else if($scope.radioModelCajonera == 1){

		   	$scope.claserojaCajonera = "btn btn-default";
		   	$scope.claseverdeCajonera = "btn btn-success";
		   	$scope.claseamarillaCajonera = "btn btn-default";
		   	$scope.clasenegroCajonera = "btn btn-default";
		   	$scope.CajoneraComentOcultar = false;
		    

		   }else if($scope.radioModelCajonera == 2){

		   	$scope.claseverdeCajonera = "btn btn-default";
		    $scope.claserojaCajonera = "btn btn-default";
		    $scope.claseamarillaCajonera = "btn btn-warning";
		    $scope.CajoneraComentOcultar = true;

		   }else if($scope.radioModelCajonera == 3){

		   	$scope.claseverdeCajonera = "btn btn-default";
		    $scope.claserojaCajonera = "btn btn-default";
		    $scope.claseamarillaCajonera = "btn btn-default";
		    $scope.clasenegroCajonera = "btn btn-info";
		    $scope.CajoneraComentOcultar = false;




		   }
		   



		   if($scope.radioModelCajonera2 == 0){

		     $scope.claseverdeCajonera2 = "btn btn-default";
		     $scope.claserojaCajonera2 = "btn btn-danger";
		     $scope.claseamarillaCajonera2 = "btn btn-default";
		     $scope.clasenegroCajonera2 = "btn btn-default";
		     $scope.CajoneraComentOcultar2 = false;

		   }else if($scope.radioModelCajonera2 == 1){

		   	$scope.claserojaCajonera2 = "btn btn-default";
		   	$scope.claseverdeCajonera2 = "btn btn-success";
		   	$scope.claseamarillaCajonera2 = "btn btn-default";
		   	$scope.clasenegroCajonera2 = "btn btn-default";
		   	$scope.CajoneraComentOcultar2 = false;
		    

		   }else if($scope.radioModelCajonera2 == 2){

		   	$scope.claseverdeCajonera2 = "btn btn-default";
		    $scope.claserojaCajonera2 = "btn btn-default";
		    $scope.clasenegroCajonera2 = "btn btn-default";
		    $scope.claseamarillaCajonera2 = "btn btn-warning";
		    $scope.CajoneraComentOcultar2 = true;




		   }else if($scope.radioModelCajonera2 == 3){

		   	$scope.claserojaCajonera2 = "btn btn-default";
		   	$scope.claseverdeCajonera2 = "btn btn-default";
		   	$scope.claseamarillaCajonera2 = "btn btn-default";
		   	$scope.clasenegroCajonera2 = "btn btn-info";
		   	$scope.CajoneraComentOcultar2 = false;
		    

		   }
		   



		   if($scope.radioModel3 == 0){

		    $scope.claseverde3 = "btn btn-default";
		    $scope.claseroja3 = "btn btn-danger";
		    $scope.claseamarilla3 = "btn btn-default";
		    $scope.clasenegro3 = "btn btn-default";
		    $scope.ComentOcultar3 = false;

		   }else if($scope.radioModel3 == 1){

		   	$scope.claseroja3 = "btn btn-default";
		   	$scope.claseverde3 = "btn btn-success";
		   	$scope.claseamarilla3 = "btn btn-default";
		   	$scope.clasenegro3 = "btn btn-default";
		   	$scope.ComentOcultar3 = false;
		    

		   }else if($scope.radioModel3 == 2){

		   	$scope.claseverde3 = "btn btn-default";
		    $scope.claseroja3 = "btn btn-default";
		    $scope.claseamarilla3 = "btn btn-warning";
		    $scope.clasenegro3 = "btn btn-default";
		    $scope.ComentOcultar3 = true;




		   }else if($scope.radioModel3 == 3){

		   	$scope.claseroja3 = "btn btn-default";
		   	$scope.claseverde3 = "btn btn-default";
		   	$scope.claseamarilla3 = "btn btn-default";
		   	$scope.clasenegro3 = "btn btn-info";
		   	$scope.ComentOcultar3 = false;
		    

		   }


		  if($scope.radioModel4 == 0){

		    $scope.claseverde4 = "btn btn-default";
		    $scope.claseroja4 = "btn btn-danger";
		    $scope.claseamarilla4 = "btn btn-default";
		    $scope.clasenegro4 = "btn btn-default";
		    $scope.ComentOcultar4 = false;

		   }else if($scope.radioModel4 == 1){

		   	$scope.claseroja4 = "btn btn-default";
		   	$scope.claseverde4 = "btn btn-success";
		   	$scope.claseamarilla4 = "btn btn-default";
		   	$scope.clasenegro4 = "btn btn-default";
		   	$scope.ComentOcultar4 = false;
		    

		   }else if($scope.radioModel4 == 2){

		   	$scope.claseverde4 = "btn btn-default";
		    $scope.claseroja4 = "btn btn-default";
		    $scope.claseamarilla4 = "btn btn-warning";
		    $scope.clasenegro4 = "btn btn-default";
		    $scope.ComentOcultar4 = true;




		   }else if($scope.radioModel4 == 3){

		   	$scope.claseroja4 = "btn btn-default";
		   	$scope.claseverde4 = "btn btn-default";
		   	$scope.claseamarilla4 = "btn btn-default";
		   	$scope.clasenegro4 = "btn btn-info";
		   	$scope.ComentOcultar4 = false;
		    

		   }


		  if($scope.radioModel5 == 0){

		    $scope.claseverde5 = "btn btn-default";
		    $scope.claseroja5 = "btn btn-danger";
		    $scope.claseamarilla5 = "btn btn-default";
		    $scope.clasenegro5 = "btn btn-default";
		    $scope.ComentOcultar5 = false;

		   }else if($scope.radioModel5 == 1){

		   	$scope.claseroja5 = "btn btn-default";
		   	$scope.claseverde5 = "btn btn-success";
		   	$scope.claseamarilla5 = "btn btn-default";
		   	$scope.clasenegro5 = "btn btn-default";
		   	$scope.ComentOcultar5 = false;
		    

		   }else if($scope.radioModel5 == 2){

		   	$scope.claseverde5 = "btn btn-default";
		    $scope.claseroja5 = "btn btn-default";
		    $scope.claseamarilla5 = "btn btn-warning";
		    $scope.clasenegro5 = "btn btn-default";
		    $scope.ComentOcultar5 = true;




		   }else if($scope.radioModel5 == 3){

		   	$scope.claseroja5 = "btn btn-default";
		   	$scope.claseverde5 = "btn btn-default";
		   	$scope.claseamarilla5 = "btn btn-default";
		   	$scope.clasenegro5 = "btn btn-info";
		   	$scope.ComentOcultar5 = false;
		    

		   }
		   



		   if($scope.radioModel6 == 0){

		    $scope.claseverde6 = "btn btn-default";
		    $scope.claseroja6 = "btn btn-danger";
		    $scope.claseamarilla6 = "btn btn-default";
		    $scope.clasenegro6 = "btn btn-default";
		    $scope.ComentOcultar6 = false;

		   }else if($scope.radioModel6 == 1){

		   	$scope.claseroja6 = "btn btn-default";
		   	$scope.claseverde6 = "btn btn-success";
		   	$scope.claseamarilla6 = "btn btn-default";
		   	$scope.clasenegro6 = "btn btn-default";
		   	$scope.ComentOcultar6 = false;
		    

		   }else if($scope.radioModel6 == 2){

		   	$scope.claseverde6 = "btn btn-default";
		    $scope.claseroja6 = "btn btn-default";
		    $scope.claseamarilla6 = "btn btn-warning";
		    $scope.clasenegro6 = "btn btn-default";
		    $scope.ComentOcultar6 = true;




		   }else if($scope.radioModel6 == 3){

		   	$scope.claseroja6 = "btn btn-default";
		   	$scope.claseverde6 = "btn btn-default";
		   	$scope.claseamarilla6 = "btn btn-default";
		   	$scope.clasenegro6 = "btn btn-info";
		   	$scope.ComentOcultar6 = false;
		    

		   }
		   


		  if($scope.radioModel7 == 0){

		    $scope.claseverde7 = "btn btn-default";
		    $scope.claseroja7 = "btn btn-danger";
		    $scope.claseamarilla7 = "btn btn-default";
		    $scope.clasenegro7 = "btn btn-default";
		    $scope.ComentOcultar7 = false;

		   }else if($scope.radioModel7 == 1){

		   	$scope.claseroja7 = "btn btn-default";
		   	$scope.claseverde7 = "btn btn-success";
		   	$scope.claseamarilla7 = "btn btn-default";
		   	$scope.clasenegro7 = "btn btn-default";
		   	$scope.ComentOcultar7 = false;
		    

		   }else if($scope.radioModel7 == 2){

		   	$scope.claseverde7 = "btn btn-default";
		    $scope.claseroja7 = "btn btn-default";
		    $scope.claseamarilla7 = "btn btn-warning";
		    $scope.clasenegro7 = "btn btn-default";
		    $scope.ComentOcultar7 = true;




		   }else if($scope.radioModel7 == 3){

		   	$scope.claseroja7 = "btn btn-default";
		   	$scope.claseverde7 = "btn btn-default";
		   	$scope.claseamarilla7 = "btn btn-default";
		   	$scope.clasenegro7 = "btn btn-info";
		   	$scope.ComentOcultar7 = false;
		    

		   }
		   



		  if($scope.radioModel8 == 0){

		    $scope.claseverde8 = "btn btn-default";
		    $scope.claseroja8 = "btn btn-danger";
		    $scope.claseamarilla8 = "btn btn-default";
		    $scope.clasenegro8 = "btn btn-default";
		    $scope.ComentOcultar8 = false;

		   }else if($scope.radioModel8 == 1){

		   	$scope.claseroja8 = "btn btn-default";
		   	$scope.claseverde8 = "btn btn-success";
		   	$scope.claseamarilla8 = "btn btn-default";
		   	$scope.clasenegro8 = "btn btn-default";
		   	$scope.ComentOcultar8 = false;
		    

		   }else if($scope.radioModel8 == 2){

		   	$scope.claseverde8 = "btn btn-default";
		    $scope.claseroja8 = "btn btn-default";
		    $scope.claseamarilla8 = "btn btn-warning";
		    $scope.clasenegro8 = "btn btn-default";
		    $scope.ComentOcultar8 = true;




		   }else if($scope.radioModel8 == 3){

		   	$scope.claseroja8 = "btn btn-default";
		   	$scope.claseverde8 = "btn btn-default";
		   	$scope.claseamarilla8 = "btn btn-default";
		   	$scope.clasenegro8 = "btn btn-info";
		   	$scope.ComentOcultar8 = false;
		    

		   }
		   


		  if($scope.radioModel9 == 0){

		    $scope.claseverde9 = "btn btn-default";
		    $scope.claseroja9 = "btn btn-danger";
		    $scope.claseamarilla9 = "btn btn-default";
		    $scope.clasenegro9 = "btn btn-default";
		    $scope.ComentOcultar9 = false;

		   }else if($scope.radioModel9 == 1){

		   	$scope.claseroja9 = "btn btn-default";
		   	$scope.claseverde9 = "btn btn-success";
		   	$scope.claseamarilla9 = "btn btn-default";
		   	$scope.clasenegro9 = "btn btn-default";
		   	$scope.ComentOcultar9 = false;
		    

		   }else if($scope.radioModel9 == 2){

		   	$scope.claseverde9 = "btn btn-default";
		    $scope.claseroja9 = "btn btn-default";
		    $scope.claseamarilla9 = "btn btn-warning";
		    $scope.clasenegro9 = "btn btn-default";
		    $scope.ComentOcultar9 = true;




		   }else if($scope.radioModel9 == 3){

		   	$scope.claseroja9 = "btn btn-default";
		   	$scope.claseverde9 = "btn btn-default";
		   	$scope.claseamarilla9 = "btn btn-default";
		   	$scope.clasenegro9 = "btn btn-info";
		   	$scope.ComentOcultar9 = false;
		    

		   }
		   



		  if($scope.radioModel10 == 0){

		    $scope.claseverde10 = "btn btn-default";
		    $scope.claseroja10 = "btn btn-danger";
		    $scope.claseamarilla10 = "btn btn-default";
		    $scope.clasenegro10 = "btn btn-default";
		    $scope.ComentOcultar10 = false;

		   }else if($scope.radioModel10 == 1){

		   	$scope.claseroja10 = "btn btn-default";
		   	$scope.claseverde10 = "btn btn-success";
		   	$scope.claseamarilla10 = "btn btn-default";
		   	$scope.clasenegro10 = "btn btn-default";
		   	$scope.ComentOcultar10 = false;
		    

		   }else if($scope.radioModel10 == 2){

		   	$scope.claseverde10 = "btn btn-default";
		    $scope.claseroja10 = "btn btn-default";
		    $scope.claseamarilla10 = "btn btn-warning";
		    $scope.clasenegro10 = "btn btn-default";
		    $scope.ComentOcultar10 = true;




		   }else if($scope.radioModel10 == 3){

		   	$scope.claseroja10 = "btn btn-default";
		   	$scope.claseverde10 = "btn btn-default";
		   	$scope.claseamarilla10 = "btn btn-default";
		   	$scope.clasenegro10 = "btn btn-info";
		   	$scope.ComentOcultar10 = false;
		    

		   }
		   



		 if($scope.radioModel11 == 0){

		    $scope.claseverde11 = "btn btn-default";
		    $scope.claseroja11 = "btn btn-danger";
		    $scope.claseamarilla11 = "btn btn-default";
		    $scope.clasenegro11 = "btn btn-default";
		    $scope.ComentOcultar11 = false;

		   }else if($scope.radioModel11 == 1){

		   	$scope.claseroja11 = "btn btn-default";
		   	$scope.claseverde11 = "btn btn-success";
		   	$scope.claseamarilla11 = "btn btn-default";
		   	$scope.clasenegro11 = "btn btn-default";
		   	$scope.ComentOcultar11 = false;
		    

		   }else if($scope.radioModel11 == 2){

		   	$scope.claseverde11 = "btn btn-default";
		    $scope.claseroja11 = "btn btn-default";
		    $scope.claseamarilla11 = "btn btn-warning";
		    $scope.clasenegro11 = "btn btn-default";
		    $scope.ComentOcultar11 = true;




		   }else if($scope.radioModel11 == 3){

		   	$scope.claseroja11 = "btn btn-default";
		   	$scope.claseverde11 = "btn btn-default";
		   	$scope.claseamarilla11 = "btn btn-default";
		   	$scope.clasenegro11 = "btn btn-info";
		   	$scope.ComentOcultar11 = false;
		    

		   }
		   



		  if($scope.radioModel12 == 0){

		    $scope.claseverde12 = "btn btn-default";
		    $scope.claseroja12 = "btn btn-danger";
		    $scope.claseamarilla12 = "btn btn-default";
		    $scope.clasenegro12 = "btn btn-default";
		    $scope.ComentOcultar12 = false;

		   }else if($scope.radioModel12 == 1){

		   	$scope.claseroja12 = "btn btn-default";
		   	$scope.claseverde12 = "btn btn-success";
		   	$scope.claseamarilla12 = "btn btn-default";
		   	$scope.clasenegro12 = "btn btn-default";
		   	$scope.ComentOcultar12 = false;
		    

		   }else if($scope.radioModel12 == 2){

		   	$scope.claseverde12 = "btn btn-default";
		    $scope.claseroja12 = "btn btn-default";
		    $scope.claseamarilla12 = "btn btn-warning";
		    $scope.clasenegro12 = "btn btn-default";
		    $scope.ComentOcultar12 = true;




		   }else if($scope.radioModel12 == 3){

		   	$scope.claseroja12 = "btn btn-default";
		   	$scope.claseverde12 = "btn btn-default";
		   	$scope.claseamarilla12 = "btn btn-default";
		   	$scope.clasenegro12 = "btn btn-info";
		   	$scope.ComentOcultar12 = false;
		    

		   }
		   



		  if($scope.radioModel13 == 0){

		    $scope.claseverde13 = "btn btn-default";
		    $scope.claseroja13 = "btn btn-danger";
		    $scope.claseamarilla13 = "btn btn-default";
		    $scope.clasenegro13 = "btn btn-default";
		    $scope.ComentOcultar13 = false;

		   }else if($scope.radioModel13 == 1){

		   	$scope.claseroja13 = "btn btn-default";
		   	$scope.claseverde13 = "btn btn-success";
		   	$scope.claseamarilla13 = "btn btn-default";
		   	$scope.clasenegro13 = "btn btn-default";
		   	$scope.ComentOcultar13 = false;
		    

		   }else if($scope.radioModel13 == 2){

		   	$scope.claseverde13 = "btn btn-default";
		    $scope.claseroja13 = "btn btn-default";
		    $scope.claseamarilla13 = "btn btn-warning";
		    $scope.clasenegro13 = "btn btn-default";
		    $scope.ComentOcultar13 = true;




		   }else if($scope.radioModel13 == 3){

		   	$scope.claseroja13 = "btn btn-default";
		   	$scope.claseverde13 = "btn btn-default";
		   	$scope.claseamarilla13 = "btn btn-default";
		   	$scope.clasenegro13 = "btn btn-info";
		   	$scope.ComentOcultar13 = false;
		    

		   }



		   if($scope.radioModel14 == 0){

		    $scope.claseverde14 = "btn btn-default";
		    $scope.claseroja14 = "btn btn-danger";
		    $scope.claseamarilla14 = "btn btn-default";
		    $scope.clasenegro14 = "btn btn-default";
		    $scope.ComentOcultar14 = false;

		   }else if($scope.radioModel14 == 1){

		   	$scope.claseroja14 = "btn btn-default";
		   	$scope.claseverde14 = "btn btn-success";
		   	$scope.claseamarilla14 = "btn btn-default";
		   	$scope.clasenegro14 = "btn btn-default";
		   	$scope.ComentOcultar14 = false;
		    

		   }else if($scope.radioModel14 == 2){

		   	$scope.claseverde14 = "btn btn-default";
		    $scope.claseroja14 = "btn btn-default";
		    $scope.claseamarilla14 = "btn btn-warning";
		    $scope.clasenegro14 = "btn btn-default";
		    $scope.ComentOcultar14 = true;




		   }else if($scope.radioModel14 == 3){

		   	$scope.claseroja14 = "btn btn-default";
		   	$scope.claseverde14 = "btn btn-default";
		   	$scope.claseamarilla14 = "btn btn-default";
		   	$scope.clasenegro14 = "btn btn-info";
		   	$scope.ComentOcultar14 = false;
		    

		   }
		   



		 if($scope.radioModel15 == 0){

		    $scope.claseverde15 = "btn btn-default";
		    $scope.claseroja15 = "btn btn-danger";
		    $scope.claseamarilla15 = "btn btn-default";
		    $scope.clasenegro15 = "btn btn-default";
		    $scope.ComentOcultar15 = false;

		   }else if($scope.radioModel15 == 1){

		   	$scope.claseroja15 = "btn btn-default";
		   	$scope.claseverde15 = "btn btn-success";
		   	$scope.claseamarilla15 = "btn btn-default";
		   	$scope.clasenegro15 = "btn btn-default";
		   	$scope.ComentOcultar15 = false;
		    

		   }else if($scope.radioModel15 == 2){

		   	$scope.claseverde15 = "btn btn-default";
		    $scope.claseroja15 = "btn btn-default";
		    $scope.claseamarilla15 = "btn btn-warning";
		    $scope.clasenegro15 = "btn btn-default";
		    $scope.ComentOcultar15 = true;




		   }else if($scope.radioModel15 == 3){

		   	$scope.claseroja15 = "btn btn-default";
		   	$scope.claseverde15 = "btn btn-default";
		   	$scope.claseamarilla15 = "btn btn-default";
		   	$scope.clasenegro15 = "btn btn-info";
		   	$scope.ComentOcultar15 = false;
		    

		   }
		   



		  if($scope.radioModel16 == 0){

		    $scope.claseverde16 = "btn btn-default";
		    $scope.claseroja16 = "btn btn-danger";
		    $scope.claseamarilla16 = "btn btn-default";
		    $scope.clasenegro16 = "btn btn-default";
		    $scope.ComentOcultar16 = false;

		   }else if($scope.radioModel16 == 1){

		   	$scope.claseroja16 = "btn btn-default";
		   	$scope.claseverde16 = "btn btn-success";
		   	$scope.claseamarilla16 = "btn btn-default";
		   	$scope.clasenegro16 = "btn btn-default";
		   	$scope.ComentOcultar16 = false;
		    

		   }else if($scope.radioModel16 == 2){

		   	$scope.claseverde16 = "btn btn-default";
		    $scope.claseroja16 = "btn btn-default";
		    $scope.claseamarilla16 = "btn btn-warning";
		    $scope.clasenegro16 = "btn btn-default";
		    $scope.ComentOcultar16 = true;




		   }else if($scope.radioModel16 == 3){

		   	$scope.claseroja16 = "btn btn-default";
		   	$scope.claseverde16 = "btn btn-default";
		   	$scope.claseamarilla16 = "btn btn-default";
		   	$scope.clasenegro16 = "btn btn-info";
		   	$scope.ComentOcultar16 = false;
		    

		   }
		   



		  if($scope.radioModel18 == 0){

		    $scope.claseverde18 = "btn btn-default";
		    $scope.claseroja18 = "btn btn-danger";
		    $scope.claseamarilla18 = "btn btn-default";
		    $scope.clasenegro18 = "btn btn-default";
		    $scope.ComentOcultar18 = false;

		   }else if($scope.radioModel18 == 1){

		   	$scope.claseroja18 = "btn btn-default";
		   	$scope.claseverde18 = "btn btn-success";
		   	$scope.claseamarilla18 = "btn btn-default";
		   	$scope.clasenegro18 = "btn btn-default";
		   	$scope.ComentOcultar18 = false;
		    

		   }else if($scope.radioModel18 == 2){

		   	$scope.claseverde18 = "btn btn-default";
		    $scope.claseroja18 = "btn btn-default";
		    $scope.claseamarilla18 = "btn btn-warning";
		    $scope.clasenegro18 = "btn btn-default";
		    $scope.ComentOcultar18 = true;




		   }else if($scope.radioModel18 == 3){

		   	$scope.claseroja18 = "btn btn-default";
		   	$scope.claseverde18 = "btn btn-default";
		   	$scope.claseamarilla18 = "btn btn-default";
		   	$scope.clasenegro18 = "btn btn-info";
		   	$scope.ComentOcultar18 = false;
		    

		   }
		   



		   if($scope.radioModel19 == 0){

		    $scope.claseverde19 = "btn btn-default";
		    $scope.claseroja19 = "btn btn-danger";
		    $scope.claseamarilla19 = "btn btn-default";
		    $scope.clasenegro19 = "btn btn-default";
		    $scope.ComentOcultar19 = false;

		   }else if($scope.radioModel19 == 1){

		   	$scope.claseroja19 = "btn btn-default";
		   	$scope.claseverde19 = "btn btn-success";
		   	$scope.claseamarilla19 = "btn btn-default";
		   	$scope.clasenegro19 = "btn btn-default";
		   	$scope.ComentOcultar19 = false;
		    

		   }else if($scope.radioModel19 == 2){

		   	$scope.claseverde19 = "btn btn-default";
		    $scope.claseroja19 = "btn btn-default";
		    $scope.claseamarilla19 = "btn btn-warning";
		    $scope.clasenegro19 = "btn btn-default";
		    $scope.ComentOcultar19 = true;




		   }else if($scope.radioModel19 == 3){

		   	$scope.claseroja19 = "btn btn-default";
		   	$scope.claseverde19 = "btn btn-default";
		   	$scope.claseamarilla19 = "btn btn-default";
		   	$scope.clasenegro19 = "btn btn-info";
		   	$scope.ComentOcultar19 = false;
		    

		   }
		   



		  if($scope.radioModel20 == 0){

		    $scope.claseverde20 = "btn btn-default";
		    $scope.claseroja20 = "btn btn-danger";
		    $scope.claseamarilla20 = "btn btn-default";
		    $scope.clasenegro20 = "btn btn-default";
		    $scope.ComentOcultar20 = false;

		   }else if($scope.radioModel20 == 1){

		   	$scope.claseroja20 = "btn btn-default";
		   	$scope.claseverde20 = "btn btn-success";
		   	$scope.claseamarilla20 = "btn btn-default";
		   	$scope.clasenegro20 = "btn btn-default";
		   	$scope.ComentOcultar20 = false;
		    

		   }else if($scope.radioModel20 == 2){

		   	$scope.claseverde20 = "btn btn-default";
		    $scope.claseroja20 = "btn btn-default";
		    $scope.claseamarilla20 = "btn btn-warning";
		    $scope.clasenegro20 = "btn btn-default";
		    $scope.ComentOcultar20 = true;




		   }else if($scope.radioModel20 == 3){

		   	$scope.claseroja20 = "btn btn-default";
		   	$scope.claseverde20 = "btn btn-default";
		   	$scope.claseamarilla20 = "btn btn-default";
		   	$scope.clasenegro20 = "btn btn-info";
		   	$scope.ComentOcultar20 = false;
		    

		   }
		   



		  if($scope.radioModel21 == 0){

		    $scope.claseverde21 = "btn btn-default";
		    $scope.claseroja21 = "btn btn-danger";
		    $scope.claseamarilla21 = "btn btn-default";
		    $scope.clasenegro21 = "btn btn-default";
		    $scope.ComentOcultar21 = false;

		   }else if($scope.radioModel21 == 1){

		   	$scope.claseroja21 = "btn btn-default";
		   	$scope.claseverde21 = "btn btn-success";
		   	$scope.claseamarilla21 = "btn btn-default";
		   	$scope.clasenegro21 = "btn btn-default";
		   	$scope.ComentOcultar21 = false;
		    

		   }else if($scope.radioModel21 == 2){

		   	$scope.claseverde21 = "btn btn-default";
		    $scope.claseroja21 = "btn btn-default";
		    $scope.claseamarilla21 = "btn btn-warning";
		    $scope.clasenegro21 = "btn btn-default";
		    $scope.ComentOcultar21 = true;




		   }else if($scope.radioModel21 == 3){

		   	$scope.claseroja21 = "btn btn-default";
		   	$scope.claseverde21 = "btn btn-default";
		   	$scope.claseamarilla21 = "btn btn-default";
		   	$scope.clasenegro21 = "btn btn-info";
		   	$scope.ComentOcultar21 = false;
		    

		   }
		   



		  if($scope.radioModel22 == 0){

		    $scope.claseverde22 = "btn btn-default";
		    $scope.claseroja22 = "btn btn-danger";
		    $scope.claseamarilla22 = "btn btn-default";
		    $scope.clasenegro22 = "btn btn-default";
		    $scope.ComentOcultar22 = false;

		   }else if($scope.radioModel22 == 1){

		   	$scope.claseroja22 = "btn btn-default";
		   	$scope.claseverde22 = "btn btn-success";
		   	$scope.claseamarilla22 = "btn btn-default";
		   	$scope.clasenegro22 = "btn btn-default";
		   	$scope.ComentOcultar22 = false;
		    

		   }else if($scope.radioModel22 == 2){

		   	$scope.claseverde22 = "btn btn-default";
		    $scope.claseroja22 = "btn btn-default";
		    $scope.claseamarilla22 = "btn btn-warning";
		    $scope.clasenegro22 = "btn btn-default";
		    $scope.ComentOcultar22 = true;




		   }else if($scope.radioModel22 == 3){

		   	$scope.claseroja22 = "btn btn-default";
		   	$scope.claseverde22 = "btn btn-default";
		   	$scope.claseamarilla22 = "btn btn-default";
		   	$scope.clasenegro22 = "btn btn-info";
		   	$scope.ComentOcultar22 = false;
		    

		   }



		  if($scope.radioModel23 == 0){

		    $scope.claseverde23 = "btn btn-default";
		    $scope.claseroja23 = "btn btn-danger";
		    $scope.claseamarilla23 = "btn btn-default";
		    $scope.clasenegro23 = "btn btn-default";
		    $scope.ComentOcultar23 = false;

		   }else if($scope.radioModel23 == 1){

		   	$scope.claseroja23 = "btn btn-default";
		   	$scope.claseverde23 = "btn btn-success";
		   	$scope.claseamarilla23 = "btn btn-default";
		   	$scope.clasenegro23 = "btn btn-default";
		   	$scope.ComentOcultar23 = false;
		    

		   }else if($scope.radioModel23 == 2){

		   	$scope.claseverde23 = "btn btn-default";
		    $scope.claseroja23 = "btn btn-default";
		    $scope.claseamarilla23 = "btn btn-warning";
		    $scope.clasenegro23 = "btn btn-default";
		    $scope.ComentOcultar23 = true;




		   }else if($scope.radioModel23 == 3){

		   	$scope.claseroja23 = "btn btn-default";
		   	$scope.claseverde23 = "btn btn-default";
		   	$scope.claseamarilla23 = "btn btn-default";
		   	$scope.clasenegro23 = "btn btn-info";
		   	$scope.ComentOcultar23 = false;
		    

		   }
		   



		  if($scope.radioModel24 == 0){

		    $scope.claseverde24 = "btn btn-default";
		    $scope.claseroja24 = "btn btn-danger";
		    $scope.claseamarilla24 = "btn btn-default";
		    $scope.clasenegro24 = "btn btn-default";
		    $scope.ComentOcultar24 = false;

		   }else if($scope.radioModel24 == 1){

		   	$scope.claseroja24 = "btn btn-default";
		   	$scope.claseverde24 = "btn btn-success";
		   	$scope.claseamarilla24 = "btn btn-default";
		   	$scope.clasenegro24 = "btn btn-default";
		   	$scope.ComentOcultar24 = false;
		    

		   }else if($scope.radioModel24 == 2){

		   	$scope.claseverde24 = "btn btn-default";
		    $scope.claseroja24 = "btn btn-default";
		    $scope.claseamarilla24 = "btn btn-warning";
		    $scope.clasenegro24 = "btn btn-default";
		    $scope.ComentOcultar24 = true;




		   }else if($scope.radioModel24 == 3){

		   	$scope.claseroja24 = "btn btn-default";
		   	$scope.claseverde24 = "btn btn-default";
		   	$scope.claseamarilla24 = "btn btn-default";
		   	$scope.clasenegro24 = "btn btn-info";
		   	$scope.ComentOcultar24 = false;
		    

		   }

		   if($scope.radioModel25 == 0){

		    $scope.claseverde25 = "btn btn-default";
		    $scope.claseroja25 = "btn btn-danger";
		    $scope.claseamarilla25 = "btn btn-default";
		    $scope.clasenegro25 = "btn btn-default";
		    $scope.ComentOcultar25 = false;

		   }else if($scope.radioModel25 == 1){

		   	$scope.claseroja25 = "btn btn-default";
		   	$scope.claseverde25 = "btn btn-success";
		   	$scope.claseamarilla25 = "btn btn-default";
		   	$scope.clasenegro25 = "btn btn-default";
		   	$scope.ComentOcultar25 = false;
		    

		   }else if($scope.radioModel25 == 2){

		   	$scope.claseverde25 = "btn btn-default";
		    $scope.claseroja25 = "btn btn-default";
		    $scope.claseamarilla25 = "btn btn-warning";
		    $scope.clasenegro25 = "btn btn-default";
		    $scope.ComentOcultar25 = true;




		   }else if($scope.radioModel25 == 3){

		   	$scope.claseroja25 = "btn btn-default";
		   	$scope.claseverde25 = "btn btn-default";
		   	$scope.claseamarilla25 = "btn btn-default";
		   	$scope.clasenegro25 = "btn btn-info";
		   	$scope.ComentOcultar25 = false;
		    

		   }

		    if($scope.radioModel26 == 0){

		    $scope.claseverde26 = "btn btn-default";
		    $scope.claseroja26 = "btn btn-danger";
		    $scope.claseamarilla26 = "btn btn-default";
		    $scope.clasenegro26 = "btn btn-default";
		    $scope.ComentOcultar26 = false;

		   }else if($scope.radioModel26 == 1){

		   	$scope.claseroja26 = "btn btn-default";
		   	$scope.claseverde26 = "btn btn-success";
		   	$scope.claseamarilla26 = "btn btn-default";
		   	$scope.clasenegro26 = "btn btn-default";
		   	$scope.ComentOcultar26 = false;
		    

		   }else if($scope.radioModel26 == 2){

		   	$scope.claseverde26 = "btn btn-default";
		    $scope.claseroja26 = "btn btn-default";
		    $scope.claseamarilla26 = "btn btn-warning";
		    $scope.clasenegro26 = "btn btn-default";
		    $scope.ComentOcultar26 = true;




		   }else if($scope.radioModel26 == 3){

		   	$scope.claseroja26 = "btn btn-default";
		   	$scope.claseverde26 = "btn btn-default";
		   	$scope.claseamarilla26 = "btn btn-default";
		   	$scope.clasenegro26 = "btn btn-info";
		   	$scope.ComentOcultar26 = false;
		    

		   }

		    if($scope.radioModel27 == 0){

		    $scope.claseverde27 = "btn btn-default";
		    $scope.claseroja27 = "btn btn-danger";
		    $scope.claseamarilla27 = "btn btn-default";
		    $scope.clasenegro27 = "btn btn-default";
		    $scope.ComentOcultar27 = false;

		   }else if($scope.radioModel27 == 1){

		   	$scope.claseroja27 = "btn btn-default";
		   	$scope.claseverde27 = "btn btn-success";
		   	$scope.claseamarilla27 = "btn btn-default";
		   	$scope.clasenegro27 = "btn btn-default";
		   	$scope.ComentOcultar27 = false;
		    

		   }else if($scope.radioModel27 == 2){

		   	$scope.claseverde27 = "btn btn-default";
		    $scope.claseroja27 = "btn btn-default";
		    $scope.claseamarilla27 = "btn btn-warning";
		    $scope.clasenegro27 = "btn btn-default";
		    $scope.ComentOcultar27 = true;




		   }else if($scope.radioModel27 == 3){

		   	$scope.claseroja27 = "btn btn-default";
		   	$scope.claseverde27 = "btn btn-default";
		   	$scope.claseamarilla27 = "btn btn-default";
		   	$scope.clasenegro27 = "btn btn-info";
		   	$scope.ComentOcultar27 = false;
		    

		   }

		    if($scope.radioModel28 == 0){

		    $scope.claseverde28 = "btn btn-default";
		    $scope.claseroja28 = "btn btn-danger";
		    $scope.claseamarilla28 = "btn btn-default";
		    $scope.clasenegro28 = "btn btn-default";
		    $scope.ComentOcultar28 = false;

		   }else if($scope.radioModel28 == 1){

		   	$scope.claseroja28 = "btn btn-default";
		   	$scope.claseverde28 = "btn btn-success";
		   	$scope.claseamarilla28 = "btn btn-default";
		   	$scope.clasenegro28 = "btn btn-default";
		   	$scope.ComentOcultar28 = false;
		    

		   }else if($scope.radioModel28 == 2){

		   	$scope.claseverde28 = "btn btn-default";
		    $scope.claseroja28 = "btn btn-default";
		    $scope.claseamarilla28 = "btn btn-warning";
		    $scope.clasenegro28 = "btn btn-default";
		    $scope.ComentOcultar28 = true;




		   }else if($scope.radioModel28 == 3){

		   	$scope.claseroja28 = "btn btn-default";
		   	$scope.claseverde28 = "btn btn-default";
		   	$scope.claseamarilla28 = "btn btn-default";
		   	$scope.clasenegro28 = "btn btn-info";
		   	$scope.ComentOcultar28 = false;
		    

		   }
 }




$scope.compararVersion = function(valor){

	if (valor == 1){
		$scope.versionPro = parseInt($scope.versionPro) + 1;
	}

	



	if($scope.proyecto.proy_carpeta_cajonera_ens != $scope.radioModelCajonera){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CAJONERA ENSAMBLADO ,';

	}
	if($scope.proyecto.proy_carpeta_cajonera_estq != $scope.radioModelCajonera2){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CAJONERA VERIFICACION ,';

	}
	if($scope.proyecto.proy_carpeta_carpeta_ens != $scope.radioModel3){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CARPETA ENSAMBLADO ,';

	}
	if($scope.proyecto.proy_carpeta_carpeta_estq != $scope.radioModel4){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CARPETA VERIFICACION ,';

	}
	if($scope.proyecto.proy_carpeta_FICF != $scope.radioModel){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' FICF ,';

	}
	if($scope.proyecto.proy_carpeta_FICA != $scope.radioModelFICA){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' FICA ,';

	}
	if($scope.proyecto.proy_carpeta_FICA != $scope.radioModelFICA){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' FICA ,';

	}
	if($scope.proyecto.proy_carpeta_LAYOUT != $scope.radioModelLAYOUT){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' LAYOUT ,';

	}
	if($scope.proyecto.proy_panel_FIPE != $scope.radioModelFIPE){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' FIPE ,';

	}
	if($scope.proyecto.proy_carpeta_MYT != $scope.radioModelMYT){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' MYT,';

	}
	if($scope.proyecto.proy_panel_DSPR != $scope.radioModelDSPR){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' DSPR,';

	}
	if($scope.proyecto.proy_pdf_ficf != $scope.radioModelPdfFicf){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' PDF de la FICF ,';

	}
	if($scope.proyecto.proy_pdf_fica != $scope.radioModelPdfFica){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' PDF de la FICA ,';

	}
	if($scope.proyecto.proy_pdf_myt != $scope.radioModelPdfMyt){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' PDF de la MYT ,';

	}
	if($scope.proyecto.proy_medios_cubetas != $scope.radioModel5){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' las CUBETAS ,';

	}
	if($scope.proyecto.proy_medios_bacs_accss != $scope.radioModel6){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' BACS DE ACCESORIOS ,';

	}
	if($scope.proyecto.proy_medios_eti_estanteria != $scope.radioModel7){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' ETIQUETAS DE ESTANTERIAS ,';

	}
	if($scope.proyecto.proy_medios_tuberas != $scope.radioModel8){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' TUBERAS ,';

	}
	if($scope.proyecto.proy_medios_ccbb_maqueta_estq != $scope.radioModel9){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CCBB MAQUETA ESTANQUEIDAD ,';

	}
	if($scope.proyecto.proy_kanban_bacs_kanban != $scope.radioModel10){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' los BACS KANBAN ,';

	}
	if($scope.proyecto.proy_kanban_eti_frontal != $scope.radioModel11){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' los ETI. FRONTAL ,';

	}
	if($scope.proyecto.proy_kanban_eti_lateral != $scope.radioModel12){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' los ETI. LATERAL ,';

	}
	if($scope.proyecto.proy_kanban_eti_kanban != $scope.radioModel13){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' los ETI. KANBAN ,';

	}
	if($scope.proyecto.proy_ccbb_materia_prima != $scope.radioModel14){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CCBB DE MATERIA PRIMA CONFORMADO ,';

	}
	if($scope.proyecto.proy_ccbb_trazabilidad != $scope.radioModel15){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CCBB TRAZABILIDADES UAPS ,';

	}
	if($scope.proyecto.proy_ccbb_boletin != $scope.radioModel16){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CCBB LISTADO BOLETÍN ,';

	}
	if($scope.proyecto.proy_mapics_mp != $scope.radioModel18){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' MAPICS CREAR MP Y ALMACENES ,';

	}
	if($scope.proyecto.proy_mapics_se != $scope.radioModel19){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' MAPICS CREAR SE Y ALMACENES ,';

	}
	if($scope.proyecto.proy_mapics_pa != $scope.radioModel20){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' MAPICS CREAR PA Y ALMACENES ,';

	}
	if($scope.proyecto.proy_mapics_proceso != $scope.radioModel21){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' MAPICS CREAR PROCESOS ,';

	}
	if($scope.proyecto.proy_bbdd_top != $scope.radioModel22){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' BBDD TIEMPO OPTIMO ,';

	}
	if($scope.proyecto.proy_bbdd_bombo != $scope.radioModel23){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' BBDD BOMBO ,';

	}
	if($scope.proyecto.proy_bbdd_um != $scope.radioModel24){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' BBDD UM ,';

	}
	if($scope.proyecto.proy_carpeta_conformado != $scope.radioModel25){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' CAJONERA TUBO CONFORMADO ,';

	}
	if($scope.proyecto.proy_video_ens != $scope.radioModel26){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' VIDEO ENSAMBLADO ,';

	}
	if($scope.proyecto.proy_video_estq != $scope.radioModel27){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' VIDEO ESTANQUEIDAD ,';

	}
	if($scope.proyecto.proy_video_otro != $scope.radioModel28){

    $scope.cambiosRealizados = $scope.cambiosRealizados + ' VIDEO OTRO ,';

	}

	


}



	$scope.listaUAP = [
 
     {UAP : 'UAP-1-2'},
     {UAP : 'UAP-5'},
     {UAP : 'VAPOR'},
     {UAP : 'EXTRUSIÓN'},
     {UAP : 'METAL'},
     {UAP : 'SIN ASIGNAR'}

	]

	

	$scope.abrirTiempo = function(){




	if($scope.actualizacion == 'PROYECTO NUEVO'){

      swal('Esta opción solo esta disponible con proyectos ya creados y cargados');


	}else{


        var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'parciales/tiempoModal.html',
                controller: 'tiempoModalCtrl',
                //windowClass: 'app-modal-window',
                size: 'lg',               
                resolve: {
                  refExt: function () {return  $scope.refExt;},
                  refInt: function () {return  $scope.refInt;},
                  UAP: function () {return  $scope.uapre;}
              }
                
                
          });
               modalInstance.result.then(function (pokayoke){

               

                
           }); 

   }




		

	}

}]);

	