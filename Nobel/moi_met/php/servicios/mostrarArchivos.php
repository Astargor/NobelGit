<?php
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;

$carpeta = "C:/xampp/htdocs/NobelApp/PantallaV/img/pdf";
$var = $_GET['c'];
$arrayMatriz = [];

function listar_archivos($carpeta){
	$contador = 0;
    if(is_dir($carpeta)){
        if($dir = opendir($carpeta)){
            while(($archivo = readdir($dir)) !== false){
                if($archivo != '.' && $archivo != '..' && $archivo != '.htaccess'){

                	$arrayMatriz[$contador] = $archivo;

                	echo $archivo;

                	$contador = $contador + 1;

                  // echo '<li><a target="_blank" href="'.$carpeta.'/'.$archivo.'">'.$archivo.'</a></li>';
                }
            }
            closedir($dir);
        }
    }
}
 
$Respuesta = listar_archivos($var);

print_r($arrayMatriz);


?>