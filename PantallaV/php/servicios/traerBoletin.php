<?php
// Incluir la clase de base de datos

include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['operario'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código de operario") );
	die;
}

// Desinfectar el parametro

	$operario  = ($_GET['operario']);
	$fecha     = ($_GET['fecha']); 


	$sql = "SELECT count(*) as existe FROM boletines where bol_operario = '$operario' and bol_fecha = '$fecha' and bol_Validado = 'no'";
	$existe = Database::get_valor_query( $sql, 'existe' );


	if( $existe >= '1' ){

     $sql = "SELECT * FROM boletines where bol_operario = '$operario' and bol_fecha = '$fecha' and bol_Validado = 'no'";

     echo Database::get_json_rows($sql);
     //echo json_encode( array('fecha' => $fecha , 'operario' => $operario, 'existe' => $existe, 'sentencia' => $sql));

     }else{

     	echo json_encode( array('mensaje' => ' No Hay registros todavia '));

     }

     


		 

?>