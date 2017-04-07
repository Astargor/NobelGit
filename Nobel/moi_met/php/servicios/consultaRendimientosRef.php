<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

if (!isset($_GET['ref'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código de operario") );
	die;
}

$sql = "SET lc_time_names = 'es_MX'";

$Hecho = Database::ejecutar_idu($sql);


$sql = "SELECT monthname(Fecha) as Fecha, round((sum(Horas_equivalentes)/sum(horas)) * 100,2) as totalRen  FROM boletines_para_rendimientos_para_crystalreport where Fecha >= date_sub(curdate(), interval 12 month) and Referencia = '$_GET[ref]' group by month(Fecha)";


echo Database::get_json_rows($sql);


?>