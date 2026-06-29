import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "branding-ui-ux/ux-ui"

export const uxUiPage: ServicePageType =
{
    slug: "ingenieria-de-interfaz-y-experiencia-de-usuario",
    heading: {
        pill: "Ingeniería de Interfaz y Experiencia de Usuario (UX/UI)",
        title: "Ingeniería de Interfaz y Experiencia de Usuario (UX/UI)",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Una buena experiencia es la base de toda conversión digital",
        subtitle: "Diseñamos experiencias digitales centradas en el usuario, la conversión y la usabilidad.",
        capabilities: [
            {
                icon: World(),
                title: "Arquitectura de información",
                text: "Organizamos el contenido y las rutas de navegación para que el usuario encuentre lo que necesita rápidamente, sin fricción y de forma intuitiva.",
            },
            {
                icon: People(),
                title: "Wireframes",
                text: "Creamos estructuras visuales iniciales que definen la distribución óptima de cada pantalla, priorizando claridad, uso eficiente del espacio y objetivos estratégicos.",
            },
            {
                icon: Sparks(),
                title: "Prototipos interactivos",
                text: "Desarrollamos versiones navegables que permiten visualizar y probar la futura experiencia, validando ideas antes de iniciar el desarrollo técnico.",
            },
            {
                icon: Rings(),
                title: "Diseño de interfaces",
                text: "Diseñamos pantallas funcionales, modernas y estéticas que reflejan la identidad de la marca y facilitan la interacción en cualquier dispositivo.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Experiencias web intuitivas y fáciles de usar",
                text: "Diseñamos plataformas con estructuras claras y navegación fluida que reducen la fricción y facilitan que los usuarios completen acciones clave.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Apps claras y ordenadas",
                text: "Creamos interfaces con jerarquía visual definida que disminuyen errores, aumentan la adopción y mejoran la percepción del producto digital.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Experiencias optimizadas para conversión",
                text: "Diseñamos recorridos intuitivos que guían al usuario a lo largo del funnel, aumentando la efectividad de las acciones comerciales y el cumplimiento de objetivos.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Navegación clara y eficiente",
                text: "Estructuramos menús, categorías y rutas de navegación que mejoran la experiencia, reducen la frustración y aumentan la permanencia en la plataforma.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Webs difíciles de usar",
        //         text: "Muchas plataformas presentan estructuras confusas, lo que genera fricción en la navegación y disminuye la capacidad del usuario para completar acciones clave.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Apps confusas",
        //         text: "Interfaces mal ordenadas y falta de jerarquía visual provocan errores, abandono y baja adopción, afectando el rendimiento y percepción del producto digital.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Baja conversión",
        //         text: "Una experiencia poco intuitiva reduce la efectividad de las acciones comerciales, impidiendo que los usuarios avancen en el funnel y concreten objetivos.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value4.webp`,
        //         mediaType: "image",
        //         title: "Mala navegación",
        //         text: "Menús, categorías y rutas mal diseñadas dificultan el recorrido del usuario, aumentando la frustración y reduciendo la permanencia en la plataforma.",
        //     },
        // ]
    },
    briefSubmit: "Optimiza la experiencia y convierte más",
    nextService: "produccion-audiovisual-de-alta-calidad"
}
