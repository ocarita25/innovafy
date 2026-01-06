import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/commercial"

export const ingenieriaVentasEmbudoPage: ServicePageType =
{
    slug: "ingenieria-de-embudos-de-ventas-automatizados",
    heading: {
        pill: "Ingenieria de embudos de ventas automatizadas",
        title: "Ingenieria de embudos de ventas automatizadas",
        heroImage: `/images/${path}/heroImage.webp`,
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
                title: "Ventas inestables",
                text: "Los negocios dependen de picos aleatorios de demanda y no cuentan con un sistema predecible que genere ingresos de forma constante.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Dependencia de atención manual",
                text: "La conversión se limita a la disponibilidad del equipo humano, retrasando respuestas y reduciendo la probabilidad de cierre.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Pérdida de oportunidades",
                text: "Sin flujos automatizados, muchos prospectos no reciben seguimiento a tiempo, provocando abandono y baja tasa de conversión.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Embudos inexistentes o mal hechos",
                text: "La ausencia de un recorrido claro genera fugas en cada etapa del proceso, desde el primer contacto hasta la compra.",
            },
        ]
    },
    briefSubmit: "Construyamos tu sistema de ventas automático",
    nextService: "sistemas-conversacionales-con-ia"
}