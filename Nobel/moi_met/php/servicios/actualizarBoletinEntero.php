<?php

session_start();


// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro

$usuario = $_SESSION['user'];
$operario = $_GET['c'];

$sql = "UPDATE boletines SET bol_revision_metodos = '$usuario' WHERE (bol_Validado_por = 1699 or bol_Validado_por =1781 or bol_Validado_por =1780 or bol_Validado_por =1643 or bol_Validado_por =1763) and bol_Validado = 'sí' and bol_revision_metodos is null and bol_operario = '$operario' order by bol_fecha,bol_operario";

Database::ejecutar_idu($sql);



?>