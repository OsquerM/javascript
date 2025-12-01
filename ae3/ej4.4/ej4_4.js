function obtenerSemanaISO(fechaStr) {
    // Convertimos la cadena ingresada por el usuario a un objeto Date 
    const fecha = new Date(fechaStr);

    // Comprobamos si la fecha es válida
    if (isNaN(fecha)) {
        return "Fecha inválida. Use el formato YYYY/MM/DD";
    }

    // Creamos un objeto Date en UTC para evitar problemas de zona horaria
    // Esto pone la fecha a medianoche en tiempo UTC
    const date = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));

    // Calcular el jueves de la semana
    // getUTCDay() devuelve 0=domingo, 1=lunes, ..., 6=sábado
    // (getUTCDay() + 6) % 7 convierte la numeración para que lunes=0, martes=1, ..., domingo=6
    // +3 - (...) mueve cualquier día al jueves de esa semana
    // En esta numeración, jueves siempre es 3, por eso usamos +3
    date.setUTCDate(date.getUTCDate() + 3 - ((date.getUTCDay() + 6) % 7));

    // Primer jueves del año 
    // Según ISO, la semana 1 es la que contiene el primer jueves del año
    const primerJueves = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));

    //Diferencia en milisegundos entre el jueves actual y el primer jueves del año 
    const diferencia = date - primerJueves;

    //Calcular número de semana ISO
    // Dividimos entre el número de milisegundos en una semana
    // Sumamos 1 porque la primera semana es la semana 1
    const semana = 1 + Math.round(diferencia / (7 * 24 * 60 * 60 * 1000));

    // Devolvemos el número de semana
    return semana;
}


const fechaUsuario = prompt("Ingrese una fecha (YYYY/MM/DD):");

// Llamamos a la función para obtener la semana ISO
const resultado = `La fecha ${fechaUsuario} corresponde a la semana número ${obtenerSemanaISO(fechaUsuario)} del año.`;

// Mostramos el resultado en el elemento HTML con id="resultado"
document.getElementById("resultado").textContent = resultado;
