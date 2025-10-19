function verEnunciado() {
    let enunciadoAE = `
    Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente (prompt), al usuario una frase.

    Crea una función que reciba como argumento esa frase y devuelva el número de espacios, dígitos y letras contenidos en la frase. Puedes usar expresiones regulares.

    Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

    Ejemplo:
    ENTRADA: Si, hoy es dia 10
    SALIDA: 2 dígitos, 4 espacios y 10 letras
    `;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion() {
    let frase = prompt("Introduce una frase:");

    if (!frase) {
        document.getElementById("resultado").innerHTML = "No has introducido ninguna frase.";
        return;
    }

    // Función que cuenta espacios, dígitos y letras usando expresiones regulares
    function contarElementos(cadena) {
        let espacios = (cadena.match(/ /g) || []).length; //usamos la g que es global para contar todas las coincidencias
        let digitos = (cadena.match(/\d/g) || []).length; // \d busca dígitos del 0 al 9 y la g es global para contar todas las coincidencias
        let letras = (cadena.match(/[a-zA-Z]/g) || []).length; // [a-zA-Z] busca letras mayúsculas y minúsculas, la g es global para contar todas las coincidencias

        return `${digitos} dígitos, ${espacios} espacios y ${letras} letras`;
    }

    // Mostramos el resultado
    document.getElementById("resultado").innerHTML = contarElementos(frase);
}
