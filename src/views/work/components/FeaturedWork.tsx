import Panned from '@/components/common/Panned';
import PreviewCard from '@/components/common/PreviewCard';
import type { WorkCardDataType } from '@/data/work/types';

type FeaturedProps = {
    cards: WorkCardDataType[],
    onOpenModal: (type: "work" | "awards" | "ideas", slug: string) => void;
}

const Featured = ({ cards, onOpenModal }: FeaturedProps) => {

    function handleOpenModal(slug: string) {
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
                        className={`${cardClass} overflow-visible`}>
                        <PreviewCard key={i} title={card.title} thumbnail={card.thumbnail} onClick={() => handleOpenModal(card.slug)} />
                    </Panned>
                )
            })}
        </div>
    )
}

export default Featured