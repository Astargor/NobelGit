<?php

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$sql = "INSERT INTO ums(id_um, um_refe, um_descrip, um_moldes, um_principal, um_backup1, id_proceso, um_asignado, id_proceso2) VALUES ('$_GET[id_um]','$_GET[refe]','$_GET[um_descript]','$_GET[moldes]','$_GET[primaria]','$_GET[secundaria]','$_GET[id_proceso]','no',0)";


$Hecho = Database::ejecutar_idu($sql);

$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $sql ));

}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentencia' => $sql ));
	
}


echo $Respuesta;



?>