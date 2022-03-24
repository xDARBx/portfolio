function validar() {
    var nombre1, correo, asunto, mensaje, expresion;
    nombre1 = document.getElementById("nombre1").value;
    correo = document.getElementById("correo").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;
    expresion = /\w+@+\w+\.+[a-z]/;

    if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
        alert("Todos los campos son OBLIGATORIOS");
        return false;
    } else if (nombre1.length > 50) {
        alert("El Nombre es muy largo")
        return false;
    } else if (asunto.length > 50) {
        alert("El Asunto es muy largo")
        return false;
    } else if (correo.length > 100) {
        alert("El Correo es muy largo")
        return false;
    } else if (!expresion.test(correo)) {
        alert("El Correo no es válido")
        return false;
    } else if (mensaje.length > 300) {
        alert("El Mensaje es muy largo")
        return false;
    }


}