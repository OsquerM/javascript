 function verEnunciado() {
            let enunciadoAE = `
            Realiza una aplicación web dónde se muestre un menú cuyas opciones sean las distintas operaciones a realizar sobre la cadena.
            La cadena es: "Consiste en lanzar aros"
            Las opciones van del 1 al 22 y cada número representa una operación específica sobre la cadena.
            `;
            document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
        }

        function verResolucion() {
            const cadena = "Consiste en lanzar    aros"; // 4 espacios entre "lanzar" y "aros"
            let opcion = prompt(
            `Elige una opción (1-22):
            1. Número total de caracteres
            2. Carácter en octava posición
            3. Código Unicode del primer carácter
            4. Concatena con "¿roto?... ¿o mejorado?"
            5. Comprueba si termina con "aro"
            6. Convierte Unicode 65 a carácter
            7. Comprueba si contiene "lanzar"
            8. Posición del primer "a"
            9. Posición del último "a"
            10. Compara con "Consiste en lanzar aros"
            11. Coincidencias con "ar"
            12. Repite 3 veces la cadena
            13. Reemplaza "lanzar" por "coger"
            14. Busca "ste"
            15. Primeros 5 caracteres
            16. Array de palabras
            17. Comprueba si empieza con "Consiste en"
            18. 7 caracteres desde el segundo
            19. Todos los caracteres desde el cuarto
            20. Convertir a mayúsculas
            21. Convertir a minúsculas
            22. Dejar un único espacio entre palabras`
                        );

            let resultado;

            switch(opcion) {
                case "1":
                    resultado = `Número total de caracteres (incluyendo espacios): ${cadena.length}`;
                    break;
                case "2":
                    resultado = `Carácter en octava posición: '${cadena.charAt(7)}'`;
                    break;
                case "3":
                    resultado = `Código Unicode del primer carácter: ${cadena.charCodeAt(0)}`;
                    break;
                case "4":
                    let nueva = cadena.concat(" ¿roto?... ¿o mejorado?");
                    resultado = `Cadena concatenada: "${nueva}"\n¿Se modifica la original? No, la original sigue siendo: "${cadena}"`;
                    break;
                case "5":
                    resultado = `¿Termina con "aro"? ${cadena.endsWith("aro")}`; //verifica si la cadena termina con "aro"
                    break;
                case "6":
                    resultado = `Carácter Unicode 65: '${String.fromCharCode(65)}'`; //Convierte el código Unicode 65 a carácter
                    break;
                case "7":
                    resultado = `¿Contiene "lanzar"? ${cadena.includes("lanzar")}`;
                    break;
                case "8":
                    resultado = `Posición del primer "a": ${cadena.indexOf("a")}`; //Encuentra la posición del primer "a"
                    break;
                case "9":
                    resultado = `Posición del último "a": ${cadena.lastIndexOf("a")}`;
                    break;
                case "10":
                    let comp = cadena.localeCompare("Consiste en lanzar aros");
                    let mensaje = comp < 0 ? "la cadena original va antes" :
                                  comp > 0 ? "la cadena original va después" : "son iguales";
                    resultado = `Comparación: ${mensaje}`;
                    break;
                case "11":
                    // Buscar coincidencias de "ar" sin usar regex
                    let pos = 0, 
                    coincidencias = [];
                    while 
                    ((pos = cadena.indexOf("ar", pos)) !== -1) {
                        coincidencias.push(pos);
                        pos += 1;
                    }
                    resultado = `Posiciones de "ar" en la cadena: ${coincidencias.join(", ")}`;
                    break;
                case "12":
                    resultado = `Cadena repetida 3 veces: ${cadena.repeat(3)}`;
                    break;
                case "13":
                    resultado = `Cadena con "lanzar" reemplazado por "coger": ${cadena.replace("lanzar","coger")}`;
                    break;
                case "14":
                    resultado = `Posición de "ste": ${cadena.indexOf("ste")}`;
                    break;
                case "15":
                    resultado = `Primeros 5 caracteres: '${cadena.slice(0,5)}'`;
                    break;
                case "16":
                    // Sin usar split, recorremos manualmente
                    let palabras = [],
                    palabra = "";
                    for(let i=0;i<cadena.length;i++){
                        if(cadena.charAt(i)!=" "){
                            palabra += cadena.charAt(i);
                        } else if(palabra.length>0){
                            palabras.push(palabra);
                            palabra = "";
                        }
                    }
                    if(palabra.length>0) palabras.push(palabra);
                    resultado = `Palabras de la cadena: ${palabras.join(", ")}`;
                    break;
                case "17":
                    resultado = `¿Empieza con "Consiste en"? ${cadena.startsWith("Consiste en")}`;
                    break;
                case "18":
                    resultado = `7 caracteres desde el segundo: '${cadena.substr(1,7)}'`;
                    break;
                case "19":
                    resultado = `Todos los caracteres desde el cuarto: '${cadena.slice(3)}'`;
                    break;
                case "20":
                    resultado = `Cadena en mayúsculas: '${cadena.toUpperCase()}'`;
                    break;
                case "21":
                    resultado = `Cadena en minúsculas: '${cadena.toLowerCase()}'`;
                    break;
                case "22":
                    let mod = "",
                     ultima="";
                    for(let i=0;i<cadena.length;i++){
                        if(cadena.charAt(i)!=" " || ultima!=" "){
                            mod += cadena.charAt(i);
                        }
                        ultima = cadena.charAt(i);
                    }
                    resultado = `Cadena original: "${cadena}"\nCadena modificada: "${mod}"`;
                    break;
                default:
                    resultado = "Error: opción no válida.";
            }

            document.getElementById("resultado").innerHTML = resultado;
        }