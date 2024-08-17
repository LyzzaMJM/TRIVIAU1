var preguntas = [
    {
        serie: "2521",
        dificultad: "Fácil",
        pregunta: "¿Cuál es el sueño de Na Hee-do?",
        opciones: ["A) Ser cantante", "B) Ser escritora", "C) Ser campeona de esgrima", "D) Ser actriz"],
        respuesta: "C) Ser campeona de esgrima",
        imagen: "RECURSOS/2521.jpg"
    },
    {
        serie: "Love Alarm",
        dificultad: "Fácil",
        pregunta: "¿Quién es el creador de la aplicación Love Alarm?",
        opciones: ["A) Sun-Oh", "B) Duk-Gu", "C) Jojo", "D) Hye-Young"],
        respuesta: "B) Duk-Gu",
        imagen: "RECURSOS/lovealarm.jpg"
    },
    {
        serie: "Holo, mi amor",
        dificultad: "Intermedio",
        pregunta: "¿Cuál es la profesión de Han So-Yeon?",
        opciones: ["A) Ingeniera de software", "B) Diseñadora de modas", "C) Subdirectora", "D) Abogada"],
        respuesta: "C) Subdirectora",
        imagen: "RECURSOS/holo.jpg"
    },
    {
        serie: "El amor es como un chachachá",
        dificultad: "Intermedio",
        pregunta: "¿En qué pueblo costero se desarrolla la historia?",
        opciones: ["A) Guyin", "B) Jeju", "C) Busan", "D) Incheon"],
        respuesta: "A) Guyin",
        imagen: "RECURSOS/chachacha.jpg"
    },
    {
        serie: "La abogada Woo",
        dificultad: "Difícil",
        pregunta: "¿Cuál es el caso específico de Woo young-woo que demuestra sus conocimientos sobre ballenas y delfines?",
        opciones: ["A) El caso de la herencia de la familia Kim", "B) El caso de vertido de residuos tóxicos en el mar", "C) El caso de la acusación de asesinato en el parque acuático", "D) El caso si yo fuera una ballena"],
        respuesta: "D) El caso si yo fuera una ballena",
        imagen: "RECURSOS/woo.jpg"
    },
    {
        serie: "Propuesta laboral",
        dificultad: "Difícil",
        pregunta: "¿En 'Propuesta laboral,' qué secreto revela el personaje de Shin Ha-ri sobre su pasado que impacta significativamente en su relación con el CEO?",
        opciones: ["A) Ella fue una competidora en un programa de variedades", "B) Ella es la hermana de uno de los empleados de la empresa", "C) Ella se presentó con un nombre falso y trabajan en la misma empresa", "D) Ella es la antigua novia del CEO"],
        respuesta: "C) Ella se presentó con un nombre falso y trabajan en la misma empresa",
        imagen: "RECURSOS/propuesta.jpg"
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
