<?php
// Incluir la clase de base de datos

include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['c'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código de operario") );
	die;
}

// Desinfectar el parametro

	$coste  = ($_GET['c']);

	$sql = "SELECT count(*) as existe FROM centroscoste where Id_c_coste = '$coste'";

	$existe = Database::get_valor_query( $sql, 'existe' );


	if( $existe == '1' ){

    $sql = "SELECT cc_Descripcion FROM centroscoste where Id_c_coste = '$coste'";

    echo json_encode( Database::get_Row($sql) );
     //echo json_encode( array('fecha' => $fecha , 'operario' => $operario, 'existe' => $existe, 'sentencia' => $sql));

     }else{

     	echo json_encode( array('mensaje' => ' No Existe el centro de coste'));

     }


		 

?>