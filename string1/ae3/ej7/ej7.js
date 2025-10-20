function verEnunciado() {
    let enunciadoAE = `
    Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase y dos palabras. Crea una función que reciba tres argumentos: la frase y las dos palabras anteriores, como resultado la función insertará la segunda palabra detrás de la primera con un espacio por delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve la frase original.
    `;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}
 function insertarPalabra(frase, palabra1, palabra2) {
        let index = frase.indexOf(palabra1);
        if (index === -1) 
            return frase; // palabra1 no encontrada

       // Tomamos todo lo que está antes y hasta el final de palabra1
        let antes = frase.slice(0, index + palabra1.length); 
        // slice(0, index + palabra1.length) corta desde el inicio de la frase
        // hasta el final de palabra1. Esto se guarda en 'antes'.

        // Tomamos todo lo que queda después de palabra1
        let despues = frase.slice(index + palabra1.length);
        // slice(index + palabra1.length) corta desde el final de palabra1
        // hasta el final de la frase. Esto se guarda en 'despues'.
        return `${antes} ${palabra2} ${despues}`;
    }
function verResolucion() {
    let frase = prompt("Introduce la frase:");
    if (!frase) {
        document.getElementById("resultado").innerHTML = "No has introducido ninguna frase.";
        return;
    }

    let palabra1 = prompt("Introduce la primera palabra (donde insertar):");
    if (!palabra1) {
        document.getElementById("resultado").innerHTML = "No has introducido la primera palabra.";
        return;
    }

    let palabra2 = prompt("Introduce la segunda palabra (a insertar):");
    if (!palabra2) {
        document.getElementById("resultado").innerHTML = "No has introducido la segunda palabra.";
        return;
    }

    // Función que inserta palabra2 detrás de palabra1
   

    let resultado = insertarPalabra(frase, palabra1, palabra2);
    document.getElementById("resultado").innerHTML = resultado;
}