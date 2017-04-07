<?php

include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

if (!isset($_GET['c'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
	die;
}

// Desinfectar el parametro
$codigo = ($_GET['c']);

$sql = "SELECT count(*) as Existe FROM vista_proyecto where proy_referencia_externa = '$_GET[c]' order by ver_fecha DESC LIMIT 1";
$existe = Database::get_valor_query($sql,"Existe");


if ($existe >= 1) {
	// Si existe, imprime el json
	$sql = "SELECT * FROM vista_proyecto where proy_referencia_externa = '$_GET[c]' order by ver_fecha DESC LIMIT 1";
	echo json_encode( Database::get_Row($sql) );	

}else{

	echo json_encode( array('err'=>true, 'mensaje'=>'No existe '.$_GET['c'],'existe'=>$existe) );

}





?>