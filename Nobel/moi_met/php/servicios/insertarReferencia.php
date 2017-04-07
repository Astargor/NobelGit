<?php

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$sql = "INSERT INTO referencias(id_ref_codigo_interno,ref_externa,UAP,ref_estado) VALUES ('$_GET[refeInt]','$_GET[refeExt]','$_GET[UAP]',1)";


$Hecho = Database::ejecutar_idu($sql);

$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $sql ));

}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentencia' => $sql ));
	
}



if($_GET['UAP'] == 'UAP 1-2'){

  $uap = '12';

}else if($_GET['UAP'] == 'UAP 5'){

	$uap = '5';

}else if($_GET['UAP'] == 'VAPOR'){

	$uap = 'v';

}

$sql2 = "INSERT INTO referencias(id_ref_codigo_interno,ref_externa,UAP,ref_estado) VALUES ('$_GET[refeInt]','$_GET[refeExt]','$_GET[UAP]',1)";





echo $Respuesta;



?>