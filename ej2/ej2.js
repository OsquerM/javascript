function verEnunciado(){

    let enunciadoAE = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un día y mes en formato numérico. La aplicación mostrará en la parte destinada para tal efecto \"SI\" si es navidad (el 25 del 12) y \"NO\" en caso contrario.\""
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}


function verResolucion(){
    let dia = parseInt(prompt("Ingrese el día (número):"));
    let mes = parseInt(prompt("Ingrese el mes (número):"));
    if (dia === 25 && mes === 12) {
        document.getElementById("resultado").innerHTML = "SI";
    } else {
        document.getElementById("resultado").innerHTML = "NO";
    }
}
