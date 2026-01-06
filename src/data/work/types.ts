export const WORK_CATEGORIES = ["featured", "comercial", "sin-fines-de-lucro", "educacion", "comunidad-y-proposito", "innovacion", "ui-ux",] as const

export type MediaImage = {
    type: 'image',
    src: string,
    alt?: string,
}

export type MediaVideo = {
    type: 'video',
    src: string,
    poster?: string,
}

export type Media = MediaImage | MediaVideo

export interface WorkThumbnail {
    background: Media;
    foreground?: Media;
    aspectRatio?: string;
}

export type WorkBodyBlock =
    | {
        type: 'image',
        src: string,
        alt: string,
        style?: string,
    }
    | {
        type: 'video',
        src: string,
        style?: string,
    }
    | {
        type: 'text',
        content: string,
    }

export interface WorkArticleType {
    slug: string,
    title: string,
    isFeatured?: boolean
    category: WorkCategory[],
    link: string,
    intro: string,
    thumbnail: WorkThumbnail,
    paragraphs: string[],
    features: {
        icon?: string,
        label: string
    }[],
    body: WorkBodyBlock[]
}

export interface WorkCardDataType {
    isFeatured?: boolean
    slug: string,
    title: string,
    categories: WorkCategory[],
    thumbnail: WorkThumbnail,
}

export type WorkCategory = typeof WORK_CATEGORIES[number]

export function isWorkCategory(value: unknown): value is WorkCategory {

    return (
        typeof value === "string" &&
        WORK_CATEGORIES.includes(value as WorkCategory)
    )
}