function obtenerSaludo() {
    const ahora = new Date();
    const hora = ahora.getHours();

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const diaSemana = dias[ahora.getDay()]; // 0 = domingo, 1 = lunes...

    let mensaje = "";

    if (hora >= 6 && hora < 12) {
        mensaje = `Buenos días, que tenga un feliz ${diaSemana}`;
    } else if (hora >= 12 && hora < 20) {
        mensaje = `Buenas tardes, disfrute de su tarde del ${diaSemana}`;
    } else {
        mensaje = `Buenas noches, le deseamos lo mejor para el ${diaSemana} próximo`;
    }

    document.getElementById("saludo").textContent = mensaje;
}

// Mostrar el saludo al cargar la página
obtenerSaludo();
