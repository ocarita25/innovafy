import type { ServicePageType } from "@/types/ServicePage.types";

const path = "/images/services/ux-design"

export const uxDesignPage: ServicePageType =
{
    slug: "diseño-experiencia-usuario",
    heading: {
        pill: "Diseño de experiencia de usuario",
        title: "Involucrar, empoderar, deleitar",
        heroImage: `${path}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Experiencias digitales galardonadas",
        subtitle: "El diseño de experiencia de usuario es fundamental en nuestro enfoque. Cada decisión que tomamos en materia de estrategia, arquitectura de la información y flujos de trabajo subyacentes tiene como objetivo ayudar a cada usuario a alcanzar su objetivo de la forma más fácil y satisfactoria posible.",
        capabilities: [
            {
                icon: "",
                title: "Especialista en UX",
                text: "Nuestro enfoque de diseño UX, galardonado con múltiples premios, guía cada concepto, prototipo, decisión clave y solución creativa para impulsar su marca.",
            },
            {
                icon: "",
                title: "Servicio de catering para todos",
                text: "Como en cualquier producto digital, el rendimiento, la accesibilidad y la usabilidad son fundamentales. Nos esforzamos al máximo para ofrecer experiencias que satisfagan las necesidades de cada público.",
            },
            {
                icon: "",
                title: "Basado en la evidencia",
                text: "Nuestro proceso incluye un conjunto de investigaciones y validaciones para garantizar que cada decisión y recomendación de diseño de UX esté basada en datos.",
            },
            {
                icon: "",
                title: "Líderes en el ámbito digital",
                text: "Ampliamos los límites del diseño y la tecnología para alcanzar nuevos niveles en experiencias online prácticas, atractivas y significativas.",
            },
        ],
        valuePropositions: [
            {
                media: `${path}/value1.webp`,
                mediaType: "image",
                title: "Conecta con tu audiencia",
                text: "Contamos con más de 15 años de experiencia creando y lanzando productos excepcionales que impulsan la conversión, generan ingresos, aumentan el reconocimiento de marca y mejoran el retorno de la inversión para clientes de todos los tamaños en diversos sectores. Nuestro conocimiento directo sobre lo que funciona ayuda a los usuarios a alcanzar sus objetivos, al tiempo que fortalece la conexión emocional entre las marcas y las personas.",
            },
            {
                media: `${path}/value2.webp`,
                mediaType: "image",
                title: "Digital que resuena",
                text: "Ofrezca una experiencia de usuario inmersiva que capture la esencia de su marca y conecte con su público objetivo. Desde una arquitectura de información intuitiva hasta una narrativa envolvente, cada sitio web y aplicación web se diseña meticulosamente para captar la atención y dejar una huella imborrable.",
            },
            {
                media: `${path}/value3.webp`,
                mediaType: "image",
                title: "Diseño UX basado en evidencia",
                text: "Los datos fundamentan cada decisión de diseño UX que tomamos, una estrategia vital para sitios web de comercio electrónico, aplicaciones web funcionales y procesos de conversión como registros, inscripciones y pagos. Mediante el uso de métodos de prueba de diseño UX en hitos clave del desarrollo del proyecto, garantizamos una solución idónea para obtener el mejor resultado posible.",
            },
            {
                media: `${path}/value4.webp`,
                mediaType: "image",
                title: "Mejora la experiencia de tu marca",
                text: "Cada interacción con el cliente forma parte de una experiencia de marca integral. Nuestro enfoque de UX ética y diseño de conversión se basa en esta filosofía, garantizando mejores experiencias para el cliente que perduran mucho después de que el usuario alcance su objetivo.",
            }
        ]
    },
    briefSubmit: "Eleva tu experiencia digital",
    nextService: "diseño-interfaz-usuario"

}