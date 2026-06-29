export type ThinkingCardType = {
    slug: string,
    title: string,
    author: string,
    authorAvatar: string,
    date: string,
    description: string,
    tags: string[],
    duration: number,
    thumbnail: {
        type: 'image' | 'video',
        src: string,
        alt: string
    },
} & React.HTMLAttributes<HTMLDivElement>

export type ThinkingSectionContentType = {
    variant?: "text" | "multimedia",
    subVariant?: "text" | "list" | "title" | "image",
    tag?: "h1" | "h2" | "h3" | "p",
    text?: string | string[],
    image?: string,
    imageDescription?: string
}

export interface ThinkingArticleContentType {
    introduction: ThinkingSectionContentType[],
    section: {
        title: string,
        description?: ThinkingSectionContentType[],
        subSection?: {
            title: string,
            content: ThinkingSectionContentType[]
        }[],
    }[]
}

export type ThinkingArticleType = {
    slug: string,
    title: string,
    author: string,
    authorAvatar: string,
    date: string,
    tags: string[],
    duration: number,
    description: string,
    thumbnail: {
        type: 'image' | 'video',
        src: string,
        alt: string,
    }
    content: ThinkingArticleContentType,
}