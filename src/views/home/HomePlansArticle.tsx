import Headings from '@/components/common/Headings'
import React from 'react'
import { getPlanArticleBySlug } from './data/plans'
import { ZigZagContent, ZigZagMedia, ZigZagSection, ZigZagSectionContainer } from '@/components/layouts/ZigZagSection'

interface HomePlansArticleProps {
    slug: string
}

const HomePlansArticle: React.FC<HomePlansArticleProps> = ({ slug }) => {

    const article = getPlanArticleBySlug(slug)
    if (!article) return;

    return (
        <article>
            <header className='flex flex-col items-center'>
                <Headings variant='subtitle' className='mb-2! text-5xl'>{article.title}</Headings>
                <Headings as='h2' variant='eyebrow' className='m-0'>{article.tagline}</Headings>
                <Headings as='h3' variant='' className='m-0 text-2xl'>{article.summary}</Headings>
            </header>
            <ZigZagSectionContainer>
                {article.sections.map((section, index) => {
                    const reverse = index % 2 === 0
                    return (
                        <ZigZagSection key={index} media={section.media} mediaType={section.mediaType}>
                            <ZigZagContent reverse={reverse}>
                                <Headings as='h4' variant='eyebrow'>{section.title}</Headings>
                                <div className='flex flex-col'>
                                    <p className='text-2xl'>{section.description}</p>
                                    <ul>
                                        {section.items.map((item, j) => (
                                            <li key={j} className='my-3 text-lg flex gap-3 items-center'>
                                                <img src='icons/check.webp' className='w-4 h-4' />
                                                <span>
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ZigZagContent>
                            <ZigZagMedia src={section.media} type={section.mediaType} />
                        </ZigZagSection>
                    )
                })}
            </ZigZagSectionContainer>
        </article>
    )
}

export default HomePlansArticle