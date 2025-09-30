function verEnunciado(){
   
    let enunciadoAE = `Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cantidad de dinero (controlar que sea múltiplo de 5, en caso contrario, volver a pedir una cantidad de dinero) y tras ello desglose el cambio en billetes de 500,200,100,50,20,10,5 intentando dar el mínimo número de billetes.

    La aplicación mostrará en la parte destinada para tal efecto, el número mínimo de billetes.
    `;

  
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}


function verResolucion(){
    let cantidad = prompt("Introduce una cantidad de dinero (múltiplo de 5):");

    if (cantidad === null || cantidad.trim() === "") {
        document.getElementById("resultado").innerHTML = "No se introdujo ninguna entrada.";
        return;
    }

    let monto = parseInt(cantidad);
    if (isNaN(monto) || monto <= 0 || monto % 5 !== 0) {
        document.getElementById("resultado").innerHTML = "Entrada inválida. Asegúrate de que la cantidad sea un múltiplo de 5 y mayor que 0.";
        return;
    }

    // Array de billetes ordenado de mayor a menor
    const valoresBilletes = [500, 200, 100, 50, 20, 10, 5];
    const billetes = {};

    for (let valor of valoresBilletes) {
        billetes[valor] = Math.floor(monto / valor);  // cuántos billetes de ese valor
        monto = monto % valor;  // lo que queda después de usar esos billetes
    }

    // Mostrar el resultado en el HTML
    let resultadoHTML = "";
    for (let valor of valoresBilletes) {
        resultadoHTML += `Billetes de ${valor}: ${billetes[valor]}<br>`;
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
