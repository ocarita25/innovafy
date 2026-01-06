import Headings from '@/components/common/Headings';
import React from 'react'
import { getThinkingArticleBySlug } from './articles';

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

    const article = getThinkingArticleBySlug(slug)
    // const info = articlesCard.find(a => a.slug === slug)

    if (!article) return;
    const { title, author, authorAvatar, date, description, tags, duration, thumbnail, content } = article

    const { introduction, section } = content

    return (
        <div className='flex flex-col items-center'>
            <section className='w-full mb-30'>
                <div className={"max-md:gap-7 grid grid-cols-1 w-full min-[768px]:items-center min-[992px]:w-[clamp(50rem,75vw,60rem)] md:grid-cols-[1fr_minmax(auto,2fr)]"}>
                    <div className="rounded-4xl bg-purple-700 overflow-hidden h-full">
                        <img src={thumbnail.src} className="w-full h-full object-cover" alt={thumbnail.alt} />
                    </div>
                    <div className="flex flex-col gap-7 min-md:ml-[clamp(1.25rem,8.75vw,4.5rem)]">
                        <header>
                            <Headings as="h2" variant="" className="m-0 mb-3 text-[2rem]">{title}</Headings>
                            <div className="flex max-md:flex-col-reverse gap-2 text-sm">
                                <h3>{tags.join(", ")}</h3>
                                <span className="text-[#8B5CF6] max-md:hidden">✦</span>
                                <span>{`Lectura de ${duration} minutos`}</span>
                            </div>
                        </header>
                        <div>
                            <span className="leading-[1.75]">{description}</span>
                        </div>
                        <div className="flex flex-row min-[768px]:flex-col-reverse min-[1150px]:flex-row min-md:gap-7 justify-between">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <img src={authorAvatar} alt="Autor" className="w-8 h-8 rounded-full" />
                                <span>{author}</span>
                                <span className="ml-6">{date}</span>
                            </div>
                        </div>
                    </div>
                </div>
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
            <section onClick={onNext}>
                Siguiente Articulo
            </section>
        </div>
    )
}

export default ThinkingArticle