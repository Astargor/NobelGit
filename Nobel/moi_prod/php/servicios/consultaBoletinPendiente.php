<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['operario'])) {
    echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
    die;
}

$operario = $_GET['operario'];
$turno = $_GET['turno'];




   $sql = "SELECT * FROM boletines_para_rendimientos where Turno = '$turno' and Operario = '$operario' and Validado = 'no'";

       echo Database::get_json_rows($sql);

    //echo json_encode( Database::get_Row($sql) );    




?>