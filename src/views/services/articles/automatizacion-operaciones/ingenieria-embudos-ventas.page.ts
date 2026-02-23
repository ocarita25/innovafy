import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/automatizacion-ia/funnels-automatizados"

export const ingenieriaVentasEmbudoPage: ServicePageType =
{
    slug: "ingenieria-de-embudos-de-ventas-automatizados",
    heading: {
        pill: "Ingenieria de embudos de ventas automatizadas",
        title: "Ingenieria de embudos de ventas automatizadas",
        heroImage: `/images/${path}/heroImage.jpg`,
        mediaType: "image"
    },
    description: {
        title: "Embudos automatizados que convierten tráfico en ingresos",
        subtitle: "Construimos sistemas de venta totalmente automatizados que generan ingresos constantes sin depender de la atención manual del equipo.",
        capabilities: [
            {
                icon: World(),
                title: "Embudos de captación",
                text: "Diseñamos estructuras que atraen prospectos cualificados desde anuncios, redes sociales, contenido orgánico o tráfico frío hacia puntos clave de conversión.",
            },
            {
                icon: People(),
                title: "Embudos de conversión y cierre",
                text: "Construimos recorridos estratégicos que educan, persuaden y activan la decisión de compra mediante mensajes automatizados, recordatorios y ofertas estratégicas.",
            },
            {
                icon: Sparks(),
                title: "Integración con CRM y pagos",
                text: "Conectamos el embudo con sistemas CRM y plataformas de pago para centralizar datos, gestionar leads y acelerar la conversión sin fricción.",
            },
            {
                icon: Rings(),
                title: "Automatización multicanal",
                text: "Implementamos flujos automáticos por WhatsApp y Email que responden, califican, nutren y convierten prospectos a lo largo de todo su ciclo de compra.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Ingresos predecibles y sostenibles",
                text: "Implementamos sistemas estratégicos que generan oportunidades de forma constante, permitiéndote estabilizar tus ventas y construir un flujo de ingresos predecible.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Conversión automatizada 24/7",
                text: "Diseñamos procesos que optimizan la atención y reducen la dependencia operativa, asegurando respuestas oportunas y aumentando la probabilidad de cierre.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Seguimiento estratégico de oportunidades",
                text: "Creamos flujos automatizados que acompañan a cada prospecto en el momento adecuado, incrementando la tasa de conversión y reduciendo el abandono.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Embudos optimizados de alto rendimiento",
                text: "Desarrollamos recorridos claros y estructurados que guían al cliente desde el primer contacto hasta la compra, eliminando fugas y maximizando resultados en cada etapa.",
            },
        ]
    },
    briefSubmit: "Construyamos tu sistema de ventas automático",
    nextService: "sistemas-conversacionales-con-ia"
}