<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

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
$sql = "SELECT count(*) as Existe FROM bombos WHERE referencia ='$_GET[c]'";
$existe = Database::get_valor_query($sql,"Existe");


if ($existe == 1) {
	// Si existe, imprime el json
	$sql = "SELECT * FROM bombos WHERE referencia ='$_GET[c]'";
	echo json_encode( Database::get_Row($sql) );	

}else{

	echo json_encode( array('err'=>true, 'mensaje'=>'No existe '.$codigo) );

}


?>
