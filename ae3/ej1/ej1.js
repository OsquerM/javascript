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
    // Pedir número de combinaciones
    let numCombinaciones;
    do {
        numCombinaciones = parseInt(prompt("Introduce un número de combinaciones (1-8):"));
        if (numCombinaciones === null) return alert("Operación cancelada.");
    } while (isNaN(numCombinaciones) || numCombinaciones < 1 || numCombinaciones > 8);

    let resultadoHtml = "";

    for (let i = 0; i < numCombinaciones; i++) {
        let combinacion = generarCombinacion();
        let reintegro = Math.floor(Math.random() * 10) + 1;

        // Crear la rejilla de 1 a 49
        let rejillaHtml = '<div class="rejilla">';
        for (let num = 1; num <= 49; num++) {
            if (combinacion.includes(num)) {
                rejillaHtml += `<div class="numero seleccionado">${num}</div>`;
            } else {
                rejillaHtml += `<div class="numero">${n}</div>`;
            }
        }
        rejillaHtml += '</div>';

        resultadoHtml += `<div class="boleto"><h3>Combinación ${i+1}</h3>${rejillaHtml}<div class="reintegro">Reintegro: ${reintegro}</div></div>`;
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
