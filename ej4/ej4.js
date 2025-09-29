function verEnunciado(){
    let enunciadoAE = `Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una calificación numérica entre 0 y 10 (con decimales).
La aplicación mostrará en la parte destinada para tal efecto, su transformación en calificación alfabética según la siguiente tabla.`;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion(){
    let input = prompt("Introduce una calificación numérica entre 0 y 10 (con decimales):");

    if (input === null || input.trim() === "") {
        document.getElementById("resultado").innerHTML = "No se introdujo ninguna calificación.";
        return;
    }

    let calificacion = parseFloat(input);

    let calificacionAlfabetica;
    if (isNaN(calificacion)) {
        calificacionAlfabetica = "Calificación inválida. Debe ser un número.";
    } else if (calificacion >= 9 && calificacion <= 10) {
        calificacionAlfabetica = "Sobresaliente";
    } else if (calificacion >= 6 && calificacion < 9) {
        calificacionAlfabetica = "Notable";
    } else if (calificacion >= 5 && calificacion < 6) {
        calificacionAlfabetica = "Bien";
    } else if (calificacion >= 3 && calificacion < 5) {
        calificacionAlfabetica = "Insuficiente";
    } else if (calificacion >= 0 && calificacion < 3) {
        calificacionAlfabetica = "Muy deficiente";
    } else {
        calificacionAlfabetica = "Calificación inválida. Debe estar entre 0 y 10.";
    }

    document.getElementById("resultado").innerHTML = calificacionAlfabetica;
}
