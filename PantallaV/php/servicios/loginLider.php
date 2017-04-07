<?php
// Incluir la clase de base de datos

include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['user'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código",'pos'  => $pass) );
	die;
}

// Desinfectar el parametro

	$user  = ($_GET['user']);
	$pass2 = ($_GET['pa']); 
	$pass  = md5($pass2);

	$sql = "SELECT count(*) as existe FROM usuarios_encriptado where Usuario = '$user'";
	$existe = Database::get_valor_query( $sql, 'existe' );


	$sql = "SELECT Rol as rol FROM operarios where codigo = '$user'";
	$rol = Database::get_valor_query( $sql, 'rol' );

	$sql = "SELECT Password as ps FROM usuarios_encriptado where Usuario = '$user'";
	 $data_pass = Database::get_valor_query( $sql, 'ps');

if ($rol == 'moi_met' || $rol == 'lider' || $rol == 'liderfac'|| $rol == 'lidervapor'|| $rol == 'super'){

	if( $existe == '1' ){

     

		 if ( $data_pass == $pass ) {

							echo json_encode( array('err' => '0','pos'  => $pass));					
							

						} else {

							echo json_encode( array('err' => '1','pos'  => $pass));

							//mensaje de error
						}

	}else{

		echo json_encode( array('err' => '3','pos'  => $pass,'pos2' => $data_pass));
	}

}else{
	echo json_encode( array('err' => '4'));
}

	//echo json_encode( array('err' => false,'pos'  => $pass));
	
	
		//echo json_encode( $respuesta );

?>