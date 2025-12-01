import { media } from "./images"

export const whatWeDo = [
    "Digital de clase mundial",
    "Espera creatividad",
    "Celebrar el éxito",
    "Obsesionarse con los detalles",
    "Almuerzos de viernes en el pub",
    "Aceptar el cambio",
    "Desbloquear el potencial",
    "Choca esos cinco",
    "Servicio excepcional",
    "Valorar las relaciones",
    "Superar las expectativas",
    "Celebrar",
]

export const whatWeDont = [
    "Trabajar los fines de semana",
    "Subcontratar",
    "Resistirse al pastel",
    "Perder en Mario Kart",
    "Que resalte",
    "Propuestas gratuitas",
    "Sacrificar la calidad por las ganancias",
    "Egos",
    "Prometer de más",
    "Tomar atajos",
    "Aceptar la mediocridad",
    "Descafeinado"
]

export const capabalities = [
    {
        title: "Estrategia y UX",
        capabilities: [
            "Estrategia Digital",
            "Investigación de Usuarios",
            "Mapeo del Recorrido del Usuario",
            "Arquitectura de la Información",
            "Wireframing",
        ]
    },
    {
        title: "Diseño",
        capabilities: [
            "Diseño de Interacción",
            "Diseño de Interfaz de Usuario",
            "Sistemas de Diseño",
            "Prototipado y Animación",
            "Accesibilidad",
        ]
    },
    {
        title: "Desarrollo",
        capabilities: [
            "Sitios Web",
            "Comercio Electrónico",
            "Aplicaciones Web",
            "Aplicaciones Móviles (iOS y Android)",
            "Integraciones de Plataformas",
        ]
    },
    {
        title: "Tecnología",
        capabilities: [
            "Vue y React.js",
            "Gestión de Contenidos Headless",
            "WordPress y WooCommerce",
            "Laravel",
            "Shopify",
        ]
    },
    {
        title: "Optimización",
        capabilities: [
            "Revisión de Sitios Web / Apps",
            "Optimización del Rendimiento",
            "Optimización de Conversiones",
            "Pruebas A/B",
            "Mejoras Continuas",
        ]
    },
    {
        title: "Soporte",
        capabilities: [
            "Gestión de Proyectos",
            "Hosting de Sitios Web",
            "Mantenimiento de Sitios Web",
            "Rendimiento y Seguridad",
            "Integraciones con Terceros",
        ]
    },
]

export const clientsImages = () => {
    const images = media.filter(m => m.pages?.includes("acerca"))
    const clientes = images.filter(i => i.categories?.includes("clients"))
    return { images, clientes }
}