import type { ServicePageType } from "@/types/ServicePage.types";

const path = "/images/services/laravel"

export const laravelPage: ServicePageType =
{
    slug: "laravel",
    heading: {
        pill: "laravel",
        title: "Escalabilidad sin complejidad, con la tecnología de Laravel.",
        heroImage: `${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Calidad artesanal y escala empresarial",
        subtitle: "Creamos sitios web, aplicaciones web y software a medida, utilizando el framework Laravel PHP para una escalabilidad y flexibilidad sin complicaciones.",
        capabilities: [
            {
                icon: "",
                title: "Desarrollo web a medida",
                text: "Combinamos conocimientos, datos y nuestra experiencia tecnológica para alinearnos con su visión, creando una plataforma Laravel totalmente personalizada que se adapte a las necesidades de su negocio.",
            },
            {
                icon: "",
                title: "Escalar. Adaptarse. Ejecutar.",
                text: "Nuestros sitios web y aplicaciones buscan la máxima flexibilidad, seguridad y rendimiento, garantizando que su presencia digital pueda adaptarse a sus necesidades a medida que evolucionan.",
            },
            {
                icon: "",
                title: "Experiencias fascinantes",
                text: "Creamos experiencias personalizadas, atractivas e inmersivas, respaldadas por tecnologías digitales robustas, probadas y contrastadas.",
            },
            {
                icon: "",
                title: "Resultados premiados",
                text: "Nuestro enfoque de diseño y UX, galardonado con múltiples premios, guía cada concepto, decisión creativa y solución de mejores prácticas para impulsar su marca.",
            },
        ],
        valuePropositions: [
            {
                media: `${path}/value1.webp`,
                mediaType: "image",
                title: "Elegancia de principio a fin",
                text: "Gracias al completo y ampliamente soportado framework de Laravel, podemos crear soluciones web sofisticadas y optimizadas que se adaptan a cualquier aplicación. Es elegancia integral: herramientas de calidad para un desarrollo placentero, que generan resultados brillantes.",
            },
            {
                media: `${path}/value2.webp`,
                mediaType: "image",
                title: "Evoluciona contigo",
                text: "A medida que su negocio crece, también lo harán sus necesidades tecnológicas. Implementamos una combinación práctica de pensamiento estratégico, experiencia digital y conocimientos técnicos para desarrollar aplicaciones Laravel que escalan y se adaptan sin esfuerzo con el paso del tiempo.",
            },
            {
                media: `${path}/value3.webp`,
                mediaType: "image",
                title: "Desde startups hasta empresas",
                text: "Trabajamos con clientes de todos los tamaños, desde startups con gran potencial de crecimiento hasta empresas consolidadas que buscan optimizar su infraestructura digital sin complicaciones innecesarias. Nuestras aplicaciones web Laravel, diseñadas específicamente para este fin, impulsan el éxito empresarial en cada etapa.",
            },
            {
                media: `${path}/value4.mp4`,
                mediaType: "video",
                title: "Socios para el largo plazo",
                text: "Detrás de cada sitio web de primera categoría hay una colaboración estrecha entre la agencia y el cliente. Trabajamos codo a codo con usted para garantizar resultados que ofrezcan experiencias extraordinarias y generen beneficios. Los premios son importantes, pero su éxito es mucho más valioso.",
            }
        ]
    },
    briefSubmit: "Construyamos con Laravel",
    nextService: 'aplicaciones-web'
}