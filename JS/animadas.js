var preguntas = [
    {
        serie: "Los Simpsons",
        dificultad: "Fácil",
        pregunta: "¿Cuánto dinero le debe Barney a Moe?",
        opciones: ["A) 15 mil millones de dólares", "B) 20 mil millones de dólares", "C) 30 mil millones de dólares", "D) 15 millones de dólares"],
        respuesta: "A) 15 mil millones de dólares",
        imagen: "RECURSOS/simpson.png"
    },
    {
        serie: "El increíble mundo de Gumball",
        dificultad: "Fácil",
        pregunta: "¿Cómo se llama la madre de Gumball?",
        opciones: ["A) Anahi Watterson", "B) Nicole Watterson", "C) Karen Watterson", "D) Penny Waterson"],
        respuesta: "B) Nicole Watterson",
        imagen: "RECURSOS/mundodegumball.jpg"
    },
    {
        serie: "Las aventuras de Miraculous Ladybug",
        dificultad: "Intermedio",
        pregunta: "¿Cómo se llamaba antes Ladybug?",
        opciones: ["A) Marinette", "B) Mariela", "C) Marinela", "D) Marinnete"],
        respuesta: "A) Marinette",
        imagen: "RECURSOS/ladybug.jpg"
    },
    {
        serie: "Gravity Falls",
        dificultad: "Intermedio",
        pregunta: "¿Quién es mayor? ¿Dipper o Mabel?",
        opciones: ["A) Mabel Pines", "B) Dipper Pines", "C) Stan Pines", "D) Ambos tienen la misma edad"],
        respuesta: "A) Mabel Pines",
        imagen: "RECURSOS/gravity.png"
    },
    {
        serie: "Phineas y Ferb",
        dificultad: "Difícil",
        pregunta: "¿Cómo se llama la hija de Candace?",
        opciones: ["A) Amanda", "B) Isabella", "C) Candace junior", "D) Violetta"],
        respuesta: "A) Amanda",
        imagen: "RECURSOS/phineas.jpg"
    },
    {
        serie: "Hora de Aventura",
        dificultad: "Difícil",
        pregunta: "¿De qué raza es Jake?",
        opciones: ["A) Chiwawa", "B) Bulldog", "C) Pequinés", "D) Pitbull"],
        respuesta: "B) Bulldog",
        imagen: "RECURSOS/horadeaventura.jpg"
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
