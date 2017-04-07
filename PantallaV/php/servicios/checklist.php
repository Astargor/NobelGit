<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['refe'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
	die;
}

// Desinfectar el parametro

$refe        = ($_GET['refe']);
$fecha       = ($_GET['fecha']);
$turno       = ($_GET['turno']);
$hora      	 = ($_GET['hora']);  
$operario    = ($_GET['operario']);
$um          = ($_GET['um']);
$traza       = ($_GET['traza']);
$revi        = ($_GET['revi']);
$seguridad   = ($_GET['seguridad']);
$poka        = ($_GET['poka']);
$inicio      = ($_GET['inicio']);
$cuatrohoras = ($_GET['cuatrohoras']);
$averia      = ($_GET['averia']);
$observacion = ($_GET['observacion']);

//Comprobamos si ya existe un resultado
$sql = "SELECT count(*) as estado from check_list_pruebas where check_list_operario = '$operario' and check_list_referencia = '$refe' and check_list_fecha = '$fecha'";

$resultado = Database::get_valor_query( $sql,'estado');



//si hay resultado efectuamos un update de los valores
if ($resultado >= "1"){
        
     $sql = "UPDATE check_list_pruebas SET check_list_trazabilidad = '$traza',check_list_revision_metodo = '$revi',check_list_seguridad = '$seguridad',check_list_poka_yoke = '$poka', check_list_cuatro_horas = '$cuatrohoras',check_list_averia ='$averia'  WHERE check_list_operario = '$operario' and check_list_referencia = '$refe' and check_list_fecha = '$fecha' and check_list_hora = '$hora'";

			$Hecho = Database::ejecutar_idu($sql);

			
            //si la insercion a sido correcta
			if ($Hecho == "1") {

			echo json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.'));

			}
           //si el update a sido correcta
			else{

				echo json_encode( array('err' => true, 'mensaje'=> $resultado ));
			}


}
//En caso de no haber resultado hacemos un insert nuevo
else{

	$sql = "INSERT INTO check_list_pruebas(check_list_operario, check_list_fecha,check_list_hora,check_list_turno,check_list_referencia,check_list_UM,check_list_trazabilidad,check_list_revision_metodo,check_list_seguridad,check_list_poka_yoke,check_list_auto_inicio,check_list_cuatro_horas,check_list_averia,check_list_obser ) VALUES ( '$operario','$fecha','$hora','$turno','$refe','$um','$traza','$revi','$seguridad','$poka','$inicio','$cuatrohoras','$averia','$observacion' )";




			$Hecho = Database::ejecutar_idu($sql);

			
            //si la insercion a sido correcta
			if ($Hecho == "1") {

			echo json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.'));

			}
            //si el update a sido Erroena
			else{

				echo json_encode( array('err' => true, 'mensaje'=> 'Error','sentecia' => $sql ));
			}
}



?>