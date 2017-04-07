<?php

session_start();

// Incluir la clase de base de datos
include_once("../classes/class.Database.MTM.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;

$usuario = $_SESSION['user'];
$unidad  = $_GET['unidad'];
$titulo  = $_GET['titulo'];
$fecha   = $_GET['fecha'];

$sql = "INSERT INTO estudios(estudios_usuario, estudios_nombre, estudios_fecha, estudios_version, estudios_unidad)
 VALUES ('$usuario','$titulo','$fecha',1,'$unidad')";


$Hecho = Database::ejecutar_idu($sql);

$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.'));

}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho));
	
}

echo $Respuesta;



?>