<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$estado = 1;

$sql = "SELECT * FROM referencias where ref_estado = 1";

echo Database::get_json_rows($sql);

?>