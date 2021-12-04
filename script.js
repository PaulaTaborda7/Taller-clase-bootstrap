function validarFecha(){
    //Obtenemos el valor del input de la edad
    let edadInternauta = document.getElementById("edadPersona").value;

    let fechaHoy = new Date();
    let fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    fechaNacimiento = new Date(fechaNacimiento);
    // 31557600000 = 1000*60*60*24*365.25 Conversión de un año a milisegundos
    let edad = (fechaHoy - fechaNacimiento)/31557600000;
    //Truncamos hacia abajo
    edad = Math.floor(edad);
    console.log("La edad es");
    console.log(edad);

    
    if(edad >= 14){
        if(edadInternauta == edad) {
            //Se envía el formulario desde acá
            //document.forms['formularioOpiniones'].submit();
            //Cambiamos el tipo del botón de enviar
            document.getElementById("botonEnviar").type = "submit"
            document.getElementById("botonEnviar").click();
        }
        else{
            alert("Su fecha de nacimiento no coincide con la edad que puso. Revise nuevamente.");
        }
    }else{
        alert("Como no es mayor de 14 años, no se puede hacer el registro de este formulario.");
    }
}