
<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT Operario FROM boletines_para_rendimientos 
    where (Validado_por = 1699 or Validado_por =1781 or Validado_por =1780 or Validado_por =1643 or Validado_por =1763) 
    and Validado = 'sí' and Revisado is null  group by Operario order by Fecha,Operario";

echo Database::get_json_rows($sql);

//echo Database::get_json_rows($sql);

?>