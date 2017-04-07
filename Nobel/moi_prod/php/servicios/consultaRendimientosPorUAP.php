<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

if (!isset($_GET['zona'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código de operario") );
	die;
}

$array_refes = array();
$resultado = array();


 $sql = "SELECT Referencia as refes FROM boletines_para_rendimientos_para_crystalreport where zona = '$_GET[zona]' group by Referencia order by count(Referencia) desc LIMIT 15";


  
 $array_refes  = Database::get_json_rows($sql);

 $array_refes2 = json_decode($array_refes);

 




 foreach ($array_refes2 as $value) {

 		$nombre_refe = $value->refes;

 		$sql = "SELECT Referencia,round((sum(Horas_equivalentes)/sum(horas)) * 100,2) as totalRen FROM boletines_para_rendimientos_para_crystalreport where Referencia = '$nombre_refe' and Fecha >='$_GET[fechaini]' and Fecha <= '$_GET[fechafi]'";

		$prueba = Database::get_valor_query($sql,"totalRen");

 	   

 		 if ($prueba != null){

 		 	 $sql = "SELECT Referencia,round((sum(Horas_equivalentes)/sum(horas)) * 100,2) as totalRen FROM boletines_para_rendimientos_para_crystalreport where Referencia = '$nombre_refe' and Fecha >='$_GET[fechaini]' and Fecha <= '$_GET[fechafi]'";

 		 	$existe = Database::get_Row($sql);

 		 	array_push($resultado,$existe);

 		 }
    
 		
 	  
  
 }


 //  echo Database::get_json_rows($resultado);

  echo json_encode( $resultado );


?>