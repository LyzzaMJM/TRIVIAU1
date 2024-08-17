function participante() {
    var name = document.getElementById('name').value;
    if (name) {
        localStorage.setItem('Usuario', name);
        window.location.href = 'menucatego.html';
    } else {
        alert('Por favor ingrese su nombre');
    }
}
