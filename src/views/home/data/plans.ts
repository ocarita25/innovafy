import { businessPlan } from "./plans/business"
import { professionalPlan } from "./plans/profesional"
import { starterPlan } from "./plans/starter"

interface PlanType {
    slug: "esencial" | "avanzado" | "premium"
    isFeatured: boolean,
    category: string,
    title?: string,
    description: string,
    cost: string,
    target: string,
    targetDescription: string,
    features: string[],
}

export interface TierPlanType {
    type: string,
    slug: string,
    tier: string,
    title: string,
    tagline: string,
    summary: string,
    outcome: string,
    sections: {
        id: string,
        title: string,
        description: string,
        items: string[],
        media: string,
        mediaType: 'image' | 'video'
    }[],
    deliverables: string[],
    exclusions: string[],
    cta: {
        label: string,
        action: string
    },
}

export const plansData: PlanType[] = [
    {
        slug: "esencial",
        isFeatured: false,
        category: 'Esencial',
        title: 'Plan Esencial',
        description: 'Presencia sólida para empezar a crecer',
        cost: "949.90",
        // target: 'EMPRENDEDORES',
        // targetDescription: 'o negocios que necesitan verse profesional y comenzar a generar tracción',
        target: '',
        targetDescription: 'Para emprendedores que necesitan construir su presencia digital desde cero con imagen profesional.',
        features: [
            "Gestión profesional de redes sociales",
            "Contenido mensual estratégico",
            "Identidad visual optimizada",
            "Copywriting enfocado en atracción",
            "Reporte y seguimiento mensual"
        ],
    },
    {
        slug: "avanzado",
        isFeatured: true,
        category: 'Avanzado',
        title: 'Plan Avanzado',
        description: 'Estrategia y conversión para escalar',
        cost: "1559.90",
        target: '',
        targetDescription: 'Para PYMEs que quieren visibilidad real, producción fotográfica y sus primeras campañas de pauta activas.',
        features: [
            "Gestión completa de redes sociales",
            "Contenido visual y audiovisual profesional",
            "Estrategia de posicionamiento y SEO local",
            "Publicidad digital y embudos de captación",
            "Análisis de performance y optimización continua"
        ],
    },
    {
        slug: "premium",
        isFeatured: false,
        category: 'Premium',
        title: 'Plan Premium',
        description: 'Performance, datos e inteligencia',
        cost: "1999.90",
        target: '',
        targetDescription: 'Solución 360º: equipo dedicado, producción pro, todas las plataformas de pauta, web y branding completo.',
        // target: 'EMPRESAS CONSOLIDADAS',
        // targetDescription: 'que buscan liderazfo, eficiencia y decisiones basadas en datos',
        features: [
            "Equipo dedicado de gestión, diseño y producción",
            "Contenido profesional con storytelling",
            "Publicidad multicanal orientada a conversión",
            "Branding y soporte creativo continuo",
            "Análisis de resultados y ROI"
        ],
    },
]

const plansArticles: TierPlanType[] = [
    starterPlan,
    professionalPlan,
    businessPlan
]

const plansArticlesBySlug = new Map(
    plansArticles.map(article => [article.slug, article])
)

export function getPlanArticleBySlug(slug: string) {
    return plansArticlesBySlug.get(slug)
}