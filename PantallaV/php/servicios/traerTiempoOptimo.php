<?php
// Incluir la clase de base de datos

include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['referencia'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código de operario") );
	die;
}

// Desinfectar el parametro

	$referencia  = ($_GET['referencia']); 


	$sql = "SELECT count(*) as existe FROM listado_tiempos_optimos where t_optimo_externa = '$referencia' and tiempos_activos = 'sí'";
	$existe = Database::get_valor_query( $sql, 'existe' );


	if( $existe >= '1' ){

		$sql = "SELECT t_optimo_produccion as tiem FROM listado_tiempos_optimos where t_optimo_externa = '$referencia' and tiempos_activos = 'sí'";
		$to = Database::get_valor_query( $sql, 'tiem' );

		$sql = "SELECT t_optimo_operarios as canti FROM listado_tiempos_optimos where t_optimo_externa = '$referencia' and tiempos_activos = 'sí'";
		$canti = Database::get_valor_query( $sql, 'canti' );

        $sql = "SELECT PH as piezas FROM listado_tiempos_optimos where t_optimo_externa = '$referencia' and tiempos_activos = 'sí'";
		$piezas = Database::get_valor_query( $sql, 'piezas' );
    
     //echo Database::get_json_rows($sql);

     echo json_encode( array('tiempo' => $to , 'operario' => $canti, 'ph' => $piezas));

     }else{

     	echo json_encode( array('mensaje' => ' Referencia sin tiempo '));


     }
     


		 

?>