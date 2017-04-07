<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.MTM.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['c'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
	die;
}

// Desinfectar el parametro
$codigo = ($_GET['c']);


// Verificar si existe
$sql = "SELECT count(*) as Existe FROM pizarra WHERE Procesos_estudio ='$_GET[c]'";
$existe = Database::get_valor_query($sql,"Existe");


if ($existe >= 1) {
	// Si existe, imprime el json
	$sql = "SELECT * FROM vista_pizarra WHERE Procesos_estudio ='$_GET[c]'";
	//echo json_encode( Database::get_json_rows($sql) );	
	echo Database::get_json_rows($sql);

}else{

	echo json_encode( array('err'=>true, 'mensaje'=>'No existe '.$codigo) );

}


?>