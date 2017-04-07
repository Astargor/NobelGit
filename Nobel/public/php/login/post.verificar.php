<?php
session_start();
require_once("../clases/class.Database.php");


$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$respuesta = array(
				'err' => true,
				'mensaje' => 'Usuario/Contraseña incorrectos'

			);


// ================================================
//   Encriptar la contraseña maestra (UNICA VEZ)
// ================================================
// encriptar_usuario();




if(  isset( $request['usuario'] ) && isset( $request['pass'] ) ){ // ACTUALIZAR

	$user = $request['usuario'] ;
	$pass = md5($request['pass']) ;

	//$user = strtoupper($user);


	// Verificar que el usuario exista
	$sql = "SELECT count(*) as existe FROM usuarios_encriptado where Usuario = '$user'";
	$existe = Database::get_valor_query( $sql, 'existe' );

    //Comprobamos el rol del usuario
	$sql = "SELECT Rol as rol FROM operarios where codigo = '$user'";
	$rol = Database::get_valor_query( $sql, 'rol' );

    
     

              
	if( $existe == 1 ){

				$sql = "SELECT Password as ps FROM usuarios_encriptado where Usuario = '$user'";
				$data_pass = Database::get_valor_query( $sql, 'ps');

                // comprobamos que el rol sea metodos
             // if( $rol == "moi_met"){


				// Encriptar usando el mismo metodo
				// $pass = Database::uncrypt( $pass, $data_pass );

				// Verificar que sean iguales las contraseñas
						if( $data_pass == $pass ){

							$respuesta = array(			
								'err'  => false,
								'mensaje' => 'Login válido',
								'url' => '../moi_met/',
								'rol' => $rol
							);

							$_SESSION['user'] = $user;

							// actualizar ultimo acceso
							/*$sql = "UPDATE usuarios set ultimoacceso = NOW() where codigo = '$user'";
							Database::ejecutar_idu($sql);*/
						

                 }
				if ($rol == "super" || $rol == "dir_prod") {

                  	if( $data_pass == $pass ){

							$respuesta = array(			
								'err'  => false,
								'mensaje' => 'Login válido',
								'url' => '../moi_prod/',
								'rol' => $rol
							);

							$_SESSION['user'] = $user;
                  }
              }

              if ($rol == "indirectos") {

                  	if( $data_pass == $pass ){

							$respuesta = array(			
								'err'  => false,
								'mensaje' => 'Login válido',
								'url' => '../moi_other/',
								'rol' => $rol
							);

							$_SESSION['user'] = $user;
                  }
              }

                  //si no es ninguno da este mensaje

                  if($rol != "moi_met" && $rol != "super" && $rol != "indirectos" && $rol != "dir_prod" && $rol != "dir"){

                  	$respuesta = array(
                  		'mensaje' => 'Permisos insuficientes, contacte con el administrador',
                  		'err'  => true,
                        'rol' => $rol

                  		);
                  
                  }

			}

       

  // }

}
// sleep(1.5);
echo json_encode( $respuesta );





// Esto se puede borrar despues
// ================================================
//   Funcion para Encriptar
// ================================================
// function encriptar_usuario(){

// 	$usuario_id = '1';
// 	$contrasena = '123456';
// 	$contrasena_crypt = Database::crypt( $contrasena );

// 	$sql = "UPDATE usuarios set contrasena = '$contrasena_crypt' where id = '$usuario_id'";
// 	Database::ejecutar_idu($sql);

// }


?>