import ArticleCard from "@/components/common/ArticleCard";
import Panned from "@/components/common/Panned";
import TiltCard from "@/components/common/TiltCard";
import Main from "@/components/layouts/Main";
import { useModal } from "@/context/ModalContext";
import { articlesCard } from "@/data/Articles";

export const Thinking = () => {

    const { openModal } = useModal()

    const handleModal = (slug: string) => {
        openModal("ideas", slug)
    }

    return (
        <Main className="mt-20">
            {/* Título */}
            <div className="md:absolute top-0 left-0 w-full flex flex-col items-center justify-center overflow-hidden z-1 ">
                <div className="text-[#0f1d07] text-[3rem] sm:text-[6rem] md:text-[11rem] lg:text-[14rem] md:-mt-12 lg:-mt-26 tracking-[-0.01em] font-medium select-none">
                    <span>Thinking</span>
                </div>
                <div className="text-center">
                    <span className="text-xl sm:text-lg md:text-2xl text-center px-4 font-medium">
                        Musings on design, experience and technology.
                    </span>
                </div>
            </div>

            {/* Lista de artículos */}
            <section className="grid md:mt-56 lg:mt-40 mb-30 space-y-12 md:justify-center p-fluid">
                {articlesCard.map((a, i) => (
                    <Panned key={i} variant="vertical" triggerClass="border-b last:border-b-0">
                        <article className="pb-20 ">
                            <TiltCard intensity={0.35} className="bg-transparent aspect-auto">
                                <ArticleCard
                                    title={a.title}
                                    categories={a.categories}
                                    readTime={a.readTime}
                                    description={a.description}
                                    author={a.author}
                                    authorAvatar={a.authorAvatar}
                                    date={a.date}
                                    image={a.image}
                                    onClick={() => handleModal(a.slug)}
                                    isCard={true}
                                    className="min-[992px]:w-[clamp(50rem,75vw,60rem)] md:grid-cols-[1fr_minmax(auto,2fr)]"
                                />
                            </TiltCard>
                        </article>
                    </Panned>
                ))}
            </section>
        </Main>
    );
};
