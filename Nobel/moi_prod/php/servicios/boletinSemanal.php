<?php

session_start();
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


 	$usuario  = $_SESSION['user'];
	$coste = $_GET['coste']; 
	$fecha    = $_GET['fecha'];
	$turno = $_GET['turno'];

	if($coste == "016"){
		$descrip = "Supervisores";
	}
	elseif($coste == "042"){
		$descrip = "Permisos remunerados";
	}
	elseif($coste == "041"){
		$descrip = "Dias de libre disposicion";
	}
	elseif($coste == "048"){
		$descrip = "Vacaciones";
	}


$sql = "INSERT INTO boletines(bol_piezas,bol_fecha,bol_horas,bol_operario,bol_c_coste,bol_cc_descrip,bol_turno,bol_zona,bol_tiempo_op,bol_Validado) VALUES (0,'$fecha',8,'$usuario','$coste','$descrip','$turno',0,0,'si')";
		


$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {
	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.' ));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentecia' => $sql));
}

echo $Respuesta;

?>