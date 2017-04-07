<?php

session_start();
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['operario'])) {
    echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
    die;
}
    $usuario  = $_SESSION['user'];
	$operario = $_GET['operario']; 
	$turno    = $_GET['turno'];
	
	

	$sql = "UPDATE boletines SET bol_Validado = 'sí',bol_Validado_por = '$usuario' WHERE bol_operario ='$operario' and bol_turno = '$turno' and bol_Validado = 'no'";


   Database::ejecutar_idu($sql);


  // echo json_encode( array('mensaje' => "Actualizado",'usuario' => $usuario) );
?>