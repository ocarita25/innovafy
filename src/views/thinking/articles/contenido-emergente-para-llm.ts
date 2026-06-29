import { thinkingImgCLOUD } from "@/constants/resources"
import type { ThinkingArticleType } from "../thinking.types"

const slug = "contenido-emergente-para-llm"
const path = `${thinkingImgCLOUD}/${slug}`

export const ContenidoEmergenteParaLLM: ThinkingArticleType = {

    slug: slug,
    title: "Contenido emergente para LLM",
    author: "Alistair Hinchliffe",
    authorAvatar: "/images/staff/avatars/alistair-hinchliffe.webp",
    date: "26 Agosto 2025",
    tags: ["SEO", "Redacción publicitaria"],
    duration: 7,
    description: "GEO se centra en programas de maestría en derecho (LLM) y asistentes de IA que resumen, sintetizan o responden directamente a las preguntas de los usuarios. Concéntrese en contenido de alta calidad y un profundo conocimiento de su tema para mantenerse relevante en el nuevo mundo de la búsqueda de LLM.",
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                text: "Desde la década de 1990, el proceso de búsqueda y descubrimiento en la web ha estado bien establecido y es algo predecible: escribe contenido relevante, mantén tus metadatos bajo control y permite que los robots de los motores de búsqueda rastreen tu sitio. Esto dio origen a un nicho industrial completamente nuevo, la optimización de motores de búsqueda (SEO), donde la tecnología y el marketing se superponen",
            },
            {
                text: "Sin embargo, el auge de la inteligencia artificial (IA), los grandes modelos de lenguaje (LLM) y las experiencias de búsqueda generativa están revolucionando rápidamente el mundo del SEO. Mientras que antes los motores de búsqueda canalizaban a los usuarios a sitios web como fuente de información, las plataformas basadas en IA ahora extraen datos de multitud de fuentes y los procesan en una única respuesta seleccionada. Esto proporciona al usuario una experiencia de búsqueda prácticamente sin clics: obtiene respuestas sin necesidad de salir de la página de búsqueda.",
            },
            {
                text: "De este modo, el SEO da paso a la Optimización Generativa de Motores (GEO), el proceso de optimizar su contenido para su uso en motores de búsqueda impulsados ​​por IA.",
            },
            {
                variant: "multimedia",
                subVariant: "image",
                image: `${path}/figure-1.webp`,
                imageDescription: "Las visitas a la página humaan.com a través de ChatGPT como referente experimentaron un fuerte aumento a mediados de año."
            },
        ],
        section: [
            {
                title: "Por qué la optimización de motores generativos (GEO) es importante hoy en día",
                description: [
                    {
                        text: "A medida que más usuarios recurren a las herramientas de IA, la optimización generativa de motores (GEO) permite que su sitio web se mantenga visible a medida que avanzamos hacia experiencias de búsqueda que ya no dirigen el tráfico a fuentes individuales. Mientras que el SEO se centraba en la posición de su oferta digital en los resultados de búsqueda, la GEO se centra en ser una fuente confiable a la que los modelos de IA generativa recurrirán.",
                    },
                    {
                        text: "Sin embargo, esto no significa que puedas abandonar tus antiguas prácticas de SEO. GEO es simplemente SEO con funciones adicionales: ha madurado y ya no se conforma solo con palabras clave; exige un mayor nivel de calidad en el lenguaje natural y el conocimiento del tema. En 2025, posicionarse bien en Bing y Google es la mejor manera de ser referenciado por los motores de búsqueda basados ​​en IA.",
                    },
                    {
                        text: "GEO se centra en programas de maestría en derecho (LLM) y asistentes de IA que resumen, sintetizan o responden directamente a las preguntas de los usuarios sin necesidad de enlaces a sitios web externos (a menos que sean muy relevantes). Aunque el panorama tecnológico cambia rápidamente, los LLM actuales aún utilizan las API de búsqueda de los principales buscadores, priorizando a menudo contenido de alta calidad con explicaciones claras y un formato fácil de entender.",
                    },
                    {
                        variant: "multimedia",
                        subVariant: "image",
                        image: `${path}/figure-2.webp`,
                        imageDescription: "Las fuentes de búsqueda impulsadas por IA obtienen información de toda la web y la procesan para ofrecer una respuesta personalizada para el usuario."
                    },
                ]
            },
            {
                title: "Cómo preparar su sitio web para GEO",
                description: [
                    {
                        text: "Aprovechar lo mejor de sus prácticas de SEO y mejorarlas con estrategias que tengan en cuenta LLM aumentará la probabilidad de que su contenido permanezca visible en la era de la búsqueda impulsada por IA.",
                    },
                ],
                subSection: [
                    {
                        title: "Sea visible donde la IA busca datos",
                        content: [
                            {
                                text: "Los motores de búsqueda con IA son agregadores y preprocesadores de contenido. Es poco probable que te citen si solo te mencionan en un blog o directorio web especializado. Piensa en dónde obtienen sus datos los motores de búsqueda con IA (listas, blogs, sitios de reseñas, mapas) y expande tu presencia digital en estas plataformas. Contacta con periodistas y autores, comparte tu contenido con todos y mantén una buena gestión del marketing digital para obtener la máxima visibilidad."
                            },
                        ]
                    },
                    {
                        title: "Renderizar contenido del lado del servidor",
                        content: [
                            {
                                text: "Los LLM no pueden renderizar Javascript, lo que significa que cualquier contenido que se renderice en los dispositivos de los usuarios es prácticamente invisible. Es probable que la mayoría de los rastreadores de IA, que dependen de texto e imágenes estáticos para obtener información, pasen por alto el contenido que solo contiene Javascript, como el que presentan los sitios creados en marcos como React o Next.js. Asegúrate de que todo tu contenido principal exista en archivos estáticos o se sirva con renderizado del lado del servidor para que los LLM puedan seguir siendo detectables y legibles"
                            },
                        ]
                    },
                    {
                        title: "Mantenga su contenido actualizado",
                        content: [
                            {
                                text: "Los modelos de IA son extremadamente sensibles a la frescura del contenido, es decir, a la fecha de publicación. Para verificarlo, probamos 10 búsquedas diferentes con 3 modelos distintos: Perplexity, Gemini y ChatGPT."
                            },
                            {
                                text: "Nuestras consultas de búsqueda:"
                            },
                            {
                                subVariant: "list",
                                text: [
                                    "el mejor software de gestión de proyectos",
                                    "el mejor software antivirus",
                                    "el mejor software de diseño gráfico",
                                    "el mejor software de contabilidad",
                                    "el mejor software de gestión de relaciones con los clientes",
                                    "el mejor software de edición de vídeo",
                                    "El mejor software de marketing por correo electrónico",
                                    "el mejor software de colaboración",
                                    "el mejor software de visualización de datos",
                                    "el mejor software de almacenamiento en la nube",
                                ]
                            },
                            {
                                text: "Las fuentes citadas en cada modelo de IA variaron drásticamente, a pesar de que Perplexity y ChatGPT utilizan la API de Bing para buscar información."
                            },
                            {
                                subVariant: 'list',
                                text: [
                                    "Perplejidad sobre fuentes citadas en promedio con una ventana de publicación de 2,4 meses .",
                                    "ChatGPT citó en promedio fuentes con una ventana de publicación de 5,4 meses .",
                                    "Géminis citó en promedio fuentes con una ventana de publicación de 6,2 meses .",
                                ]
                            },
                            {
                                text: "Aunque buscábamos específicamente información actualizada (en este caso, el “mejor” software para un propósito determinado, que puede cambiar cada año), nuestros resultados demuestran que la actualidad y la actualidad son criterios clave en la experiencia de búsqueda generativa."
                            },
                        ]
                    },
                    {
                        title: "Aparecer en resúmenes notables",
                        content: [
                            {
                                text: "Aparecer en listas de resultados de alto perfil, una estrategia reconocida en marketing de marca y producto, así como en SEO, se considera ahora una buena práctica de geolocalización. En nuestras investigaciones, hemos descubierto que las fuentes citadas de ChatGPT y Google Gemini tienden a correlacionarse casi exactamente con los 10 primeros resultados de búsqueda de su motor de búsqueda preferido. ¡Tiene sentido, pensándolo bien!"
                            },
                        ]
                    },
                    {
                        title: "Centrarse en el contenido de formato largo",
                        content: [
                            {
                                text: "Muchos propietarios de sitios web se quejan de que las vistas generales de IA de Google reducen su tráfico de clics. Sin embargo, en la mayoría de los casos, los clics perdidos se deben a consultas de bajo valor que solo requieren respuestas rápidas y sencillas, algo que la IA gestiona de maravilla."
                            },
                            {
                                text: "Intentar competir con la IA en este frente es una batalla perdida. En su lugar, recomendamos centrarse en publicar contenido extenso y de alta calidad, enriquecido con la perspectiva de expertos que solo usted puede ofrecer. Este retorno a una estrategia de contenido centrada en el usuario, que valora la información reflexiva y de alto valor, es lo que diferenciará su oferta en línea de un agregador de contenido basado en IA."
                            },
                        ]
                    },
                    {
                        title: "Piense en su contenido como pasajes, no como palabras clave",
                        content: [
                            {
                                text: "La mejor práctica actual para optimizar contenido con LLM es dividirlo en segmentos pequeños y digeribles que proporcionen la respuesta completa a una consulta. ¿Te suena? También es una buena práctica para escribir contenido web significativo y legible."
                            },
                            {
                                text: "Al comprender los pasajes, además de la relevancia de la página en general, podemos encontrar esa información que buscas, que parece una aguja en un pajar. — Fuente: Cómo la IA impulsa un Google más útil (The Keyword by Google)"
                            },
                        ]
                    },
                    {
                        title: "No bloquees los rastreadores de IA",
                        content: [
                            {
                                text: "¿Recuerdas cuando te dijeron que bloquearas los rastreadores de IA en tu archivo robots.txt para evitar que te robaran el contenido? Desafortunadamente, para entonces, probablemente ya te lo habían robado. Dejando a un lado las dudas éticas y las demandas pendientes, hemos llegado a un punto sin retorno, donde la mejor opción es aprovechar esta nueva normalidad."
                            },
                            {
                                text: "Asegúrese de que su archivo robots.txt permita los siguientes bots conocidos:"
                            },
                            {
                                subVariant: "list",
                                text: [
                                    "Agente de usuario: ClaudeBot",
                                    "Agente de usuario: Claude-Web",
                                    "Agente de usuario: anthropic-ai",
                                    "Agente de usuario: Google Extended",
                                    "Agente de usuario: PerplexityBot",
                                ]
                            },
                        ]
                    },
                    {
                        title: "No te preocupes por llm.txt todavía",
                        content: [
                            {
                                text: "llm.txt es un esquema emergente para profesionales del marketing y desarrolladores que desean gestionar información para LLM. Hasta el momento, solo unos 100 del millón de sitios web más importantes utilizan llm.txt, y las principales LLM, como OpenAI, aún no lo respetan de forma sistemática."
                            },
                            {
                                text: "Nuestra recomendación es tenerlo en cuenta, pero no lo uses por ahora. John Mueller, defensor de la Búsqueda de Google, lo ha comparado con la obsoleta etiqueta de meta palabras clave, cuyo impacto es insignificante a menos que tu sitio web ya esté obstaculizado por otros factores (como la representación de contenido con alto contenido de Javascript)."
                            },
                            {
                                text: "En cambio, concéntrese en estructuras de datos limpias, claridad semántica, contenido renderizado del lado del servidor y la publicación de información de alta calidad. Estas iniciativas son mucho más eficaces para mejorar la visibilidad en los LLM actuales."
                            },
                        ]
                    },
                ]
            },
        ]
    }
}