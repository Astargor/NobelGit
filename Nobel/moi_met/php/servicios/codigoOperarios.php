<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$estado = 1;

$sql = "SELECT codigo, Nombre, Apellido1, Apellido2, Seccion, UAP, Rol, Sello_Control, Activo, Control_bol, sesion,concat(codigo,' , ',nombre,'   ',apellido1) as total FROM operarios where Activo = 'si' and UAP is not null" ;

echo Database::get_json_rows($sql);

?>
