import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/ecommerce"

export const eCommercePage: ServicePageType =
{
    slug: "ecommerce",
    heading: {
        pill: "eCommerce",
        title: "Hermosas tiendas online que atraen y convierten",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "De 1 producto a más de 10 000.",
        subtitle: "Sitios web de comercio electrónico galardonados que convierten a los visitantes en clientes.",
        capabilities: [
            {
                icon: "",
                title: "Venta minorista en línea sin interrupciones",
                text: "Administración y automatización simplificadas, experiencias de cliente de alto rendimiento y optimización continua para minoristas exclusivamente online y omnicanal.",
            },
            {
                icon: "",
                title: "Cajas sin complicaciones",
                text: "Aplicamos nuestro enfoque de UX y diseño, galardonado con múltiples premios, junto con datos analíticos y principios de UX de mejores prácticas para convertir el gasto en ingresos y minimizar el abandono.",
            },
            {
                icon: "",
                title: "Integración segura",
                text: "Podemos conectar y configurar sus sistemas empresariales y soluciones de pago para garantizar la integridad de los datos en toda su infraestructura.",
            },
            {
                icon: "",
                title: "Socios de comercio electrónico",
                text: "Estamos comprometidos a largo plazo. Trabajaremos en estrecha colaboración con usted para garantizar resultados extraordinarios y su éxito continuo a lo largo del tiempo.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Mejora la experiencia de tu marca",
                text: "Cada interacción con el cliente contribuye a la experiencia de marca global. Nuestro enfoque de UX ética y diseño de conversión se basa en esta filosofía, garantizando mejores experiencias para el cliente que perduran mucho después de la venta final.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Funcionalidad completa de comercio electrónico",
                text: "Ofrecemos un conjunto integral de funcionalidades diseñadas para optimizar cada aspecto de tu tienda online. Desde la gestión de productos y pasarelas de pago seguras hasta recomendaciones personalizadas y procesos de compra sencillos, equipamos tu plataforma de comercio electrónico con todas las herramientas necesarias para operar de forma eficiente, adaptarse a los cambios del mercado y ofrecer una experiencia de compra excepcional.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Da vida a tus productos online",
                text: "Nos esforzamos por trasladar la experiencia tangible de sus productos al entorno digital, llegando a una nueva base de clientes mediante interfaces visualmente atractivas que realzan sus productos y convierten la atención en ventas. Desde vistas de producto en 360 grados hasta realidad aumentada, animamos a los clientes a explorar e interactuar con los productos de una forma rica e inmersiva.",
            }
        ]
    },
    briefSubmit: "Eleva el nivel de tu Comercio Electrónico",
    nextService: "educacion"
}