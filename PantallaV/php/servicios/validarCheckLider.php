<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['id'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
	die;
}

// Desinfectar el parametro

$id        = ($_GET['id']);
$lider     = ($_GET['lider']); 


$sql = "UPDATE check_list_pruebas SET check_list_val_lider = '$lider' WHERE id_check_list = '$id'";




			$Hecho = Database::ejecutar_idu($sql);

			

			if ($Hecho == "1") {

			echo json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.'));

			}else{

				echo json_encode( array('err' => true, 'mensaje'=> $Hecho ));
			}





/*echo json_encode( array('refe'=>$refe,
						'fecha'=>$fecha ,
						'operario' =>$operario ,
						'um'=>$um ,
						'traza'=>$traza ,
						'revi'=>$revi ,
						'seguridad'=>$seguridad ,
						'poka'=>$poka ,
						'inicio'=>$inicio ,
						'cuatrohoras'=>$cuatrohoras,
						'averia'=>$averia) );*/








?>