function verEnunciado(){
   
    let enunciadoAE = `El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores así:

    n x (n-1) x (n-2) x ... x 1
    Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120.

    Con estos datos, realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número. La aplicación mostrará en la parte destinada para tal efecto, su factorial.

    Dado que solo se puede calcular el factorial de un número natural, si se introduce un número negativo mostrar un mensaje de error y volver a pedir el número al usuario.



    `;

  
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}


function verResolucion(){
    let num;
    let verificado = true;
    while (verificado) {
        num = prompt("Introduce un número natural para calcular su factorial:");

        if (num === null) {
            alert("Operación cancelada.");
            return;
        }

        num = num.trim();

        if (!/^\d+$/.test(num)) {
            alert("Número no válido. Debe ser un número natural (0 o positivo).");
            continue;
        }

        num = parseInt(num, 10);

        if (num < 0) {
            alert("Número negativo. Por favor introduce un número natural.");
            continue;
        }

        verificado = false;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    alert(`El factorial de ${num} es ${factorial}`);

    const resultadoElem = document.getElementById("resultadoFactorial");
    if (resultadoElem) {
        resultadoElem.innerHTML = `El factorial de ${num} es ${factorial}`;
    }
}
