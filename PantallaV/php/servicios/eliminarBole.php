<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['idBole'])) { echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );die;}


    $id = $_GET['idBole']; 

    $sql = "DELETE FROM boletines WHERE id_boletines = '$id'";



$Hecho = Database::ejecutar_idu($sql);

$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Actualizado.' ));

}else{
	
	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ));
}

echo $Respuesta;
	
 


  

?>