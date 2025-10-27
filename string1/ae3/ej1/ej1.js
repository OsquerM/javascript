function verEnunciado() {
    let enunciadoAE = `
    Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena de caracteres.
    Crea una función que reciba como argumento esa cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.
    Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

    Ejemplo:
    ENTRADA: Hola soy Pepe
    SALIDA: El número de vocales de la cadena es a:1, e:2, i:0, o:2, u:0
    `;

    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}
 function contarVocales(cadena) {
        cadena = cadena.toLowerCase();
        const vocales = ['a', 'e', 'i', 'o', 'u'];
        const contador = { a: 0, e: 0, i: 0, o: 0, u: 0 };

        for (let letra of cadena) {
            if (vocales.includes(letra)) { //includes comprueba si un elemento está en un array
                contador[letra]++;
            }
        }

        return `El número de vocales de la cadena es a:${contador.a}, e:${contador.e}, i:${contador.i}, o:${contador.o}, u:${contador.u}`;
    }
function verResolucion() {
    // Pedimos la cadena de caracteres
    let texto = prompt("Introduce una cadena de caracteres:");

    // Validamos que no esté vacía
    if (!texto) {
        document.getElementById("resultado").innerHTML = "No has introducido ninguna cadena.";
        return;
    }
   

    // Mostramos el resultado en pantalla
    document.getElementById("resultado").innerHTML = contarVocales(texto);
}
