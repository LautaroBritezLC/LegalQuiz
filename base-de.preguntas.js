function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = {
  Alquiler: [
    {
      pregunta: "¿A qué tipo de inmuebles no se aplica el plazo mínimo legal de 3 años en los contratos de locación según el artículo 1.199?",
      ayuda: "El artículo menciona excepciones al plazo mínimo. Piensa en actividades diplomáticas y otras opciones.",
      opciones: [
        "Sede de embajada o consulado",
        "Viviendas con fines turísticos",
        "Locaciones para la guarda de cosas",
        "Predios feriales",
      ],
      respuesta: "Sede de embajada o consulado",
      dificultad: "facil",
    },
    {
      pregunta: "¿Cuál es el plazo mínimo que debe cumplir un contrato de alquiler antes de que el inquilino pueda rescindirlo anticipadamente según el Artículo 1.198?",
      ayuda: "La ley establece condiciones para la rescisión anticipada.",
      opciones: ["3 meses", "6 meses", "1 año", "2 años"],
      respuesta: "6 meses",
      dificultad: "facil",
    },
    {
      pregunta: "¿Cuántos meses de alquiler debe pagar el locatario como indemnización si decide rescindir el contrato durante el primer año de vigencia de la relación locativa en Argentina?",
      ayuda: "La ley establece una indemnización específica para el primer año. ¿Cuántos meses de alquiler equivale?",
      opciones: ["1 mes", "1 mes y medio", "2 meses", "3 meses"],
      respuesta: "1 mes y medio",
      dificultad: "facil",
    },
    {
      pregunta: "¿Cuántos días de preaviso debe realizar el inquilino en el caso de locación de vivienda para no pagar indemnización?",
      ayuda: "la respuesta esta entre 30 y 90 dias",
      opciones: ["30 días", "60 días", "90 días", "120 días"],
      respuesta: "90 días",
      dificultad: "media",
    },
    {
      pregunta: "¿Qué consecuencias puede enfrentar un locador si no cumple con la obligación de declarar un contrato de locación según lo establecido en la ley 11.683?",
      ayuda: "La ley 11.683 trata sobre cuestiones tributarias y fiscales.",
      opciones: [
        "Recibir una notificación de la AFIP",
        "Ser multado",
        "Pagar al inquilino una compensación",
        "Ser desalojado del inmueble"
      ],
      respuesta: "Ser multado",
      dificultad: "media",
    },
    {
      pregunta: "¿Qué es la rescisión anticipada con causa en un contrato de alquiler?",
      ayuda: "Se relaciona con el incumplimiento del locador en mantener la vivienda en condiciones de habitabilidad acordadas.",
      opciones: [
        "Cuando el inquilino decide terminar el contrato sin motivo",
        "Cuando el locador decide aumentar el alquiler",
        "Cuando el inquilino quiere mudarse a una nueva ciudad",
        "Cuando el inquilino rescinde el contrato por incumplimiento del locador."
      ],
      respuesta: "Cuando el inquilino rescinde el contrato por incumplimiento del locador.",
      dificultad: "dificil",
    },
    {
      pregunta: "¿En una transacción en la que interviene solo un corredor, ¿qué deben hacer todas las partes en relación con la comisión del corredor segun el articulo 1.351?",
      ayuda: "El artículo 1.351 establece una regla sobre la comisión en tales casos.",
      opciones: [
        "Pagar comisión al corredor",
        "No pagar comisión al corredor",
        "Compartir la comisión entre las partes",
        "Depender del pacto previo entre las partes"
      ],
      respuesta: "Pagar comisión al corredor",
      dificultad: "dificil",
    },

  ],
  Honorarios: [
    {
      pregunta: "¿Qué son los contratos de honorarios en Argentina?",
      ayuda: "Los contratos de honorarios son acuerdos donde un profesional establece una tarifa por sus servicios, generalmente relacionados con asesoría legal, consultoría, servicios médicos, etc.",
      opciones: [
        "Documentos legales que regulan la compra de bienes raíces.",
        "Contratos de trabajo para empleados temporarios.",
        "Acuerdos entre empresas para la distribución de productos.",
        "Acuerdos donde un profesional fija una tarifa por sus servicios."
      ],
      respuesta: "Acuerdos donde un profesional fija una tarifa por sus servicios.",
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué plazo se establece para el pago de honorarios regulados judicialmente en Argentina segun el ARTÍCULO 54° de la Ley 27.423?",
      ayuda: "Se refiere al tiempo que las partes tienen para pagar los honorarios regulados por un tribunal.",
      opciones: [
        "30 días",
        "15 días",
        "5 días",
        "10 días"
      ],
      respuesta: "10 días",
      dificultad: "facil",
    },
    {
      pregunta: "¿Cuánto tiempo tiene un médico para reclamar el pago de sus honorarios médicos?",
      ayuda: "La prescripción es el tiempo límite en el que se puede reclamar el pago de honorarios médicos",
      opciones: [
        "Un año",
        "Dos años",
        "Tres años",
        "Cuatro años"
      ],
      respuesta: "Dos años",
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué consecuencias puede enfrentar un profesional si renuncia anticipadamente a sus honorarios segun el ARTÍCULO 5° de la Ley 27.423?",
      ayuda: "La Ley 27.423 regula los honorarios profesionales en Argentina.",
      opciones: [
        "Ser sancionado por el tribunal de disciplina",
        "Perder el derecho a cobrar honorarios",
        "Estar obligado a pagar honorarios adicionales",
        "No poder ejercer su profesión"
      ],
      respuesta: "Ser sancionado por el tribunal de disciplina",
      dificultad: "media",
    },

    {
      pregunta: "¿Qué ocurre con un asunto judicial si el profesional no ha cobrado sus honorarios segun el  ARTÍCULO 10° de la Ley 27.423?",
      ayuda: "Los honorarios profesionales deben ser pagados antes de que se considere concluido un asunto judicial.",
      opciones: [
        "El asunto judicial se suspende hasta que se paguen los honorarios.",
        "El asunto judicial se considera concluido, pero el profesional puede reclamar el pago de los honorarios.",
        "El asunto judicial se considera concluido, y el profesional no puede reclamar el pago de los honorarios.",
        "El asunto judicial se considera concluido, pero el profesional puede solicitar la ejecución de los honorarios."
      ],
      respuesta: "El asunto judicial se suspende hasta que se paguen los honorarios.",
      dificultad: "media",
    },
    {
      pregunta: "¿Quiénes son responsables de pagar los honorarios de los auxiliares de la justicia designados de oficio segun el ARTÍCULO 11° de la Ley 27.423?",
      ayuda: "Se refiere a quién tiene la responsabilidad de cubrir estos honorarios.",
      opciones: [
        "Solo la parte condenada en costas",
        "Cualquiera de las partes litigantes o terceros citados en garantía",
        "Solo la parte que contrató al auxiliar de la justicia",
        "Ninguna de las partes"
      ],
      respuesta: "Cualquiera de las partes litigantes o terceros citados en garantía",
      dificultad: "dificil",
    },
    {
      pregunta: "¿Cómo se regulan los honorarios de varios abogados o procuradores por una misma parte segun el ARTÍCULO 35° de la Ley 27.423?",
      ayuda: "Se refiere a la forma en que se determinan los honorarios en esta situación.",
      opciones: [
        "Se calculan como un solo monto, independientemente del trabajo realizado por cada profesional.",
        "Se calculan de manera individual, en función del trabajo realizado por cada profesional.",
        "Se calculan de manera proporcional al monto del juicio.",
        "Se calculan de manera proporcional al tiempo dedicado al caso."
      ],
      respuesta: "Se calculan de manera individual, en función del trabajo realizado por cada profesional.",
      dificultad: "dificil",
    },

  ],
  Alumnado: [
    {
      pregunta: "¿Cuál es el propósito principal de un contrato de alumnado?",
      ayuda: "Un contrato de alumnado tiene que ver con un ámbito educativo específico.",
      opciones: ["Obtener un préstamo", "Enseñar a estudiantes", "Comprar una casa", "Alquilar un coche"],
      respuesta: "Enseñar a estudiantes",
      dificultad: "facil",
    },
    {
      pregunta: "¿Cuál es el propósito principal de la Educación Permanente de Jóvenes y Adultos según el artículo 46 de la ley?",
      ayuda: "El artículo 46 se refiere a una modalidad educativa en Argentina.",
      opciones: [
        "Garantizar la educación de jóvenes y adultos sin límite de edad.",
        "Ofrecer educación sin alfabetización a adultos.",
        "Sancionar a quienes no completaron educación.",
        "Brindar educación a quienes completaron en edad reglamentaria."
      ],
      respuesta: "Garantizar la educación de jóvenes y adultos sin límite de edad.",
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué derecho tienen las personas migrantes sin DNI en Argentina segun el ARTICULO 141?",
      ayuda: "El artículo establece que el Estado nacional, las provincias y la Ciudad Autónoma de Buenos Aires están obligados a garantizar que estas personas migrantes tengan acceso a todos los niveles del sistema educativo argentino.",
      opciones: [
        "El derecho a la educación",
        "El derecho a la salud",
        "El derecho al trabajo",
        "El derecho a la vivienda"
      ],
      respuesta: "El derecho a la educación",
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué es la educación domiciliaria y hospitalaria según el artículo 60 de la ley?",
      ayuda: "El artículo 60 se refiere a una modalidad educativa en Argentina.",
      opciones: [
        "La modalidad de educación para alumnos que no pueden asistir a la escuela por razones de salud durante TREINTA (30) días corridos o más.",
        "Educación exclusiva en instituciones para alumnos enfermos.",
        "Educación en el hogar sin restricciones de tiempo.",
        "Educación en instituciones educativas para todos los alumnos."
      ],
      respuesta: "La modalidad de educación para alumnos que no pueden asistir a la escuela por razones de salud durante TREINTA (30) días corridos o más.",
      dificultad: "media",

    },
    {
      pregunta: "¿Cuál es el propósito principal de la Educación en Contextos de Privación de Libertad según el artículo 55 de la ley?",
      ayuda: "El artículo 55 se refiere a una modalidad educativa en Argentina.",
      opciones: [
        "Promover la formación integral de las personas privadas de libertad.",
        "Limitar el derecho a la educación de las personas privadas de libertad.",
        "Excluir a las personas privadas de libertad de la educación.",
        "Brindar educación solo a personas no privadas de libertad."
      ],
      respuesta: "Promover la formación integral de las personas privadas de libertad.",
      dificultad: "media",
    },
    {
      pregunta: "¿Quiénes están encargados de autorizar, reconocer y supervisar los servicios educativos de gestión privada en Argentina según el artículo 62?",
      ayuda: "El artículo 62 se refiere a la regulación de servicios educativos privados en el país.",
      opciones: [
        "Las autoridades educativas jurisdiccionales correspondientes.",
        "Las organizaciones privadas sin fines de lucro.",
        "El Ministerio de Educación de Argentina.",
        "El Congreso Nacional."
      ],
      respuesta: "Las autoridades educativas jurisdiccionales correspondientes.",
      dificultad: "dificil",
    },

    {
      pregunta: "¿Cuál es la razón por la que Educ.ar Sociedad del Estado está exenta de impuestos y gravámenes segun el ARTICULO 142?",
      ayuda: "Educ.ar Sociedad del Estado tiene un propósito social que va más allá de la búsqueda de lucro.",
      opciones: [
        "Porque es una empresa privada",
        "Porque es una institución pública",
        "Porque es una organización sin fines de lucro",
        "Porque es una organización educativa"
      ],
      respuesta: "Porque es una organización sin fines de lucro",
      dificultad: "dificil",
    },

  ],

  Adhesión: [
    {
      pregunta: "¿Qué es un contrato de adhesión?",
      ayuda: "Este término se refiere a un tipo específico de contrato.",
      opciones: [
        "Ambas partes negocian y establecen los términos.",
        "Un acuerdo donde una de las partes impone los términos y la otra debe aceptarlos sin negociación significativa.",
        "Contrato exclusivo para abogados.",
        "Utilizado solo en transacciones internacionales."
      ],
      respuesta: "Un acuerdo donde una de las partes impone los términos y la otra debe aceptarlos sin negociación significativa.",
      dificultad: "facil",
    },
    {
      pregunta: "¿Quién elabora las cláusulas de un contrato de adhesión?",
      ayuda: "En los contratos de adhesión, las cláusulas son creadas y redactadas por:",
      opciones: [
        "El adherente",
        "El proponente",
        "Un tercero",
        "Las partes de manera conjunta"
      ],
      respuesta: "El proponente",
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué autoridad tiene la responsabilidad de vigilar que los contratos de adhesión o similares no contengan ciertas cláusulas según el artículo 38?",
      ayuda: "El artículo 38 se refiere a la autoridad encargada de supervisar contratos de adhesión y cláusulas en formularios.",
      opciones: [
        "La AFIP",
        "La entidad bancaria",
        "La autoridad de aplicación",
        "El consumidor"
      ],
      respuesta: "La autoridad de aplicación",
      dificultad: "facil",
    },
    {
      pregunta: "¿Cuál es el efecto de las cláusulas abusivas en los contratos de adhesión?",
      ayuda: "Las cláusulas abusivas son aquellas que perjudican al consumidor en su posición de parte más débil en la relación contractual.",
      opciones: [
        "Son válidas y deben ser cumplidas por ambas partes.",
        "Son nulas y no tienen ningún efecto.",
        "Son válidas, pero pueden ser impugnadas por el consumidor.",
        "Son nulas, pero pueden ser ratificadas por el consumidor."
      ],
      respuesta: "Son nulas y no tienen ningún efecto.",
      dificultad: "media",
    },
    {
      pregunta: "¿Cuál es uno de los requisitos que debe incluirse en las operaciones financieras de consumo según el artículo 36?",
      ayuda: "El artículo 36 establece varios requisitos para estas operaciones.",
      opciones: [
        "La cantidad de pagos a realizar.",
        "El nombre del consumidor.",
        "El precio de mercado del bien o servicio.",
        "La dirección del proveedor."
      ],
      respuesta: "La cantidad de pagos a realizar.",
      dificultad: "media",
    },
    {
      pregunta: "¿Quiénes son responsables por los daños al consumidor causados por el vicio o riesgo de la cosa o la prestación del servicio según el artículo 40?",
      ayuda: "El artículo 40 establece la responsabilidad en caso de daños al consumidor.",
      opciones: [
        "Solo el productor y el fabricante.",
        "El productor, el fabricante, el importador y el distribuidor.",
        "El proveedor y el vendedor.",
        "El transportista y el vendedor."
      ],
      respuesta: "El productor, el fabricante, el importador y el distribuidor.",
      dificultad: "dificil",
      
    },
    {
      pregunta: "¿Qué medidas debe tomar otra autoridad nacional o provincial cuando los contratos requieran su aprobación según el artículo 39?",
      ayuda: "El artículo 39 se refiere a la modificación de contratos tipo a pedido de la autoridad de aplicación.",
      opciones: [
        "Ninguna, no está obligada a tomar medidas.",
        "Tomar medidas necesarias para modificar el contrato tipo a pedido de la autoridad de aplicación.",
        "Solicitar la aprobación de la autoridad de aplicación.",
        "Delegar la responsabilidad en la autoridad de aplicación."
      ],
      respuesta: "Tomar medidas necesarias para modificar el contrato tipo a pedido de la autoridad de aplicación.",
      dificultad: "dificil",
    },
  ],
  Servicios: [
    {
      pregunta: "¿Cuál es el propósito principal de los contratos de servicios en Argentina?",
      ayuda: "Estos contratos se relacionan con actividades que no involucran bienes tangibles.",
      opciones: [
        "Documentos legales para comprar propiedades.",
        "Contratos para la venta de bienes.",
        "Acuerdos para la adquisición de vehículos.",
        "Acuerdos que implican la prestación de un servicio sin bienes tangibles a cambio de una compensación."
      ],
      respuesta: "Acuerdos que implican la prestación de un servicio sin bienes tangibles a cambio de una compensación.",
      dificultad: "facil",
    },

    {
      pregunta: "¿Cuál de los siguientes contratos corresponde a un contrato de servicios?",
      ayuda: "Busca el contrato relacionado con la prestación de un servicio.",
      opciones: [
        "Contrato de alquiler de una vivienda.",
        "Contrato de compraventa de un automóvil.",
        "Contrato de préstamo financiero.",
        "Contrato de servicios de limpieza."
      ],
      respuesta: "Contrato de servicios de limpieza.",
      dificultad: "facil",
    },

    {
      pregunta: "¿Qué implica un contrato de obra o de servicios según el art. 1251 del CCyC en Argentina?",
      ayuda: "Un contrato de obra o de servicios involucra ciertas obligaciones entre las partes.",
      opciones: [
        "Realizar una obra o servicio de forma gratuita.",
        "Actuar de manera independiente sin obligaciones contractuales.",
        "Comprometerse a favor de otra parte a realizar una obra o proveer un servicio a cambio de una retribución.",
        "Proveer servicio sin esperar retribución alguna."
      ],
      respuesta: "Comprometerse a favor de otra parte a realizar una obra o proveer un servicio a cambio de una retribución.",
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué comparten los contratos de servicios y las relaciones laborales en Argentina?",
      ayuda: "Ambas figuras tienen similitudes en ciertos aspectos.",
      opciones: [
        "Ambos involucran la promesa de un resultado eficaz.",
        "En ambos casos, no hay obligación de hacer por parte de ninguna de las partes.",
        "Tanto los contratos de servicios como las relaciones laborales implican una obligación de hacer.",
        "Ninguna de las anteriores."
      ],
      respuesta: "Tanto los contratos de servicios como las relaciones laborales implican una obligación de hacer.",
      dificultad: "media",
    },
    {
      pregunta: "¿Qué sucede con un contrato de servicios en caso de la muerte del contratista según el artículo 1260 del CCyC?",
      ayuda: "El artículo 1260 establece las consecuencias en caso de la muerte del contratista.",
      opciones: [
        "El contrato se mantiene vigente sin cambios.",
        "El contrato se extingue automáticamente.",
        "El contrato se extingue a menos que el comitente acuerde continuar con los herederos del contratista.",
        "El comitente debe pagar una multa por la muerte del contratista."
      ],
      respuesta: "El contrato se extingue a menos que el comitente acuerde continuar con los herederos del contratista.",
      dificultad: "media",
    },
    {
      pregunta: "¿Cómo se determina el precio en los contratos de servicios según el artículo 1255 del CCyC?",
      ayuda: "El artículo 1255 establece cómo se fija el precio en estos contratos.",
      opciones: [
        "El precio se fija exclusivamente por decisión judicial.",
        "Se determina por contrato, ley, usos o, en su defecto, decisión judicial.",
        "Se establece siempre de acuerdo con las leyes arancelarias.",
        "El precio se determina únicamente por los usos comerciales."
      ],
      respuesta: "Se determina por contrato, ley, usos o, en su defecto, decisión judicial.",
      dificultad: "dificil",
    },
    {
      pregunta: "Según el Artículo 1254 del CC y C de Argentina, ¿qué permite al contratista o prestador de servicios?",
      ayuda: "El artículo establece las condiciones bajo las cuales el contratista puede valerse de terceros para ejecutar el servicio.",
      opciones: [
        "Subcontratar el servicio sin restricciones.",
        "Valerse de terceros solo si es más económico.",
        "Valerse de terceros solo si es especializado.",
        "Valerse de terceros solo si de lo estipulado resulta que fue elegido por sus cualidades."
      ],
      respuesta: "Valerse de terceros solo si de lo estipulado resulta que fue elegido por sus cualidades para realizarlo personalmente en todo o en parte.",
      dificultad: "dificil",
    }
  ]
};



