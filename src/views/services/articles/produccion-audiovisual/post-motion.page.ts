import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/produccion-audiovisual/post-motion"

export const postMotionPage: ServicePageType =
{
    slug: "post-produccion-y-motion-design",
    heading: {
        pill: "Post Producción & Motion Design",
        title: "Post Producción & Motion Design",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Edición avanzada y motion design para maximizar impacto audiovisual",
        subtitle: "Postproducción profesional y diseño de motion graphics que transforman videos comunes en piezas dinámicas, atractivas y listas para convertir.",
        capabilities: [
            {
                icon: World(),
                title: "Edición profesional de video",
                text: "Pulimos narrativas, ritmos, cortes y estética visual para lograr piezas fluidas, coherentes y comerciales capaces de transmitir mensajes con impacto.",
            },
            {
                icon: People(),
                title: "Animaciones 2D",
                text: "Creamos gráficos animados que refuerzan ideas, explican conceptos y aportan dinamismo, mejorando comprensión y engagement del contenido.",
            },
            {
                icon: Sparks(),
                title: "Motion graphics",
                text: "Desarrollamos elementos visuales animados que elevan la estética, fortalecen la identidad de marca y enriquecen la experiencia audiovisual.",
            },
            {
                icon: Rings(),
                title: "Diseño sonoro",
                text: "Incorporamos música, efectos y ambientación profesional para reforzar narrativa, emoción e inmersión dentro del contenido audiovisual.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Edición profesional con narrativa y ritmo",
                text: "Aplicamos edición estratégica que aporta fuerza narrativa y visual, aumentando el impacto y la capacidad de retener la atención del espectador.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Ritmo dinámico y claridad visual",
                text: "Diseñamos estructuras dinámicas que mantienen el interés, refuerzan la emoción y mejoran la claridad del mensaje.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Dinamismo visual con recursos gráficos",
                text: "Integramos animaciones y elementos gráficos de forma estratégica para enriquecer el contenido y hacerlo más atractivo y memorable.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Contenido audiovisual atractivo y de alto rendimiento",
                text: "Potenciamos cada pieza con refuerzos visuales y sonoros que elevan su valor percibido y mejoran su desempeño en campañas y redes sociales.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Videos planos",
        //         text: "Piezas sin edición profesional carecen de fuerza narrativa y visual, reduciendo impacto y capacidad de retener la atención.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Ediciones sin ritmo",
        //         text: "La falta de estructura dinámica genera videos monótonos que afectan emoción, claridad y efectividad comunicativa.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Falta de dinamismo visual",
        //         text: "Sin animaciones ni elementos gráficos bien integrados, el contenido se percibe estático y poco atractivo.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Contenido poco atractivo",
        //         text: "Material sin refuerzo visual o sonoro disminuye su valor percibido y su rendimiento en campañas y redes.",
        //     },
        // ]
    },
    briefSubmit: "Transformemos tus videos en piezas de alto impacto",
    nextService: "advertising-creative-y-campaing-assets"
}
