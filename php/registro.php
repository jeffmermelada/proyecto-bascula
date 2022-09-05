<?php

	include 'conexion.php';
	include 'SED.php';

	$nombre = $_POST['first-name'];
	$apellido = $_POST['last-name'];
	$email = $_POST['email'];
	$user = $_POST['username'];
	$pass = $_POST['pass'];

	$passWord=SED::encryption($pass);
	$clave_real=SED::decryption($passWord);

	/*$email = $_POST['email'];
	$direccion = $_POST['direccion'];
	$telefono = $_POST['telefono'];
	$genero = $_POST['genero'];*/


	$consulta = "INSERT INTO `registro_usuario`(`id_usuario`, `nombre_usuario`, `apellido_usuario`, `username_usuario`, `correo_usuario`, `password_usuario`) 
	VALUES (null, '$nombre', '$apellido', '$user', '$email', '$passWord')";

	$insertar = mysqli_query($conexion, $consulta);


	if($insertar){

		echo "REGISTRO GUARDADO";
	} else {
		echo "NO SE HA PODIDO REGISTRAR";
	}

	ob_end_clean();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="3;url=../index.html">
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>Registro exitoso</title>
</head>
<body>
<script>
	Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
</script>
</body>
</html>