<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['c'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el turno") );
	die;
}

// Desinfectar el parametro
$turno = ($_GET['c']);


// Verificar si existe
$sql1 = "SELECT count(bol_operario) as Existe from boletines  where bol_turno = '$turno' and bol_Validado = 'no'";
$existe = Database::get_valor_query($sql1,"Existe");


if ($existe > 0) {
	// Si existe, imprime el json
	$sql = "SELECT bol_operario from boletines  where bol_turno = '$turno' and bol_Validado = 'no' and bol_zona <> 13 group by bol_operario";

	echo Database::get_json_rows($sql);

	//echo json_encode( array('err'=>true, 'mensaje'=>'Si existe '.$turno , 'mensaje2' => $_GET['c']) );	

}else{

	echo json_encode( array('err'=>true, 'mensaje'=>'No existe '.$turno , 'mensaje2' => $_GET['c']) );

}
//echo Database::get_json_rows($sql);

//echo json_encode( array('err'=>true, 'mensaje'=>'No existe '.$turno , 'mensaje2' => $_GET['c']) );


?>