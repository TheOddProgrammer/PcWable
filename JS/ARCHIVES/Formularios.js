//Funciones Ejecutables

document.getElementById("registrarse").addEventListener("click",register);
document.getElementById("button_register").addEventListener("click",logIn);
document.getElementById("iniciar_sesion").addEventListener("click",logIn);
window.addEventListener("resize",ancho_page);

// Variables Llamado de Documentos

var contenedor_loginRegister = document.querySelector(".contenedor__loginRegister");
var formulario_login = document.querySelector(".Formulario_Sesion");
var formulario_register = document.querySelector(".Formulario_Registro");
var caja_traseraLogin = document.querySelector(".caja__trasera-login");
var caja_traseraRegister = document.querySelector(".caja__trasera-register");

//Funciones Definidas

function ancho_page() { //Para el Resize de Normal a Pequeño
    if(window.innerWidth > 850){

        caja_traseraLogin.style.display = "block";
        caja_traseraRegister.style.dysplay = "block";
        contenedor_loginRegister.style.left = "-200";
    } else {

        caja_traseraRegister.style.display = "block";
        caja_traseraRegister.style.opacity = "1";
        caja_traseraLogin.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "0";

    }
}

ancho_page();

// Para el movimiento de los Form dentro del Contenedor Total

function logIn() {

    if(window.innerWidth > 850) {

        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "-200px";
        caja_traseraLogin.style.opacity = "0";
        caja_traseraRegister.style.opacity = "1";

    } else { //Para Pantallas Pequeñas Del Inicio

        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "0px";
        caja_traseraLogin.style.display = "none";
        caja_traseraRegister.style.display = "block";

    }

}

function register() {

    if(window.innerWidth > 850){

        formulario_register.style.display = "block";
        contenedor_loginRegister.style.left = "200px"; 
        formulario_login.style.display = "none";
        caja_traseraRegister.style.opacity = "0";
        caja_traseraLogin.style.opacity= "1";

    }else { //Para Pantallas Pequeñas Del Registro

        formulario_register.style.display = "block";
        contenedor_loginRegister.style.left = "0px"; 
        formulario_login.style.display = "none";
        caja_traseraRegister.style.display = "none"
        caja_traseraRegister.style.display = "none"
        caja_traseraLogin.style.display = "block";

    }
    
}

