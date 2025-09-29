function verEnunciado(){

    let enunciadoAE = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario su sueldo (sin decimales) y los años de antigüedad. La aplicación mostrará en la parte destinada para tal efecto, el sueldo resultante: Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, triplicar el sueldo. Si el sueldo es inferior a 500, pero su antigüedad es menor a 10 años, doblar sueldo. Si el sueldo es mayor o igual a 500, mostrar sin cambios."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}


function verResolucion(){
    let sueldo = parseInt(prompt("Ingrese su sueldo (sin decimales):"));
    let antiguedad = parseInt(prompt("Ingrese sus años de antigüedad:"));   
    if (sueldo < 500 && antiguedad >= 10) {
        sueldo *= 3;
    } else if (sueldo < 500 && antiguedad < 10) {
        sueldo *= 2;
    }
    document.getElementById("resultado").innerHTML = sueldo;
}
