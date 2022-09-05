var nombre = document.getElementById('first-name');
var apellido = document.getElementById('last-name');
var correo = document.getElementById('email');
var username = document.getElementById('username');
var pass = document.getElementById('pass');

const emailregex = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";

var validacion = {

    "nombre" : true,
    "apellido" : true,
    "correo": true,
    "user": true,
    "pass": true,
}


function validar(){

    if(nombre.value == '' || nombre.value.length < 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes colocar tu nombre',
          })
          validacion.nombre = false;
          return false;  

    } else if (!isNaN(nombre.value)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes colocar números y carácteres especiales en tu nombre',
          })
          validacion.apellido = false;
          return false; 
    }

    if(apellido.value == '' || apellido.value.length < 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes colocar tu apellido',
          })
          return false;  
          
    } else if (!isNaN(apellido.value)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes colocar números y carácteres especiales en tu apellido',
          })
          return false; 
    }

    
    if(correo.value == ''){
        validacion.correo = false; 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un correo',
          })
          return false;

    } else if(!emailregex.test(correo.value)){
        validacion.correo = false; 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un correo valido',
          })
          return false;
    }
    
    if(username.value == ''){
        validacion.user = false;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un nombre de usuario',
          })
        return false;
        
    } else if(username.value.length > 8){
        validacion.user = false;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Solo se permiten nombres cortos (8 letras)',
          })
          return false;
    }

    if(pass.value == ''){
        validacion.pass = false;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar una contraseña',
          })
          return false;
    } else if(pass.value == ''){
        validacion.pass = false;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresa una contraseña mas corta (16 digitos)',
          })
          return false;
    } 

    if(validacion.nombre && validacion.apellido && validacion.correo && validacion.user && validacion.pass){
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        return true;

    } else {

        return false;
    }
    
}


