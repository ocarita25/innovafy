import type { ThinkingArticleType } from "../thinking.types"

const slug = "transformando-el-conocimiento-en-impacto"
const path = `/images/thinking/${slug}`

export const TransformandoElConocimientoEnImpacto: ThinkingArticleType = {

    slug: slug,
    title: "Transformando el conocimiento en impacto",
    author: "Niaal Holder",
    authorAvatar: "/images/staff/avatars/niaal-holder.webp",
    date: "15 Agosto 2025",
    tags: ["Diseño", "Experiencia de usuario"],
    duration: 3,
    description: "El diseño empático es la práctica de crear productos que respetan la experiencia humana. Si bien el trabajo basado en la empatía puede requerir más tiempo o ser más costoso, la propuesta de valor y los resultados promueven un mayor compromiso y mejores resultados.",
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                text: 'El diseño empático es la filosofía y la práctica de crear productos que respeten la experiencia humana. Más allá del enfoque de "marcar la casilla" que a menudo afecta a los equipos de proyecto ocupados y a los productos de imitación listos para usar, el diseño empático se basa en la comprensión del contexto más amplio en el que las personas pueden operar, buscando involucrar a los usuarios con la promesa de un resultado genuinamente positivo',
            },
            {
                text: 'El espacio digital ha alcanzado un punto de saturación de contenido y medios ultraprocesados. A medida que proliferan los desechos de IA, el forraje para SEO, los embudos de conversión hostiles al usuario y la continua ensititificación de las plataformas de consumo, nos daremos cuenta cada vez más del valor de las conexiones únicas y reveladoras que generan resultados significativos y memorables.',
            },
            {
                text: 'La experiencia vivida no es universal, ni preocuparse por ella es una señal de virtud. La empatía en el diseño consiste en recordar que hay personas reales al otro lado de esos informes analíticos. Se trata de respetar a los usuarios para quienes creas.',
            },
        ],
        section: [
            {
                title: "Capas de experiencia",
                description: [
                    {
                        text: "En Humaan, construimos nuestra comprensión de la experiencia en capas",
                    },
                ],
                subSection: [
                    {
                        title: "Capa 1: Utilidad",
                        content: [
                            {
                                text: "Diseño en su forma más pura: dar al usuario lo que quiere. En el papel, esto parece las mismas especificaciones funcionales y diagramas de flujo de trabajo que encontrarías en cualquier lugar. Pero en la práctica, creamos recorridos de usuario matizados y funcionales en torno a desafíos únicos del mundo en el que opera nuestra audiencia"
                            }
                        ]
                    },
                    {
                        title: "Capa 2: Usabilidad",
                        content: [
                            {
                                text: 'La capa de Usabilidad se centra en hacer que la funcionalidad deseada sea intuitiva y sencilla para el usuario; esto es lo que la mayoría de la gente piensa cuando escucha la palabra "diseño". Dentro de nuestra metodología, esto abarca una combinación multidisciplinaria de estética, accesibilidad, ingeniería de interfaz, diseño de interacción, psicología del usuario y un profundo conocimiento de las tecnologías digitales, todo ello centrado en proporcionar la mejor experiencia en la más amplia gama de dispositivos de usuario'
                            }
                        ]
                    },
                    {
                        title: "Capa 3: Compromiso",
                        content: [
                            {
                                text: "El compromiso es personalizado y considerado, y se basa en un pensamiento de diseño con propósito. Ofrecer algo atractivo, memorable o digno de compartir se logra, en primer lugar, al comprender con quién se interactúa, conocer sus necesidades, expectativas y limitaciones, y luego traducir esto en un producto que logre el objetivo deseado"
                            },
                            {
                                variant: "multimedia",
                                subVariant: "image",
                                image: `${path}/figure-1.webp`,
                                imageDescription: "Surveillance Watch conectó un conjunto sustancial de datos con una base de usuarios global, impulsando la concienciación y la acción mediante una exploración inmersiva de la vigilancia mundial. Incluso los usuarios más motivados tendrían dificultades para perseverar con una hoja de cálculo pesada. El impacto de esta aplicación web reside en una visualización de datos intuitiva y un diseño de interacción atractivo."
                            },
                        ]
                    },
                ]
            },
            {
                title: "La empatía adopta muchas formas",
                description: [
                    {
                        text: "En la planificación, la empatía se concreta en el descubrimiento y la inmersión en la perspectiva de la audiencia. Las actividades de planificación incluyen el mapeo de experiencias y recorridos, la validación de usuarios, las entrevistas y el desarrollo de perfiles. En este caso, el cómo importa tanto (o incluso más) que el qué , ya que es posible realizar tareas de planificación sin empatía ni adopción de perspectivas.",
                    },
                    {
                        text: "En diseño, un enfoque empático se refleja en la calidad de la estética (p. ej., contexto de marca, simbolismo), las consideraciones de accesibilidad (p. ej., cognitiva, sensorial, física) y los parámetros contextuales (p. ej., variabilidad del dispositivo, entorno de acceso). Como punto de partida, un buen diseño presta atención a todos estos factores, combinándolos de forma holística para crear un producto más robusto.",
                    },
                    {
                        text: "Durante el desarrollo, comprender cómo interactúan los usuarios con diversas tecnologías nos permite construir con propósito. Partiendo de fundamentos sólidos sobre las necesidades de los usuarios y las capacidades técnicas, podemos adaptar nuestro enfoque a las nuevas complejidades y preocupaciones que surjan.",
                    },
                    {
                        text: "Al escribir, nos preocupamos por cómo el usuario recibe nuestro contenido. Una comunicación eficaz depende en gran medida del contexto, lo que requiere una buena fluidez narrativa y una comprensión clara de lo que los usuarios piensan y sienten en cada etapa de su recorrido.",
                    },
                    {
                        variant: "multimedia",
                        subVariant: "image",
                        image: `${path}/figure-2.webp`,
                        imageDescription: 'El nuevo sitio web de Chaleit representa un cambio significativo respecto a su estética original de "leet hacker". Nuestra comprensión del diseño, la tecnología y la percepción del público nos llevó a un reposicionamiento informativo y modernizado de la empresa como una marca cercana, accesible y centrada en el ser humano en el ámbito de la ciberseguridad.'
                    },
                ]
            },
            {
                title: "La propuesta de valor es real",
                description: [
                    {
                        text: 'El trabajo basado en la empatía crea productos resilientes y con visión de futuro. Mediante la cercanía y la conexión humana genuina, promueve un mayor compromiso y conduce a mejores resultados. El trabajo puede requerir más tiempo o ser más costoso, pero tanto la propuesta de valor como los resultados posteriores son indiscutibles.',
                    },
                    {
                        text: 'La mayor trampa en la que caen la mayoría de los equipos de proyecto es adivinar o suponer cosas sobre las personas para las que crean. Crear algo que realmente satisfaga a los usuarios en su contexto y trabajar con ellos para lograr un resultado significativo y satisfactorio no es algo que se pueda hacer. No hay atajos. El diseño empático es una práctica que siempre debe aplicarse de forma deliberada y con cuidado.',
                    },
                ]
            },
        ]
    }
}