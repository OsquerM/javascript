function verEnunciado(){
    let enunciadoAE = `  Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos números X e Y.
La aplicación mostrará en la parte destinada para tal efecto, la tabla de multiplicar del número X, hasta el valor Y, controlando las siguientes condiciones:

-50 <= X <= 50
1 <= Y <= 20

La tabla se mostrará con una entrada por línea y entre cada elemento habrá un único espacio de separación.

`;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion(){
    let num1 = prompt("Introduce un número X (entre -50 y 50):");
    let num2 = prompt("Introduce un número Y (entre 1 y 20):");
    if (num1 === null || num1.trim() === "" || num2 === null || num2.trim() === "") {
        document.getElementById("resultado").innerHTML = "No se introdujo ninguna entrada.";
        return;
    }
    let x = parseInt(num1);
    let y = parseInt(num2);
    if (isNaN(x) || isNaN(y) || x < -50 || x > 50 || y < 1 || y > 20) {
        document.getElementById("resultado").innerHTML = "Entrada inválida. Asegúrate de que X esté entre -50 y 50";
        return;
    }
    let resultado = "Tabla de multiplicar de " + x + " hasta " + y + ":<br>";
    for (let i = 1; i <= y; i++) {
        resultado += x + " x " + i + " = " + (x * i) + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}
