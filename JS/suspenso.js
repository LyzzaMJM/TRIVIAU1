var preguntas = [
    {
        serie: "Dahmer",
        dificultad: "Fácil",
        pregunta: '¿Quién interpreta el papel de Jeffrey Dahmer en la serie "Dahmer"?',
        opciones: ["A) Evan Peters", "B) Paul Dano", "C) Jeremy Renner", "D) Ryan Murphy"],
        respuesta: "A) Evan Peters",
        imagen: "RECURSOS/dahmer.jpg"
    },
    {
        serie: "You",
        dificultad: "Fácil",
        pregunta: "En la serie 'You', ¿cómo se llama la librería en la que Joe Goldberg trabaja?",
        opciones: ["A) Mooney's", "B) B&N", "C) The Book Nook", "D) Pages"],
        respuesta: "A) Mooney's",
        imagen: "RECURSOS/you.jpg"
    },
    {
        serie: "Vis A Vis",
        dificultad: "Intermedio",
        pregunta: "¿Qué nombre recibe la prisión en la serie 'Vis a Vis'?",
        opciones: ["A) Cruz del Norte", "B) Macarena", "C) Cruz del Sur", " D) Santa Teresa"],
        respuesta: "C) Cruz del Sur",
        imagen: "RECURSOS/vis.jpg"
    },
    {
        serie: "El problema de los tres cuerpos",
        dificultad: "Intermedio",
        pregunta: "¿Quién es el autor de la novela 'El problema de los tres cuerpos', en la cual se basa la serie?",
        opciones: ["A) Zhang Yimou", "B) Liu Cixin", "C) Wang Jinkang", "D) Chen Qiufan"],
        respuesta: "B) Liu Cixin",
        imagen: "RECURSOS/cuerpos.jpg"
    },
    {
        serie: "Caleidoscopio",
        dificultad: "Difícil",
        pregunta: "En la serie 'Caleidoscopio', ¿cómo se llama el equipo de ladrones en la trama, y cuál es su especialidad principal en el robo?",
        opciones: ["A) El Esquema - Robos de alta tecnología", "B) Los Genios - Robos de seguridad", "C) La Pandilla - Robos de datos", "D) Los Maestros - Robos de arte"],
        respuesta: "D) Los Maestros - Robos de arte",
        imagen: "RECURSOS/caleidoscopio.jpg"
    },
    {
        serie: "Dulce hogar",
        dificultad: "Difícil",
        pregunta: "En 'Dulce Hogar' (Sweet Home), ¿cuál es el nombre de la entidad que supervisa la transformación de los humanos en monstruos, y qué objetivo tiene?",
        opciones: ["A) El Cónclave - Eliminación de la humanidad", "B) La Entidad - Creación de un nuevo orden", "C) El Orden - Control total de la población", "D) El Proyecto - Evolución forzada"],
        respuesta: "B) La Entidad - Creación de un nuevo orden",
        imagen: "RECURSOS/dulcehogar.jpg"
    }
];



var preguntaActual = 0;
var puntaje = 0;


var serieElemento = document.getElementById('serie');
var dificultadElemento = document.getElementById('dificultad');
var preguntaElemento = document.getElementById('pregunta');
var opcionesElementos = [
    document.getElementById('op1'),
    document.getElementById('op2'),
    document.getElementById('op3'),
    document.getElementById('op4')
];
var barraProgreso = document.getElementById('barra_progreso');
var imagenElemento = document.getElementById('imagen_pregunta');


function cargarPregunta() {
    var pregunta = preguntas[preguntaActual];
    serieElemento.textContent = pregunta.serie;
    dificultadElemento.textContent = 'Nivel de dificultad: ' + pregunta.dificultad;
    preguntaElemento.textContent = pregunta.pregunta;
    opcionesElementos.forEach(function(boton, indice) {
        boton.textContent = pregunta.opciones[indice];
    });
    imagenElemento.src = pregunta.imagen; 
    actualizarProgreso();
}


function verificarRespuesta(opcion) {
    var respuestaSeleccionada = opcion.textContent;
    var respuestaCorrecta = preguntas[preguntaActual].respuesta;
    if (respuestaSeleccionada === respuestaCorrecta) {
        if (preguntas[preguntaActual].dificultad === "Fácil") {
            puntaje += 10;
        } else if (preguntas[preguntaActual].dificultad === "Intermedio") {
            puntaje += 15;
        } else if (preguntas[preguntaActual].dificultad === "Difícil") {
            puntaje += 25;
        }
    }
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        cargarPregunta();
    } else {
        mostrarResultado();
    }
}


function actualizarProgreso() {
    var progreso = (preguntaActual / preguntas.length) * 100;
    barraProgreso.value = progreso;
}


function mostrarResultado() {
    localStorage.setItem('puntaje', puntaje);
    window.location.href = "Pfinal.html?puntaje=" + puntaje;
}


function obtenerPuntajeMaximo() {
    var puntajeMaximo = 0;
    preguntas.forEach(function(pregunta) {
        if (pregunta.dificultad === "Fácil") {
            puntajeMaximo += 10;
        } else if (pregunta.dificultad === "Intermedio") {
            puntajeMaximo += 15;
        } else if (pregunta.dificultad === "Difícil") {
            puntajeMaximo += 25;
        }
    });
    return puntajeMaximo;
}


opcionesElementos.forEach(function(boton) {
    boton.addEventListener('click', function() {
        verificarRespuesta(boton);
    });
});


cargarPregunta();
