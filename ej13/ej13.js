function verEnunciado(){
   
    let enunciadoAE = `Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una secuencia de números enteros.

    Adicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. Tras ello se leerán X números en las próximas X ventanas emergentes.

    La aplicación mostrará en la parte destinada para tal efecto, la línea en orden inverso.


    `;

  
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}


function verResolucion(){
        // Pedimos cuántos números se van a introducir
        let cantidad = prompt("¿Cuántos números vas a introducir? (entre 1 y 100)");
        cantidad = parseInt(cantidad);  
        // Validación de la cantidad
        if (isNaN(cantidad) || cantidad < 1 || cantidad > 100) {
            document.getElementById("resultado").innerHTML = "Cantidad inválida. Debe ser un número entre 1 y 100.";
            return;
        }
        let numeros = [];
        // Recorremos la cantidad de números que el usuario va a introducir
        for (let i = 0; i < cantidad; i++) {
            let entrada = prompt(`Introduce el número ${i + 1} de ${cantidad}:`);
            let numero = parseInt(entrada);
            if (isNaN(numero)) {
                document.getElementById("resultado").innerHTML = "Has introducido un valor no válido. Se cancela la operación.";
                return;
            }
            numeros.push(numero);
        }
        // Mostramos el resultado en orden inverso
        document.getElementById("resultado").innerHTML = 
            `Números en orden inverso: ${numeros.reverse().join(', ')}`;
}