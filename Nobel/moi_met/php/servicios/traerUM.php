<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$estado = 1;

$sql = "SELECT * FROM ums group by id_um order by id_um desc ";

echo Database::get_json_rows($sql);

?>