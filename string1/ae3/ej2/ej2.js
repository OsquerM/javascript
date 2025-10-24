function verEnunciado() {
    let enunciadoAE = `
    Realiza una aplicación web donde se solicite por pantalla, mediante una ventana emergente (prompt), al usuario una frase que contenga letras y números.

    Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.

    Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.
    `;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion() {
    let frase = prompt("Introduce una frase que contenga letras y números:");

    if (!frase) {
        document.getElementById("resultado").innerHTML = "No has introducido ninguna frase.";
        return;
    }

    let suma = 0;
    let digitos = [];

    for (let caracter of frase) {
        if (caracter >= '0' && caracter <= '9') {
            suma += parseInt(caracter);
            digitos.push(caracter);
        }
    }

    if (digitos.length === 0) {
        document.getElementById("resultado").innerHTML = "No se han encontrado dígitos en la frase.";
        return;
    }

    let textoResultado = `${suma} (${digitos.join(" + ")})`; // join une los dígitos con " + "
    document.getElementById("resultado").innerHTML = `La suma de los dígitos es: ${textoResultado}`;
}
