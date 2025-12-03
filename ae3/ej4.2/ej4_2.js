function calcularDiferencia(fecha1Str, fecha2Str) {
    // Convertir las cadenas a objetos Date
    const fecha1 = new Date(fecha1Str);
    const fecha2 = new Date(fecha2Str);


    if (isNaN(fecha1) || isNaN(fecha2)) {
        return "Formato de fecha incorrecto. Use YYYY/MM/DD HH:MM:SS";
    }

    // Calcular la diferencia absoluta en milisegundos
    // Math.abs para evitar resultados negativos, convierte cualquier valor a positivo
    const diffMs = Math.abs(fecha2 - fecha1);

    // Convertir a días, horas y minutos
    //1000 milisegundos * 60 segundos * 60 minutos * 24 horas
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24)); //Calcular los días completos
    const diffHoras = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //Calcular las horas restantes, usamos el módulo para obtener el resto después de quitar los días completos
    const diffMinutos = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)); //Calcular los minutos restantes
    return `Entre ambas fechas han transcurrido ${diffDias} días, ${diffHoras} horas y ${diffMinutos} minutos.`;
    // Hacemos modulo para obtener el resto después de quitar los días completos y las horas completas para convertirlo a ms para calcular los minutos restantes
}

// Solicitar fechas al usuario
const fecha1 = prompt("Ingrese la primera fecha y hora (YYYY/MM/DD HH:MM:SS):");
const fecha2 = prompt("Ingrese la segunda fecha y hora (YYYY/MM/DD HH:MM:SS):");

// Calcular la diferencia
const resultado = calcularDiferencia(fecha1, fecha2);

// Mostrar el resultado en la página
document.getElementById("resultado").textContent = resultado;
