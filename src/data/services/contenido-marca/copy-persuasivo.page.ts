import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/contenido-marca/copy-persuasivo"

export const copyPersuasivoPage: ServicePageType =
{
    slug: "conversion-copy-y-persuasive-writing",
    heading: {
        pill: "Conversion Copy & Persuasive Writing",
        title: "Conversion Copy & Persuasive Writing",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Una buena estrategia sin buen copy no convierte",
        subtitle: "Redacción estratégica enfocada 100% en conversión y ventas.",
        capabilities: [
            {
                icon: World(),
                title: "Copy para páginas web",
                text: "Redactamos textos orientados a conversión para homepages, landing pages y servicios, destacando beneficios, diferenciadores y llamados a la acción claros.",
            },
            {
                icon: People(),
                title: "Copy para anuncios",
                text: "Creamos mensajes breves y persuasivos para campañas de Meta Ads, Google Ads, TikTok Ads y más, optimizados para captar atención y generar clics de valor.",
            },
            {
                icon: Sparks(),
                title: "Copy para redes sociales",
                text: "Diseñamos descripciones estratégicas que fortalecen la narrativa de marca, aumentan interacción y guían al usuario hacia objetivos específicos.",
            },
            {
                icon: Rings(),
                title: "Copy para embudos de venta",
                text: "Elaboramos mensajes alineados a cada etapa del funnel, desde awareness hasta cierre, optimizando la conversión con textos claros y emocionalmente relevantes.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Textos persuasivos que convierten",
                text: "Redactamos mensajes estratégicos que comunican valor, persuaden y motivan al usuario a realizar acciones concretas.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Mensajes claros y orientados a valor",
                text: "Construimos una narrativa clara y coherente que transmite la propuesta de valor de forma efectiva, aumentando el interés en tus productos o servicios.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Páginas optimizadas para conversión",
                text: "Desarrollamos estructuras de copy enfocadas en conversión que mejoran la decisión de compra y maximizan el rendimiento del tráfico pagado y orgánico.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Anuncios con alto rendimiento",
                text: "Creamos creatividades con mensajes directos y persuasivos que generan más clics, engagement y mejores resultados en campañas publicitarias.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Textos que no venden",
        //         text: "Muchas marcas comunican sin intención estratégica, generando mensajes planos que no persuaden ni motivan al usuario a tomar una acción concreta.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Mensajes confusos",
        //         text: "La falta de claridad narrativa dificulta transmitir el valor real de la oferta, provocando interpretaciones erróneas y bajo interés en los productos o servicios.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Páginas con baja conversión",
        //         text: "Sin una estructura de copy optimizada, las páginas pierden impacto, afectando la decisión de compra y reduciendo la efectividad del tráfico pagado u orgánico.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Anuncios poco efectivos",
        //         text: "Creatividades sin un mensaje directo y persuasivo generan poco clic, bajo engagement y una disminución del rendimiento de las campañas publicitarias.",
        //     },
        // ]
    },
    briefSubmit: "Convierte visitas en ventas",
    nextService: "digital-asset-y-biblioteca-de-medios"
}