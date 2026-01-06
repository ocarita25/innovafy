import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/growth-performance/fidelidad-retencion"

export const fidelidadPage: ServicePageType =
{
    slug: "customer-loyalty-retention-programs",
    heading: {
        pill: "Customer Loyalty & Retention Programs",
        title: "Customer Loyalty & Retention Programs",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Venderle a quien ya te compró es más rentable",
        subtitle: "Creamos programas de fidelización y recompra automatizada.",
        capabilities: [
            {
                icon: World(),
                title: "Programas de puntos",
                text: "Construimos sistemas de fidelización que recompensan acciones y compras, incentivando la permanencia, el compromiso y la preferencia por la marca.",
            },
            {
                icon: People(),
                title: "Flujos de recompra",
                text: "Diseñamos automatizaciones que activan recordatorios, promociones y recomendaciones personalizadas para aumentar la frecuencia de compra.",
            },
            {
                icon: Sparks(),
                title: "Automatización postventa",
                text: "Implementamos comunicaciones inteligentes que acompañan al cliente después de la compra, fortaleciendo la relación y optimizando su experiencia integral.",
            },
            {
                icon: Rings(),
                title: "Programas de referidos",
                text: "Creamos sistemas que motivan a los clientes a recomendar la marca, generando adquisición orgánica y expandiendo la red de potenciales compradores.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Programas de referidos estratégicos",
                text: "Creamos sistemas que incentivan a tus clientes a recomendar la marca, impulsando la adquisición orgánica y ampliando de forma sostenible tu red de potenciales compradores.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Retención y fidelización de clientes",
                text: "Implementamos estrategias de continuidad que fortalecen la relación con tus clientes después de la primera compra, aumentando la estabilidad comercial y los ingresos recurrentes.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Incremento de recompra y valor del cliente",
                text: "Desarrollamos acciones de retención y estímulos personalizados que motivan a los clientes a regresar, mejorando la recurrencia y el valor total de cada usuario a lo largo del tiempo.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Relación postventa continua y de valor",
                text: "Mantenemos una comunicación activa después de la compra para generar confianza, mejorar la experiencia del cliente y abrir nuevas oportunidades comerciales.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Pérdida de clientes",
        //         text: "La ausencia de estrategias de continuidad hace que los clientes abandonen la marca después de la primera compra, reduciendo ingresos y estabilidad comercial.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Baja recompra",
        //         text: "Sin acciones de retención ni estímulos personalizados, los clientes no regresan, afectando el ciclo de vida, la recurrencia y el valor total de cada usuario.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Nula relación postventa",
        //         text: "Muchas marcas no mantienen contacto después de la compra, generando una experiencia incompleta que afecta la confianza y limita oportunidades futuras.",
        //     },
        // ]
    },
    briefSubmit: "Fideliza, retén y aumenta tu recurrencia",
    nextService: "data-intelligence"
}
