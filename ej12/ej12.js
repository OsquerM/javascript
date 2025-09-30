function verEnunciado(){
   
    let enunciadoAE = `Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una secuencia de números enteros.

    Adicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. Tras ello se leerán X números en las próximas X ventanas emergentes.

    La aplicación mostrará en la parte destinada para tal efecto, el número más alto y el más bajo, cada uno en una línea distinta.

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

            let maximo;
            let minimo;

            // Recorremos la cantidad de números que el usuario va a introducir
            for (let i = 0; i < cantidad; i++) {
                let entrada = prompt(`Introduce el número ${i + 1} de ${cantidad}:`);
                let numero = parseInt(entrada);

                if (isNaN(numero)) {
                    document.getElementById("resultado").innerHTML = "Has introducido un valor no válido. Se cancela la operación.";
                    return;
                }

                // En la primera vuelta, inicializamos maximo y minimo
                if (i === 0) {
                    maximo = numero;
                    minimo = numero;
                } else {
                    if (numero > maximo) maximo = numero; // Actualizamos el máximo si es necesario
                    if (numero < minimo) minimo = numero; // Actualizamos el mínimo si es necesario
                }
            }

            // Mostramos el resultado
            document.getElementById("resultado").innerHTML = 
                `Número más alto: ${maximo}<br>Número más bajo: ${minimo}`;
        }