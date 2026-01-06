import type { ThinkingArticleType } from "../thinking.types"

const slug = "entendiendo-wcag-2-2"
const path = "/images/thinking/articles"

export const ComprendiendoWCAG: ThinkingArticleType = {

    slug: slug,
    title: "Comprendiendo WCAG 2.2",
    author: "Teegan Lincoln",
    authorAvatar: "/images/staff/avatars/teegan-lincoln.webp",
    date: "18 Setiembre 2025",
    tags: ["Accesibilidad", "Desarrollo"],
    duration: 6,
    description: "WCAG 2.2 incorpora nueve nuevos criterios de accesibilidad, varios de ellos enfocados en barreras cognitivas y de aprendizaje. Estos cambios conllevan planes más claros para crear sitios web que no dejen a los usuarios perdidos ni atascados.",
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                variant: "text",
                subVariant: "text",
                text: "Desde su lanzamiento el 5 de octubre de 2023, las Pautas de Accesibilidad al Contenido Web (WCAG) 2.2 han ofrecido 9 nuevas recomendaciones para crear una web más accesible. Esta actualización fue bienvenida, 5 años después del último lanzamiento de las WCAG 2.1 . ",
            },
            {
                variant: "text",
                subVariant: "text",
                text: "Aproximadamente la mitad del nuevo contenido se centra en ayudar a las personas con discapacidades cognitivas, del lenguaje y del aprendizaje, y esta última versión proporciona algunas recomendaciones muy necesarias y útiles para los desarrolladores que buscan mejorar la accesibilidad de sus sitios web y aplicaciones.",
            },
            {
                variant: "text",
                subVariant: "text",
                text: "En esta publicación, repasaremos los nuevos criterios de éxito y brindaremos algunas sugerencias sobre cómo cumplirlos mejor.",
            },
        ],
        section: [
            {
                title: "2.4.11 Enfoque no oscurecido (mínimo) (AA) y 2.4.12 Enfoque no oscurecido (mejorado) (AAA)",
                description: [
                    {
                        text: "Imagina intentar usar un sitio web con el ratón, pero el puntero es invisible. Sería frustrante rápidamente, ¿verdad? Y esa es la realidad para los usuarios videntes que dependen de tecnologías de asistencia distintas del ratón, como el teclado, un interruptor de habilidad o la entrada de voz, al navegar por sitios web que no cumplen los criterios WCAG de Enfoque No Obscuro.",
                    },
                    {
                        text: "Estos criterios exigen que todos los componentes de la interfaz de usuario, como entradas de formulario, botones y enlaces, sean al menos parcialmente visibles (AA) o completamente visibles (AAA) al recibir el foco del teclado. Los indicadores de foco suelen quedar ocultos por contenido creado por el autor, como ventanas emergentes, encabezados/pies de página fijos o banners de cookies, lo que puede dificultar enormemente la navegación con el teclado. Los usuarios del teclado necesitan poder ver qué elemento está enfocado y saber dónde se encuentran, y los criterios WCAG 2.4.11 y 2.4.12 buscan mejorar esto.",
                    },
                ],
            },
            {
                title: "2.4.13 Apariencia de enfoque (AAA)",
                description: [
                    {
                        text: "Los cambios menores en la apariencia visual de un elemento enfocado pueden pasar desapercibidos fácilmente, especialmente para personas con discapacidad visual. El objetivo de este criterio es mejorar la visibilidad de un indicador de enfoque, garantizando que se muestre con un tamaño y una relación de contraste de color adecuados.",
                    },
                    {
                        text: "Para cumplir con el nivel más alto de cumplimiento de WCAG, deberá asegurarse de que todos los indicadores de enfoque tengan al menos un tamaño igual a un perímetro de 2 px de espesor del objetivo desenfocado, lo que se puede lograr simplemente teniendo un contorno de 2 px en el enfoque del objetivo.",
                    },
                    {
                        text: "Además del tamaño del perímetro, el indicador de enfoque también debe cumplir con la relación de contraste mínima de 3:1 (la misma relación de contraste especificada en 1.4.11 Contraste sin texto (AA) ), con el objetivo de garantizar que el indicador de enfoque se destaque lo suficiente sobre su color de fondo.",
                    },
                ],
            },
            {
                title: "2.5.7 Movimientos de arrastre (AA)",
                description: [
                    {
                        text: "Arrastrar puede ser un gesto complejo para quienes tienen dificultades con la motricidad fina y un verdadero desafío para quienes utilizan dispositivos de entrada especializados, como punteros de cabeza o emuladores de ratón controlados por voz. Al igual que los criterios WCAG 2.5.1 sobre Gestos del Puntero , introducidos en WCAG 2.1, Movimientos de Arrastre (AA) anima a los desarrolladores y diseñadores a ofrecer métodos alternativos de interacción que no dependan del gesto de arrastrar.",
                    },
                    {
                        text: "Este criterio exige que toda funcionalidad que utilice arrastre (operación en la que el puntero se acopla a un elemento al presionar el botón hacia abajo y este lo sigue hasta presionar el botón hacia arriba ) se pueda lograr con un solo puntero, como un clic del ratón o un dedo en una pantalla táctil. Un ejemplo de funcionalidad alternativa para cumplir este criterio sería añadir flechas para ir al elemento anterior o siguiente de un carrusel o control deslizante con un solo clic.",
                    },
                ],
            },
            {
                title: "2.5.8 Tamaño del objetivo (mínimo) (AA)",
                description: [
                    {
                        text: "¿Alguna vez has intentado hacer clic en un enlace diminuto en tu teléfono y has hecho clic en otro justo al lado? Puede que empieces a sentirte incómodo por el tamaño de tus dedos, ¡pero no desesperes! La culpa no son tus falanges, sino el tamaño del enlace. ",
                    },
                    {
                        text: "Para las personas sin discapacidad, esto puede ser muy frustrante, pero para quienes tienen dificultades con el control motor fino, es una barrera legítima para acceder. El criterio 2.5.8 exige que todos los objetivos que acepten un evento de puntero (como un clic) tengan un tamaño mínimo de 24 píxeles de ancho por 24 píxeles de alto. ",
                    },
                    {
                        text: "Esto se añadió para complementar su equivalente AAA, el criterio 2.5.5 'Tamaño del Objetivo (Mejorado)', añadido en WCAG 2.1, que exige que los objetivos tengan al menos 44 px de ancho por 44 px de alto. Hay algunas excepciones a esta regla, como si el objetivo aparece en línea y está limitado por la altura de línea de su elemento principal. En resumen, es excelente ver criterios AA para el tamaño del objetivo en esta versión de WCAG.",
                    },
                ],
            },
            {
                title: "3.2.6 Ayuda consistente (A)",
                description: [
                    {
                        text: "Un aspecto importante del diseño y desarrollo web accesible es el concepto de coherencia entre varias páginas. Imagina que navegas por un sitio web y la posición del menú principal cambia entre páginas. Tendrías que buscarlo constantemente para encontrar la información que buscas... una experiencia bastante deficiente, ¿verdad? Pues bien, la navegación principal no es la única información importante que debe estar ubicada de forma coherente, y eso es lo que el criterio 3.2.6 de ayuda coherente intenta abordar.",
                    },
                    {
                        text: "Si un sitio web contiene los siguientes mecanismos de ayuda y se repiten en varias páginas, el criterio 3.2.6 requiere que los mecanismos aparezcan en el mismo orden en relación con el resto del contenido de la página de forma predeterminada. ",
                    },
                    {
                        text: "Estos mecanismos de ayuda son:",
                    },
                    {
                        subVariant: "list",
                        text: [
                            "Datos de contacto humano",
                            "Mecanismo de contacto humano",
                            "Opción de autoayuda",
                            "Un mecanismo de contacto totalmente automatizado",
                        ],
                    },
                    {
                        text: "Por ejemplo, si su sitio web incluye información de contacto en el pie de página de la página de inicio, en la barra lateral de la página 'Acerca de', debajo del héroe en la página de servicios, etc., deberá moverla a una ubicación coherente para cumplir con este criterio. La coherencia ayuda al usuario a predecir dónde estará el contenido, incluso en páginas con diferentes diseños.",
                    },
                ],
            },
            {
                title: "3.3.7 Entrada redundante (A)",
                description: [
                    {
                        text: "A nadie le gusta tener que volver a introducir, de forma tediosa, el contenido que ya ha proporcionado en un formulario o perfil, y para algunas personas con discapacidades cognitivas, puede resultar difícil o imposible recordar lo que introdujeron anteriormente. Esto podría representar un obstáculo importante para que los usuarios completen tareas de varios pasos.",
                    },
                    {
                        text: "El criterio 3.3.7 de entrada redundante busca facilitar a los usuarios la realización de procesos de varios pasos sin requerir memoria de trabajo a corto plazo, al exigir que la información no se introduzca más de una vez dentro de la misma actividad. Si se requiere información de nuevo, esta debe estar precargada o disponible para que el usuario la seleccione. Existen algunas excepciones, como cuando la reintroducción de contenido es crucial para garantizar su seguridad.",
                    },
                ],
            },
            {
                title: "3.3.8 Autenticación accesible (mínima) (AA) y 3.3.9 Autenticación accesible (mejorada) (AAA)",
                description: [
                    {
                        text: "¿Cansado de hacer clic en los cuadrados que contienen autobuses o de resolver un problema de matemáticas para demostrar que no eres un robot? Los procesos de autenticación que utilizan pruebas de función cognitiva, como resolver rompecabezas o recordar contraseñas, pueden ser difíciles o imposibles de completar para usuarios con discapacidades cognitivas.",
                    },
                    {
                        text: "Tanto el criterio 3.3.8 como el 3.3.9 exigen que se proporcione un método de autenticación alternativo que no dependa de pruebas de función cognitiva, o que se ponga a disposición un mecanismo para ayudar al usuario a completar la prueba de función cognitiva. Un ejemplo de esto último es la compatibilidad con gestores de contraseñas que permitan introducir nombres de usuario y contraseñas sin necesidad de memorizarlos.",
                    },
                    {
                        text: "Vale la pena señalar que el nivel de cumplimiento AA todavía permite realizar pruebas de función cognitiva en forma de:"
                    },
                    {
                        subVariant: "list",
                        text: ["Contenido personal: identificación de contenido no textual proporcionado por el usuario, como imágenes y emoticones.", "Reconocimiento de objetos: lo siento, detractores de Bus Square."]
                    },
                ],
            },
            {
                title: "Conclusión",
                description: [
                    {
                        text: "WCAG 2.2 ha añadido mejoras muy necesarias a las directrices, especialmente para personas con discapacidades cognitivas. Es positivo saber que la especificación continúa creciendo y adaptándose a un panorama en constante evolución para facilitar una web más accesible.",
                    },
                ],
            },
        ]
    },
}