import Button from '@/components/common/Button'
import { Card, ImageCard, VideoCard } from '@/components/common/Card'
import ExpandingCard from '@/components/common/ExpandingCard'
import PannedText from '@/components/common/PannedText'
import VerticalPanned from '@/components/common/VerticalPanned'
import { workFilters } from '@/constants/workPage'
import React, { useState } from 'react'

const pannedFrom = {
    y: 150,
    opacity: -1,
    ease: "power3.out",
    duration: 2,

}


const WorkPage = () => {

    const [idFilterActive, setIdFilterActive] = useState<number>(1);

    return (
        <ExpandingCard
            start="bottom bottom"
            end="bottom top"
            className="relative z-0"
            cardClass="origin-bottom"
            initialScaleX={1}
            initialScaleY={1}
            finalScaleX={0.95}
            finalScaleY={0.95}
        >
            <div id="main" className="relative z-20 flex flex-col min-h-[100dvh] bg-[#eeeedd] rounded-b-[3.5rem] transition-colors duration-600 max-w-dvw pb-20">
                <div className="px-10 pr-20 w-full py-20 tracking-normal font-medium text-[clamp(3rem,8dvw,9dvw)] lg:text-[clamp(5rem,7dvw,12dvw)]">
                    <PannedText className='overflow-hidden pb-2'>
                        <span>World-class digital</span>
                    </PannedText>
                    <PannedText className='overflow-hidden pb-2 -translate-y-3 z-10'>
                        <span>products, idea to execution.</span>
                    </PannedText>
                </div>
                <div className='flex gap-2 px-10 pb-20'>
                    {workFilters.map(filter => (
                        <Button key={filter.id} isActive={filter.id === idFilterActive} onClick={() => setIdFilterActive(filter.id)}>{filter.label}</Button>
                    ))}
                </div>
                <div className='grid grid-cols-2 px-5 lg:px-10 gap-10'>
                    <VerticalPanned from={pannedFrom} triggerClass="col-span-2 w-full">
                        <Card title={"PIQUE"} className="relative w-full lg:h-[95dvh] flex items-center justify-center">
                            <ImageCard src="/images/pique.webp" className="object-cover" />
                            <Card className="absolute w-3/4 h-fit">
                                <VideoCard src="/videos/home2.mp4" className="w-full h-full object-contain" />
                            </Card>
                        </Card>
                    </VerticalPanned>
                    <VerticalPanned from={pannedFrom}>
                        <Card title="Sussex Taps" className="min-h-50dvh aspect-square lg:aspect-auto lg:h-[100dvh] col-span-2 lg:col-span-1">
                            <VideoCard src="/videos/home3.mp4" className="object-cover" />
                        </Card>
                    </VerticalPanned>

                    <VerticalPanned from={pannedFrom}>
                        <Card title={"Chaleit"} className="relative flex items-center justify-center h-full aspect-square lg:aspect-auto lg:h-[100dvh] col-span-2 lg:col-span-1">
                            <ImageCard src="/images/chaleit1.webp" className="object-cover" />
                            <Card className="absolute w-2/5 h-fit rounded-2xl">
                                <ImageCard src="/images/chaleit2.webp" />
                            </Card>
                        </Card>
                    </VerticalPanned>

                    <VerticalPanned from={pannedFrom} triggerClass="col-span-2 w-full">
                        <Card title="Surveillance Watch" className="relative flex items-center justify-center col-span-2 h-full aspect-video lg:aspect-auto lg:h-[95dvh]">
                            <VideoCard src="/videos/home4.mp4" className="object-cover" />
                            <Card className="absolute w-4/5 h-fit">
                                <ImageCard src="/images/surveillance.webp" />
                            </Card>
                        </Card>
                    </VerticalPanned>
                    <VerticalPanned from={pannedFrom} triggerClass="col-span-2 w-full">
                        <Card title={"PIQUE"} className="relative w-full lg:h-[95dvh] flex items-center justify-center">
                            <ImageCard src="/images/pique.webp" className="object-cover" />
                            <Card className="absolute w-3/4 h-fit">
                                <VideoCard src="/videos/home2.mp4" className="w-full h-full object-contain" />
                            </Card>
                        </Card>
                    </VerticalPanned>
                    <VerticalPanned from={pannedFrom}>
                        <Card title="Sussex Taps" className="min-h-50dvh aspect-square lg:aspect-auto lg:h-[100dvh] col-span-2 lg:col-span-1">
                            <VideoCard src="/videos/home3.mp4" className="object-cover" />
                        </Card>
                    </VerticalPanned>

                    <VerticalPanned from={pannedFrom}>
                        <Card title={"Chaleit"} className="relative flex items-center justify-center h-full aspect-square lg:aspect-auto lg:h-[100dvh] col-span-2 lg:col-span-1">
                            <ImageCard src="/images/chaleit1.webp" className="object-cover" />
                            <Card className="absolute w-2/5 h-fit rounded-2xl">
                                <ImageCard src="/images/chaleit2.webp" />
                            </Card>
                        </Card>
                    </VerticalPanned>

                    <VerticalPanned from={pannedFrom} triggerClass="col-span-2 w-full">
                        <Card title="Surveillance Watch" className="relative flex items-center justify-center col-span-2 h-full aspect-video lg:aspect-auto lg:h-[95dvh]">
                            <VideoCard src="/videos/home4.mp4" className="object-cover" />
                            <Card className="absolute w-4/5 h-fit">
                                <ImageCard src="/images/surveillance.webp" />
                            </Card>
                        </Card>
                    </VerticalPanned>
                </div>
            </div>
        </ExpandingCard>
    )
}

export default WorkPage