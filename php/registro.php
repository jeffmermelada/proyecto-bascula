<?php

	include 'conexion.php';
	include 'SED.php';

	$email = $_POST['email'];
	$user = $_POST['username'];
	$pass = $_POST['pass'];

	$validar = true;

	$passWord=SED::encryption($pass);
	$clave_real=SED::decryption($passWord);

	/*$email = $_POST['email'];
	$direccion = $_POST['direccion'];
	$telefono = $_POST['telefono'];
	$genero = $_POST['genero'];*/

	$consulta = "SELECT * FROM `registro_usuario`";

	$result = mysqli_query($conexion, $consulta);

	if($result){
		while($row = mysqli_fetch_array($result)){
			$id = $row["id"];
			$user_bd = $row["username_usuario"];
			$correo = $row["correo_usuario"];
			$psw = $row["password_usuario"];

			if($user_bd == $user)
			{
				$validar = false;
			}
		}
	} 

	$consulta = "INSERT INTO `registro_usuario`(`id_usuario`, `username_usuario`, `correo_usuario`, `password_usuario`) 
	VALUES (null, '$user', '$email', '$passWord')";

	if($validar){
		$insertar = mysqli_query($conexion, $consulta);
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

<?php

if($validar){
	echo "<script>
	Swal.fire(
		'success',
		'¡Se han registrado tus datos!'
	)
	</script>";

} 

if(!$validar){
	echo "<script>
	Swal.fire(
		'error',
		'¡No se ha podido registrar!'
	)
	</script>";
}
?>

</body>
</html>