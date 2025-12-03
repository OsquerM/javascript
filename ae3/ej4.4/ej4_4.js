function obtenerSemanaISO(fechaStr) {
    // Convertimos la cadena ingresada por el usuario a un objeto Date 
    const fecha = new Date(fechaStr);

    // Comprobamos si la fecha es válida
    if (isNaN(fecha)) {
        return "Fecha inválida. Use el formato YYYY/MM/DD";
    }

    // Creamos un objeto Date en UTC para evitar problemas de zona horaria
    // Esto pone la fecha a medianoche en tiempo UTC
    const fechaUTC = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));

    // Calcular el jueves de la semana
    // +3 - (...) mueve cualquier día al jueves de esa semana
    // En esta numeración, jueves siempre es 3, por eso usamos +3
    fechaUTC.setUTCDate(fechaUTC.getUTCDate() + 3 - ((fechaUTC.getUTCDay() + 6) % 7));
    //((fechaUTC.getUTCDay() + 6) % 7)) cambia la numeracion del día de la semana para que lunes sea 0
    // Primer jueves del año 
    // Según ISO, la semana 1 es la que contiene el primer jueves del año
    const primerJueves = new Date(Date.UTC(fechaUTC.getUTCFullYear(), 0, 4));

    //Diferencia en milisegundos entre el jueves actual y el primer jueves del año 
    const diferencia = fechaUTC - primerJueves;

    //Calcular número de semana ISO
    // Dividimos entre el número de milisegundos en una semana
    // Sumamos 1 porque la primera semana es la semana 1
    //7 días * 24 horas * 60 minutos * 60 segundos * 1000 milisegundos
    const semana = 1 + Math.floor(diferencia / (7 * 24 * 60 * 60 * 1000));

    // Devolvemos el número de semana
    return semana;
}

const fechaUsuario = prompt("Ingrese una fecha (YYYY/MM/DD):");
const semana = obtenerSemanaISO(fechaUsuario);

if (semana === "Fecha inválida. Use el formato YYYY/MM/DD") {
    document.getElementById("resultado").textContent = semana;
} else {
    document.getElementById("resultado").textContent =
        `La fecha ${fechaUsuario} corresponde a la semana número ${semana} del año.`;
}

//El UTC se utiliza para evitar problemas de zona horaria al calcular la semana ISO.
// Llamamos a las variables const para que no puedan ser reasignadas.
