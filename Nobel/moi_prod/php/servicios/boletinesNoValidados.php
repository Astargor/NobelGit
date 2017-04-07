<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT * FROM boletines_no_validados";

echo json_encode( Database::get_Row($sql) );

?>