import { Diagram, Digital, Eye, Sparks } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/data-viss"

export const dataVissPage: ServicePageType =
{
    slug: "visualización-datos",
    heading: {
        pill: "Visualización de datos y narración de historias",
        title: "Visualizaciones de datos y narración de historias de alto impacto",
        heroImage: `/videos/${path}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "La información es hermosa",
        subtitle: "Unique interfaces, narratives and experiences powered by your data.",
        capabilities: [
            {
                icon: Eye(),
                title: "Experiencias cautivadoras",
                text: "Creamos visualizaciones interactivas y experiencias creativas cautivadoras para atraer a su público y conectarlo con sus datos.",
            },
            {
                icon: Sparks(),
                title: "Visualizar la complejidad",
                text: "Aprovecha las mejores prácticas de UX y el pensamiento de diseño centrado en el usuario para crear experiencias sencillas e intuitivas para datos y escenarios complejos.",
            },
            {
                icon: Digital(),
                title: "Paneles de control y plataformas internas",
                text: "Build better data platforms, from single-page applications through to highly bespoke online systems, bringing data management and visualisation together.",
            },
            {
                icon: Diagram(),
                title: "Herramienas poderosas",
                text: "Proporcionamos potentes herramientas digitales, adaptadas a las complejidades e idiosincrasias de los datos, procesos y sistemas de su organización.",
            },
        ],
        valuePropositions: [
            {
                media: `/videos/${path}/value1.mp4`,
                mediaType: "video",
                title: "Cuenta una historia con datos.",
                text: "Transforma conjuntos de datos complejos en narrativas inmersivas que informan e inspiran a la acción. Nuestro enfoque combina elementos visuales impactantes con análisis profundos, creando una experiencia fluida y atractiva. Ya sea que busques impulsar el cambio, destacar tendencias o demostrar el impacto, organiza tus datos de la mejor manera para lograr experiencias digitales poderosas con un impacto duradero.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Informes y paneles de control atractivos",
                text: "Obtenga información valiosa a partir de datos sin procesar con experiencias interactivas visualmente atractivas y puntos de contacto consolidados. Diseñamos y creamos interfaces basadas en datos que se adaptan a cualquier objetivo, desde informes inmersivos para el público general hasta herramientas y paneles internos personalizados que apoyan e informan a las partes interesadas.",
            },
            {
                media: `/videos/${path}/value3.mp4`,
                mediaType: "video",
                title: "Sus datos, nuestra experiencia",
                text: "Aproveche nuestra experiencia y transforme sus datos en experiencias únicas y atractivas que eduquen, inspiren y deleiten. Al combinar sus datos con nuestra experiencia en infografía, visualización de datos y diseño de interfaces modernas, le ayudamos a liberar todo su potencial y a crear experiencias digitales con un impacto duradero.",
            }
        ]
    },
    briefSubmit: "Dale vida a tus datos",
    nextService: "comercial"
}