<?php

// Incluir la clase de base de datos
include_once("../classes/class.Database.MET.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


if($_GET['UAP'] == 'UAP 1-2'){

  $uap = '12';

}else if($_GET['UAP'] == 'UAP 5'){

	$uap = '5';

}else if($_GET['UAP'] == 'VAPOR'){

	$uap = 'v';

}


$sql = "INSERT INTO uapreferencia(REFERENCIA,UAP) VALUES ('$_GET[refeExt]','$uap')";


$Hecho = Database::ejecutar_idu($sql);

$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $sql ));

}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentencia' => $sql ));
	
}




echo $Respuesta;



?>