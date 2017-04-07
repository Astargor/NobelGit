<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.MTM.php");

// Retorna un json
header('Content-Type: application/json');


$sql = "SELECT * FROM k";

echo Database::get_json_rows($sql);

?>