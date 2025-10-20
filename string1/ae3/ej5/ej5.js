function verEnunciado() {
    let enunciadoAE = `
    Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un código de cliente. 
    Dicho código contiene tres partes separadas por un guión:
    - Dos caracteres: CP: cliente particular, CE: empresa
    - Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 Internacional
    - Una cifra que indica el número de años de antigüedad del cliente
    Crea una función que decodifique dicho código de cliente. Adicionalmente, si el código es erróneo la función deberá informar del tipo de error o errores.
    Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.
    `;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}
 function decodificarCodigo(codigo) {
        let errores = [];
        let partes = codigo.split("-");

        if (partes.length !== 3) {
            errores.push("<strong>Error:</strong> Introduce el codigo separado por guiones");
            return errores.join("<br>");
        }

        let tipoCliente = partes[0];
        let zona = partes[1];
        let antiguedad = partes[2];

        // Validar tipo de cliente
        if (tipoCliente !== "CP" && tipoCliente !== "CE") {
            errores.push(`<strong>Error:</strong> El tipo de cliente introducido no es correcto`);
        }

        // Validar zona
        const zonasValidas = { "10": "Local", "11": "Autonómico", "12": "Nacional", "20": "Internacional" };
        if (!zonasValidas[zona]) {
            errores.push(`<strong>Error:</strong> Código de zona incorrecto: "${zona}". Debe ser 10, 11, 12 o 20.`);
        }

        // Validar antigüedad
        if (!/^\d$/.test(antiguedad)) {
            errores.push(`<strong>Error:</strong> Antigüedad incorrecta: "${antiguedad}". Debe ser un solo dígito.`);
        }

        if (errores.length > 0) {
            return errores.join("<br>");
        }

        // Construir mensaje decodificado
        let mensaje = `El código introducido pertenece a un cliente ${tipoCliente === "CP" ? "particular" : "empresa"} de origen ${zonasValidas[zona]} con ${antiguedad} años de antigüedad.`;
        return mensaje;
    }

function verResolucion() {
    let codigo = prompt("Introduce el código de cliente");

    if (!codigo) {
        document.getElementById("resultado").innerHTML = "<strong>Error:</strong>No has introducido ningún código.";
        return;
    }

    // Función que decodifica el código y valida errores
   
    let resultado = decodificarCodigo(codigo);
    document.getElementById("resultado").innerHTML = resultado;
}