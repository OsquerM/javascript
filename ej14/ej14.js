function verEnunciado(){
   
    let enunciadoAE = `El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras. El array de letras es:

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.

    Con estos datos, realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número de DNI y la letra del DNI. La aplicación debe:

    Comprobar si el número tiene ocho dígitos. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa vuelve a solicitar los datos mencionados
    Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente
    Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta y se le pide de nuevo que introduzca los datos volviendo al punto 1.

    La aplicación mostrará en la parte destinada para tal efecto, un mensaje indicando que el número y la letra de DNI son correctos y el DNI introducido.

`;

  
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}


function verResolucion(){
      const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      let numero, letraUsuario, letraCalculada, resto;
      let verificado = true;
      while (verificado) {
          numero = prompt("Introduce el número de DNI (8 dígitos):");
           if (!/^\d{8}$/.test(numero)) { 
            alert("Número de DNI no válido. Debe tener 8 dígitos.");
            continue;
            }
            letraUsuario = prompt("Introduce la letra del DNI:").toUpperCase();
            resto = parseInt(numero) % 23; // Calcula el resto de la división entre el número y 23
            letraCalculada = letras[resto];
            if (letraUsuario !== letraCalculada) {
                alert("La letra del DNI no es correcta. Debe ser " + letraCalculada);
                continue;
            }
            verificado = false;
      }
      alert("DNI y letra correctos: " + numero + " " + letraCalculada);

        document.getElementById("resolucionAE").innerHTML = "DNI y letra correctos: " + numero + " " + letraCalculada;
}

// NO FUNCIONA