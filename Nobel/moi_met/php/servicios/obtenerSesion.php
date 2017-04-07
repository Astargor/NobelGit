<?php

session_start();
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$usuario  = $_SESSION['user'];


echo $usuario;



?>