function verEnunciado(){
   
    let enunciadoAE = `Implementa el juego del buscaminas en JS.
Para ello, se definirá un tablero, un array 2d o matriz, con 📦 y 💣 (busca el carácter especial html para imprimir ese icono).
A continuación el usuario, introducirá una coordenada. Por ejemplo: 0,0.
El programa mostrará si dicha coordenada está vacía 📦 o contiene una mina 💣, mostrando el tablero cambiado para dicha acción.
 La caja está vacía! Puedes seguir jugando…

💨 📦 📦
📦 📦 📦
📦 📦 📦
		 
La caja contiene una mina, GAME OVER!!
💥 📦📦
📦 📦 📦
📦 📦 📦

En caso de que hubiese una mina, el juego terminaría mostrando el mensaje anterior en la parte destinada a tal efecto. En caso contrario, se le pedirá al usuario otra coordenada.

Adicionalmente, el juego termina si descubre todas las cajas vacías mostrando el tablero y el mensaje: No hay más cajas vacías, YOU ARE A WINNER!!!

CALIFICACIÓN EXTRA: Implementa la siguiente funcionalidad.

Si el usuario destapa una caja sin bomba, en vez de aparecer el símbolo correspondiente a una coordenada vacía (para el ejemplo: 💨), que aparezca el número de bombas adyacentes a dicha coordenada.
    `;

  
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;
}


function verResolucion(){
     // Tablero 3x3, con bombas marcadas como '💣' y cajas como '📦'
  // Inicializamos el tablero con algunas bombas
  const filas = 3;
  const columnas = 3;

  // Crear tablero vacío
  let tablero = [];
  for (let i = 0; i < filas; i++) {
    tablero[i] = [];
    for (let j = 0; j < columnas; j++) {
      tablero[i][j] = '📦'; // caja vacía
    }
  }

  // Colocar bombas manualmente (por simplicidad)
  tablero[0][1] = '💣';
  tablero[2][2] = '💣';

  // Matriz para mostrar al jugador lo que ha descubierto
  let visible = [];
  for (let i = 0; i < filas; i++) {
    visible[i] = [];
    for (let j = 0; j < columnas; j++) {
      visible[i][j] = '📦';
    }
  }

  // Función para contar bombas alrededor
  function contarBombasAlrededor(x, y) {
    let contador = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i >= 0 && i < filas && j >= 0 && j < columnas) {
          if (tablero[i][j] === '💣') {
            contador++;
          }
        }
      }
    }
    return contador;
  }

  // Función para mostrar el tablero visible en consola
  function mostrarTablero() {
    let texto = '';
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        texto += visible[i][j] + ' ';
      }
      texto += '\n';
    }
    console.log(texto);
  }

  // Contar casillas vacías totales para ganar
  let totalCajasVacias = 0;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (tablero[i][j] !== '💣') totalCajasVacias++;
    }
  }

  let cajasDescubiertas = 0;
  let juegoTerminado = false;

  alert("Bienvenido al Buscaminas! Introduce coordenadas del 0 al 2 separados por coma, por ejemplo: 0,1");

  while (!juegoTerminado) {
    mostrarTablero();

    let entrada = prompt("Introduce fila,columna (ejemplo 0,1):");
    if (!entrada) {
      alert("Juego terminado por salida del usuario");
      break;
    }

    let partes = entrada.split(',');
    if (partes.length !== 2) {
      alert("Formato incorrecto, usa fila,columna");
      continue;
    }

    let fila = parseInt(partes[0].trim());
    let columna = parseInt(partes[1].trim());

    if (isNaN(fila) || isNaN(columna) || fila < 0 || fila >= filas || columna < 0 || columna >= columnas) {
      alert("Coordenadas fuera de rango");
      continue;
    }

    if (visible[fila][columna] !== '📦') {
      alert("Ya has descubierto esa casilla");
      continue;
    }

    if (tablero[fila][columna] === '💣') {
      // Pisar bomba
      visible[fila][columna] = '💥';
      mostrarTablero();
      alert("La caja contiene una mina, GAME OVER!!");
      juegoTerminado = true;
    } else {
      // No bomba: mostrar número de bombas alrededor
      let bombasAlrededor = contarBombasAlrededor(fila, columna);
      visible[fila][columna] = bombasAlrededor === 0 ? '💨' : bombasAlrededor.toString();
      cajasDescubiertas++;

      if (cajasDescubiertas === totalCajasVacias) {
        mostrarTablero();
        alert("No hay más cajas vacías, YOU ARE A WINNER!!!");
        juegoTerminado = true;
      } else {
        alert("La caja está vacía! Puedes seguir jugando...");
      }
    }
  }
}



