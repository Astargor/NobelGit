<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

/*SELECT bol_fecha 
FROM boletines
WHERE bol_por_corregir <> 3 and (bol_Validado_por = 1781 OR bol_Validado_por = 1780 OR bol_Validado_por = 1643
OR bol_Validado_por = 1763 OR bol_Validado_por = 1699)  AND bol_revision_metodos IS NULL AND bol_Validado = 'sí'
group by bol_operario order by bol_fecha*/

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT count(bol_fecha) as cantidad FROM boletines_por_validar_contar";

echo json_encode( Database::get_Row($sql) ); 

//echo Database::get_json_rows($sql);

?>

