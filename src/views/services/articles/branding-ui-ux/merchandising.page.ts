import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "branding-ui-ux/merchandising"

export const merchandisingPage: ServicePageType =
{
    slug: "material-de-marca-y-diseno-de-merchandising",
    heading: {
        pill: "Brand Collateral & Merchandising Design",
        title: "Brand Collateral & Merchandising Design",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Las marcas también se construyen fuera de la pantalla",
        subtitle: "Diseñamos material físico y promocional que refuerza la presencia de marca en el mundo real.",
        capabilities: [
            {
                icon: World(),
                title: "Diseño de empaques",
                text: "Creamos empaques funcionales y estéticos que reflejan identidad, elevan la percepción de valor del producto y fortalecen la experiencia del cliente.",
            },
            {
                icon: People(),
                title: "Merchandising corporativo",
                text: "Diseñamos productos promocionales alineados al ADN visual de la marca, ideales para fidelización, branding interno y campañas de posicionamiento.",
            },
            {
                icon: Sparks(),
                title: "Uniformes",
                text: "Desarrollamos uniformes profesionales que representan la identidad de la empresa, asegurando coherencia visual y fortaleciendo la cultura organizacional.",
            },
            {
                icon: Rings(),
                title: "Material POP",
                text: "Producimos elementos promocionales para puntos de venta, optimizados para captar atención, comunicar beneficios y reforzar la presencia de marca.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Material promocional con identidad y estrategia",
                text: "Diseñamos piezas físicas con personalidad y propósito que refuerzan la presencia profesional de la marca, mejoran la recordación y generan mayor impacto ante clientes y aliados.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Coherencia entre lo digital y lo físico",
                text: "Trasladamos la identidad visual de forma consistente a materiales impresos, asegurando solidez, coherencia y reconocimiento de marca en todos los entornos.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Productos físicos alineados a la identidad de marca",
                text: "Desarrollamos diseños unificados para objetos promocionales que transmiten valores, estilo y esencia de la marca, fortaleciendo su presencia y diferenciación.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Material promocional genérico",
        //         text: "Muchas marcas utilizan piezas físicas sin personalidad ni estrategia, lo que reduce impacto, recordación y presencia profesional ante clientes y aliados.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Desconexión entre lo digital y lo físico",
        //         text: "Cuando la identidad visual no se traslada correctamente a materiales impresos, la marca pierde coherencia y solidez en diferentes entornos.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Falta de identidad en productos físicos",
        //         text: "La ausencia de un diseño unificado genera objetos promocionales sin intención, dificultando transmitir valores, estilo y esencia de la marca.",
        //     },
        // ]
    },
    briefSubmit: "Lleva tu marca al mundo físico",
    nextService: "ingenieria-de-interfaz-y-experiencia-de-usuario"
}
