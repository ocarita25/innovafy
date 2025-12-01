import { ButtonWhite } from '@/components/common/Button'
import PannedText from '@/components/common/PannedText'
import PreviewCard from '@/components/common/PreviewCard'
import Main from '@/components/layouts/Main'
import { workFilters, workImages } from '@/constants/workPage'
import type { MediaTypes } from '@/types/MediaTypes.types'
import { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Panned from '@/components/common/Panned'

const content = workImages()

const WorkPage = () => {

    const [idFilterActive, setIdFilterActive] = useState<number>(1);
    const [mediaContent, setMediaContent] = useState<MediaTypes[]>(content);

    const filterContent = (id: number, categorie: string) => {
        setIdFilterActive(id)

        const filteredContent = content.filter(c => c.categories?.includes(categorie))
        if (!filteredContent.length) return (setMediaContent(content));
        setMediaContent(filteredContent)
    }

    useEffect(() => {
        ScrollTrigger.refresh()
    }, [mediaContent])

    return (
        <Main className="mt-5 grid pb-17">
            <div className="flex flex-col text-[var(--color-theme-secondary)] px-[var(--container-gutter)] w-full py-25 tracking-normal font-medium text-[clamp(3rem,8dvw,9dvw)] lg:text-[clamp(5rem,7dvw,12dvw)]">
                <PannedText className='overflow-hidden'>
                    Productos digitales de clase mundial, de la idea a la ejecución.
                </PannedText>
            </div>
            <div className='flex flex-wrap gap-2 px-[var(--container-gutter)] pb-20'>
                {workFilters.map(filter => (
                    <ButtonWhite key={filter.id} isActive={filter.id === idFilterActive} onClick={() => filterContent(filter.id, filter.category)}>{filter.label}</ButtonWhite>
                ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-[var(--container-gutter)] gap-10 '>
                {mediaContent.map((m, i) => (
                    <Panned
                        key={m.id}
                        variant='vertical'
                        triggerClass={'aspect-[710/890] nth-[3n-2]:aspect-[1452/890] min-[992px]:nth-[3n-2]:col-span-2 overflow-visible'}
                        className='h-full w-full'>
                        <PreviewCard key={i} data={m} />
                    </Panned>
                ))}
            </div>
        </Main>
    )
}

export default WorkPage
