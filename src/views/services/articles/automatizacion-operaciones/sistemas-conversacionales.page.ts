import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/automatizacion-ia/ia-conversacional"

export const sistemasConversacionalesPage: ServicePageType =
{
    slug: "sistemas-conversacionales-con-ia",
    heading: {
        pill: "Sistemas Conversacionales con IA",
        title: "Sistemas Conversacionales con Inteligencia Artificial",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Atención y ventas automatizadas con inteligencia artificial",
        subtitle: "Desarrollamos asistentes virtuales y chatbots con IA para ventas, soporte y automatización de atención en todos los canales digitales.",
        capabilities: [
            {
                icon: World(),
                title: "Chatbots multicanal",
                text: "Desarrollamos chatbots para WhatsApp, Web e Instagram que responden, guían y capturan prospectos en tiempo real sin depender de horarios.",
            },
            {
                icon: People(),
                title: "Bots de ventas y cotización",
                text: "Implementamos sistemas que califican leads, recomiendan productos, responden objeciones y generan cotizaciones automáticas para acelerar la conversión.",
            },
            {
                icon: Sparks(),
                title: "Bots de soporte y recuperación",
                text: "Creamos asistentes que resuelven preguntas frecuentes, gestionan incidencias y reactivan carritos o conversaciones abandonadas.",
            },
            {
                icon: Rings(),
                title: "Integración con CRM y pagos",
                text: "Conectamos los bots con CRM, sistemas de pago y flujos automatizados para centralizar datos y cerrar ventas sin fricción.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Atención inmediata 24/7",
                text: "Implementamos IA conversacional que responde en segundos, mejora la experiencia del cliente y aumenta la conversión sin depender de horarios.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Equipos más productivos",
                text: "Automatizamos tareas repetitivas para liberar a tus agentes, permitiéndoles enfocarse en casos estratégicos y elevar la calidad del servicio.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Más oportunidades convertidas",
                text: "Garantizamos respuestas oportunas a cada lead, reduciendo el abandono y fortaleciendo el proceso de venta desde el primer contacto.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Seguimiento inteligente automatizado",
                text: "Diseñamos flujos conversacionales que acompañan, reactivan y optimizan cada oportunidad, aumentando cierres y recuperando prospectos de forma estratégica.",
            },
        ]
    },
    briefSubmit: "Automatiza tu atención con IA",
    nextService: "inteligencia-artificial-aplicada-negocios"
}