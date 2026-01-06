import Panned from '@/components/common/Panned';
import PreviewCard from '@/components/common/PreviewCard';
import { useModal } from '@/context/ModalContext';
import { getFeaturedWorkCards } from '@/data/work';

const FeaturedWorks = () => {

    const { openModal } = useModal();
    const works = getFeaturedWorkCards();

    const handleOpenArticle = (articleType: "work" | "awards", slug: string) => {
        openModal(articleType, slug);
    }

    return (
        <div className="grid">
            <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-13 m-[2.5rem_0] mt-[0vh] min-[992px]:m-[clamp(4.375rem,4.6296296296vw,5.81875rem)_0] max-w-[calc(clamp(89.5rem,94.71vw,119.035rem)+var(--container-gutter)*2)] px-[var(--container-gutter)] mx-auto w-full ">
                {works.map(hm => (
                    <div key={hm.slug} className="h-full w-full min-[992px]:nth-[3n-2]:col-span-2 aspect-[23/29] nth-[3n-2]:aspect-[47/29] cursor-pointer" onClick={() => handleOpenArticle("work", hm.slug)}>
                        <Panned variant="vertical" className="w-full h-full" triggerClass="h-full w-full">
                            <PreviewCard thumbnail={hm.thumbnail} title={hm.title} />
                        </Panned>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedWorks