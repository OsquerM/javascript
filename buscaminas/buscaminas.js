function verEnunciado() {
  // Mostramos en la página el enunciado del ejercicio
  let enunciadoAE = `Implementa el juego del buscaminas en JS.
Para ello, se definirá un tablero, un array 2d o matriz, con 📦 y 💣.
A continuación el usuario introducirá una coordenada. Por ejemplo: 0,0.
El programa mostrará si dicha coordenada está vacía 📦 o contiene una mina 💣,
mostrando el tablero actualizado para dicha acción.

💨 📦 📦
📦 📦 📦
📦 📦 📦
		 
💥 📦 📦
📦 📦 📦
📦 📦 📦

El juego termina si descubre todas las cajas vacías mostrando el mensaje:
"No hay más cajas vacías, YOU ARE A WINNER!!!".

CALIFICACIÓN EXTRA:
Si el usuario destapa una caja sin bomba, en vez de 💨, que aparezca el número
de bombas adyacentes a dicha coordenada.
`;

  document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}

function verResolucion() {
  // --- DIMENSIONES DEL TABLERO ---
  const filas = 3;
  const columnas = 3;

  // --- CREACIÓN DEL TABLERO PRINCIPAL (donde están las bombas) ---
  let tablero = [];
  for (let i = 0; i < filas; i++) {
    tablero[i] = []; // crea una sublista para cada fila
    for (let j = 0; j < columnas; j++) {
      tablero[i][j] = '📦'; // inicializa todas las casillas como cajas cerradas
    }
  }

  // Colocamos manualmente dos bombas
  tablero[0][1] = '💣'; // bomba en la posición (0,1)
  tablero[2][2] = '💣'; // bomba en la posición (2,2)

  // --- TABLERO VISIBLE ---
  // Al inicio el jugador ve todo cerrado con cajas 📦
  let visible = [];
  for (let i = 0; i < filas; i++) {
    visible[i] = [];
    for (let j = 0; j < columnas; j++) {
      visible[i][j] = '📦';
    }
  }

  // --- FUNCIÓN PARA CONTAR BOMBAS ADYACENTES ---
  function contarBombasAlrededor(x, y) {
    let contador = 0;
    // Recorre las 8 posiciones alrededor de la casilla
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        // Comprobamos que no nos salgamos del tablero
        if (i >= 0 && i < filas && j >= 0 && j < columnas) {
          if (tablero[i][j] === '💣') contador++; // si hay bomba, sumamos
        }
      }
    }
    return contador; // devolvemos el número de bombas alrededor
  }

  // --- FUNCIÓN PARA MOSTRAR EL TABLERO EN PANTALLA ---
  function mostrarTablero() {
    let html = '';
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        html += visible[i][j] + ' '; // concatenamos los símbolos con espacio
      }
      html += '<br>'; // salto de línea en HTML
    }
    // Se muestra el tablero actualizado en el <div id="tablero">
    document.getElementById("tablero").innerHTML = html;
  }

  // --- CONTAMOS LAS CAJAS VACÍAS (SIN BOMBA) ---
  // Esto servirá para saber cuándo el jugador gana
  let totalCajasVacias = 0;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (tablero[i][j] !== '💣') totalCajasVacias++;
    }
  }

  // Contadores y control del juego
  let cajasDescubiertas = 0; // cuántas casillas sin bomba se han destapado
  let juegoTerminado = false; // booleano para saber si el juego acabó

  // Mensaje inicial al jugador
  document.getElementById("mensaje").textContent =
    "Bienvenido al Buscaminas! Introduce coordenadas del 0 al 2.";

  // Mostramos el tablero inicial
  mostrarTablero();

  // --- FUNCIÓN PRINCIPAL DEL TURNO ---
  // Se ejecuta en bucle hasta que el jugador gane o seleccione una bomba
  function turno() {
    // Evitamos pedir coordenadas si el juego ya terminó
    if (juegoTerminado) return;

    // Pedimos al usuario una coordenada (ej: "1,2")
    let entrada = prompt("Introduce fila,columna (ejemplo 0,1):");
    if (!entrada) {
      document.getElementById("mensaje").textContent = "Juego terminado por el usuario.";
      return;
    }

    // Dividimos la entrada por coma
    let partes = entrada.split(',');
    if (partes.length !== 2) { //si no introducimos 2 numeros separados por coma no es válido
      alert("Formato incorrecto, usa fila,columna");
      return turno(); // volvemos a pedir coordenadas
    }

    // Convertimos las coordenadas a número, eliminando espacios extra
    let fila = parseInt(partes[0].trim());
    let columna = parseInt(partes[1].trim());

    // Validamos que estén dentro del rango
    if (isNaN(fila) || isNaN(columna) || fila < 0 || fila >= filas || columna < 0 || columna >= columnas) {
      alert("Coordenadas fuera de rango");
      return turno();
    }

    // Si ya se había descubierto esa casilla, no hacemos nada
    if (visible[fila][columna] !== '📦') {
      alert("Ya has descubierto esa casilla");
      return turno();
    }

    // --- CASO 1: EL JUGADOR SELECCIONA UNA BOMBA ---
    if (tablero[fila][columna] === '💣') {
      visible[fila][columna] = '💥'; // mostramos explosión
      mostrarTablero(); // actualizamos el tablero en pantalla
      document.getElementById("mensaje").textContent = "💣 ELIMINADO!!"; // mensaje de GAME OVER
      juegoTerminado = true; // el juego termina
      return;
    } 
    // --- CASO 2: LA CASILLA ES SEGURA ---
    else {
      // Contamos cuántas bombas hay alrededor
      let bombasAlrededor = contarBombasAlrededor(fila, columna);

      // Si no hay bombas cerca, mostramos 💨, si hay, el número
      visible[fila][columna] = bombasAlrededor === 0 ? '💨' : bombasAlrededor.toString();
      cajasDescubiertas++; // aumentamos contador de casillas seguras destapadas
      mostrarTablero(); // actualizamos la vista después de cada jugada

      // Si ha descubierto todas las cajas vacías, gana
      if (cajasDescubiertas === totalCajasVacias) {
        document.getElementById("mensaje").textContent = "🎉 Enhorabuena!!!";
        juegoTerminado = true;
        return;
      } 
      // Si no, puede seguir jugando
      else {
        document.getElementById("mensaje").textContent = "Caja vacía, puedes seguir jugando…";
        turno(); // volvemos a pedir coordenadas
      }
    }
  }

  // Comienza el juego
  turno();
}
