// Función que genera una combinación aleatoria de 6 números del 1 al 49
function generarCombinacion() {
    let numeros = [];
    while (numeros.length < 6) {
        let num = Math.floor(Math.random() * 49) + 1;
        if (!numeros.includes(num)) numeros.push(num);
    }
    return numeros.sort((a,b) => a-b);
}

// Función principal que genera los boletos y los muestra en HTML
function verResolucion() {
    let numCombinaciones;

    // Pedir número de combinaciones y validar
    while (true) {
        numCombinaciones = parseInt(prompt("Introduce un número de combinaciones (1-8):"));

        if (numCombinaciones === null) {
            alert("Operación cancelada.");
            return;
        }

        if (isNaN(numCombinaciones)) {
            alert("No has introducido un número válido. Intenta de nuevo.");
        } else if (numCombinaciones < 1 || numCombinaciones > 8) {
            alert("Número fuera de rango. Debe ser entre 1 y 8.");
        } else {
            break; // Número válido
        }
    }

    let resultadoHTML = "";

    for (let i = 0; i < numCombinaciones; i++) {
        let combinacion = generarCombinacion();
        let reintegro = Math.floor(Math.random() * 10) + 1;

        // Crear la rejilla de 1 a 49
        let rejillaHtml = '<div class="rejilla">';
        for (let num = 1; num <= 49; num++) {
            if (combinacion.includes(num)) {
                rejillaHtml += `<div class="numero seleccionado">${num}</div>`;
            } else {
                rejillaHtml += `<div class="numero">${num}</div>`;
            }
        }
        rejillaHtml += '</div>';

        resultadoHTML += `<div class="boleto"><h3>Combinación ${i+1}</h3>${rejillaHtml}<div class="reintegro">Reintegro: ${reintegro}</div></div>`;
    }

    // Mostrar resultado en la página
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerHTML = resultadoHTML;
    } else {
        alert("No se encontró el div con id 'resultado' en el HTML.");
    }
}
