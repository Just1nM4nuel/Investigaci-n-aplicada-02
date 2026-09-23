function validarCorreo() {

    let correo = document.getElementById("correo").value;

    // Expresión regular para validar el correo
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (patron.test(correo)) {
        document.getElementById("resultado").textContent =
            "✓ El correo electrónico es válido.";
        document.getElementById("resultado").style.color = "green";
    } else {
        document.getElementById("resultado").textContent =
            "✗ El correo electrónico no es válido.";
        document.getElementById("resultado").style.color = "red";
    }
}