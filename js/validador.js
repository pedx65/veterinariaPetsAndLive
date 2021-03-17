function vali() {
    let contrasena = document.getElementById("contrasena");
    let repita = document.getElementById("contrasena2");

    if (contrasena.value != repita.value) {
        alert("Las contraseñas no coinciden");
        contrasena.style.border = "solid red";
        repita.style.border = "solid red";
    }
}