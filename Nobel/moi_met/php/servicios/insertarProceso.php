<?php

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$sql = "INSERT INTO procesos(tip_proc_descripcion) VALUES ('$_GET[proceso]')";


$Hecho = Database::ejecutar_idu($sql);

$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $sql ));

}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentencia' => $sql ));
	
}

echo $Respuesta;



?>