import type { CategoriasType, PlanType } from "../planes.types";

export const categorias: CategoriasType[] = [
    {
        id: 'inicio',
        icon: '🌱',
        title: 'Planes de Inicio',
        description: 'Para negocios que recién arrancan su presencia digital. Construimos tu marca desde cero.',
        altDescription: 'Para negocios sin presencia digital - construimos todo desde cero.',
        price: 'S/ 949.90 — S/ 1,999.90 / mes',
    },
    {
        id: 'crecimiento',
        icon: '📈',
        title: 'Planes de Crecimiento',
        description: 'Para empresas establecidas que necesitan convertir mejor y escalar sus ventas.',
        altDescription: 'Para empresas con presencia establecida que necesitan escalar resultados reales.',
        price: 'S/ 999 — S/ 2,799 / mes',
    },
    {
        id: 'liderazgo',
        icon: '🏆',
        title: 'Planes de Liderazgo',
        description: 'Para empresas consolidadas que quieren dominar su mercado con IA y automatización.',
        altDescription: 'Para empresas consolidadas con años en el mercado — liderazgo digital total e inatacable.',
        price: 'S/ 2,499 — S/ 4,999 / mes',
    },
]

export const planesIniciales: PlanType[] = [
    {
        id: "inicial-esencial",
        level: "basico",
        plan: "✦ Plan Esencial",
        title: "Esencial",
        description: "Para emprendedores que necesitan construir su presencia digital desde cero con imagen profesional.",
        costo: "949",
        centimos: ".90",
        planDetail: 'Sin contrato anual',
        tags: "Presencia + Contenido + Branding Base",
        services: [
            {
                title: 'Marketing digital',
                items: [
                    {
                        service: 'Community management - Facebook e Instagram',
                        description: 'Gestión de comunidades digitales, respuesta de mensajes y comentarios',
                    },
                    {
                        service: '10 publicaciones mensuales + calendario editorial',
                        description: '8 piezas gráficas + 5 reels básicos con guion creativo',
                    },
                    {
                        service: '14 stories estratégicas mensuales',
                    },
                    {
                        service: 'Posicionamiento SEO en redes sociales',
                        description: 'Optimización de perfiles, hashtags estratégicos e investigación de palabras clave',
                    },
                    {
                        service: 'Análisis de métricas mensual',
                        description: 'Alcance, engagement, crecimiento de audiencia y consultoría básica',
                    },
                ]
            },
            {
                title: 'Diseño digital y branding',
                items: [
                    {
                        service: 'Diseño de piezas gráficas para redes sociales',
                        description: 'Creatividades alineadas a tu identidad visual y manual de marca',
                    },
                    {
                        service: 'Diseño de portadas, banners y perfil de redes sociales',
                    },
                    {
                        service: 'Banco de fotos + mejora de identidad gráfica',
                        description: 'Diseño de kit de marca base para tus comunicaciones',
                    },
                ]
            }
        ],
        targetIcon: "💡",
        targetTitle: "💡 Ideal para",
        target: "Emprendedores y negocios locales que validan su presencia digital con imagen profesional desde el primer mes.",
        button: "Empezar ahora"
    },

    {
        id: "inicial-avanzado",
        level: "regular",
        plan: "✦ Plan Avanzado",
        popular: true,
        title: "Avanzado",
        description: "Para PYMEs que quieren visibilidad real, producción fotográfica y sus primeras campañas de pauta activas.",
        costo: "1,559",
        centimos: ".90",
        planDetail: 'Incluye todo lo del Plan Esencial',
        tags: "📣 Pauta activa + Producción fotográfica + Embudos",
        services: [
            {
                title: 'Marketing digital - Amplificado',
                items: [
                    {
                        service: 'FB + IG + TikTok + Google My Business',
                        description: 'Gestión profesional y estrategia de contenido unificada',
                    },
                    {
                        service: '16 publicaciones / mes + 20 stories estratégicas',
                        description: '10 gráficas + 6-8 reels con guion creativo y dirección visual',
                    },
                    {
                        service: 'Gestión de campañas en Meta Ads',
                        description: 'Tráfico, engagement o captación local — con segmentación por públicos',
                    },
                    {
                        service: 'Creación de embudos de marketing y ventas',
                        description: 'Estrategia de inbound e implementación de funnels de captación de leads',
                    },
                    {
                        service: 'Gestión y optimización de landing pages',
                        description: 'CRM interno + análisis de métricas y optimización de conversiones (CRO)',
                    },
                ]
            },
            {
                title: 'Producción Visual',
                items: [
                    {
                        service: 'Sesión fotográfica profesional mensual',
                        description: 'Hasta 10 productos o ambientes — edición y entrega incluida',
                    },
                    {
                        service: 'Producción de Reels con guion y edición profesional',
                        description: 'Dirección creativa para contenido de redes sociales',
                    },
                ]
            }
        ],
        targetIcon: "🚀",
        targetTitle: "🚀 Resultado esperado",
        target: "Primeras ventas y leads calificados desde el primer mes de pauta activa.",
        button: "Quiero este plan"
    },

    {
        id: "inicial-premium",
        level: "pro",
        plan: "✦ Plan Premium",
        title: "Premium",
        description: "Solución 360°: equipo dedicado, producción pro, todas las plataformas de pauta, web y branding completo.",
        costo: '1,999',
        centimos: ".90",
        planDetail: 'Solución digital 360° completa',
        tags: "Presencia + Contenido + Branding Base",
        services: [
            {
                title: 'Marketing digital',
                items: [
                    {
                        service: 'Área dedicada: Community Management + Diseño Gráfico + Producción Audiovisual + Landing Web / Soporte Web',
                        description: 'Área dedicada: Community Management + Diseño Gráfico + Producción Audiovisual + Landing Web / Soporte Web',
                    },
                    {
                        service: 'Gestión completa de redes sociales y Google My Business',
                    },
                    {
                        service: '20 publicaciones + 30 stories estratégicas / mes',
                        description: '10 gráficas + 10 reels o videos con storytelling profesional',
                    },
                    {
                        service: 'Sesión fotográfica profesional + clips de video extendidos',
                        description: 'Banco de fotos y audiovisual completo para reutilización en campañas y redes',
                    },
                    {
                        service: 'Equipo profesional: cámaras, luces, micrófonos y software de edición profesional',
                    },
                    {
                        service: 'Campañas Meta Ads + Google Ads + TikTok Ads',
                        description: 'Diseño y gestión de campañas por temporada o lanzamientos',
                    },
                    {
                        service: 'SEO avanzado + optimización + estrategias de embudos de venta',
                    },
                    {
                        service: 'Branding + diseño de piezas para merchandising o promociones',
                        description: 'Soporte continuo de diseño para mantener coherencia visual',
                    },
                    {
                        service: 'Reporte detallado de resultados, métricas y ROI mensual',
                        description: 'Reuniones de planificación y coordinación estratégica avanzada',
                    },
                ]
            },
        ],
        targetIcon: "💎",
        targetTitle: "💎 Resultado esperado",
        target: "Marca sólida, posicionada y con flujo constante de ventas desde el mes 2.",
        button: "Hablar con un experto"
    },
]

export const planesCrecimiento: PlanType[] = [
    {
        id: "crecimiento-starter",
        level: "basico",
        plan: "⚡ Growth Starter",
        title: "Optimize",
        description: "Para empresas que necesitan convertir mejor lo que ya tienen — sin necesidad de rehacerlo todo.",
        costo: "999",
        planDetail: '/ mes · Consultoría estratégica digital incluida',
        tags: "🎯 Convertir más con lo que ya tienes",
        services: [
            {
                title: 'Marketing digital - Optimización',
                items: [
                    {
                        service: 'Consultoría estratégica en marketing digital',
                        description: 'Diagnóstico completo: web, redes, SEO, embudos y competencia',
                    },
                    {
                        service: 'Optimización de conversiones (CRO)',
                        description: 'Pruebas y mejoras UX/UI para aumentar conversión sin rediseño total',
                    },
                    {
                        service: 'Estrategias de contenido SEO redefinidas',
                        description: 'Investigación de palabras clave + contenido con foco en ventas',
                    },
                    {
                        service: 'Optimización técnica SEO',
                        description: 'Velocidad, estructura, metadatos y posicionamiento orgánico',
                    },
                    {
                        service: 'Gestión estratégica de 2 redes sociales',
                        description: 'Calendario editorial con foco en conversión, no solo visibilidad',
                    },
                ]
            },
            {
                title: 'Diseño UI/UX',
                items: [
                    {
                        service: 'Investigación de experiencia de usuario',
                        description: 'Análisis de comportamiento en tu web actual y detección de fricciones',
                    },
                    {
                        service: 'Análisis de métricas con KPIs reales',
                        description: 'Tráfico, leads, CTR, tasa de conversión y costo por resultado',
                    },
                ]
            }
        ],
        targetIcon: "",
        targetTitle: "🎯 Resultado esperado",
        target: "+30-60% en conversiones en los primeros 60 días sin aumentar el presupuesto en pauta.",
        button: "Optimizar mi negocio"
    },
    {
        id: "crecimiento-pro",
        level: "regular",
        plan: "🚀 Growth Pro",
        popular: true,
        title: "Scale",
        description: "Para negocios listos para escalar ventas con campañas activas, contenido premium, automatización y datos.",
        costo: "1,799",
        planDetail: '/ mes · Incluye todo Growth Starter',
        tags: "📈 Pauta + Contenido premium + Automatización",
        services: [
            {
                title: 'Marketing digital - Escala',
                items: [
                    {
                        service: 'Gestión de campañas Meta Ads + Google Ads',
                        description: 'Segmentación avanzada, creatividades, A/B testing y optimización continua',
                    },
                    {
                        service: 'Implementación de funnels de captación de leads',
                        description: 'Estrategia de inbound marketing con nurturing automatizado',
                    },
                    {
                        service: 'Email marketing y automatización de correos',
                        description: 'Flujos automáticos para convertir leads fríos en clientes activos',
                    },
                    {
                        service: 'Rediseño de landing pages clave',
                        description: 'Optimización UX/UI con foco en conversión y velocidad de carga',
                    },
                ]
            },
            {
                title: 'Contenido audiovisual',
                items: [
                    {
                        service: '20 piezas de contenido premium / mes',
                        description: 'Reels, TikToks y YouTube Shorts con dirección creativa y guion',
                    },
                    {
                        service: 'Sesión fotográfica profesional mensual',
                        description: 'Productos, servicios o ambientes — edición y entrega incluida',
                    },
                    {
                        service: 'Reunión estratégica quincenal con account manager',
                        description: 'Revisión de resultados, ajustes y planificación del siguiente período',
                    },
                ]
            }
        ],
        targetIcon: "",
        targetTitle: "📈 Resultado esperado",
        target: "Reducir costo por lead en 40% y duplicar ventas en los primeros 90 días.",
        button: "Quiero este plan"
    },
    {
        id: "crecimiento-elite",
        level: "pro",
        plan: "💎 Growth Elite",
        title: "Dominate",
        description: "Para empresas que quieren liderazgo digital real: IA, automatización total de procesos y ecosistema web avanzado.",
        costo: "2,799",
        planDetail: '/  mes · Solución de crecimiento 360°',
        tags: "🤖 IA + Automatización + Ecosistema web",
        services: [
            {
                title: 'Automatización con inteligencia artificial',
                items: [
                    {
                        service: 'Implementación de chatbots con IA',
                        description: 'Automatización de atención al cliente y captación de leads 24/7',
                    },
                    {
                        service: 'Automatización de CRM con flujos en n8n',
                        description: 'Pipeline inteligente con scoring de leads y seguimiento automático',
                    },
                    {
                        service: 'Automatización de procesos de marketing',
                        description: 'Del primer clic al cierre de venta sin intervención manual',
                    },
                    {
                        service: 'Integración de APIs y herramientas de marketing',
                        description: 'Dashboard de inteligencia de negocio con métricas en tiempo real',
                    },
                ]
            },
            {
                title: 'Desarrollo web y apps',
                items: [
                    {
                        service: 'Desarrollo web avanzado o e-commerce',
                        description: 'Plataforma a medida con integración de pasarelas de pago y APIs',
                    },
                    {
                        service: 'Optimización de velocidad + seguridad web',
                        description: 'Implementación de sistemas administrativos y paneles de gestión',
                    },
                    {
                        service: 'Account Manager exclusivo · Respuesta < 4h',
                        description: 'Reuniones semanales + consultoría en transformación digital',
                    },
                ]
            }
        ],
        targetIcon: "",
        targetTitle: "🏆 Resultado esperado",
        target: "ROI mínimo 3x garantizado en los primeros 6 meses de trabajo conjunto.",
        button: "Hablar con un experto"
    },
]

export const planesLiderazgo: PlanType[] = [
    {
        id: "liderazgo-starter",
        level: "basico",
        plan: "🔵 Liderazgo Starter",
        title: "Leader",
        description: "Para empresas consolidadas que quieren modernizar su identidad digital y posicionarse con autoridad.",
        costo: "2,499",
        planDetail: '/ mes · Diagnóstico estratégico gratuito',
        tags: "🎯 Modernización + Branding + Autoridad digital",
        services: [
            {
                title: 'Diseño digital y branding',
                items: [
                    {
                        service: 'Branding completo y rediseño de identidad visual',
                        description: 'Creación de logotipo profesional + manual de marca + kit visual actualizado',
                    },
                    {
                        service: 'Diseño de presentaciones corporativas + material gráfico',
                        description: 'Creatividades para campañas, banners y material para marketing',
                    },
                ]
            },
            {
                title: 'Marketing digital y contenido',
                items: [
                    {
                        service: 'Gestión de FB, IG, TikTok, LinkedIn y Google My Business',
                        description: 'Estrategia integral unificada en todos los canales activos',
                    },
                    {
                        service: '24 publicaciones mensuales premium',
                        description: '14 gráficas + 10 videos con producción profesional y dirección creativa',
                    },
                    {
                        service: 'Campañas Meta Ads + Google Ads activas',
                        description: 'Planificación estratégica, segmentación avanzada y optimización continua',
                    },
                    {
                        service: 'SEO avanzado + estrategia de contenido de autoridad',
                        description: 'Posicionamiento orgánico y optimización técnica completa',
                    },
                ]
            },
            {
                title: 'Desarrollo web ui/ux',
                items: [
                    {
                        service: 'Rediseño web completo con enfoque UX/UI',
                        description: 'Arquitectura de información, wireframes, prototipo y diseño de interfaces',
                    },
                    {
                        service: 'Optimización de velocidad web + seguridad',
                        description: 'Reporte quincenal con ROI detallado y reunión de planificación',
                    },
                ]
            }
        ],
        targetIcon: "",
        targetTitle: "🔵 Resultado esperado",
        target: "Imagen modernizada y posicionamiento claro como referente frente a competidores directos.",
        button: "Modernizar mi marca"
    },
    {
        id: "liderazgo-pro",
        level: "regular",
        plan: "🟣 Liderazgo Pro",
        popular: true,
        title: "Authority",
        description: "Para empresas que quieren ser la referencia #1 de su categoría con IA, automatización y contenido de alto nivel.",
        costo: "3,599",
        planDetail: '/ mes · Incluye todo Plan Leader',
        tags: "Presencia + Contenido + Branding Base",
        services: [
            {
                title: 'Automatización con IA',
                items: [
                    {
                        service: 'Automatización de procesos de marketing con IA',
                        description: 'Implementación de flujos con n8n + integración de herramientas de marketing',
                    },
                    {
                        service: 'Automatización de CRM avanzado',
                        description: 'Scoring de leads, pipeline automático y seguimiento sin intervención manual',
                    },
                    {
                        service: 'Implementación de asistentes virtuales con IA',
                        description: 'Atención al cliente automatizada + captación de leads 24/7',
                    },
                ]
            },
            {
                title: 'Marketing + Contenido + Pauta',
                items: [
                    {
                        service: 'TikTok Ads + YouTube Ads + remarketing avanzado',
                        description: 'Audiencias personalizadas, lookalike y retargeting multicanal',
                    },
                    {
                        service: 'Email marketing masivo con A/B testing',
                        description: 'Automatización de correos y nurturing de base de datos',
                    },
                    {
                        service: 'Estrategia de thought leadership + contenido de autoridad',
                        description: 'Posicionamiento como referente de la industria en medios digitales',
                    },
                    {
                        service: 'Dashboard ejecutivo de métricas en tiempo real',
                        description: 'Visibilidad total de marketing, ventas, ROI y embudos',
                    },
                    {
                        service: 'Account Manager dedicado + reuniones semanales',
                        description: 'Consultoría en transformación digital continua',
                    },
                ]
            }
        ],
        targetIcon: "",
        targetTitle: "👑 Resultado esperado",
        target: "Marca referente y reconocida como líder #1 de su categoría en 6 meses.",
        button: "Quiero este plan"
    },
    {
        id: "liderazgo-elite",
        level: "pro",
        plan: "⬡ Liderazgo Elite",
        title: "Legacy",
        description: "El plan definitivo. Ecosistema digital completo con equipo exclusivo, IA personalizada y expansión regional.",
        costo: "4,999",
        planDetail: '/ mes · Solución empresarial total',
        tags: "🌐 Ecosistema 360° · IA personalizada · Expansión",
        services: [
            {
                title: 'Desarrollo web, apps y plataformas',
                items: [
                    {
                        service: 'Ecosistema digital 360° completo',
                        description: 'Web corporativa + App móvil + E-commerce + CRM + IA integrados',
                    },
                    {
                        service: 'Desarrollo de plataformas SaaS o sistemas admin',
                        description: 'Paneles de gestión, bases de datos e integración de pasarelas de pago',
                    },
                    {
                        service: 'Design system completo + diseño UX para apps y e-commerce',
                        description: 'Prototipos interactivos, pruebas de usabilidad y design systems escalables',
                    },
                ]
            },
            {
                title: 'IA y automatización avanzada',
                items: [
                    {
                        service: 'IA personalizada entrenada con los datos de tu empresa',
                        description: 'Optimización de procesos empresariales con inteligencia artificial',
                    },
                    {
                        service: 'Automatización total de procesos internos',
                        description: 'Integración de APIs, servicios automatizados y flujos n8n complejos',
                    },
                ]
            },
            {
                title: 'Producción, estrategia y expansión',
                items: [
                    {
                        service: 'Equipo exclusivo dedicado a tu marca',
                        description: 'Director de estrategia, diseñador, desarrollador, CM, fotógrafo y analista',
                    },
                    {
                        service: 'Producción audiovisual de alto nivel mensual',
                        description: 'Videos corporativos, spots publicitarios, series de contenido y YouTube Ads',
                    },
                    {
                        service: 'Estrategia de expansión digital latinoamericana',
                        description: 'Consultoría estratégica con CEO/directivos + soporte prioritario 24/7 < 2h',
                    },
                ]
            }
        ],
        targetIcon: "",
        targetTitle: "🌐 Resultado esperado",
        target: "Legado digital sólido. Líder indiscutido en su categoría con presencia regional consolidada.",
        button: "Agendar reunión ejecutiva"
    },
]

export function obtenerPlanesPorCategoria(categoria: 'inicio' | 'crecimiento' | 'liderazgo') {
    const planes = {
        inicio: { descripcion: categorias[0], planes: planesIniciales },
        crecimiento: { descripcion: categorias[1], planes: planesCrecimiento },
        liderazgo: { descripcion: categorias[2], planes: planesLiderazgo }
    }[categoria]

    return planes
}