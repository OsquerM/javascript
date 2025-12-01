// Función para determinar si un año es bisiesto
        function esBisiesto(anio) {
            return (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0));
            // Un año es bisiesto si es divisible por 4,
            // pero no por 100, a menos que también sea divisible por 400
        }

        // Función para obtener los días del mes de una fecha
        function obtenerDiasDelMes(fechaStr) {
            const fecha = new Date(fechaStr);

            // Validar que la fecha sea válida
            if (isNaN(fecha)) {
                return "Formato de fecha incorrecto. Use YYYY-MM-DD";
            }

            const anio = fecha.getFullYear();
            const mes = fecha.getMonth() + 1; // getMonth() devuelve 0-11 por eso hacemos el +1, si no, sería 0 para enero, 1 para febrero, etc.


            switch(mes) {
                case 1: 
                    return "Enero tiene 31 días.";
                case 2: 
                    return esBisiesto(anio) ? "Febrero tiene 29 días (año bisiesto)." : "Febrero tiene 28 días.";
                case 3: 
                    return "Marzo tiene 31 días.";
                case 4: 
                    return "Abril tiene 30 días.";
                case 5: 
                    return "Mayo tiene 31 días.";
                case 6: 
                    return "Junio tiene 30 días.";
                case 7: 
                    return "Julio tiene 31 días.";
                case 8: 
                    return "Agosto tiene 31 días.";
                case 9: 
                    return "Septiembre tiene 30 días.";
                case 10: 
                    return "Octubre tiene 31 días.";
                case 11: 
                    return "Noviembre tiene 30 días.";
                case 12: 
                    return "Diciembre tiene 31 días.";
                default: 
                    return "Mes inválido";
            }
        }

// Solicitar fecha al usuario
const fechaUsuario = prompt("Ingrese una fecha (YYYY-MM-DD) :");
const resultado = obtenerDiasDelMes(fechaUsuario);

 // Mostrar el resultado en la página
document.getElementById("resultado").textContent = resultado;