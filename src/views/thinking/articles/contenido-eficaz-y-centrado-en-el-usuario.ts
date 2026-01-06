import type { ThinkingArticleType } from "../thinking.types"

const slug = "contenido-eficaz-y-centrado-en-el-usuario"
const path = "/images/thinking/articles"

export const ContenidoEficazYCentradoEnElUsuario: ThinkingArticleType = {

    slug: slug,
    title: "Como escribir contenido eficaz y centrado en el usuario",
    author: "Niaal Holder",
    authorAvatar: "/images/staff/avatars/niaal-holder.webp",
    date: "19 Febrero 2023",
    tags: ["Redacción publicitaria", "Experiencia de usuario"],
    duration: 6,
    description: "Escribir bien no siempre es escribir bien para la web. Este artículo explica cómo escribir contenido web claro, útil y orientado al usuario que realmente funcione, desde ir directo al grano hasta escribir para personas reales, no solo para motores de búsqueda.",
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                text: "Ser un buen escritor no significa que puedas escribir buen contenido web",
            },
            {
                text: "Esto es algo que muchas empresas no anticipan cuando deciden escribir el texto de su propio sitio web, lo que a menudo resulta en retrasos en el proyecto, o incluso en una lucha de último momento para preparar contenido que puede o no dar en el blanco.",
            },
            {
                text: "El contenido web ya no es lo que era (como en los 90). Escribir para la web es una disciplina en sí misma hoy en día, que toma elementos del diseño, la ergonomía (usabilidad), el marketing y la psicología, y requiere un buen conocimiento de las tecnologías web. Y se necesita tiempo para escribir algo decente, sobre todo si se empieza con un lienzo en blanco y un briefing impreciso.",
            },
            {
                text: "Dicho esto, es fácil adquirir habilidades de escritura web si ya dominas los fundamentos de una buena redacción. Supongamos que ya dominas la gramática y la composición básica. Así es como te recomendamos abordar tu próximo proyecto de contenido web, especialmente si te encargan escribir además de tu carga de trabajo habitual.",
            },
            {
                variant: "multimedia",
                subVariant: "image",
                image: "img.webp",
                imageDescription: "Diseño orientado a la simplicidad y la legibilidad. Ambos ejemplos (arriba) se tomaron de páginas de inicio, pero el de la derecha tiene más probabilidades de captar la atención del usuario."
            },
        ],
        section: [
            {
                title: "Vaya al grano de forma rápida y clara",
                description: [
                    {
                        text: "Primero, identifica el propósito de la página o sección que estás escribiendo. Los usuarios suelen tener tiempo para leer el 20% de una página , dado el tiempo que suelen permanecer en ella. Las páginas visualmente atractivas (como las páginas de inicio y las páginas de destino) requieren contenido simple, legible y de fácil comprensión, con llamadas a la acción claras. Para artículos destacados y documentos técnicos, puedes incluir más palabras, siempre que sean concisos.",
                    },
                    {
                        text: "Nota: Ser conciso no significa omitir detalles clave ni escribir sin personalidad. Significa ofrecer lo justo para transmitir el mensaje sin perderlo con palabras superficiales o información innecesaria.",
                    },
                    {
                        text: 'Estructura tu contenido de forma que ofrezcas lo esencial desde el principio y desarrolles los detalles más adelante. Este estilo de "pirámide invertida" se considera la mejor práctica para la web, ya que favorece tanto a los lectores con alta atención como a los que la tienen baja.',
                    },
                    {
                        text: 'Hablar de crear experiencias de usuario "deliciosas" en realidad es hostil al usuario cuando presupone erróneamente que su cliente desea involucrarse emocionalmente con su servicio.Lo rápido y lo invisible son a menudo las mejores partes del deleite. — Erika Hall 🌎 (@mulegirl) 16 de mayo de 2018',
                    },
                    {
                        text: "Mira más allá de la tasa de rebote. Los visitantes abandonan una página por diversos motivos. A veces no encuentran la información que necesitan (simplemente no está disponible). A veces no se molestan en buscar (porque el contenido es demasiado detallado). Pero otras veces simplemente encuentran lo que buscan y se van sabiendo que eres una marca que no les engañará .",
                    },
                ]
            },
            {
                title: "Apreciar la experiencia general del usuario",
                description: [
                    {
                        text: "Para cualquier contenido que escribas, debes plantearte estas tres preguntas clave:",
                    },
                    {
                        subVariant: "list",
                        text: [
                            "¿Qué intenta hacer el usuario cuando ve este texto?",
                            "¿Qué necesitan saber para lograrlo?",
                            "¿Cuál es la mejor manera de darles esa información?",
                        ],
                    },
                    {
                        text: "Este enfoque se aplica al texto destinado a cualquier parte de su sitio web (páginas de inicio, páginas internas, páginas de índice, llamadas a la acción, microtexto de formularios, avances, eslóganes, descripciones, pies de foto, texto alternativo y más), así como a sus canales externos. Recuerde que está escribiendo para personas que, independientemente de la intensidad y duración, interactúan con usted para obtener información.",
                    },
                    {
                        text: "A veces, las respuestas serán obvias. Otras veces, requerirán más datos, investigación, comprensión de la psicología del usuario o pruebas para ver qué funciona mejor. Recuerda que siempre puedes consultar con los diseñadores, expertos en experiencia de usuario y profesionales de marketing que trabajan contigo en el proyecto: crear contenido eficaz y centrado en el usuario se logra mejor en equipo.",
                    },
                ]
            },
            {
                title: "Escribe primero para las personas, después para los robots",
                description: [
                    {
                        text: "No ignores las buenas prácticas de SEO , pero ten en cuenta que es posible excederse con el tono de tu texto. Al fin y al cabo, lo que buscas es convertir a una persona, no a un rastreador de motores de búsqueda.",
                    },
                    {
                        text: "Esto no significa que el contenido aburrido y robótico necesariamente fracase. Más bien, podría fracasar al compararlo con otros sitios y marcas (es decir, la competencia) que resultan más cercanos y, por lo tanto, más confiables.",
                    },
                    {
                        text: "Ofrezca a su público humano contenido comprensible, que les hable como personas. Conozca las subculturas, microculturas y tendencias relevantes —lo que les importa a sus lectores— y utilice un lenguaje con el que se sientan identificados.",
                    },
                    {
                        variant: "multimedia",
                        subVariant: "image",
                        image: "img.webp",
                        imageDescription: "¿Tu contenido se ajusta a su propósito y respeta a su audiencia? Escribir textos que conecten con la audiencia también implica estar al tanto de la actualidad, valorar la impresión que transmites y reflexionar sobre los valores que expresas entre líneas. Fuente: “Presupuesto 2018 para Millennials”, William Buck."
                    },
                ]
            },
            {
                title: "Consulte a un equipo de revisión diverso",
                description: [
                    {
                        text: 'También conocido como "No seas sordo a los tonos". Cuando las empresas fracasan con el contenido, generalmente se debe a que:',
                    },
                    {
                        subVariant: 'list',
                        text: [
                            "No lograron demostrar que entendían a su audiencia,",
                            "no pudieron entregar la información o su mensaje, o",
                            "no lograron mantener su autoridad y credibilidad en su campo.",
                        ],
                    },
                    {
                        text: "Lo que dificulta tanto este aspecto de la escritura web es la necesidad de mantener una perspectiva más allá de la tarea en cuestión. Cuando estás hiperconcentrado en la redacción, puede ser difícil evaluar tu trabajo objetivamente. Necesitarás un equipo diverso de revisores para garantizar que el texto final sea perfecto.",
                    },
                    {
                        text: "Una cosa es escribir un texto conciso y otra muy distinta es apreciar la conversación general que lo rodea. Pensar solo en la campaña, el proyecto o la página que tienes delante, junto con colegas con ideas afines, inevitablemente dificultará la incorporación de perspectivas transversales y vitales, como los valores cambiantes de la sociedad, las expectativas del público sobre tu sector o cualquier error previo que la gente aún asocie con tu marca.",
                    },
                ]
            },
            {
                title: "El diseño del arnés como herramienta para contar historias",
                description: [
                    {
                        text: "Al escribir, tómate un momento para apreciar la apariencia de tu contenido. A simple vista, ¿la apariencia de la página te motiva a prestar más atención? ¿Los fragmentos de información son fácilmente identificables y legibles, o te encuentras con un montón de texto?",
                    },
                    {
                        text: "(Tradicionalmente, imaginamos las paredes de texto como largas franjas de palabras sin párrafos, sin embargo, largas franjas de párrafos uniformes también pueden parecer paredes sin interés).",
                    },
                    {
                        text: "Las palabras son muy útiles por sí solas, pero puedes aumentar la interacción del usuario y el impacto de tu mensaje añadiendo elementos visuales. El contenido informativo puede ser tan simple como un cuerpo de texto y una galería de imágenes, pero al combinar imágenes, color, diseño y texto, puedes contar tu historia de una forma más rica e interesante.",
                    },
                    {
                        variant: "multimedia",
                        subVariant: "image",
                        image: "img.webp",
                        imageDescription: "Flower Bros combina dirección de arte y contenido para una página de inicio colorida y de gran impacto."
                    },
                    {
                        text: "Limitarse a un entorno prediseñado (como una plantilla de blog) no excluye este enfoque de tu conjunto de herramientas. Considera cómo tus encabezados, estilos de texto (negrita, cursiva, etc.), listas, separadores, citas destacadas y cualquier otro medio visual (como tarjetas de Twitter o vídeos incrustados) podrían ayudarte a presentar mejor tu contenido.",
                    },
                ]
            },
            {
                title: "Escriba de forma inclusiva (es decir, mantenga la legibilidad y la accesibilidad)",
                description: [
                    {
                        text: 'Piensa en el significado que tus palabras podrían tener para un lector que no las ve. ¿Dónde están el "menú de la izquierda" y el "botón de abajo" si eliminas los elementos visuales?',
                    },
                    {
                        text: "Ahora pensemos en lectores con discapacidades cognitivas, capacidad de lectura elemental, baja fluidez lingüística o baja fluidez tecnológica: ¿cómo podría explicar eficazmente un nuevo concepto, un requisito técnico o un cambio de infraestructura de una manera significativa?",
                    },
                    {
                        text: 'Incluso sin las estadísticas vigentes sobre accesibilidad , es prácticamente seguro que todos los usuarios experimentarán una "discapacidad" en algún momento de sus vidas.',
                    },
                    {
                        variant: "multimedia",
                        subVariant: "image",
                        image: "img.webp",
                        imageDescription: "Puede que tu escritura no cubra todas las situaciones, pero un esfuerzo razonable ampliará el alcance y la utilidad de tu trabajo. Fuente: “Inclusivo 101”, Microsoft Design."
                    },
                    {
                        text: "Casi nunca te pedirán que hagas que la información sea más complicada o más difícil de entender, así que hazle un favor a tus lectores: aprende a escribir contenido accesible , explica los conceptos esenciales lo más sencillamente posible, usa una terminología consistente, vincula tus puntos de forma lógica y asegúrate de que todo tu contenido siga una estructura y un flujo sensatos.",
                    },
                ]
            },
            {
                title: "En resumen…",
                description: [
                    {
                        subVariant: 'list',
                        text: [
                            "Ve al grano. No engañes a los lectores.",
                            "Escribe con un propósito: decirles a los usuarios lo que necesitan saber para hacer lo que quieren",
                            "Diríjase primero a su audiencia humana y después a los robots de los motores de búsqueda.",
                            "Antes de publicar, haga que una amplia gama de personas revise su contenido.",
                            "Considere cómo aparece su contenido para los lectores visuales.",
                            "Escriba de forma inclusiva para llegar a un público más amplio.",
                        ],
                    },
                ]
            },
        ]
    }
}