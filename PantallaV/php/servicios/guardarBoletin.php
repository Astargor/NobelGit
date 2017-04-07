<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['operario'])) {
    echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
    die;
}

    $operario        = $_GET['operario']; 
	$turno           = $_GET['turno']; 
	$horas           = $_GET['horas'];
	$piezas          = $_GET['piezas'];
	$coste           = $_GET['coste'];
	$coste_descrip   = $_GET['coste_descrip'];
	$ref             = $_GET['ref'];
	$tiempoOP        = $_GET['tiempoOP'];
	$piezas_hora     = $_GET['piezas_hora'];
	$fecha           = $_GET['fecha'];
	$validado        = "no";
	$zona = 0;

	//echo json_encode( array('zona' => $validado));

	if ($ref == 'Sin Referencia') {

		$zona = 0;
		$ref = "";
		
	} elseif ($ref == 'Conformar'){

		$zona = 0;
		$ref = 'Conformar';


	}else{

		$sql = "SELECT t_optimo_zona as zona from tiempo_optimo where  t_optimo_externa = '$ref'";
		$zona = Database::get_valor_query( $sql, 'zona' );


	}
	



 
	$sql = "INSERT INTO boletines (bol_piezas,bol_fecha,bol_horas,bol_operario,bol_c_coste,bol_cc_descrip,bol_turno,bol_zona,bol_tiempo_op,bol_refere,bol_Validado) VALUES ('$piezas','$fecha','$horas','$operario','$coste','$coste_descrip','$turno','$zona','$tiempoOP','$ref','$validado')";




  /*  echo json_encode( array('operario' => $operario,
					    	'turno' => $turno,
					    	'zona' => $zona,
					    	'horas' => $horas,
					    	'piezas' => $piezas,
					    	'coste' => $coste,
					    	'coste_descrip' => $coste_descrip,
					    	'ref' => $ref,
					    	'tiempoOP' => $tiempoOP,
					    	'fecha' => $fecha,
    	                    'validado'=>$validado
    	                    ) );*/

    	                    //echo json_encode(array ('operario' => $zona,'sql' => $sql));

  Database::ejecutar_idu($sql);



?>