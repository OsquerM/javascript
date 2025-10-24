 function verEnunciado() {
            let enunciadoAE = `
            Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase o palabra. 
            Crea una función que reciba dicha frase o palabra, como resultado la función determinará si es o no un palíndromo. 
            Un palíndromo es una palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; 
            por ejemplo: "anilina", "dábale arroz a la zorra el abad".
            Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.
            `;
            document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
        }

function verResolucion() {
    let frase = prompt("Introduce una palabra o frase:");
    if (!frase) {
        document.getElementById("resultado").innerHTML = "No has introducido ninguna frase o palabra.";
        return;
    }

    // Pasamos a minúsculas
    let textoLimpio = frase.toLowerCase();

    // Quitamos tildes 
    textoLimpio = textoLimpio
        .replace(/á/g, "a")
        .replace(/é/g, "e")
        .replace(/í/g, "i")
        .replace(/ó/g, "o")
        .replace(/ú/g, "u");

    // Quitamos espacios y signos
    textoLimpio = textoLimpio.replace(/\s/g, ""); // Elimina espacios en blanco


    // Invertimos el texto
    let textoInvertido = textoLimpio.split("").reverse().join("");

    // Comparamos
    if (textoLimpio === textoInvertido) {
        document.getElementById("resultado").innerHTML = `"${frase}" es un palíndromo`;
    } else {
        document.getElementById("resultado").innerHTML = `"${frase}" no es un palíndromo`;
    }
}