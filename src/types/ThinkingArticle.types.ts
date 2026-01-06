export interface ThinkingArticleCardType {
    slug: string;
    title: string;
    categories: string[];
    readTime: number;
    description: string;
    author: string;
    authorAvatar: string;
    date: string;
    image: string;
};

export interface ThinkingCardType extends Omit<ThinkingArticleCardType, "slug">, Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    onClick?: () => void;
    isCard?: boolean
}

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