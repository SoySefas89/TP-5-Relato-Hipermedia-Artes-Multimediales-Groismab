let sonidoActual = null;

function tocarSonido(archivo) {
  if (sonidoActual) {
    sonidoActual.pause();
    sonidoActual.currentTime = 0;
  }

  sonidoActual = new Audio(archivo);
  sonidoActual.play();
}

function pausarSonido() {
  if (sonidoActual) {
    sonidoActual.pause();
  }
}