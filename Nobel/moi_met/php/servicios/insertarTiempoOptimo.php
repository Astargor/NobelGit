<?php

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;

$sql = "SELECT id_tipo_proceso as idProceso from procesos where  tip_proc_descripcion = '$_GET[proceso]'";
		$id_proceso = Database::get_valor_query( $sql, 'idProceso' );

$sql2 = "SELECT id_zprod as idZona from zona_produccion where  uap = '$_GET[uapPHP]'";
		$id_Zona = Database::get_valor_query( $sql2, 'idZona' );	

$sql4 = "SELECT id_registro as id_registro from ums where  id_um = '$_GET[um]' and um_refe = '$_GET[Ext]' and um_descrip ='$_GET[descripUm]'";
		$id_registro = Database::get_valor_query( $sql4, 'id_registro' );				



$sql3 = "INSERT INTO tiempos_optimos(t_optimo_produccion, t_optimo_operarios, t_optimo_fechas, t_optimo_externa, t_optimo_interna, t_optimo_ums, t_optimo_procesos, t_optimo_zona) VALUES ('$_GET[tiempo]','$_GET[operarios]','$_GET[dia]','$_GET[Ext]','$_GET[Int]','$id_registro',$_GET[proceso],'$id_Zona')";

json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $id_registro ));

$Hecho = Database::ejecutar_idu($sql3);

$Respuesta = "";

if ($Hecho == "1") {

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.', 'sentencia' => $sql3 ));

}else{

	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ,'sentencia' => $sql3 ));
	
}

echo $Respuesta;



?>