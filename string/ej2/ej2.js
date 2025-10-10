function verEnunciado() {
    let enunciadoAE = `
Ejercicio 2: Simulación de registro de usuario web.
- Solicita un email válido (según reglas definidas)
- Solicita confirmación del email
- Solicita una contraseña válida
- Solicita confirmación de la contraseña
- Permite login con 3 intentos
`;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion() {
    const caractEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}(\.[A-Za-z]{2,4})?$/;
    const caractContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#\$@!%&\?])[A-Za-z\d#\$@!%&\?]{8,16}$/;

    let email, confirmarEmail;
    let validoEmail = false;

    // --- Solicitar email válido ---
    while (!validoEmail) {
        email = prompt("Introduce un email válido:");
        if (email === null) 
            return alert("Operación cancelada.");

        confirmarEmail = prompt("Confirma tu email:");
        if (confirmarEmail === null) 
            return alert("Operación cancelada.");

        if (email !== confirmarEmail) {
            alert("Los emails no coinciden. Intenta de nuevo.");
        } else if (!caractEmail.test(email)) {
            alert("Formato de email no válido.");
        } else {
            validoEmail = true;
        }
    }

    alert("Email válido: " + email);

    let contrasenia, confirmarContrasenia;
    let validarContrasenia = false;

    // --- Solicitar contraseña válida ---
    while (!validarContrasenia) {
        contrasenia = prompt("Introduce una contraseña válida:\n- 1 minúscula\n- 1 mayúscula\n- 1 dígito\n- 1 carácter especial (#$@!%&?)\n- 8-16 caracteres\n- Sin espacios");
        if (contrasenia === null) return alert("Operación cancelada.");

        confirmarContrasenia = prompt("Confirma tu contraseña:");
        if (confirmarContrasenia === null) return alert("Operación cancelada.");

        if (contrasenia !== confirmarContrasenia) {
            alert("Las contraseñas no coinciden.");
        } else if (!caractContra.test(password)) {
            alert("La contraseña no cumple los requisitos.");
        } else {
            validarContrasenia = true;
        }
    }

    alert("Contraseña válida y confirmada.");

    // --- Login con 3 intentos ---
    let intentos = 3;
    let acceso = false;

    while (intentos > 0 && !acceso) {
        let login = prompt("Introduce tu email para login:");
        let contraseniaLogin = prompt("Introduce tu contraseña:");

        if (login === email && contraseniaLogin === password) {
            acceso = true;
            alert("Desbloqueo exitoso.");
        } else {
            intentos--;
            alert(`Usuario/contraseña incorrectos. Intentos restantes: ${intentos}`);
        }
    }

    if (!acceso) {
        alert("Usuario bloqueado.");
    }

    // Mostrar resultado final en la página
    const resultadoElem = document.getElementById("resultado");
    if (resultadoElem) {
        resultadoElem.textContent = acceso ? "Acceso correcto" : "Usuario bloqueado";
    }
}
