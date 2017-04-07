<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$estado = 1;

$sql = "SELECT * FROM listado_tiempos_optimos where tiempos_activos = 'sí' order by t_optimo_interna desc";

echo Database::get_json_rows($sql);

?>