<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['refe'])) {
    echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
    die;
}

   

   $sql = "SELECT Referencia,round((sum(Horas_equivalentes)/sum(horas)) * 100,2) as totalRen FROM boletines_para_rendimientos_para_crystalreport where Referencia = '$_GET[refe]' and Fecha >='$_GET[fechaini]' and Fecha <= '$_GET[fechafi]'";


       echo Database::get_json_rows($sql);

    //echo json_encode( Database::get_Row($sql) );    




?>