function verEnunciado() {
    let enunciadoAE = `
    Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena y el carácter buscado. 
    Crea una función recursiva que cuente el número de veces que el carácter introducido por el usuario aparece en la cadena introducida por el usuario. 
    Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.
    `;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}
function contarCaracterRecursivo(cadena, caracter) {
        if (cadena.length === 0) 
            return 0; // caso base
        return (cadena[0] === caracter ? 1 : 0) + contarCaracterRecursivo(cadena.slice(1), caracter);
    }
//Por cada caracter que contemos lo compara con el siguiente y vuelve a llamarlo recursivamente pero esta vez comparando ya el 2 caracter con el tercero
function verResolucion() {
    let cadena = prompt("Introduce una cadena:");

    if (!cadena) {
        document.getElementById("resultado").innerHTML = "No has introducido ninguna cadena.";
        return;
    }

    let caracter = prompt("Introduce el carácter a buscar:");
    while (!caracter || caracter.length !== 1) {
        caracter = prompt("Por favor, introduce un solo carácter:");
    }


    
    let contador = contarCaracterRecursivo(cadena, caracter);

    document.getElementById("resultado").innerHTML = `El carácter "${caracter}" aparece ${contador} veces en la cadena.`;
}