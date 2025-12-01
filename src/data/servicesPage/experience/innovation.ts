import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/innovation-startups"

export const innovationPage: ServicePageType =
{
    slug: "innovacion-startups",
    heading: {
        pill: "Innovación y startups",
        title: "Innovar, diseñar, construir, enviar. Repetir.",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Tu ventaja injusta",
        subtitle: "Trabajamos con innovadores, emprendedores y equipos progresistas para acelerar las oportunidades y crear conciencia a través de experiencias digitales impactantes.",
        capabilities: [
            {
                icon: "",
                title: "Enfoque en soluciones",
                text: "Desde sitios web hasta aplicaciones móviles y plataformas digitales a medida, hemos ayudado a startups a captar capital, impulsar la participación, aumentar la conversión y acelerar el crecimiento.",
            },
            {
                icon: "",
                title: "Diseño y UX de primera clase",
                text: "Aplicamos nuestra galardonada metodología de UX y diseño para fundamentar el pensamiento conceptual, creando ideas, conceptos y prototipos que impulsen el crecimiento de su marca.",
            },
            {
                icon: "",
                title: "Una mano amiga",
                text: "Las startups aprovechan nuestro equipo de expertos digitales y tecnólogos para obtener información valiosa, ampliar sus capacidades y ejecutar su hoja de ruta.",
            },
            {
                icon: "",
                title: "Socios digitales",
                text: "Creemos en relaciones, servicio y soporte al cliente excepcionales. Nuestro compromiso es a largo plazo para mantener su ventaja competitiva y garantizar su éxito continuo.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Imagina lo posible",
                text: "Entendemos que el camino desde la idea hasta la comercialización está lleno de desafíos, y nos sentimos muy cómodos trabajando en lo abstracto e indefinido. Desde novedosas aplicaciones web hasta innovadores productos digitales, compartimos tu pasión por tu idea de negocio y trabajamos contigo para convertirla en realidad.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Un proceso de iteración",
                text: "A menudo, encontrar la solución adecuada está justo delante de nosotros; otras veces, requiere un proceso de eliminación. Nuestras fases de estrategia, UX y diseño nos permiten explorar ideas en conjunto, y el uso de prototipos rápidos nos permite identificar las buenas ideas y descartar las malas.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Estamos juntos en esto",
                text: "Detrás de cada producto de clase mundial hay una entrega que define la categoría y una colaboración estrecha entre agencia y cliente. Trabajamos codo a codo para garantizar resultados que ofrezcan experiencias extraordinarias y logren resultados excepcionales. Los premios son importantes, pero tu éxito lo es aún más.",
            },
        ]
    },
    briefSubmit: "Lleva tu presencia digital al siguiente nivel",
    nextService: "aplicaciones-web"
}