function verEnunciado(){
   
    let enunciadoAE = `Ejercicio 1 Cadena de String
    `;

  
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}
function verResolucion() {
    const emailCadena = /^[A-Za-z0-9._-]+@[A-Za-z0-9_-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    let valido = false;
    let email;

    while (!valido) {
        email = prompt("Introduce una dirección de correo electrónico:");

        if (email === null) {
            alert("Operación cancelada.");
            return;
        } else if (!email.trim().match(emailCadena)) {
            alert("Formato de correo electrónico no válido.");
        } else {
            valido = true;
        }
    }

    alert(`El correo electrónico introducido es: ${email}`);
    const resultadoElem = document.getElementById("resultado");
    if (resultadoElem) {
        resultadoElem.textContent = `El correo introducido ha sido almacenado correctamente: ${email}`;
    }
}

