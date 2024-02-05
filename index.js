let INDEX_PREGUNTA = 0;
let puntaje = 0;
let seleccionTipoContrato = "";
let preguntasPorTipoContrato = {};
let mostrandoResultadosFinales = false;
let eleccionesUsuario = [];
let tituloOriginal = "Bienvenido a Preguntas y Respuestas de Contratos";

// Agregar una función para actualizar el número de pregunta
function actualizarNumeroPregunta() {
  const numeroPreguntaElement = document.getElementById("numero-pregunta");
  numeroPreguntaElement.textContent = `${INDEX_PREGUNTA + 1}/${preguntasPorTipoContrato.length} preguntas`;
}

function actualizarTituloBienvenidos() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = tituloOriginal;
}

function actualizarEmojiPuntaje(puntaje) {

  let emoji = "😵"; // Emoji predeterminado (muerto)

  if (puntaje >= 10 && puntaje < 20) {
    emoji = "😰"; // Emoji de miedo
  } else if (puntaje >= 20 && puntaje < 30) {
    emoji = "😐"; // Emoji medio feliz
  } else if (puntaje >= 30 && puntaje < 40) {
    emoji = "😊"; // Emoji feliz
  } else if (puntaje >= 40 && puntaje < 50) {
    emoji = "😏"; // Emoji aún más feliz
  } else if (puntaje >= 50 && puntaje < 60) {
    emoji = "😋"; // Emoji super feliz
  } else if (puntaje >= 60 && puntaje < 70) {
    emoji = "😎"; // Emoji de celebración
  } else if (puntaje >= 70) {
    emoji = "🤩"; // Emoji de fiesta
  }


  // Actualiza el emoji en el elemento HTML
  document.getElementById("icono-feliz").textContent = emoji;
}


// Esta función se llama cuando el usuario elige un tipo de contrato
function seleccionarTipoContrato() {
  INDEX_PREGUNTA = 0;
  puntaje = 0;
  preguntaRespondida = false;
  mostrandoResultadosFinales = false; // Importante restablecer esta variable
  ayudaSolicitada = false;
  ayudaMostrada = false;
  const select = document.getElementById("tipo-contrato");
  seleccionTipoContrato = select.value;
  INDEX_PREGUNTA = 0;
  puntaje = 0;
  // Obtén las preguntas para el tipo de contrato seleccionado
  preguntasPorTipoContrato = baseDePreguntas[seleccionTipoContrato];

  // Oculta el formulario de selección
  document.getElementById("formulario-seleccion").style.display = "none";

  // Muestra el contenedor de preguntas
  document.getElementById("preguntas-container").style.display = "block";

  // Muestra el contenedor de puntaje
  document.getElementById("puntaje-container").style.display = "block";

  document.getElementById("numero-pregunta").style.display = "block";

  document.getElementById("tiempo-container").style.display = "block";

  // Cambia el título
  let titulo = document.getElementById("titulo");
  titulo.textContent = `Preguntas Contratos de ${seleccionTipoContrato}`;

  cargarPregunta(INDEX_PREGUNTA);
}

function dificultadPregunta(objetoPregunta) {
  // Obtén la dificultad de la pregunta actual
  const dificultadPregunta = objetoPregunta.dificultad;

  // Obtén el elemento h6 donde deseas mostrar la dificultad
  const etiquetaDificultad = document.getElementById("dificultadEtiqueta");

  // Establece el contenido del elemento h6 con la dificultad actual
  etiquetaDificultad.textContent = dificultadPregunta;

  // Remueve la clase "cambio-dificultad" (si existe) en el elemento
  etiquetaDificultad.classList.remove("cambio-dificultad");

  // Define un objeto que mapee las clases de dificultad a colores
  const coloresDificultad = {
    facil: "green",
    media: "yellow",
    dificil: "red",
    // Agrega más dificultades y colores según necesites
  };

  // Establece el color de fondo del elemento h6 según la dificultad
  etiquetaDificultad.style.backgroundColor = coloresDificultad[dificultadPregunta];

  // Agrega la clase "cambio-dificultad" después de un pequeño retraso para activar la animación
  setTimeout(() => {
    etiquetaDificultad.classList.add("cambio-dificultad");
  }, 100);
}


let interval; // Variable para mantener una referencia al intervalo del temporizador actual
let preguntaRespondida = false; // Variable de estado para indicar si la pregunta ha sido respondida

function iniciarTemporizadorPorDificultad() {
  const tiempoLimite = 26; // Establece el tiempo límite en 25 segundos para todas las dificultades
  iniciarTemporizador(tiempoLimite);
}

function iniciarTemporizador(tiempo) {
  let tiempoRestante = tiempo;

  // Detiene el temporizador anterior, si existe
  if (interval) {
    clearInterval(interval);
  }

  // Actualiza el tiempo restante cada segundo
  interval = setInterval(() => {
    tiempoRestante--;

    if (tiempoRestante >= 0) {
      // Actualiza el tiempo restante en la página HTML
      actualizarTiempo(tiempoRestante);

      if (tiempoRestante === 0) {
        // Agregar mensaje de depuración
        console.log("Tiempo agotado");

        if (!preguntaRespondida) {
          // Si el tiempo se agota y la pregunta no se ha respondido, muestra el mensaje "Tiempo agotado"
          clearInterval(interval);
          mostrarMensajeTiempoAgotado();
        }
      }
    }
  }, 1000); // Intervalo de actualización de 1 segundo (1000 milisegundos)
}

function mostrarMensajeTiempoAgotado() {
  if (!mostrandoResultadosFinales && INDEX_PREGUNTA < preguntasPorTipoContrato.length) {
    // Solo muestra el mensaje "Tiempo Agotado" si no se están mostrando los resultados finales
    // y aún quedan preguntas por responder
    Swal.fire({
      title: "Tiempo Agotado",
      text: "El tiempo de la pregunta se agotó, presiona seguir para pasar a la siguiente pregunta.",
      confirmButtonText: "Seguir",
      imageUrl: 'https://i.pinimg.com/236x/b7/83/5d/b7835dabddbe7772eaf120e0b30fac87.jpg',
      imageHeight: 200,
      imageAlt: 'A tall image'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Paso de pregunta");
        clearInterval(interval);
        INDEX_PREGUNTA++;
        console.log(INDEX_PREGUNTA);
        cargarPregunta(INDEX_PREGUNTA);
      }
    });
  }
}

let tiempoRestante = 25; // Establece el tiempo inicial en 25 segundos

function actualizarTiempo(tiempoRestante) {
  const tiempoRestanteElement = document.getElementById("tiempo-restante");

  if (tiempoRestanteElement) {
    tiempoRestanteElement.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
  }
}


function cargarPregunta(index) {
  preguntaRespondida = false;
  if (!seleccionTipoContrato || !preguntasPorTipoContrato || index >= preguntasPorTipoContrato.length) {
    // Si no se ha seleccionado un tipo de contrato o ya no hay más preguntas, muestra el resultado final.
    document.getElementById("formulario-seleccion").style.display = "block";
    document.getElementById("preguntas-container").style.display = "none";
    mostrarResultadoFinal();
    return;
  } else {
    // Oculta el formulario de selección y muestra el contenedor de preguntas
    document.getElementById("formulario-seleccion").style.display = "none";
    document.getElementById("preguntas-container").style.display = "block";
  }

  ayudaSolicitada = false;
  actualizarNumeroPregunta();

  // Aquí puedes verificar si has llegado a la última pregunta
  if (index === preguntasPorTipoContrato.length - 1) {
    // Si es la última pregunta, no inicies el temporizador
    document.getElementById("tiempo-restante").textContent = "Última pregunta";
  } else {
    // Si no es la última pregunta, inicia el temporizador
    iniciarTemporizadorPorDificultad();
  }

  objetoPregunta = preguntasPorTipoContrato[index];
  dificultadPregunta(objetoPregunta);
  opciones = [...objetoPregunta.opciones];

  // Verifica si la respuesta correcta ya está en las opciones
  const respuestaEstaEnOpciones = opciones.includes(objetoPregunta.respuesta);

  if (!respuestaEstaEnOpciones) {
    // Si la respuesta correcta no está en las opciones, agrégala al azar
    const indiceRespuestaCorrecta = Math.floor(Math.random() * opciones.length);
    opciones.splice(indiceRespuestaCorrecta, 0, objetoPregunta.respuesta);
  }

  // Aleatoriza las opciones (incluida la respuesta correcta)
  for (let i = opciones.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opciones[i], opciones[j]] = [opciones[j], opciones[i]]; // Intercambia las opciones de manera aleatoria
  }

  iniciarTemporizadorPorDificultad();

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if (objetoPregunta.imagen) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }

  if (objetoPregunta.ayuda) {
    document.getElementById("ayuda").style.display = "";
  } else {
    document.getElementById("ayuda").style.display = "none";
  }

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];
}

async function seleccionarOpción(index) {
  preguntaRespondida = true; // Marca la pregunta como respondida
  // Restablece el tiempo restante a 25 segundos cuando se selecciona una opción
  tiempoRestante = 25;
  actualizarTiempo(tiempoRestante);
  let validezRespuesta = opciones[index] === objetoPregunta.respuesta; // Utiliza === en lugar de ==
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });


    // Agrega la clase para respuesta correcta
    document.getElementById("puntaje-box").classList.add("respuesta-correcta");
    // // Muestra el icono feliz y oculta el icono triste
    // document.getElementById("icono-feliz").classList.add("correct");
    // document.getElementById("icono-triste").classList.remove("incorrect");


    puntaje += 10; // Suma 10 puntos por respuesta correcta
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });

    // Agrega la clase para respuesta incorrecta
    document.getElementById("puntaje-box").classList.add("respuesta-incorrecta");
    // // Muestra el icono triste y oculta el icono feliz
    // document.getElementById("icono-triste").classList.add("incorrect");
    // document.getElementById("icono-feliz").classList.remove("correct");

  }

  // Luego, quita las clases después de 500 milisegundos
  setTimeout(() => {
    document.getElementById("puntaje-box").classList.remove("respuesta-correcta", "respuesta-incorrecta");
  }, 500);

  // Agregar animación al puntaje cuando se actualiza
  document.getElementById("puntaje").style.animation = "scaleUp 0.5s"; // Animación de escala
  setTimeout(() => {
    document.getElementById("puntaje").style.animation = "";
  }, 500);

  INDEX_PREGUNTA++;
  // Actualiza el puntaje mostrado en el HTML
  document.getElementById("puntaje").textContent = puntaje;
  // Llama a la función para actualizar el emoji del puntaje
  actualizarEmojiPuntaje(puntaje);

  // Agrega la elección y su validez a la lista
  eleccionesUsuario.push({
    pregunta: INDEX_PREGUNTA,
    eleccion: opciones[index],
    esCorrecta: validezRespuesta,
  });

  cargarPregunta(INDEX_PREGUNTA);
}

async function mostrarResultadoFinal() {
  preguntaRespondida = false;
  mostrandoResultadosFinales = false; // Importante restablecer esta variable
  ayudaSolicitada = false;
  ayudaMostrada = false;
  // Ocultar los elementos de contador de preguntas y puntaje
  document.getElementById("numero-pregunta").style.display = "none";
  document.getElementById("puntaje-container").style.display = "none";
  document.getElementById("tiempo-container").style.display = "none";
  mostrandoResultadosFinales = true; // Indica que se están mostrando los resultados finales
  // Aquí debes calcular y mostrar la frase según la cantidad de puntos
  let frase = "";

  if (puntaje === 0) {
    frase = "No te desanimes, estudia más y sigue intentándolo!!";
  } else if (puntaje >= 10 && puntaje <= 30) {
    frase = "Está bien, pero puedes mejorar";
  } else if (puntaje >= 40 && puntaje <= 60) {
    frase = "Muy bien, eres muy bueno con los contratos!!";
  } else if (puntaje === 70) {
    frase = "¡Excelente! Eres impresionante!!";
  } else {
    frase = "¡Has obtenido un resultado sorprendente!";
  }

  let resultadoHtml = `<h2>Juego terminado</h2>`;
  resultadoHtml += `<p>Tu puntaje fue de: ${puntaje} puntos. ${frase}</p>`;

  // Agrega el botón "Ver Recorrido de Elecciones" al contenido del modal
  resultadoHtml += `<button id="boton-recorrido" onclick="mostrarRecorridoElecciones()">Ver Recorrido de Elecciones</button>`;
  await Swal.fire({
    html: resultadoHtml,
    icon: "info",
    didOpen: () => {
      console.log("open");
      // Aquí puedes agregar lógica personalizada cuando se abra el modal, si es necesario
      document.getElementById("icono-feliz").textContent = "";

      // Muestra el formulario de selección nuevamente
      document.getElementById("formulario-seleccion").style.display = "block";
    },
    didClose: () => {
      console.log("close");
      // Oculta el emoji después de hacer clic en "OK"
      document.getElementById("icono-feliz").textContent = "";

      // Muestra el formulario de selección nuevamente
      document.getElementById("formulario-seleccion").style.display = "block";
      eleccionesUsuario = [];

      
    },
  });
  // Reinicia el juego
  actualizarTituloBienvenidos();
  INDEX_PREGUNTA = 0;
  puntaje = 0;

  // Actualiza el puntaje mostrado a 0
  document.getElementById("puntaje").textContent = puntaje;
}

function mostrarRecorridoElecciones() {
  actualizarTituloBienvenidos()
  let recorridoHtml = "<h2>Recorrido de Elecciones:</h2>";

  // Crear una tabla HTML para mostrar el recorrido
  recorridoHtml += '<table style="border-collapse: collapse; width: 100%; border: 2px solid #333;">';
  recorridoHtml += '<tr style="background-color: #f2f2f2; color: #333;"><th>Pregunta</th><th>Opción Elegida</th><th>Correcta/Incorrecta</th></tr>';

  eleccionesUsuario.forEach((eleccion, index) => {
    // Determinar el color de fondo en función de si la respuesta es correcta o incorrecta
    const backgroundColor = eleccion.esCorrecta ? 'green' : 'red';

    recorridoHtml += '<tr>';
    recorridoHtml += `<td style="border: 2px solid #333; padding: 10px;">${eleccion.pregunta}</td>`;
    recorridoHtml += `<td style="border: 2px solid #333; padding: 10px;">${eleccion.eleccion}</td>`;
    recorridoHtml += `<td style="border: 2px solid #333; padding: 10px; background-color: ${backgroundColor}; color: white;">${eleccion.esCorrecta ? "Correcta" : "Incorrecta"}</td>`;
    recorridoHtml += '</tr>';
  });

  recorridoHtml += '</table>';

  Swal.fire({
    width: '1100px',
    html: recorridoHtml,
    icon: "info",
    customClass: {
      container: 'swal2-custom-container', // Clase personalizada para el contenedor
    },
  });

  // Reiniciar el array eleccionesUsuario después de mostrar el recorrido
  eleccionesUsuario = [];
}

let ayudaSolicitada = false;
let ayudaMostrada = false; // Variable para controlar si se ha mostrado el mensaje informativo

function ayuda() {
  if (!ayudaSolicitada) {
    // Si no se ha solicitado ayuda en esta pregunta
    ayudaSolicitada = true; // Marca la pregunta como "ayuda solicitada"

    // Si es la primera vez en esta ronda de preguntas, muestra el mensaje informativo
    if (!ayudaMostrada) {
      ayudaMostrada = true; // Marca el mensaje informativo como mostrado
      Swal.fire({
        title: "Mensaje Informativo",
        text: "Al aceptar la ayuda se descontarán 5 puntos de tu puntaje.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          // El usuario ha aceptado la ayuda, procede a descontar puntos
          descontarPuntos();
        }
      });
    } else {
      // Si no es la primera vez en esta ronda de preguntas, procede a descontar puntos directamente
      descontarPuntos();
    }
  } else {
    // Si la ayuda ya se solicitó en esta pregunta, muestra un mensaje al usuario
    Swal.fire({
      title: "Ayuda ya solicitada",
      text: "Ya has solicitado ayuda en esta pregunta.",
      icon: "info",
    });
  }
}

function descontarPuntos() {
  // Descuenta 5 puntos
  puntaje -= 5;

  // Verifica si el puntaje es menor que 0 para evitar puntajes negativos
  if (puntaje < 0) {
    puntaje = 0;
  }

  // Actualiza el puntaje mostrado en el HTML y cambia el color a rojo temporalmente
  const puntajeElement = document.getElementById("puntaje");
  puntajeElement.textContent = puntaje;

  // Verifica si el puntaje es mayor que 0 antes de aplicar la animación
  if (puntaje > 0) {
    // Aplica la animación de movimiento cuando el número se vuelve rojo
    puntajeElement.style.animation = "shake 0.5s"; // Agregamos una animación llamada "shake"
    // Cambia el color a rojo
    puntajeElement.style.color = "red";
    // Cuando finalice la animación, eliminamos la animación y restauramos el color original
    puntajeElement.addEventListener("animationend", () => {
      puntajeElement.style.animation = "";
      puntajeElement.style.color = ""; // Esto eliminará el estilo de color
    }, { once: true }); // La escuchamos solo una vez
  }

  Swal.fire({
    title: "Ayuda",
    text: objetoPregunta.ayuda,
    imageUrl: objetoPregunta.ayudaImg,
    imageHeight: 300,
  });
}
