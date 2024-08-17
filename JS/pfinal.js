function() {

  var puntajeFinal = localStorage.getItem('puntaje');


  document.getElementById('puntaje').textContent = puntajeFinal ? puntajeFinal : '0';


  var nuevoUsuario = document.querySelector('.index .boton');
  nuevoUsuario.addEventListener('click', function() {
    localStorage.removeItem('puntaje');

    window.location.href = 'index.html';
  });


  var volverIntentar = document.querySelector('.categorias .boton');
  volverIntentar.addEventListener('click', function() {
    localStorage.removeItem('puntaje');

    window.location.href = 'menucatego.html';
  }
