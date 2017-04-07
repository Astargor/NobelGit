<?php

session_start();

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro

$usuario = $_SESSION['user'];

if($_GET['radioModelCajonera'] == 2 ){

	$CajoneraComent = $_GET['CajoneraComent'];

}else{

  $CajoneraComent = "";

}

if($_GET['radioModelCajonera2'] == 2 ){

	$CajoneraComent2 = $_GET['CajoneraComent2'];

}else{

  $CajoneraComent2 = "";

}

if($_GET['radioModel3'] == 2 ){

	$Coment3 = $_GET['Coment3'];

}else{

  $Coment3 = "";

}

if($_GET['radioModel4'] == 2 ){

	$Coment4 = $_GET['Coment4'];

}else{

  $Coment4 = "";

}

if($_GET['radioModel'] == 2 ){

	$FICFComent = $_GET['FICFComent'];

}else{

  $FICFComent = "";

}

if($_GET['radioModelFICA'] == 2 ){

	$FICAComent = $_GET['FICAComent'];

}else{

  $FICAComent = "";

}

if($_GET['radioModelLAYOUT'] == 2 ){

	$LAYOUTComent = $_GET['LAYOUTComent'];

}else{

  $LAYOUTComent = "";

}

if($_GET['radioModelMYT'] == 2 ){

	$MYTComent = $_GET['MYTComent'];

}else{

  $MYTComent = "";

}

if($_GET['radioModelFIPE'] == 2 ){

	$FIPEComent = $_GET['FIPEComent'];

}else{

  $FIPEComent = "";

}

if($_GET['radioModelDSPR'] == 2 ){

	$DSPRComent = $_GET['DSPRComent'];

}else{

  $DSPRComent = "";

}

if($_GET['radioModel5'] == 2 ){

	$Coment5 = $_GET['Coment5'];

}else{

  $Coment5 = "";

}

if($_GET['radioModel6'] == 2 ){

	$Coment6 = $_GET['Coment6'];

}else{

  $Coment6 = "";

}

if($_GET['radioModel7'] == 2 ){

	$Coment7 = $_GET['Coment7'];

}else{

  $Coment7 = "";

}

if($_GET['radioModel8'] == 2 ){

	$Coment8 = $_GET['Coment8'];

}else{

  $Coment8 = "";

}

if($_GET['radioModel9'] == 2 ){

	$Coment9 = $_GET['Coment9'];

}else{

  $Coment9 = "";

}

if($_GET['radioModel10'] == 2 ){

	$Coment10 = $_GET['Coment10'];

}else{

  $Coment10 = "";

}

if($_GET['radioModel11'] == 2 ){

	$Coment11 = $_GET['Coment11'];

}else{

  $Coment11 = "";

}

if($_GET['radioModel12'] == 2 ){

	$Coment12 = $_GET['Coment12'];

}else{

  $Coment12 = "";

}

if($_GET['radioModel13'] == 2 ){

	$Coment13 = $_GET['Coment13'];

}else{

  $Coment13 = "";

}

if($_GET['radioModel14'] == 2 ){

	$Coment14 = $_GET['Coment14'];

}else{

  $Coment14 = "";

}

if($_GET['radioModel15'] == 2 ){

	$Coment15 = $_GET['Coment15'];

}else{

  $Coment15 = "";

}

if($_GET['radioModel16'] == 2 ){

	$Coment16 = $_GET['Coment16'];

}else{

  $Coment16 = "";

}

if($_GET['radioModel18'] == 2 ){

	$Coment18 = $_GET['Coment18'];

}else{

  $Coment18 = "";

}

if($_GET['radioModel19'] == 2 ){

	$Coment19 = $_GET['Coment19'];

}else{

  $Coment19 = "";

}

if($_GET['radioModel20'] == 2 ){

	$Coment20 = $_GET['Coment20'];

}else{

  $Coment20 = "";

}

if($_GET['radioModel21'] == 2 ){

	$Coment21 = $_GET['Coment21'];

}else{

  $Coment21 = "";

}

if($_GET['radioModel22'] == 2 ){

	$Coment22 = $_GET['Coment22'];

}else{

  $Coment22 = "";

}

if($_GET['radioModel23'] == 2 ){

	$Coment23 = $_GET['Coment23'];

}else{

  $Coment23 = "";

}

if($_GET['radioModel24'] == 2 ){

	$Coment24 = $_GET['Coment24'];

}else{

  $Coment24 = "";

}

if($_GET['radioModel25'] == 2 ){

	$Coment25 = $_GET['Coment25'];

}else{

  $Coment25 = "";

}
if($_GET['radioModel26'] == 2 ){

	$Coment26 = $_GET['Coment26'];

}else{

  $Coment26 = "";

}
if($_GET['radioModel27'] == 2 ){

	$Coment27 = $_GET['Coment27'];

}else{

  $Coment27 = "";

}
if($_GET['radioModel28'] == 2 ){

	$Coment28 = $_GET['Coment28'];

}else{

  $Coment28 = "";

}

$sql = "INSERT INTO proyectos (proy_usuario,proy_referencia_externa,proy_referencia_interna,proy_uap,proy_carpeta_cajonera_ens,proy_carpeta_cajonera_estq,proy_carpeta_carpeta_ens,proy_carpeta_carpeta_estq,proy_carpeta_FICF,proy_carpeta_FICA,proy_carpeta_LAYOUT,proy_carpeta_MYT,proy_pdf_ficf,proy_pdf_fica,proy_pdf_myt,proy_panel_FIPE,proy_panel_DSPR,proy_medios_cubetas,proy_medios_bacs_accss,proy_medios_eti_estanteria,proy_medios_tuberas,proy_medios_ccbb_maqueta_estq,proy_kanban_bacs_kanban,proy_kanban_eti_frontal,proy_kanban_eti_lateral,proy_kanban_eti_kanban,proy_ccbb_materia_prima,proy_ccbb_trazabilidad,proy_ccbb_boletin,proy_mapics_mp,proy_mapics_se,proy_mapics_pa,proy_mapics_proceso,proy_bbdd_top,proy_bbdd_bombo,proy_bbdd_um,proy_carpeta_conformado,proy_video_ens,proy_video_estq,proy_video_otro) VALUES ('$usuario','$_GET[refeExt]','$_GET[refInt]','$_GET[UAP]','$_GET[radioModelCajonera]','$_GET[radioModelCajonera2]','$_GET[radioModel3]','$_GET[radioModel4]','$_GET[radioModel]','$_GET[radioModelFICA]','$_GET[radioModelLAYOUT]','$_GET[radioModelMYT]','$_GET[radioModelPdfFicf]','$_GET[radioModelPdfFica]','$_GET[radioModelPdfMyt]',  	'$_GET[radioModelFIPE]','$_GET[radioModelDSPR]','$_GET[radioModel5]','$_GET[radioModel6]','$_GET[radioModel7]','$_GET[radioModel8]','$_GET[radioModel9]','$_GET[radioModel10]','$_GET[radioModel11]','$_GET[radioModel12]','$_GET[radioModel13]','$_GET[radioModel14]','$_GET[radioModel15]','$_GET[radioModel16]','$_GET[radioModel18]','$_GET[radioModel19]','$_GET[radioModel20]','$_GET[radioModel21]','$_GET[radioModel22]','$_GET[radioModel23]','$_GET[radioModel24]','$_GET[radioModel25]','$_GET[radioModel26]','$_GET[radioModel27]','$_GET[radioModel28]')";



$Hecho = Database::ejecutar_idu($sql);

			

			if ($Hecho == "1") {

			echo json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.'));

			}else{

				echo json_encode( array('err' => true, 'mensaje'=> $Hecho ));
			}


$sql2 = "SELECT id_proyecto as id from proyectos where  proy_referencia_externa = '$_GET[refeExt]'";
		$id_proyecto = Database::get_valor_query( $sql2, 'id' );	



$sql3 = "INSERT INTO proyectos_comentarios (id_proyecto_relacionado,comen_carpeta_cajonera_ens,comen_carpeta_cajonera_estq,comen_carpeta_carpeta_ens,comen_carpeta_carpeta_estq,comen_carpeta_FICF,comen_carpeta_FICA,comen_carpeta_LAYOUT,comen_carpeta_MYT,comen_panel_FIPE,comen_panel_DSPR,comen_medios_cubetas,comen_medios_bacs_accss,comen_medios_eti_estanteria,comen_medios_tuberas,comen_medios_ccbb_maqueta_estq,comen_kanban_bacs_kanban,comen_kanban_eti_frontal,comen_kanban_eti_lateral,comen_kanban_eti_kanban,comen_ccbb_materia_prima,comen_ccbb_trazabilidad,comen_ccbb_boletin,comen_mapics_mp,comen_mapics_se,comen_mapics_pa,comen_mapics_proceso,comen_bbdd_top,comen_bbdd_bombo,comen_bbdd_um,comen_cojonera_conformado,comen_videos_ens,comen_videos_estq,comen_videos_otro) VALUES ('$id_proyecto','$CajoneraComent','$CajoneraComent2','$Coment3','$Coment4','$FICFComent','$FICAComent','$LAYOUTComent','$MYTComent','$FIPEComent','$DSPRComent','$Coment5','$Coment6','$Coment7','$Coment8','$Coment9','$Coment10','$Coment11','$Coment12','$Coment13','$Coment14','$Coment15','$Coment16','$Coment18','$Coment19','$Coment20','$Coment21','$Coment22','$Coment23','$Coment24','$Coment25','$Coment26','$Coment27','$Coment28')";



$Hecho = Database::ejecutar_idu($sql3);			

			/*if ($Hecho == "1") {

			echo json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.'));

			}else{

				echo json_encode( array('err' => true, 'mensaje'=> $Hecho ));
			}*/


$sql4 = "INSERT INTO proyectos_version (id_proyecto_relacionado,ver_usuario,ver_version,ver_fecha) VALUES ('$id_proyecto','$usuario',1,'$_GET[fecha]')";			
$Hecho = Database::ejecutar_idu($sql4);	


?>