import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/contenido-marca/crecimiento-organico"

export const crecimientoOrganicoPage: ServicePageType =
{
    slug: "estrategia-de-crecimiento-organico-de-contenido",
    heading: {
        pill: "Organic Growth Content Strategy",
        title: "Organic Growth Content Strategy",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Una comunidad sólida es un activo comercial permanente",
        subtitle: "Diseñamos estrategias de crecimiento orgánico sostenido en redes sociales.",
        capabilities: [
            {
                icon: World(),
                title: "Calendarios de contenido",
                text: "Creamos planificaciones estratégicas alineadas a objetivos de marca, garantizando coherencia, constancia y relevancia en cada publicación.",
            },
            {
                icon: People(),
                title: "Estrategias de engagement",
                text: "Diseñamos tácticas para fomentar interacción significativa, fortaleciendo la relación con la audiencia mediante dinámicas, formatos y mensajes efectivos.",
            },
            {
                icon: Sparks(),
                title: "Pilares de contenido",
                text: "Definimos categorías temáticas que guían la narrativa de la marca, asegurando claridad, variedad y consistencia en todos los puntos de comunicación.",
            },
            {
                icon: Rings(),
                title: "Tendencias adaptadas a la marca",
                text: "Incorporamos tendencias actuales ajustadas al estilo y propósito de la marca, aumentando alcance sin perder identidad ni profesionalismo.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Cuentas con crecimiento estratégico",
                text: "Estructuramos una estrategia clara para impulsar la visibilidad, la interacción y el posicionamiento orgánico de tus canales digitales.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Mayor alcance y visibilidad orgánica",
                text: "Creamos contenido optimizado que amplía la exposición de la marca y permite llegar a nuevas audiencias de forma constante y sostenible.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Interacción real con la audiencia",
                text: "Desarrollamos estrategias de contenido que fomentan la conversación, aumentan la relevancia y fortalecen la credibilidad digital de la marca.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Crecimiento constante y comunidad activa",
                text: "Implementamos un enfoque planificado que genera resultados consistentes, mejora la competitividad y construye una comunidad sólida y comprometida.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Cuentas estancadas",
        //         text: "Muchas marcas no logran avanzar debido a una falta de estructura estratégica, lo que limita su visibilidad, su interacción y su posicionamiento orgánico.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Bajo alcance",
        //         text: "La ausencia de contenido optimizado genera poca exposición, reduciendo la capacidad de llegar a nuevas audiencias y afectando la presencia de la marca en redes.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Falta de interacción",
        //         text: "Sin una estrategia enfocada en conectar con la audiencia, el contenido no genera conversación, disminuyendo la relevancia y credibilidad digital.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Crecimiento lento",
        //         text: "Un enfoque no planificado provoca resultados irregulares, restando competitividad y dificultando la construcción de una comunidad sólida y activa.",
        //     },
        // ]
    },
    briefSubmit: "Construye crecimiento orgánico sostenible",
    nextService: "conversion-copy-y-persuasive-writing"
}