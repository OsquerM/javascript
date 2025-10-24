function verEnunciado() {
    let enunciadoAE = `
    Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos cadenas. 
    Crea una función que sea capaz de encontrar los caracteres comunes entre dos palabras. 
    La función recibe como argumentos dos palabras o frases y devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor. 
    Se desechan los espacios en blanco. No se tiene en cuenta el caso (mayúsculas o minúsculas). 
    Ejemplo: Entrada: "Ciudad", "cuidar" → Salida: "acdiu"
    `;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}
function comunesRecursivo(cad1, cad2, resultado = "") {
        if (cad1.length === 0) 
            return resultado;

        let char = cad1[0];
        if (char !== " " && cad2.includes(char) && !resultado.includes(char)) {
            resultado += char;
        }
        //Comprueba que no sea un espacio, que el caracter esté en la segunda cadena y que no esté ya en el resultado
        return comunesRecursivo(cad1.slice(1), cad2, resultado);
    }
function verResolucion() {
    let cadena1 = prompt("Introduce la primera cadena:");
    if (!cadena1) {
        document.getElementById("resultado").innerHTML = "No has introducido la primera cadena.";
        return;
    }

    let cadena2 = prompt("Introduce la segunda cadena:");
    if (!cadena2) {
        document.getElementById("resultado").innerHTML = "No has introducido la segunda cadena.";
        return;
    }
    // Convertir ambas cadenas a minúsculas y eliminar espacios para que la recursión funcione
    let cad1 = cadena1.toLowerCase().replace(/\s/g, ""); // /\s/g elimina todos los espacios en blanco y la g es para que sea global es decir que afecte a toda la cadena
    let cad2 = cadena2.toLowerCase().replace(/\s/g, "");

    let resultado = comunesRecursivo(cad1, cad2).split("").sort().join("");
    //Utilizo el split para convertir la cadena en un array, luego uso sort para ordenar los caracteres alfabeticamente y finalmente uso join para volver a convertir el array en una cadena
    document.getElementById("resultado").innerHTML = `Caracteres comunes: ${resultado}`;
}