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

$refe = $_GET['refe'];
$fechainicio = $_GET['fechainicio'];
$fechafin = $_GET['fechafin'];


   $sql = "SELECT Fecha,C_Coste,round(avg(Rendimentos),2) as Rendimientos FROM boletines_para_rendimientos_para_crystalreport where Referencia = '$_GET[refe]' and Fecha >= '$_GET[fechafin]' and Fecha <= '$_GET[fechainicio]' and C_Coste = '062' group by Fecha order by Fecha";


       echo Database::get_json_rows($sql);

        




?>