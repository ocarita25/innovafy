// import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import Panned from '@/components/common/Panned'
import PreviewCard from '@/components/common/PreviewCard'
import type { WorkCardDataType, WorkCategory } from '@/data/work/types'

type WorkByCategoryProps = {
    cards: WorkCardDataType[],
    category: WorkCategory,
    onOpenModal: (type: "work" | "awards" | "ideas", slug: string) => void;
}

const WorkByCategory = ({ cards, onOpenModal }: WorkByCategoryProps) => {
    function handleOpenArticle(slug: string) {
        onOpenModal("work", slug)
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-[var(--container-gutter)] gap-10 '>
            {cards.map((card, i) => {

                const cardClass = `${card.columns === 1 ? 'aspect-[71/89] ' : 'aspect-[726/445] col-span-2'}`

                return (
                    <Panned
                        key={card.slug}
                        variant='vertical'
                        triggerClass={`${cardClass} overflow-visible`}
                        className='h-full w-full'>
                        <PreviewCard key={i} title={card.title} thumbnail={card.thumbnail} onClick={() => handleOpenArticle(card.slug)} />
                    </Panned>
                )
            })}
        </div>
    )
}

export default WorkByCategory