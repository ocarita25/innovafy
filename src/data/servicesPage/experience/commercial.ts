import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/commercial"

export const commercialPage: ServicePageType =
{
    slug: "comercial",
    heading: {
        pill: "Comercial",
        title: "Plataformas digitales inspiradoras que generan resultados",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Aplicaciones y Sitios Web Extraordinarias",
        subtitle: "Creamos experiencias digitales galardonadas para empresas líderes, desbloqueando su potencial de negocio y resolviendo desafíos del mundo real.",
        capabilities: [
            {
                icon: World(),
                title: "Diseño y UX de primera clase",
                text: "Aplicamos nuestra galardonada metodología de UX y diseño para fundamentar el pensamiento conceptual; creando ideas, conceptos y prototipos que ayuden a impulsar su marca.",
            },
            {
                icon: People(),
                title: "Líderes en el ámbito digital",
                text: "Ampliamos los límites del diseño, la tecnología y lo digital para alcanzar nuevos niveles en experiencias online potentes, prácticas y significativas.",
            },
            {
                icon: Sparks(),
                title: "Todo es posible",
                text: "Somos un equipo multidisciplinario de especialistas y generalistas que creamos productos digitales integrales para cualquier propósito. Todo lo que puedas imaginar, lo podemos hacer realidad.",
            },
            {
                icon: Rings(),
                title: "Impulsar el retorno de la inversión",
                text: "Los resultados importan. Ya sean clientes potenciales, ventas o reconocimiento de marca, nos aseguramos de que nuestro trabajo no solo ofrezca experiencias excelentes, sino que también genere un impacto medible.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Aumenta la interacción y fortalece tu marca.",
                text: "En un entorno digital fragmentado y a menudo complejo, un único sitio web cumple múltiples funciones para su audiencia en diferentes momentos. Gracias a nuestra experiencia, su presencia en línea puede equilibrar la comunicación de marca con la funcionalidad táctica en todas las etapas del recorrido de su audiencia.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Impulsa las conversiones a través de una mejor estrategia digital.",
                text: "Utilizamos información basada en datos para optimizar cada aspecto de tu plataforma, asegurando que conecte con tu público y lo impulse hacia la conversión. Desde diseños web intuitivos hasta aplicaciones móviles fluidas, no solo mejoramos tu presencia digital, sino que también convertimos esa mayor visibilidad en resultados de negocio tangibles.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Asociaciones gratificantes",
                text: "Detrás de cada producto digital de primer nivel hay una entrega innovadora y una colaboración estrecha entre agencia y cliente. Trabajamos codo a codo para lograr resultados que ofrecen experiencias extraordinarias y generan beneficios. Los premios son importantes, pero tu éxito significa mucho más.",
            },
        ]
    },
    briefSubmit: "Eleva tu presencia digital",
    nextService: "sitios-web"
}