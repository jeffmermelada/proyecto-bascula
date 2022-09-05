<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clave Oculta</title>
</head>

<body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus soluta inventore quia, voluptates
        placeat omnis dolor magni autem, est illo. Est adipisci delectus enim fugit facere laudantium officia rerum.</p>
    <?php
    include './SED.php';
    $clave = "ISMAC2022";
    echo $clave . '<br>';
    $clave_oculta=SED::encryption($clave);
    echo $clave_oculta . '<br>';
    $clave_real=SED::decryption($clave_oculta);
    echo $clave_real;

?>
</body>

</html>