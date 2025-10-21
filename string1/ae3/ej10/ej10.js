  function verEnunciado() {
            let enunciadoAE = `
            Realiza una aplicación web dónde se muestren dos botones:<br>
            - Encriptar mensaje<br>
            - Desencriptar mensaje<br><br>
            Una vez pulsado el botón la aplicación solicitará al usuario un mensaje y una clave numérica.<br>
            La aplicación empleará el alfabeto Unicode para codificar o decodificar el mensaje, dependiendo del botón clicado, 
            desplazando cada carácter un número de veces igual al número que corresponda en la clave.<br><br>
            Ejemplo:<br>
            Mensaje: Este es el mensaje<br>
            Clave: 12345<br>
            Mensaje cifrado: Fuwi%fu#iqlohrxblh
            `;
            document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
        }

        function verResolucion() {
            let accion = prompt("¿Qué deseas hacer? (escribe 'encriptar' o 'desencriptar'):");
            if (!accion) return;

            accion = accion.toLowerCase();
            if (accion !== "encriptar" && accion !== "desencriptar") {
                document.getElementById("resultado").innerHTML = "Debes escribir 'encriptar' o 'desencriptar'.";
                return;
            }

            let mensaje = prompt("Introduce el mensaje:");
            if (!mensaje) {
                document.getElementById("resultado").innerHTML = "No has introducido ningún mensaje.";
                return;
            }

            let clave = prompt("Introduce la clave numérica: ");
            if (!clave || isNaN(clave)) {
                document.getElementById("resultado").innerHTML = "Debes introducir una clave numérica válida.";
                return;
            }

            let resultadoTexto = "";
            let longitudClave = clave.length;

            for (let i = 0; i < mensaje.length; i++) {
                let codigo = mensaje.charCodeAt(i);
                let desplazamiento = parseInt(clave[i % longitudClave]);

                if (accion === "encriptar") {
                    codigo += desplazamiento;
                } else {
                    codigo -= desplazamiento;
                }

                resultadoTexto += String.fromCharCode(codigo);
            }

            document.getElementById("resultado").innerHTML =
                (accion === "encriptar" ? "Mensaje cifrado: " : "Mensaje descifrado: ") + resultadoTexto;
        }