import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "branding-ui-ux/identidad-marca"

export const identidadMarcaPage: ServicePageType =
{
    slug: "arquitectura-de-identidad-de-marca",
    heading: {
        pill: "Arquitectura de Identidad de Marca",
        title: "Arquitectura de Identidad de Marca",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Una marca sin identidad sólida no genera confianza ni posicionamiento",
        subtitle: "Construimos marcas desde su base estratégica hasta su proyección comercial, asegurando coherencia, diferenciación y escalabilidad.",
        capabilities: [
            {
                icon: World(),
                title: "Naming estratégico",
                text: "Creamos nombres potentes, memorables y alineados al ADN de la marca, garantizando relevancia comercial, conceptual y lingüística dentro de su mercado.",
            },
            {
                icon: People(),
                title: "Identidad visual",
                text: "Diseñamos una identidad completa que incluye símbolos, formas y estructuras visuales que representan la esencia y personalidad de la marca.",
            },
            {
                icon: Sparks(),
                title: "Paleta cromática y tipografías",
                text: "Definimos colores y fuentes que transmiten emociones, valores y estilo, asegurando un lenguaje visual consistente en todos los puntos de contacto.",
            },
            {
                icon: Rings(),
                title: "Manual de marca corporativo",
                text: "Desarrollamos un documento que estandariza usos, reglas y lineamientos visuales, asegurando coherencia en cualquier aplicación interna o externa.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Identidad de marca clara y definida",
                text: "Construimos una identidad sólida que define la esencia, el propósito y el estilo visual de tu marca, facilitando su presencia y reconocimiento en el mercado.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Imagen profesional y competitiva",
                text: "Desarrollamos una identidad visual bien ejecutada que eleva la percepción de la marca, fortalece la credibilidad y mejora su capacidad de competir en su industria.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Coherencia visual en todos los canales",
                text: "Creamos un sistema visual consistente que ordena la comunicación, refuerza la proyección estratégica y transmite profesionalismo en cada punto de contacto.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Mayor reconocimiento y recordación de marca",
                text: "Diseñamos elementos distintivos y memorables que permiten posicionar la marca en la mente del consumidor y potenciar su crecimiento a largo plazo.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Marcas sin identidad clara",
        //         text: "Muchas empresas no cuentan con una definición sólida de su esencia, propósito y estilo visual, dificultando su presencia y reconocimiento en el mercado.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Imagen poco profesional",
        //         text: "Una identidad visual débil o mal ejecutada afecta la percepción del público, reduciendo la credibilidad y limitando la capacidad de competir en su industria.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Falta de coherencia visual",
        //         text: "La comunicación se vuelve inconsistente cuando no existe un sistema visual definido, generando confusión y debilitando la proyección estratégica de la marca.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value4.webp`,
        //         mediaType: "image",
        //         title: "Bajo reconocimiento de marca",
        //         text: "Sin elementos distintivos y memorables, la marca no logra posicionarse ni permanecer en la mente del consumidor, perdiendo oportunidades de crecimiento.",
        //     },
        // ]
    },
    briefSubmit: "Construye una marca sólida y coherente",
    nextService: "sistemas-visuales-digitales-y-corporativos"
}
