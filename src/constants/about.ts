import { media } from "./images"

export const whatWeDo = [
    "Diseñamos el Futuro Digital",
    "Resultados que Redefinen el Juego",
    "Obsesionados con la Calidad",
    "Abrazamos el Cambio Constante",
    "Desbloqueamos Tu Potencial",
    "Relaciones Sólidas y de Valor",
    "Servicio Excepcional, Sin Pero",
    "Resultados Excepcionales Siempre",
    "Celebramos Tu Éxito	",
    "¡Chocamos Esos Cinco!",
    "Viernes de Ideas y Pizza",
    "Pasión y Mucha Energía",

]

export const whatWeDont = [

    "Trabajar los Fines de Semana",
    "Subcontratar (Todo es 100% Interno)",
    "Metodologías Rígidas y Obsoletas,			",
    "Falta de Pasión en el Proceso",
    "Soluciones de Corto Plazo,",
    "Opacidad en la Comunicación (Total Transparencia)",
    "Sacrificar la calidad por las ganancias,		",
    "Trabajar con Egos",
    "Promesas excesivas",
    "Entregables sin Estrategia",
    "Aceptar la mediocridad",
    "Descafeinado",
]

export const capabilities = [
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