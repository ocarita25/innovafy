import Panned from '@/components/common/Panned'
import PreviewCard from '@/components/common/PreviewCard'
import type { WorkCardDataType, WorkCategory } from '@/data/work/types'

type WorkByCategoryProps = {
    cards: WorkCardDataType[],
    category: WorkCategory,
    onOpenModal: (type: "work" | "awards" | "ideas" | "brief", slug: string) => void;
}

const WorkByCategory = ({ cards, onOpenModal }: WorkByCategoryProps) => {
    function handleOpenModal(slug: string) {
        onOpenModal("work", slug)
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-[var(--container-gutter)] gap-10 '>
            {cards.map((card, i) => (
                <Panned
                    key={card.slug}
                    variant='vertical'
                    triggerClass={'aspect-[710/890] nth-[3n-2]:aspect-[1452/890] min-[992px]:nth-[3n-2]:col-span-2 overflow-visible'}
                    className='h-full w-full'>
                    <PreviewCard key={i} title={card.title} thumbnail={card.thumbnail} onClick={() => handleOpenModal(card.slug)} />
                </Panned>
            ))}
        </div>
    )
}

export default WorkByCategory