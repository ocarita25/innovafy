export interface PlanesSectionType {
    id: string
    section: string
    title: string
    accent: string
    introduction?: string
}

export interface PlanType {
    id: string,
    level: 'basico' | 'regular' | 'pro',
    plan: string,
    popular?: boolean
    title: string,
    description: string,
    costo: string,
    centimos?: string,
    planDetail: string,
    tags: string,
    services: {
        title: string,
        items: {
            service: string,
            description?: string,
        }[]
    }[],
    targetIcon: string,
    targetTitle: string,
    target: string,
    button: string,
}

export interface CategoriasType {
    id: 'inicio' | 'crecimiento' | 'liderazgo'
    icon: string,
    title: string,
    description: string,
    altDescription: string,
    price: string,
}

export interface TableServiciosRow {
    servicio: string,
    colData: TableColData[]
}

export interface TableColData {
    isText?: boolean,
    isCheck?: boolean,
    text?: string,
    isBgBlack?: boolean,
}
