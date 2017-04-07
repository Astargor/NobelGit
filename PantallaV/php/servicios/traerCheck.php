<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$operario  = ($_GET['operario']);
$fecha     = ($_GET['fecha']);
$refe      = ($_GET['refe']); 


$sql = "SELECT count(*) as existe FROM check_list_pruebas where check_list_operario = '$operario' and check_list_fecha = '$fecha' and check_list_referencia = '$refe'";
$existe = Database::get_valor_query( $sql, 'existe' );

if( $existe == '1' ){

     $sql2 = "SELECT * FROM check_list_pruebas where check_list_operario = '$operario' and check_list_fecha = '$fecha' and check_list_referencia = '$refe'";
     echo Database::get_json_rows($sql2);

	}else{

		echo json_encode( array('err' => $existe,'pos'  => $sql));
	}



?>