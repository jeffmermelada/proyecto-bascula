<?php 

	$server = "localhost";
	$user = "root";
	$pass = "";
	$db = "jeff_matutino";

	$conexion = mysqli_connect($server, $user, $pass, $db);

	if($conexion){
		echo "Conexion satisfactoria";
	} else {

		echo  "Error en conexion" . mysql_error();
	}

?>