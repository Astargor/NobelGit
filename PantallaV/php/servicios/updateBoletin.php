<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['id'])) {
    echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
    die;
}
    $id      = $_GET['id']; 
	$refe    = $_GET['refe']; 
	$horas   = $_GET['horas'];
	$piezas  = $_GET['piezas'];
	$tiempo  = $_GET['tiempo'];
	$coste   = $_GET['coste'];
	$descrip = $_GET['descrip'];
 
	

	$sql = "UPDATE boletines SET bol_refere = '$refe',bol_horas = '$horas',bol_piezas = '$piezas',bol_tiempo_op = '$tiempo',bol_c_coste = '$coste',bol_cc_descrip = '$descrip' WHERE id_boletines = '$id'";


   Database::ejecutar_idu($sql);

?>