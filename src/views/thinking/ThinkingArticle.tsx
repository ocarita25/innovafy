import ArticleCard from '@/components/common/ArticleCard'
import { articlesCard, articlesContent } from '@/data/Articles'
import React from 'react'

interface ThinkingArticleProps {
    slug: string,
    onNext: () => void;
}

type ArticleParagraphType = {
    as?: 'h1' | 'h2' | 'h3' | "p",
    text: string | string[] | undefined,
    subVariant: "text" | "list" | "title" | "image" | "subTitle"
} & React.HTMLAttributes<HTMLElement>

type ArticleMultimediaType = {
    source: string | undefined,
    subVariant: "text" | "list" | "title" | "image"
} & React.HTMLAttributes<HTMLDivElement>

const ArticleParagraph = ({ as: Tag = "p", text, subVariant = "text" }: ArticleParagraphType) => {
    if (!text || Array.isArray(text)) return;

    const textClass = {
        text: "text-[1.15rem]",
        list: "",
        title: "font-medium text-[2.5rem]",
        image: "",
        subTitle: "font-medium text-[2.25rem]"
    }[subVariant]

    return (
        <Tag className={`leading-[1.5] pb-8 m-0 ${textClass}`}>{text}</Tag>
    )
}

const ArticleList = ({ text }: { text: string | string[] | undefined }) => {

    if (!Array.isArray(text)) return;

    return (
        <ul className='flex flex-col gap-4 pb-8 pl-10 list-disc marker:text-green-500'>
            {text.map((t, i) => (
                <li key={i} className='text-[1.15rem]'>{t}</li>
            ))}
        </ul>
    )
}

const ArticleImage = ({ source, subVariant }: ArticleMultimediaType) => {
    if (!source) return
    return (
        <div>
            {
                subVariant === "image" ?
                    <img src={source} />
                    :
                    <video>
                        <source src={source} />
                    </video>
            }
        </div>
    )
}

const ThinkingArticle: React.FC<ThinkingArticleProps> = ({ slug, onNext }) => {

    const article = articlesContent.find(a => a.slug === slug)?.content
    const info = articlesCard.find(a => a.slug === slug)

    if (!article || !info) return;

    const { introduction, section } = article

    return (
        <div className='flex flex-col items-center'>
            <section className='w-full mb-30'>
                <ArticleCard
                    title={info.title}
                    categories={info.categories}
                    readTime={info.readTime}
                    description={info.description}
                    author={info.author}
                    authorAvatar={info.authorAvatar}
                    date={info.date}
                    image={info.image}
                    className="min-[768px]:grid-cols-[1fr_2fr] min-[1024px]:grid-cols-[auto_1fr]"
                />
            </section>
            <section className='min-[992px]:w-[clamp(43rem,50vw,55rem)]'>
                <div>
                    {introduction.map((intro, i) => {
                        return (
                            intro.variant === "multimedia" ?
                                <ArticleImage key={i} source={intro.image} subVariant={intro.subVariant ?? "image"} />
                                :
                                intro.subVariant === "list" ?
                                    <ArticleList key={i} text={intro.text} />
                                    :
                                    <ArticleParagraph key={i} as={intro.tag} text={intro.text} subVariant={intro.subVariant ?? "text"} />
                        )
                    })}
                </div>
                <div>
                    {section.map((s, i) => {
                        return (
                            <div key={i}>
                                <ArticleParagraph as='h2' subVariant='title' text={s.title} />
                                {s.subSection ?
                                    s.subSection.map((ss, i) => {
                                        return (
                                            <div key={i}>
                                                <ArticleParagraph as='h3' subVariant='subTitle' text={ss.title} />
                                                {ss.content.map((c, i) => (
                                                    <ArticleParagraph key={i} as={c.tag || "p"} text={c.text} subVariant={c.subVariant || "text"} />
                                                ))}
                                            </div>
                                        )
                                    }) : null
                                }
                                {s.description ?
                                    s.description.map((description, i) => {
                                        return (
                                            description.variant === "multimedia" ?
                                                <ArticleImage key={i} source={description.image} subVariant={description.subVariant || "image"} />
                                                :
                                                description.subVariant === "list" ?
                                                    <ArticleList key={i} text={description.text} />
                                                    :
                                                    <ArticleParagraph key={i} as={description.tag} text={description.text} subVariant={description.subVariant || "text"} />
                                        )
                                    }) : null
                                }
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default ThinkingArticle