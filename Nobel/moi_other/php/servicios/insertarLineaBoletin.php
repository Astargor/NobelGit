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
$referencia =    $_GET['Referencia'];
$horas =    $_GET['Horas'];
$piezas =    $_GET['Piezas'];
$tiempo =    $_GET['Tiempo'];
$coste =    $_GET['C_Coste'];
$descripcion =    $_GET['Descripcion'];
$id_boletin =    $_GET['ID']; 
$turno =  $_GET['Turno']; 
$zona =   $_GET['zona']; 
$validado =    $_GET['Validado'];
$validado_por =    $_GET['Validado_por'];
$motivo =    $_GET['motivo'];
 
//echo json_encode( array('err' => true, 'mensaje'=> $piezas ,'sentencia' => $tiempo ));

//$request['nombre'] = strtoupper($request['nombre']);

$sql = "INSERT INTO revison_boletines_metodos(id_boletines,bol_piezas,bol_fecha,bol_horas,bol_operario,bol_c_coste,bol_cc_descrip,bol_turno,bol_zona,bol_tiempo_op,bol_refere,bol_Validado,bol_Validado_por,bol_revision_metodos,bol_revision_motivo) VALUES ( '$id_boletin','$piezas','$fecha','$horas','$operario','$coste','$descripcion','$turno','$zona','$tiempo','$referencia','$validado','$validado_por','$usuario','$motivo')";


$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $sql ));

}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentencia' => $sql ));
	
}

echo $Respuesta;



?>