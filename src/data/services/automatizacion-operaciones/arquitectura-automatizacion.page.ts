import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/commercial"

export const arquitecturaAutomatizacionPage: ServicePageType =
{
    slug: "arquitectura-de-automatizacion-de-marketing",
    heading: {
        pill: "Arquitectura de Automatizacion de Marketing",
        title: "Arquitectura de Automatizacion de Marketing",
        heroImage: `/images/${path}/heroImage.webp`,
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
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Procesos manuales",
                text: "Las tareas repetitivas consumen tiempo, generan cuellos de botella y reducen la capacidad del equipo para enfocarse en actividades estratégicas.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Pérdida de leads",
                text: "Sin automatizaciones, los prospectos no reciben seguimiento oportuno, disminuyendo oportunidades comerciales y afectando la conversión del funnel.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Seguimientos ineficientes",
                text: "La ausencia de flujos automáticos provoca respuestas tardías o inexistentes, generando desinterés y pérdida de ventas potenciales.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Saturación del equipo comercial",
                text: "Cuando todo depende del trabajo manual, el equipo se sobrecarga, disminuye su efectividad y se limita la capacidad de escalar.",
            },
            {
                media: `/images/${path}/value5.webp`,
                mediaType: "image",
                title: "Desorden operativo",
                text: "La falta de procesos automatizados genera datos dispersos, poca visibilidad del funnel y una operación difícil de escalar.",
            },
        ]
    },
    briefSubmit: "Automatiza tu operación y escala sin fricción",
    nextService: "ingenieria-de-embudos-de-ventas-automatizados"
}