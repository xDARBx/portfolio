//--------------INICIO DEL BOTÓN DESHABILITADO-HABILITADO-------------//
function habilitar(){
    nombre1 = document.getElementById("nombre1").value;
    asunto = document.getElementById("asunto").value;
    correo = document.getElementById("correo").value;
    mensaje = document.getElementById("mensaje").value;
    validator = 0;

    if(nombre1 == ""){
        validator++;
    }
    if(asunto == ""){
        validator++;  
    }
    if(correo == ""){
        validator++;
    }
    if(mensaje == ""){
        validator++;  
    }
    if(validator == 0){
        document.getElementById("btn").disabled = false;
    }else{
        document.getElementById("btn").disabled = true;
    }
          
}

document.getElementById("nombre1").addEventListener("keyup", habilitar);
document.getElementById("asunto").addEventListener("keyup", habilitar);
document.getElementById("correo").addEventListener("keyup", habilitar);
document.getElementById("mensaje").addEventListener("keyup", habilitar);

//--------------FIN DEL BOTÓN DESHABILITADO-HABILITADO-------------//

//------------------VALIDACIÓN FORMULARIO-------------------//
