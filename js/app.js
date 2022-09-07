var correo = document.getElementById('email');
var username = document.getElementById('username');
var pass = document.getElementById('pass');

var email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

var validacion = {

    "nombre" : true,
    "apellido" : true,
    "correo": true,
    "user": true,
    "pass": true,
}


function validar(){
    if(username.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes colocar tu nombre de usuario',
          })
          validacion.nombre = false;
          return false;  
    }

    if(username.value.length > 8){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pon un nombre mas corto',
          })
          validacion.nombre = false;
          return false;  
    }

    if(correo.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No dejes vacio tu correo',
          })
          validacion.nombre = false;
          return false;  
    }

    if(!email.test(correo.value)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Coloca un correo correcto',
          })
          validacion.nombre = false;
          return false;  
    }

    if(pass.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Coloca una contraseña',
          })
    }

    if(pass.value.length > 16){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pon una contraseña mas corta',
          })
          validacion.nombre = false;
          return false;  
    }

    if(pass.value.length < 3){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pon una contraseña mas larga',
          })
          validacion.nombre = false;
          return false;  
    }
    
}


