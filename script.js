const modulos = [
  {
    titulo: "Módulo 1: Patrones y razonamiento intuitivo",
    descripcion: "Aprende a observar regularidades y explicar patrones con tus propias palabras.",
    explicacion: "En este módulo se trabaja el razonamiento intuitivo. El estudiante observa ejemplos, identifica una regla y explica por qué una respuesta tiene sentido.",
    preguntas: [
      {
        texto: `En El diablo de los números, Robert observa este patrón: 1 × 1 = 1, 
        11 × 11 = 121, 111 × 111 = 12321. ¿Cuál parece ser el resultado de 1111 × 1111?`,
        opciones: ["1234321", "1111111", "123321"],
        correcta: 0,
        feedback: "Correcto. El patrón sube hasta 4 y luego baja: 1, 2, 3, 4, 3, 2, 1."
      },
      {
        texto: `Robert cree que un patrón puede seguir para siempre, pero el diablo de los 
        números le muestra que hay que revisar con exactitud. ¿Qué debemos hacer antes de 
        afirmar que un patrón siempre funciona?`,
        opciones: ["Adivinar rápido", "Probar y justificar la regla", "Escoger el número más grande"],
        correcta: 1,
        feedback: "Muy bien. En matemáticas no basta con adivinar: debemos probar, revisar y justificar."
      },
      {
        texto: "Observa: 1, 11, 111, 1111. ¿Qué cambia en cada paso?",
        opciones: ["Se agrega un 1 más", "Se suma 10 siempre", "Se quita un número"],
        correcta: 0,
        feedback: "Correcto. En cada paso aparece un número formado por un 1 más."
      }
    ]
  },
  {
    titulo: "Módulo 2: Lógica si... todos",
    descripcion: "Practica relaciones lógicas. Usaremos lo aprendido en la biblioteca de recursos y en la sección de retos",
    explicacion: "En este módulo se trabaja la estructura lógica 'si... entonces...'. Practicaremos con ejemplos de la biblioteca de recursos y de la sección de retos para sacar conclusiones y explicar nuestras respuestas.",
    preguntas: [
      {
        texto: "Si todos los planetas giran alrededor del Sol y la Tierra es un planeta, ¿qué podemos concluir?",
        opciones: [
        "Que la Tierra gira alrededor del Sol",
        "Que todo lo que gira alrededor del Sol es planeta",
        "Que la Tierra es un cometa"
        ],
        correcta: 0,
        feedback: "Muy bien. La Tierra pertenece al grupo de los planetas, por eso podemos concluir que gira alrededor del Sol."
      },
      {
       texto: "Si encontramos un ejemplo que no cumple una afirmación con 'todos', entonces ¿qué pasa con esa afirmación?",
      opciones: [
      "La afirmación es falsa",
      "La afirmación siempre es verdadera",
      "La afirmación se vuelve una suma"
      ],
      correcta: 0,
      feedback: "Muy bien. Un solo contraejemplo sirve para mostrar que una afirmación con 'todos' es falsa."
      },
      {
     texto: "Si alguien dice: 'Todos los números que terminan en 0 son pares', y el número 30 termina en 0, ¿qué podemos concluir?",
    opciones: ["Que 30 es par", "Que 30 es impar", "Que todos los pares terminan en 30"],
    correcta: 0,
    feedback: "Correcto. Si todos los números que terminan en 0 son pares, y 30 termina en 0, entonces 30 es par."
      }
    ]
  },
  {
    titulo: "Módulo 3: Demostración preformal",
    descripcion: "La demostración preformal permite dar explicaciones sencillas para justificar ideas matemáticas y llegar a conclusiones correctas.",
    explicacion: "La demostración preformal permite justificar una idea matemática usando ejemplos",
    preguntas: [
      {
       texto: "¿Qué usamos para mostrar que una afirmación con 'todos' es falsa?",
      opciones: ["Un contraejemplo", "Una palabra larga", "Una suma difícil"],
      correcta: 0,
      feedback: "Correcto. Un contraejemplo es un caso que muestra que la afirmación no siempre se cumple."
      },
      {
        texto: "Si todos los números pares se pueden repartir en dos grupos iguales y 6 es par, ¿cuál es la mejor justificación?",
        opciones: [
        "6 se puede repartir en dos grupos iguales: 3 y 3",
        "6 se puede repartir en 5 y 1 porque son iguales",
        "6 no se puede repartir en dos grupos iguales"],
      correcta: 0,
      feedback: "Correcto. 6 se puede repartir en 3 y 3. Los dos grupos son iguales y no sobra nada."
      },
      {
        texto: "Si un número termina en 0, 2, 4, 6 u 8, entonces es par. El número 18 termina en 8. ¿Qué podemos concluir?",
        opciones: [
        "Que 18 es par",
        "Que 18 es impar",
        "Que 18 no es un número"
        ],
        correcta: 0,
        feedback: "Correcto. Como 18 termina en 8, podemos concluir que es un número par."
      }
    ]
  }
];

let moduloActual = 0;
let preguntaActual = 0;
let puntaje = 0;
let respondida = false;

const contenedorModulos = document.getElementById("modulos");
const quizContainer = document.getElementById("quizContainer");
const tituloModulo = document.getElementById("tituloModulo");
const explicacionModulo = document.getElementById("explicacionModulo");
const preguntaTexto = document.getElementById("preguntaTexto");
const opcionesDiv = document.getElementById("opciones");
const retroalimentacion = document.getElementById("retroalimentacion");
const btnSiguiente = document.getElementById("btnSiguiente");
const resultadoFinal = document.getElementById("resultadoFinal");
const barraProgreso = document.getElementById("barraProgreso");

function cargarModulos() {
  contenedorModulos.innerHTML = "";

  modulos.forEach((modulo, index) => {
    const card = document.createElement("div");
    card.className = "modulo-card";

    card.innerHTML = `
      <h3>${modulo.titulo}</h3>
      <p>${modulo.descripcion}</p>
      <button onclick="abrirModulo(${index})">Iniciar módulo</button>
    `;

    contenedorModulos.appendChild(card);
  });
}

function abrirModulo(index) {
  moduloActual = index;
  preguntaActual = 0;
  puntaje = 0;
  respondida = false;

  document.querySelector(".intro").classList.add("oculto");
  contenedorModulos.classList.add("oculto");
  quizContainer.classList.remove("oculto");
  resultadoFinal.classList.add("oculto");

  tituloModulo.textContent = modulos[moduloActual].titulo;
  explicacionModulo.textContent = modulos[moduloActual].explicacion;

  mostrarPregunta();
}

function mostrarPregunta() {
  respondida = false;
  retroalimentacion.textContent = "";
  btnSiguiente.classList.add("oculto");
  opcionesDiv.innerHTML = "";

  const pregunta = modulos[moduloActual].preguntas[preguntaActual];
  preguntaTexto.textContent = pregunta.texto;

  pregunta.opciones.forEach((opcion, index) => {
    const boton = document.createElement("button");
    boton.className = "opcion";
    boton.textContent = opcion;
    boton.onclick = () => verificarRespuesta(index, boton);
    opcionesDiv.appendChild(boton);
  });

  actualizarProgreso();
}

function verificarRespuesta(indiceSeleccionado, botonSeleccionado) {
  if (respondida) return;

  respondida = true;

  const pregunta = modulos[moduloActual].preguntas[preguntaActual];
  const botones = document.querySelectorAll(".opcion");

  botones.forEach((boton, index) => {
    boton.disabled = true;

    if (index === pregunta.correcta) {
      boton.classList.add("correcta");
    }
  });

  if (indiceSeleccionado === pregunta.correcta) {
    puntaje++;
    retroalimentacion.textContent = pregunta.feedback;
    retroalimentacion.style.color = "#44bd32";
  } else {
    botonSeleccionado.classList.add("incorrecta");
    retroalimentacion.textContent = "Revisa tu respuesta. " + pregunta.feedback;
    retroalimentacion.style.color = "#e84118";
  }

  btnSiguiente.classList.remove("oculto");
}

function siguientePregunta() {
  preguntaActual++;

  if (preguntaActual < modulos[moduloActual].preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  document.querySelector(".pregunta-card").classList.add("oculto");
  btnSiguiente.classList.add("oculto");
  resultadoFinal.classList.remove("oculto");
  barraProgreso.style.width = "100%";

  let insignia = "";

  if (puntaje === 3) {
    insignia = "🏆 Insignia obtenida: Explorador lógico";
  } else if (puntaje === 2) {
    insignia = "⭐ Insignia obtenida: Buen razonador";
  } else {
    insignia = "📘 Insignia obtenida: Sigue practicando";
  }

  resultadoFinal.innerHTML = `
    <h3>Resultado del módulo</h3>
    <p>Tu puntaje fue: <strong>${puntaje}/3</strong></p>
    <p>${insignia}</p>
    <p>
      La retroalimentación automática permite que el estudiante identifique sus aciertos
      y revise sus errores de manera inmediata.
    </p>
    <button onclick="reiniciarModulo()">Repetir módulo</button>
    <button onclick="volverInicio()">Volver al inicio</button>
  `;
}

function reiniciarModulo() {
  preguntaActual = 0;
  puntaje = 0;
  document.querySelector(".pregunta-card").classList.remove("oculto");
  resultadoFinal.classList.add("oculto");
  mostrarPregunta();
}

function volverInicio() {
  quizContainer.classList.add("oculto");
  document.querySelector(".intro").classList.remove("oculto");
  contenedorModulos.classList.remove("oculto");
  document.querySelector(".pregunta-card").classList.remove("oculto");
  resultadoFinal.classList.add("oculto");
}

function actualizarProgreso() {
  const total = modulos[moduloActual].preguntas.length;
  const porcentaje = (preguntaActual / total) * 100;
  barraProgreso.style.width = porcentaje + "%";
}

cargarModulos();

function resolverReto(respuesta) {
  const mensaje = document.getElementById("mensajeReto");

  if (respuesta === "correcto") {
    mensaje.textContent = "✅ ¡Correcto! Como 12 es par, se puede repartir en dos grupos iguales de 6 y 6.";
    mensaje.style.color = "#2ecc71";
  } else {
    mensaje.textContent = "❌ Revisa la definición: un número par se puede repartir en dos grupos iguales sin que sobre nada.";
    mensaje.style.color = "#e74c3c";
  }
}

const ordenCorrecto = ["paso1", "paso2", "paso3", "paso4"];
let pasosUsuario = [];

function seleccionarPaso(boton) {
  const paso = boton.dataset.paso;
  const texto = boton.textContent.trim();

  pasosUsuario.push(paso);
  boton.disabled = true;

  const lista = document.getElementById("listaPasosElegidos");
  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);

  if (pasosUsuario.length === ordenCorrecto.length) {
    revisarOrdenDemostracion();
  }
}

function revisarOrdenDemostracion() {
  const mensaje = document.getElementById("mensajeJuego");

  const correcto = pasosUsuario.every((paso, index) => paso === ordenCorrecto[index]);

  if (correcto) {
    mensaje.textContent = "🏆 ¡Excelente! Ordenaste correctamente la demostración.";
    mensaje.style.color = "#2ecc71";
  } else {
    mensaje.textContent = "🔎 Casi. Revisa el orden: primero se explica qué es un número par, luego se construye la conclusión.";
    mensaje.style.color = "#e74c3c";
  }
}

function reiniciarJuego() {
  pasosUsuario = [];

  document.getElementById("listaPasosElegidos").innerHTML = "";
  document.getElementById("mensajeJuego").textContent = "";

  const botones = document.querySelectorAll(".paso");
  botones.forEach((boton) => {
    boton.disabled = false;
  });
}