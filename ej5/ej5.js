function verEnunciado(){
    let enunciadoAE = ` Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario el número de horas trabajadas y el precio por hora.

La aplicación mostrará en la parte destinada para tal efecto, el salario neto semanal de un trabajador en función del número de horas trabajadas y la tasa de impuestos de acuerdo a las siguientes reglas:

Las primeras 35 horas se pagan a tarifa normal.
Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal.

Al sueldo bruto se le aplicarán las siguientes tasas de impuestos:

Los primeros 500 euros son libres de impuestos.
Los siguientes 400 tienen un 25% de impuestos.
Los restantes un 45% de impuestos.
`;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion(){
    let horasTrabajadasInput = prompt("Introduce el número de horas trabajadas en la semana:");
    let precioPorHoraInput = prompt("Introduce el precio por hora:");
    if (horasTrabajadasInput === null || horasTrabajadasInput.trim() === "" || precioPorHoraInput === null || precioPorHoraInput.trim() === "") {
        document.getElementById("resultado").innerHTML = "No se introdujo alguna de las entradas necesarias.";
        return;
    }
    let horasTrabajadas = parseFloat(horasTrabajadasInput);
    let precioPorHora = parseFloat(precioPorHoraInput);
    if (isNaN(horasTrabajadas) || isNaN(precioPorHora) || horasTrabajadas < 0 || precioPorHora < 0) {
        document.getElementById("resultado").innerHTML = "Entradas inválidas. Deben ser números positivos.";
        return;
    }
    let salarioBruto;
    if (horasTrabajadas <= 35) {
        salarioBruto = horasTrabajadas * precioPorHora;
    } else {
        salarioBruto = (35 * precioPorHora) + ((horasTrabajadas - 35) * precioPorHora * 1.5);
    }
    let salarioNeto;
    if (salarioBruto <= 500) {
        salarioNeto = salarioBruto;
    } else if (salarioBruto <= 900) {
        salarioNeto = 500 + (salarioBruto - 500) * 0.75;
    } else {
        salarioNeto = 500 + 400 * 0.75 + (salarioBruto - 900) * 0.55;
    }
    document.getElementById("resultado").innerHTML = "El salario neto es: " + salarioNeto.toFixed(2) + " euros.";
}
