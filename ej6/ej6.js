function verEnunciado(){
    let enunciadoAE = ` Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número N. La aplicación mostrará en la parte destinada para tal efecto, todos los pares desde 2 hasta N (inclusive), con las siguientes condiciones:

    Cada número se mostrará en una línea distinta.
    Controlar que N siempre será mayor o igual a 2. En caso contrario, mostrar advertencia y volver a solicitar N.

`;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion(){
    let numInput = prompt("Introduce un número (mayor o igual a 2):");
    if (numInput === null || numInput.trim() === "") {
        document.getElementById("resultado").innerHTML = "No se introdujo ninguna entrada.";
        return;
    }
    let num = parseInt(numInput);
    if (isNaN(num) || num < 2) {
        document.getElementById("resultado").innerHTML = "Entrada inválida. El número debe ser mayor o igual a 2.";
        return;
    }
    let resultado = "Números pares desde 2 hasta " + num + ":<br>";
    for (let i = 2; i <= num; i += 2) {
        resultado += i + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}
