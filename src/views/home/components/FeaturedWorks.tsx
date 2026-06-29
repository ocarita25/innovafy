import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import Panned from '@/components/common/Panned';
import PreviewCard from '@/components/common/PreviewCard';
import { useModal } from '@/context/ModalContext';
import { homeFeaturedArticles } from '@/data/work';

const FeaturedWorks = () => {

    const { openModal } = useModal();
    const works = homeFeaturedArticles;

    const handleOpenArticle = (articleType: "work" | "awards", slug: string) => {
        openModal(
            <ArticleRenderer
                type={articleType}
                slug={slug}
                onNext={() => { }}
            />
        )
    }

    return (
        <div className="grid">
            <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-13 m-[2.5rem_0] mt-[0vh] min-[992px]:m-[clamp(4.375rem,4.6296296296vw,5.81875rem)_0] max-w-[calc(clamp(89.5rem,94.71vw,119.035rem)+var(--container-gutter)*2)] px-[var(--container-gutter)] mx-auto w-full ">
                {works.map(work => {

                    const { article, column } = work
                    const cardClass = `${column === 1 ? 'aspect-[71/89] ' : 'aspect-[726/445] col-span-1 min-[992px]:col-span-2'}`

                    return (
                        <Panned
                            key={article.slug}
                            variant="vertical"
                            className={`${cardClass} overflow-visible`}
                        >
                            <PreviewCard
                                title={article.title}
                                thumbnail={article.thumbnail}
                                onClick={() => { handleOpenArticle("work", article.slug) }} />
                        </Panned>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedWorks