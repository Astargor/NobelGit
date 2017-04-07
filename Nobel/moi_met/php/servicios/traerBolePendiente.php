<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['opera'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
	die;
}

// Desinfectar el parametro

$codigo = $_GET['opera'];


// Verificar si existe
$sql = "SELECT count(Operario) as Existe from boletines_para_rendimientos where (Validado_por = 1699 or Validado_por =1781 or Validado_por =1780 or Validado_por =1643 or Validado_por =1763) and Validado = 'sí' and Revisado is null and Operario = '$codigo' order by Fecha,Operario";

    $existe = Database::get_valor_query($sql,"Existe");


if ($existe > 0) {

	// Si existe, imprime el json
	$sql = "SELECT * from boletines_para_rendimientos 
    where (Validado_por = 1699 or Validado_por =1781 or Validado_por =1780 or Validado_por =1643 or Validado_por =1763) 
    and Validado = 'sí' and Revisado is null and Operario = '$codigo' order by Fecha,Operario";

	echo Database::get_json_rows($sql);	

}else{

	echo json_encode( array('err'=>$existe, 'mensaje'=>$codigo, 'Ha_fallado' => 'fallo','sqlll' =>$sql) );

}


?>

