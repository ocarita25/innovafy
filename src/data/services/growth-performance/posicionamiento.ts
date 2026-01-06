import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/growth-performance/posicionamiento-autoridad"

export const posicionamientoPage: ServicePageType =
{
    slug: "posicionamiento-y-autoridad",
    heading: {
        pill: "Posicionamiento de Marca y Presencia en el Mercado",
        title: "Posicionamiento de Marca y Presencia en el Mercado",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Marcas fuertes que dominan su categoría y venden más sin competir por el precio",
        subtitle: "Construimos marcas con posicionamiento sólido, diferenciación competitiva y autoridad en su industria.",
        capabilities: [
            {
                icon: World(),
                title: "Propuesta de valor",
                text: "Definimos la esencia diferenciadora de la marca, clarificando lo que ofrece, a quién sirve y por qué es relevante para su audiencia y su industria específica.",
            },
            {
                icon: People(),
                title: "Posicionamiento estratégico",
                text: "Construimos el lugar que la marca ocupará en la mente del cliente, alineado a su mercado, competencia, percepción y objetivos de crecimiento comercial.",
            },
            {
                icon: Sparks(),
                title: "Diferenciación competitiva",
                text: "Identificamos atributos únicos que fortalecen la ventaja competitiva y permiten destacar claramente frente a otras alternativas dentro del mismo mercado.",
            },
            {
                icon: Rings(),
                title: "Reputación digital",
                text: "Diseñamos acciones estratégicas para fortalecer presencia, credibilidad y autoridad de marca, elevando su influencia en plataformas y comunidades digitales.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Marcas genéricas",
                text: "Muchas empresas carecen de una identidad estratégica sólida, generando confusión en el mercado y dificultando diferenciarse frente a competidores directos.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Mensajes confusos",
                text: "La comunicación poco estructurada afecta la claridad del valor de la marca, provocando desconexión con la audiencia y pérdida de interés en los canales digitales.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Falta de reconocimiento",
                text: "La ausencia de un posicionamiento definido impide destacar en su categoría, reduciendo visibilidad, recordación y presencia dentro del ecosistema digital.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Baja confianza del mercado",
                text: "Una marca sin autoridad transmite poca credibilidad, afectando decisiones de compra y generando dudas sobre su capacidad profesional o su propuesta de valor.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Marcas genéricas",
        //         text: "Muchas empresas carecen de una identidad estratégica sólida, generando confusión en el mercado y dificultando diferenciarse frente a competidores directos.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Mensajes confusos",
        //         text: "La comunicación poco estructurada afecta la claridad del valor de la marca, provocando desconexión con la audiencia y pérdida de interés en los canales digitales.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Falta de reconocimiento",
        //         text: "La ausencia de un posicionamiento definido impide destacar en su categoría, reduciendo visibilidad, recordación y presencia dentro del ecosistema digital.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Baja confianza del mercado",
        //         text: "Una marca sin autoridad transmite poca credibilidad, afectando decisiones de compra y generando dudas sobre su capacidad profesional o su propuesta de valor.",
        //     },
        // ]
    },
    briefSubmit: "Domina tu categoría y vende más",
    nextService: "sistemas-de-ventas-digitales"
}