var preguntas = [
    {
        serie: "Heartstopper",
        dificultad: "Fácil",
        pregunta: "¿Quién es el primer interés amoroso de Nick Nelson en 'Heartstopper'?",
        opciones: ["A) Tao Xu", "B) Charlie Spring", "C) Harry Greene", "D) Ben Hope"],
        respuesta: "B) Charlie Spring",
        imagen: "RECURSOS/heartstopper.jpg"
    },
    {
        serie: "Bridgerton",
        dificultad: "Fácil",
        pregunta: "¿Cuál es el nombre de la familia que es el foco principal en la serie 'Bridgerton'?",
        opciones: ["A) Featherington", "B) Basset", "C) Hastings", "D) Bridgerton"],
        respuesta: "D) Bridgerton",
        imagen: "RECURSOS/BRIDGERTON.jpg"
    },
    {
        serie: "13 razones",
        dificultad: "Intermedio",
        pregunta: "¿Qué objeto encuentra Clay Jensen en la primera temporada de '13 razones' que le lleva a descubrir las cintas de Hannah Baker?",
        opciones: ["A) Una caja", "B) Un cuaderno", "C) Un disco de vinilo", " D) Una carta"],
        respuesta: "A) Una caja",
        imagen: "RECURSOS/13reasonwhy.jpg"
    },
    {
        serie: "Yo nunca",
        dificultad: "Intermedio",
        pregunta: "¿Cuál es el nombre del personaje principal en 'Yo nunca' (Never Have I Ever)?",
        opciones: ["A) Devi Vishwakumar", "B) Eleanor Wong", "C) Fabiola Torres", "D) Kamala Nandiwadal"],
        respuesta: "A) Devi Vishwakumar",
        imagen: "RECURSOS/yonunca.jpg"
    },
    {
        serie: "Riverdale",
        dificultad: "Difícil",
        pregunta: "¿Qué apodo recibe el misterioso asesino que aterroriza a Riverdale en la primera temporada?",
        opciones: ["A) El Artista", "B) El Guante Negro", "C) El Espantapájaros", "D) El Hombre de la Máscara"],
        respuesta: "B) El Guante Negro",
        imagen: "RECURSOS/riverdale.jpg"
    },
    {
        serie: "Stranger Things",
        dificultad: "Difícil",
        pregunta: "¿Cuál es el nombre del programa secreto del gobierno en 'Stranger Things' que da lugar a los eventos sobrenaturales de la serie?",
        opciones: ["A) Proyecto Stargate", "B) Proyecto X", "C) Proyecto Montauk", "D) Proyecto Hawkins"],
        respuesta: "C) Proyecto Montauk",
        imagen: "RECURSOS/strangerthing.jpg"
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
