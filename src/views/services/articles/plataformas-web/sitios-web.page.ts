import { Code, Diagram, Monitor, Thunder } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/plataformas-web/sitios-web"

export const websitesPage: ServicePageType =
{
    slug: "Sitios web",
    heading: {
        pill: "Sitios web",
        title: "Sitios web de primera categoría para marcas innovadoras",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Productos digitales extraordinarios",
        subtitle: "Aprovechamos nuestras fortalezas: Durante más de 14 años hemos ideado, creado y lanzado productos maravillosos en Internet.",
        capabilities: [
            {
                icon: Thunder(),
                title: "De la idea a la ejecución",
                text: "Desarrollamos el producto íntegramente internamente, desde la estrategia inicial hasta el resultado final. Esto significa que todo lo que hacemos cumple su función y se produce con la máxima calidad.",
            },
            {
                icon: Code(),
                title: "Full Stack",
                text: "Somos un espacio que reúne tanto a generalistas como a especialistas, abarcando bajo un mismo techo el desarrollo de interfaces de usuario, el diseño de interacción, la configuración de CMS y el desarrollo técnico.",
            },
            {
                icon: Monitor(),
                title: "Neutralidad tecnológica",
                text: "La mejor tecnología es la que funciona. Escuchamos y observamos constantemente para poder recomendarle la solución óptima para su problema empresarial.",
            },
            {
                icon: Diagram(),
                title: "Integrado",
                text: "Colocamos su sitio web en el centro de su ecosistema digital, proporcionando integraciones API seguras y soluciones automatizadas en todos sus sistemas empresariales.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Potencia tu marca",
                text: "Combinamos diseño innovador, tecnología de vanguardia y contenido estratégico para crear sitios web visualmente atractivos y altamente funcionales. Aproveche el poder de las experiencias digitales altamente atractivas para llevar su marca al siguiente nivel.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Experiencias Humanas",
                text: "Ofrezca una experiencia de usuario inmersiva que capture la esencia de su marca y conecte con su público objetivo. Desde una navegación intuitiva hasta una narrativa envolvente, cada sitio web está meticulosamente diseñado para captar la atención y dejar una huella imborrable.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Robusto, Seguro, Flexible",
                text: "Cada sitio web que desarrollamos se apoya en una infraestructura segura y de alto rendimiento, adaptada a las necesidades de la organización. Esto garantiza que su presencia digital pueda crecer con la demanda y ofrecer la flexibilidad necesaria para satisfacer las necesidades de su negocio a lo largo del tiempo.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Asociaciones gratificantes",
                text: "Detrás de cada sitio web de primera categoría hay una colaboración estrecha entre la agencia y el cliente. Trabajamos codo a codo con usted para garantizar resultados que ofrezcan experiencias extraordinarias y generen beneficios. Los premios son importantes, pero su éxito es mucho más valioso.",
            },
        ]
    },
    briefSubmit: "Experiencias Digitales Extraordinarias",
    nextService: "headless"
}