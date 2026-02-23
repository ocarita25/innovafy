import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/contenido-marca/contenido-profesional"

export const contenidoProfesionalPage: ServicePageType =
{
    slug: "produccion-contenido-profesional",
    heading: {
        pill: "Professional Content Production",
        title: "Professional Content Production",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "El contenido es el nuevo vendedor de las marcas digitales",
        subtitle: "Producción profesional de contenido audiovisual y digital con estándares comerciales.",
        capabilities: [
            {
                icon: World(),
                title: "Producción de Reels",
                text: "Creamos contenido dinámico y optimizado para Instagram, con narrativa clara y estética visual diseñada para aumentar alcance, interacción y conversión.",
            },
            {
                icon: People(),
                title: "Producción de TikToks",
                text: "Desarrollamos piezas creativas adaptadas al estilo y tendencias de TikTok, maximizando virabilidad, retención y autenticidad para conectar con nuevas audiencias.",
            },
            {
                icon: Sparks(),
                title: "Videos publicitarios",
                text: "Producimos anuncios audiovisuales orientados a campañas de venta y performance, integrando storytelling, creatividad y enfoque estratégico de conversión.",
            },
            {
                icon: Rings(),
                title: "Videos institucionales",
                text: "Creamos piezas corporativas que transmiten la esencia, valores y propuesta de valor de la empresa, fortaleciendo reputación y presencia profesional.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Contenido profesional y estratégico",
                text: "Desarrollamos piezas con alta calidad técnica y un concepto visual sólido, fortaleciendo la credibilidad de la marca y la efectividad de tus acciones digitales.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Fortalecimiento de la percepción de marca",
                text: "Creamos contenido alineado a la identidad corporativa que eleva la imagen de la marca, genera confianza y mejora su posicionamiento en todos los canales.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Alto impacto visual y creativo",
                text: "Producimos contenido visual atractivo y bien ejecutado que capta la atención, mejora el rendimiento en redes sociales y potencia la visibilidad digital.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Contenido que impulsa ventas",
                text: "Diseñamos piezas que comunican valor, persuaden y convierten audiencia en clientes, apoyando directamente los objetivos comerciales del negocio.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Contenido amateur",
        //         text: "Muchas marcas generan piezas sin calidad técnica ni concepto visual sólido, lo que afecta su credibilidad y limita la efectividad de sus esfuerzos digitales.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Baja percepción de marca",
        //         text: "Un contenido poco profesional reduce la imagen corporativa, debilitando la confianza del público e impactando negativamente el posicionamiento general.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Falta de impacto visual",
        //         text: "Sin una producción bien ejecutada, los mensajes pierden atractivo, dificultando captar atención y reducir el rendimiento en redes sociales y plataformas digitales.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Dificultad para vender con contenido",
        //         text: "Cuando las piezas no comunican valor ni persuaden adecuadamente, se vuelve complejo convertir audiencia en clientes y lograr resultados comerciales.",
        //     },
        // ]
    },
    briefSubmit: "Eleva tu marca con contenido profesional",
    nextService: "estrategia-de-crecimiento-organico-de-contenido"
}