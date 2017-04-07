<?php
private $dbuser="PantallaV";
private $dbpass="1234";
private $dbname="base_datos_produccion";
private $chandle = mysql_connect("10.228.44.211", $dbuser, $dbpass) or die("Error conectando a la BBDD");
echo "Conectado correctamente
";
mysql_select_db($dbname, $chandle) or die ($dbname . " Base de datos no encontrada." . $dbuser);
echo "Base de datos " . $database . " seleccionada";
mysql_close($chandle);

echo json_encode( array('err' => true, 'mensaje'=> $chandle ));

?>