import { thinkingImgCLOUD } from "@/constants/resources"
import type { ThinkingArticleType } from "../thinking.types"

const slug = "buen-diseno-demuestra-credibilidad"
const path = `${thinkingImgCLOUD}/${slug}`

export const BuenDiseñoDemuestraCredibilidad: ThinkingArticleType = {

    slug: slug,
    title: "Como un buen diseño demuestra la credibilidad de tu marca",
    author: "Jay Hollywood",
    authorAvatar: "/images/staff/avatars/jay-hollywood.webp",
    date: "2 Mayo 2023",
    tags: ["Diseño"],
    duration: 4,
    description: "Su sitio web es más que una simple tienda digital; refleja los valores, las prioridades y la credibilidad de su marca. Cuando se diseña con cuidado, claridad y personalidad, transmite a los usuarios la tranquilidad de que vale la pena interactuar con su negocio.",
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                text: "Consideremos qué esperamos al interactuar con una marca… Un producto funcional. Un servicio al cliente respetuoso. Una comunicación honesta. ¿Les suena? Podemos afirmar con seguridad que no realizamos una transacción esperando un resultado deficiente.",
            },
            {
                text: "Les guste o no, los usuarios verán en tu sitio web una pista de cómo es interactuar contigo. Sí,  tú . Tú como marca, y quizás incluso tú personalmente. Tomemos este ejemplo: mostrar un sitio con excelente contenido demuestra que probablemente crees en comunicarte con claridad y honestidad, y en preocuparte por las necesidades de tus clientes.",
            },
            {
                text: "Por otro lado, mostrar un sitio web plagado de enlaces rotos e información difícil de encontrar podría sugerir falta de compromiso con la calidad o, peor aún, una tendencia a ofuscar los detalles y engañar a la gente. (¡No seas como ellos!)",
            },
            {
                text: "Crear un sitio web elegante no se trata solo de lucir bien. Con el enfoque adecuado, tu sitio puede decir mucho sobre las prioridades, la filosofía, la fiabilidad y el nivel de experiencia de tu marca. Esto no significa que puedas simplemente cumplir con algunos requisitos y hacer creer a la gente que te importa; es más bien que la capacidad de expresar interés a través del diseño proviene, en primer lugar, del interés.",
            },
        ],
        section: [
            {
                title: "Su sitio debe verse bien  y ser fácil de usar.",
                description: [
                    {
                        text: "En 2011, un estudio de la Universidad de Melbourne reveló que los sitios web visualmente atractivos se percibían como más confiables. Según el Dr. Brent Coker, autor del estudio: «Como seres humanos orientados a la estética, estamos psicológicamente programados para confiar en las personas atractivas, y lo mismo ocurre con los sitios web. Nuestro comportamiento e inclinaciones fuera de línea se reflejan en nuestra existencia en línea».",
                    },
                    {
                        text: "Sin embargo, Coker advierte que el atractivo visual por sí solo no es suficiente, ya que “la mayor fuente de frustración es la incapacidad de encontrar información relevante en un sitio web”, una observación que se hace eco de los hallazgos de estudios anteriores  que destacan la importancia de una apariencia profesional con una estructura lógica y una navegación fácil de usar.",
                    },
                    {
                        text: "Cuando los usuarios ven un sitio web visualmente atractivo, demuestran que tu marca presta atención al detalle y a la calidad. Si les facilitas encontrar lo que buscan, habrás demostrado que te preocupas por simplificarles la vida.",
                    },
                ]
            },
            {
                title: "Tu contenido debe hablarle a la gente .",
                description: [
                    {
                        text: "Suponiendo que su sitio sea atractivo y fácil de usar, los usuarios aún pueden tener dificultades para obtener lo que buscan si su contenido no está a la altura.",
                    },
                    {
                        text: "Quizás sea demasiado vago o superficial para un lector que necesite más detalles. Quizás sea incorrecto, esté desactualizado o sea demasiado difícil de verificar. Quizás tu texto sea extenso, complejo, esté lleno de jerga o sea demasiado aburrido. O quizás ofrezcas demasiada información que simplemente no sea útil hasta mucho más adelante en la experiencia del usuario.",
                    },
                    {
                        text: "Ya sea macrotexto o microtexto, el contenido eficaz se dirige al lector, diciéndole lo que necesita saber en el momento oportuno. La redacción es coherente y concisa para reducir la confusión. La información es útil y novedosa, para no hacerle perder el tiempo a nadie. Y, cuando corresponde, su contenido transmite personalidad, demostrando que, como marca, tiene la capacidad de apreciar lo que importa a la gente.",
                    },
                    {
                        text: "Sí, esto aplica incluso si eres un proveedor de servicios B2B, ya que los negocios en tu mercado objetivo aún están dirigidos por personas. (Podríamos modificar este consejo tras el apocalipsis robótico).",
                    },
                ]
            },
            {
                title: "Conclusiones sobre la credibilidad web",
                description: [
                    {
                        text: "Obviamente, un buen diseño implica más de lo que podemos incluir en una lista rápida, pero aquí hay algunos de los principios en los que creemos y que aplicamos a todos nuestros proyectos web:",
                    },
                    {
                        text: "Diseña cada página teniendo en cuenta los objetivos del usuario.  ¿Están tus usuarios ahí para realizar una acción, absorber información o interactuar con un proceso? Una vez definidos tus objetivos, haz que sea lo más fácil posible para los usuarios alcanzarlos.",
                    },
                    {
                        text: "Proporciona una navegación clara con etiquetas que los usuarios puedan identificar.  Es recomendable ser creativo con el texto de navegación  hasta cierto punto . Además, unas  etiquetas demasiado creativas pueden dificultar la exploración del sitio y reducir la confianza del usuario.    ",
                    },
                    {
                        text: "Crea contenido para las personas primero, luego para los motores de búsqueda.  Sin duda, implementa un buen SEO técnico (p. ej., HTML válido, marcado semántico, metaetiquetas, adaptabilidad a dispositivos), pero asegúrate de que tu contenido web tenga significado para quienes lo leen. Al fin y al cabo, son ellos quienes deciden si vale la pena invertir en tu sitio.",
                    },
                    {
                        text: "Muestra la información en el momento oportuno.  Cada paso del recorrido del usuario conlleva diferentes necesidades de información. No mostrar suficiente puede frustrar al usuario y dar la impresión de que tienes algo que ocultar. Pero mostrar demasiado (o mostrar detalles irrelevantes) puede abrumar o confundir a los usuarios. Considera el contexto que presentas a tu audiencia y coordina tu contenido en consecuencia.",
                    },
                    {
                        text: "Deleita a tus usuarios.  Planifica algo diferente para sorprenderlos. Puede ser algo tan simple como un texto original, tan inusual como imágenes y animaciones inesperadas, o tan genial como un huevo de Pascua con código Konami. Un toque de personalidad contribuye enormemente a mejorar la experiencia del usuario en tu sitio web, a la vez que demuestra que hay personas reales detrás de tu marca.",
                    },
                ]
            },
        ]
    }
}