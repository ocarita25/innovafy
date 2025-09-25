import ExpandingCard from '@/components/common/ExpandingCard'
import VerticalPanned from '@/components/common/VerticalPanned'
import Article from '@/components/thinking/article'
import React from 'react'

const pannedFrom: gsap.TweenVars = {
    y: 150,
    opacity: -1,
    duration: 1,
    ease: "power3.out",
    mask: "lines",
}

const ThinkingPage = () => {
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
                <div className='w-full'>
                    <section className='flex flex-col px-8 py-10 max-w-[clamp(56rem,59dvw,74rem)] mx-auto'>
                        <VerticalPanned from={pannedFrom} triggerClass='w-full'>
                            <Article />
                        </VerticalPanned>
                        <VerticalPanned from={pannedFrom} triggerClass='w-full'>
                            <Article />
                        </VerticalPanned>
                        <VerticalPanned from={pannedFrom} triggerClass='w-full'>
                            <Article />
                        </VerticalPanned>
                    </section>
                </div>
            </div>
        </ExpandingCard>
    )
}

export default ThinkingPage