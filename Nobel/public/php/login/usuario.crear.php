<?php
// Incluir la clase de base de datos
include_once("../clases/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


//$request['nombre'] = strtoupper($request['nombre']);

    $user = $request['usuario'] ;
    $pass = md5($request['pass']);

    //Comprobamos si existe el usuario
    $sql = "SELECT Usuario as existe FROM usuarios_encriptado where Usuario = '$user'";
	$existe = Database::get_valor_query( $sql, 'existe' );

	if( $existe == 1){

	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'El Usuario ya exsite.' ));

	}else{

        $sql = "SELECT codigo as existe FROM operarios where codigo NOT IN (select codigo from operario where codigo = '$user')";
		$existe = Database::get_valor_query( $sql, 'existe' );

		if( $existe == 1){

		$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Solo numero de operario como usuario.' ));

		}else{

			$sql = "INSERT INTO usuarios_encriptado(Usuario, Password) 
			VALUES ( '$user','$pass')";


			$Hecho = Database::ejecutar_idu($sql);
			$Respuesta = "";

			if ($Hecho == "1") {
				$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.','visible' => false,'visible2' => true ));
			}else{
				$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ));
			}

		}

	}

	//comprobamos que el usuario es un trabajor registrado
	

    //Sí todo es correcto insertamos el nuevo usuario
	
	echo $Respuesta;

?>
