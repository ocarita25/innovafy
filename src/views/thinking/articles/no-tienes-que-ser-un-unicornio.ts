import type { ThinkingArticleType } from "@/types/ThinkingArticle.types";

const slug = "no-tienes-que-ser-un-unicornio"
const path = "/images/thinking/articles"

export const NoTienesQueSerUnUnicornio: ThinkingArticleType = {

    slug: slug,
    title: "",
    tags: [""],
    duration: 1,
    description: "",
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                text: "",
            },
        ],
        section: [
            {
                title: "",
                description: [
                    {
                        text: "",
                    },
                ]
            },
        ]
    }
}