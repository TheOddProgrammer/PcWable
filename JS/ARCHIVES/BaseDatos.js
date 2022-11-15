/*Para Log_In General*/

var datoNombre;
var datoContraseña;

function notificacion() {
    Swal.fire({
        icon: 'info',
        title: 'Querido Usuario',
        showConfirmButton: true,
        text: 'Por Favor Realice el Registro Primero Para Guardar sus Datos'
    })
}

//Para Inicio de Sesion//

function sesionIniciada() {
    let Nombre = $("#Nombre").val();
    let Contraseña = $("#Contraseña2").val();
    let arrayNombre = Nombre.split(" ");

    if (Nombre!=datoNombre || Contraseña!=datoContraseña) {
        Swal.fire({
            icon: 'warning',
            title: 'Usuario No Encontrado',
            showConfirmButton: true,
            text: 'Por Favor Digite de Nuevo'
        })
        $("#Nombre").val(null);
        $("#Contraseña2").val(null);
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido '+ arrayNombre[0],
            showConfirmButton: false,
            text: 'Has Iniciado Sesión Éxitosamente',
        })
        setTimeout(function redireccion(){
            window.location.href='../HTML/MainPage.html';
        },2000);
    }
}

// Para el Registro

function registroCompleto() {
    datoNombre = $("#Nombre2").val();
    datoContraseña = $("#datoContraseña").val();
    Swal.fire({
        icon: 'success',
        title: 'Añadido',
        showConfirmButton: true,
        text: 'Tus Datos Han Sido Guardados'
    })
    console.log(datoContraseña);
    console.log(datoNombre);
    $("Nombre2").val(null);
    $("datoContraseña").val(null);
}


