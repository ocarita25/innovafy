import Button from '@/components/common/Button'
import { Card, ImageCard, VideoCard } from '@/components/common/Card'
import ExpandingCard from '@/components/common/ExpandingCard'
import PannedText from '@/components/common/PannedText'
import VerticalPanned from '@/components/common/VerticalPanned'
import { media } from '@/constants/images'
import { workFilters } from '@/constants/workPage'
import type { MediaTypes } from '@/types/MediaTypes.types'
import React, { useEffect, useState } from 'react'

const pannedFrom = {
    y: 150,
    opacity: -1,
    ease: "power3.out",
    duration: 2,
}

const WorkPage = () => {

    const bgOriginal = "var(--default-tertiary)"

    useEffect(() => {
        const mainEl = document.getElementById('main')
        if (!mainEl) return;
        mainEl.style.setProperty("--theme-background", `${bgOriginal}`)
    }, [])

    const content = media.filter(m => m.pages?.includes("trabajo"))
    const [idFilterActive, setIdFilterActive] = useState<number>(1);
    const [mediaContent, setMediaContent] = useState<MediaTypes[]>();

    useEffect(() => {
        setMediaContent(content)
    }, [])

    const filterContent = (id: number, categorie: string) => {
        setIdFilterActive(id)

        const filteredContent = content.filter(c => c.categories?.includes(categorie))
        if (!filteredContent.length) return (setMediaContent(content));
        setMediaContent(filteredContent)
    }

    return (
        <div>
            <div className="px-10 pr-20 w-full py-20 tracking-normal font-medium text-[clamp(3rem,8dvw,9dvw)] lg:text-[clamp(5rem,7dvw,12dvw)]">
                <PannedText className='overflow-hidden pb-2'>
                    <span>World-class digital</span>
                </PannedText>
                <PannedText className='overflow-hidden pb-2 -translate-y-3 z-10'>
                    <span>products, idea to execution.</span>
                </PannedText>
            </div>
            <div className='flex flex-wrap gap-2 px-10 pb-20'>
                {workFilters.map(filter => (
                    <Button key={filter.id} isActive={filter.id === idFilterActive} onClick={() => filterContent(filter.id, filter.category)}>{filter.label}</Button>
                ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-10 gap-10'>
                {mediaContent && mediaContent.map((m, i) => {

                    const colSpan = i === 0 || i % 3 === 0 ? "col-span-1 lg:col-span-2" : "col-span-1"

                    return (
                        <VerticalPanned key={m.id} from={pannedFrom} triggerClass={`${colSpan} w-full`}>
                            <Card title={m.name} className="relative h-full w-full lg:h-[95dvh] flex items-center justify-center">
                                {
                                    m.mediaType === "image" ?
                                        <ImageCard src={m.src} className="w-full h-full object-cover" />
                                        :
                                        <VideoCard src={m.src} className="w-full h-full object-cover" />
                                }
                                {
                                    m.childSrc &&
                                    <Card className="flex justify-center absolute rounded-3xl overflow-hidden">
                                        {
                                            m.childType === "video" ?
                                                <VideoCard src={m.childSrc} className="h-fit max-h-3/4 max-w-3/4 rounded-3xl object-contain" />
                                                :
                                                <ImageCard src={m.childSrc} className="max-h-3/4 rounded-3xl object-contain" />
                                        }
                                    </Card>
                                }
                            </Card>
                        </VerticalPanned>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkPage