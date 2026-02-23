import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/produccion-audiovisual/creativos"

export const creativosPage: ServicePageType =
{
    slug: "advertising-creative-y-campaign-assets",
    heading: {
        pill: "Advertising Creative & Campaign Assets",
        title: "Advertising Creative & Campaign Assets",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Creatividad publicitaria diseñada para convertir",
        subtitle: "Desarrollo de piezas creativas audiovisuales y visuales optimizadas para maximizar el rendimiento de campañas publicitarias digitales.",
        capabilities: [
            {
                icon: World(),
                title: "Creativos para Meta Ads",
                text: "Producimos imágenes, videos y secuencias optimizadas para Facebook e Instagram, centradas en impacto visual, claridad de mensaje y conversión.",
            },
            {
                icon: People(),
                title: "Creativos para Google Ads",
                text: "Diseñamos banners y piezas responsivas alineadas a los estándares de Google Display, maximizando visibilidad, relevancia y tasa de interacción.",
            },
            {
                icon: Sparks(),
                title: "Creativos para TikTok Ads",
                text: "Creamos contenido dinámico y nativo para TikTok, adaptado al estilo de la plataforma y enfocado en storytelling rápido, retención y performance.",
            },
            {
                icon: Rings(),
                title: "Videos publicitarios",
                text: "Desarrollamos piezas audiovisuales listas para pauta, con narrativa persuasiva, estética profesional y alta capacidad para captar atención en segundos.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Anuncios diseñados para convertir",
                text: "Creamos creatividades con estrategia y enfoque comercial que aumentan clics, reducen costos y potencian el rendimiento general de las campañas.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Creativos de alto impacto",
                text: "Desarrollamos piezas visualmente atractivas con mensajes claros y persuasivos que mejoran retención, alcance y resultados publicitarios.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Campañas con identidad visual",
                text: "Implementamos coherencia gráfica en todas las creatividades, fortaleciendo la percepción de marca y construyendo una línea creativa memorable y profesional.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Mayor CTR y eficiencia publicitaria",
                text: "Diseñamos anuncios estructurados y persuasivos que incrementan la tasa de clics, optimizan el presupuesto y facilitan la escalabilidad de las campañas.",
            },
            {
                media: `/images/${path}/value5.webp`,
                mediaType: "image",
                title: "Adaptación estratégica por canal",
                text: "Optimizamos formatos y dinámicas según cada plataforma para garantizar máximo rendimiento, visibilidad y cumplimiento de objetivos comerciales.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Anuncios que no convierten",
        //         text: "Creatividades sin estrategia ni enfoque comercial reducen clics, elevan costos y debilitan el rendimiento general de las campañas.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Creativos mal diseñados",
        //         text: "Piezas con baja calidad visual o mensajes confusos generan poco impacto, disminuyendo retención, alcance y resultados publicitarios.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Campañas sin identidad visual",
        //         text: "La falta de coherencia gráfica perjudica la percepción de marca y limita la construcción de una línea creativa memorable y profesional.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Baja tasa de clics",
        //         text: "Anuncios sin concepto ni estructura persuasiva generan poco interés, afectando CTR, eficiencia del presupuesto y escalabilidad.",
        //     },
        //     {
        //         media: `/images/${path}/value5.webp`,
        //         mediaType: "image",
        //         title: "Falta de adaptación por formato",
        //         text: "Piezas no optimizadas por canal pierden rendimiento al no ajustarse a dimensiones, dinámicas y objetivos de cada plataforma.",
        //     },
        // ]
    },
    briefSubmit: "Creamos los creativos que hacen que tus campañas funcionen",
    nextService: "comercial"
}
