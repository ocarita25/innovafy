import { People, Rings, Sparks, World } from "@/assets/icons/services";
import { servicesImgCLOUD } from "@/constants/resources";
import type { ServicePageType } from "@/types/ServicePage.types";

const slug = "automatizacion-ia/marketing-automatizado"

export const arquitecturaAutomatizacionPage: ServicePageType =
{
    slug: "arquitectura-de-automatizacion-de-marketing",
    heading: {
        pill: "Arquitectura de Automatizacion de Marketing",
        title: "Arquitectura de Automatizacion de Marketing",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Automatización estratégica para escalar sin fricción",
        subtitle: "Diseñamos arquitecturas completas de automatización para marketing, ventas y atención al cliente, integrando todos los canales del negocio.",
        capabilities: [
            {
                icon: World(),
                title: "Automatización de atención al cliente",
                text: "Implementamos flujos inteligentes que responden preguntas frecuentes, asignan casos y brindan soporte inmediato a través de múltiples canales.",
            },
            {
                icon: People(),
                title: "Automatización de captación de leads",
                text: "Configuramos sistemas que registran prospectos automáticamente desde formularios, anuncios, redes sociales y páginas web en tiempo real.",
            },
            {
                icon: Sparks(),
                title: "Automatización de seguimiento comercial",
                text: "Diseñamos flujos que envían recordatorios, mensajes estratégicos y actualizaciones para mantener activos y nutridos a los prospectos.",
            },
            {
                icon: Rings(),
                title: "Automatización de nutrición y postventa",
                text: "Creamos secuencias que educan, preparan para la compra y fortalecen la relación después de la venta, mejorando la calidad del funnel y la fidelización.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Procesos optimizados y automatizados",
                text: "Implementamos automatizaciones inteligentes que eliminan tareas repetitivas, reducen cuellos de botella y liberan al equipo para enfocarse en actividades estratégicas.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Captación y seguimiento continuo de leads",
                text: "Diseñamos flujos automatizados que garantizan un seguimiento oportuno de cada prospecto, maximizando oportunidades comerciales y fortaleciendo la conversión del funnel.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Respuestas ágiles y estratégicas",
                text: "Creamos sistemas de seguimiento automático que mantienen una comunicación constante y oportuna, incrementando el interés y las probabilidades de cierre.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Equipo comercial enfocado en cerrar",
                text: "Reducimos la carga operativa mediante automatización estratégica, permitiendo que el equipo concentre sus esfuerzos en negociar, convertir y escalar resultados.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value5.webp`,
                mediaType: "image",
                title: "Operación organizada y escalable",
                text: "Centralizamos y estructuramos los procesos para ofrecer visibilidad total del funnel, facilitar la toma de decisiones y preparar el negocio para un crecimiento sostenible.",
            },
        ]
    },
    briefSubmit: "Automatiza tu operación y escala sin fricción",
    nextService: "ingenieria-de-embudos-de-ventas-automatizados"
}