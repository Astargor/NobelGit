<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.MTM.php");

// Retorna un json
header('Content-Type: application/json');

$estado = 1;

$sql = "SELECT * FROM estudios";

echo Database::get_json_rows($sql);

?>