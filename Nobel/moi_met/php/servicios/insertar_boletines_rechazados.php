<?php

session_start();
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$usuario  = $_SESSION['user'];
$fecha =  $_GET['Fecha']; 
$operario =   $_GET['Operario']; 
$id_boletin =    $_GET['ID']; 
$validado_por =    $_GET['Validado_por'];
$motivo =    $_GET['motivo'];
$fechaHoy =  $_GET['fechaHoy'];
 
//echo json_encode( array('err' => true, 'mensaje'=> $piezas ,'sentencia' => $tiempo ));

//$request['nombre'] = strtoupper($request['nombre']);

$sql = "INSERT INTO boletines_rechazados (id_boletin,Operario,Fecha_Rechazo,Motivo_rechazo,Validado_Por,Rechazado_Por,Corregido,Fecha_boletin) VALUES ('$id_boletin','$operario','$fechaHoy','$motivo','$validado_por','$usuario','5','$fecha')";



$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $sql ));

	$sql = "UPDATE boletines set bol_Validado = 'no',bol_por_corregir = '2' where bol_fecha='$fecha'  and bol_operario = '$operario'";

	Database::ejecutar_idu($sql);


}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentencia' => $sql ));
	
}

echo $Respuesta;



?>