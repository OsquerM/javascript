// Cuando el usuario haga click en el botón "Generar", se ejecuta la función generarBoletos
document.getElementById("generar").addEventListener("click", generarBoletos);

function generarBoletos() {
    // Opciones posibles para cada partido: 1 = local gana, X = empate, 2 = visitante gana
    const opcionesPartido = ["1", "X", "2"];
    // Opciones posibles para Pleno al 15: 0,1,2 o M (3 o más goles)
    const opcionesPleno = ["0", "1", "2", "M"];
    // Lista de equipos
    const equipos = [
        "Real Madrid","Barcelona","Atlético","Sevilla","Valencia",
        "Villarreal","Real Sociedad","Athletic","Betis","Celta",
        "Espanyol","Granada","Osasuna","Mallorca","Rayo Vallecano",
        "Alavés","Getafe","Levante","Elche","Huesca"
    ];

    // Leemos el número de boletos que quiere generar el usuario
    let numeroCombinaciones = parseInt(document.getElementById("numComb").value);

    // Validamos que sea un número entre 1 y 8
    if (isNaN(numeroCombinaciones) || numeroCombinaciones < 1 || numeroCombinaciones > 8) {
        numeroCombinaciones = 1;
        document.getElementById("numComb").value = 1;
    }

    // Seleccionamos el contenedor donde se mostrarán los boletos
    const contenedorBoletos = document.getElementById("boletos-contenedor");
    // Limpiamos cualquier boleto anterior
    contenedorBoletos.innerHTML = "";

    // Bucle que genera cada boleto
    for (let numeroBoleto = 1; numeroBoleto <= numeroCombinaciones; numeroBoleto++) {

        // Creamos el contenido del boleto usando una tabla para los 14 partidos
        let boletoHTML = `<h2>Boleto ${numeroBoleto}</h2>
        <table>
            <tr><th>#</th><th>Local vs Visitante</th><th>1</th><th>X</th><th>2</th></tr>`;

        // Bucle para generar los 14 partidos del boleto
        for (let partidoNum = 1; partidoNum <= 14; partidoNum++) {

            // Elegimos un equipo local aleatorio
            let equipoLocal = equipos[Math.floor(Math.random() * equipos.length)];
            // Elegimos un equipo visitante aleatorio
            let equipoVisitante = equipos[Math.floor(Math.random() * equipos.length)];

            // Asegurarnos de que el visitante no sea el mismo que el local
            while (equipoVisitante === equipoLocal) {
                equipoVisitante = equipos[Math.floor(Math.random() * equipos.length)];
            }

            // Elegimos un resultado aleatorio para el partido: 1, X o 2
            let resultadoPartido = opcionesPartido[Math.floor(Math.random() * opcionesPartido.length)];

            // Añadimos una fila a la tabla del boleto
            // Solo se marca ✓ en la columna correspondiente al resultado
            boletoHTML += `<tr>
                <td>${partidoNum}</td>
                <td>${equipoLocal} vs ${equipoVisitante}</td>
                <td>${resultadoPartido === "1" ? "✓" : ""}</td>
                <td>${resultadoPartido === "X" ? "✓" : ""}</td>
                <td>${resultadoPartido === "2" ? "✓" : ""}</td>
            </tr>`;
        }

        boletoHTML += `</table>`; // Cerramos la tabla de partidos

        // Generamos el Pleno al 15 (dos equipos distintos)
        let equipoPleno1 = equipos[Math.floor(Math.random() * equipos.length)];
        let equipoPleno2;
        do {
            equipoPleno2 = equipos[Math.floor(Math.random() * equipos.length)];
        } while (equipoPleno2 === equipoPleno1);

        // Elegimos un resultado aleatorio para cada equipo del pleno
        let resultadoPleno1 = opcionesPleno[Math.floor(Math.random() * opcionesPleno.length)];
        let resultadoPleno2 = opcionesPleno[Math.floor(Math.random() * opcionesPleno.length)];

        // Añadimos el bloque Pleno al 15 al boleto
        boletoHTML += `<div class="pleno">
            <h3>Pleno al 15</h3>
            <p>${equipoPleno1} → ${resultadoPleno1}</p>
            <p>${equipoPleno2} → ${resultadoPleno2}</p>
        </div>`;

        // Insertamos el boleto completo dentro de un div con clase "boleto"
        contenedorBoletos.innerHTML += `<div class="boleto">${boletoHTML}</div>`;
    }
}
