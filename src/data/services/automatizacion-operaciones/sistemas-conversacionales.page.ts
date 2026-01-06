import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/commercial"

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
                title: "Atención lenta",
                text: "Las demoras en la respuesta reducen conversión y satisfacción; la IA permite atender en segundos sin depender de horarios.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Saturación de agentes humanos",
                text: "Los equipos se sobrecargan con tareas repetitivas, afectando rendimiento y calidad de atención.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Pérdida de clientes por demora",
                text: "Cuando los leads no reciben respuesta inmediata, abandonan el proceso y se pierden oportunidades de venta.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Falta de seguimiento automático",
                text: "Sin automatización conversacional, se pierden cierres, reactivaciones y oportunidades de recuperación de prospectos.",
            },
        ]
    },
    briefSubmit: "Automatiza tu atención con IA",
    nextService: "inteligencia-artificial-aplicada-negocios"
}