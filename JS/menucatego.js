var Usuario = localStorage.getItem('Usuario');
if (Usuario) {
  document.getElementById('Nombre').textContent = Usuario;
} else {
  document.getElementById('Nombre').textContent = 'Participante';
}