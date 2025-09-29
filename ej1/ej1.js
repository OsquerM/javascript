//  Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario tres números. Si al menos uno de los valores ingresados es mayor a 10, mostrar en la parte destinada para tal efecto de la aplicación web "ALGUNO MAYOR QUE 10". En caso contrario mostrar "NINGUNO MAYOR QUE 10". (La doble comilla ha de aparecer también).
function verEnunciado(){

    let enunciadoAE = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario tres números. Si al menos uno de los valores ingresados es mayor a 10, mostrar en la parte destinada para tal efecto de la aplicación web \"ALGUNO MAYOR QUE 10\". En caso contrario mostrar \"NINGUNO MAYOR QUE 10\". (La doble comilla ha de aparecer también)."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));

    if (num1 > 10 || num2 > 10 || num3 > 10) {
        document.getElementById("resultado").innerHTML = "ALGUNO MAYOR QUE 10";
    } else {
        document.getElementById("resultado").innerHTML = "NINGUNO MAYOR QUE 10";
    }
    
}