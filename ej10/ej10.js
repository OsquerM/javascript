function verEnunciado(){
    let enunciadoAE = `Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número. La aplicación mostrará en la parte destinada para tal efecto, "SI", si el número es primo, "NO" en caso contrario.

    El número puede tomar los valores 1 <= número <= 10000, en caso contrario, volver a solicitar el número.

    Recuerda que un número primo es aquel que solo es divisible por sí mismo y por la unidad y que por convención el número 1 no se considera primo. La definición de primo la tienes en https://es.wikipedia.org/wiki/N%C3%BAmero_primo.

    Utiliza una forma optimizada para reducir el número de operaciones.

`;
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion(){
    let num = prompt("Introduce un número (entre 1 y 10000):");
    if (num === null || num.trim() === "") {
        document.getElementById("resultado").innerHTML = "No se introdujo ninguna entrada.";
        return;
    }
    let n = parseInt(num);
    if (isNaN(n) || n < 1 || n > 10000) {
        document.getElementById("resultado").innerHTML = "Entrada inválida. Asegúrate de que el número esté entre 1 y 10000.";
        return;
    }
    if (n === 1) {
        document.getElementById("resultado").innerHTML = "NO";
        return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { // Recorre desde 2 hasta la raíz cuadrada de n 
        if (n % i === 0) {
            document.getElementById("resultado").innerHTML = "NO";
            return;
        }
    }
    document.getElementById("resultado").innerHTML = "SI";
    
}
