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


$sql = "UPDATE proyectos SET proy_uap = '$_GET[UAP]',proy_carpeta_cajonera_ens = '$_GET[radioModelCajonera]',proy_carpeta_cajonera_estq  = '$_GET[radioModelCajonera2]',proy_carpeta_carpeta_ens  = '$_GET[radioModel3]',proy_carpeta_carpeta_estq  = '$_GET[radioModel4]',proy_carpeta_FICF  = '$_GET[radioModel]',proy_carpeta_FICA  = '$_GET[radioModelFICA]',proy_carpeta_LAYOUT = '$_GET[radioModelLAYOUT]',proy_carpeta_MYT = '$_GET[radioModelMYT]',proy_pdf_ficf = '$_GET[radioModelPdfFicf]',proy_pdf_fica = '$_GET[radioModelPdfFica]',proy_pdf_myt = '$_GET[radioModelPdfMyt]',proy_panel_FIPE = '$_GET[radioModelFIPE]',proy_panel_DSPR = '$_GET[radioModelDSPR]',proy_medios_cubetas = '$_GET[radioModel5]',proy_medios_bacs_accss = '$_GET[radioModel6]',proy_medios_eti_estanteria = '$_GET[radioModel7]',proy_medios_tuberas = '$_GET[radioModel8]',proy_medios_ccbb_maqueta_estq = '$_GET[radioModel9]',proy_kanban_bacs_kanban = '$_GET[radioModel10]',proy_kanban_eti_frontal = '$_GET[radioModel11]',proy_kanban_eti_lateral = '$_GET[radioModel12]',proy_kanban_eti_kanban = '$_GET[radioModel13]',proy_ccbb_materia_prima = '$_GET[radioModel14]',proy_ccbb_trazabilidad = '$_GET[radioModel15]',proy_ccbb_boletin = '$_GET[radioModel16]',proy_mapics_mp = '$_GET[radioModel18]',proy_mapics_se = '$_GET[radioModel19]',proy_mapics_pa = '$_GET[radioModel20]',proy_mapics_proceso = '$_GET[radioModel21]',proy_bbdd_top = '$_GET[radioModel22]',proy_bbdd_bombo = '$_GET[radioModel23]',proy_bbdd_um = '$_GET[radioModel24]',proy_carpeta_conformado = '$_GET[radioModel25]',proy_video_ens = '$_GET[radioModel26]',proy_video_estq = '$_GET[radioModel27]',proy_video_otro = '$_GET[radioModel28]' where proy_referencia_externa = '$_GET[refeExt]'";




//echo json_encode( array('err' => false, 'mensaje'=>$_GET['refeExt']));

$Hecho = Database::ejecutar_idu($sql);			

			if ($Hecho == "1") {

			echo json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.'));

			}else{

				echo json_encode( array('err' => true, 'mensaje'=> $Hecho ));
			}


$sql2 = "SELECT id_proyecto as id from proyectos where  proy_referencia_externa = '$_GET[refeExt]'";
		$id_proyecto = Database::get_valor_query( $sql2, 'id' );


$sql = "UPDATE proyectos_comentarios SET comen_carpeta_cajonera_ens = '$CajoneraComent',
comen_carpeta_cajonera_estq = '$CajoneraComent2',
comen_carpeta_carpeta_ens = '$Coment3',
comen_carpeta_carpeta_estq = '$Coment4',
comen_carpeta_FICF = '$FICFComent',
comen_carpeta_FICA = '$FICAComent',
comen_carpeta_LAYOUT = '$LAYOUTComent',
comen_carpeta_MYT = '$MYTComent',
comen_panel_FIPE = '$FIPEComent',
comen_panel_DSPR = '$DSPRComent',
comen_medios_cubetas = '$Coment5',
comen_medios_bacs_accss = '$Coment6',
comen_medios_eti_estanteria = '$Coment7',
comen_medios_tuberas = '$Coment8',
comen_medios_ccbb_maqueta_estq = '$Coment9',
comen_kanban_bacs_kanban = '$Coment10',
comen_kanban_eti_frontal = '$Coment11',
comen_kanban_eti_lateral = '$Coment12',
comen_kanban_eti_kanban = '$Coment13',
comen_ccbb_materia_prima = '$Coment14',
comen_ccbb_trazabilidad = '$Coment15',
comen_ccbb_boletin = '$Coment16',
comen_mapics_mp = '$Coment18',
comen_mapics_se = '$Coment19',
comen_mapics_pa = '$Coment20',
comen_mapics_proceso = '$Coment21',
comen_bbdd_top = '$Coment22',
comen_bbdd_bombo = '$Coment23',
comen_bbdd_um = '$Coment24',
comen_cojonera_conformado = '$Coment25',
comen_videos_ens = '$Coment26',
comen_videos_estq = '$Coment27',
comen_videos_otro = '$Coment28' where id_proyecto_relacionado = '$id_proyecto'";



Database::ejecutar_idu($sql);


$sql4 = "INSERT INTO proyectos_version (id_proyecto_relacionado,ver_usuario,ver_version,ver_fecha,ver_datos_actualilzados) VALUES ('$id_proyecto','$usuario','$_GET[version]','$_GET[fecha]','$_GET[cambios]')";

Database::ejecutar_idu($sql4);


?>