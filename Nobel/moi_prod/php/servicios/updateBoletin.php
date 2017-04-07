<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['fecha'])) {
    echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
    die;
}
	$fecha =  $_GET['fecha']; 
	$operario =   $_GET['operario']; 
	$referencia =    $_GET['referencia'];
	$horas =    $_GET['horas'];
	$piezas =    $_GET['piezas'];
	$tiempo =    $_GET['tiempo'];
	$coste =    $_GET['coste'];
	$descripcion =    $_GET['descripcion'];
	$id_boletin =    $_GET['id_boletin']; 
	

	$sql = "UPDATE boletines SET bol_fecha = '$fecha',bol_operario = '$operario',bol_refere = '$referencia',bol_horas = '$horas',bol_piezas = '$piezas',bol_tiempo_op = '$tiempo',bol_c_coste = '$coste',bol_cc_descrip = '$descripcion' WHERE id_boletines = '$id_boletin'";


   Database::ejecutar_idu($sql);

?>