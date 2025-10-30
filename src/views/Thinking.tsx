import ArticleCard from "@/components/common/ArticleCard";
import { articles } from "@/data/Articles";
import { useEffect } from "react";

export const Thinking = () => {

    useEffect(() => {
        const mainEl = document.getElementById('main')
        if (!mainEl) return;
        mainEl.style.setProperty("--theme-background", 'var(--default-tertiary)')
    })

    return (
        <main className="m-0 h-full w-full transition-colors duration-400 max-w-dvw pt-20 min-h-dvh">
            <section className="w-screen overflow-x-hidden">
                <div className="mx-auto px-4 md:px-8">
                    {/* Título */}
                    <div className="md:absolute top-0 left-0 w-full flex flex-col items-center justify-center overflow-hidden z-1 ">
                        <div
                            className="text-[#0f1d07] text-[3rem] sm:text-[6rem] md:text-[11rem] lg:text-[13rem] 
                            md:-mt-12 lg:-mt-36 tracking-[-.03em] font-medium select-none"
                        >
                            <span>T</span>
                            <span>h</span>
                            <span>i</span>
                            <span>n</span>
                            <span>k</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                        </div>
                        <div className="text-center">
                            <span className="text-xl sm:text-lg md:text-2xl text-center px-4 font-medium">
                                Musings on design, experience and technology.
                            </span>
                        </div>
                    </div>

                    {/* Lista de artículos */}
                    <article className="md:mt-56 lg:mt-40 mb-30 space-y-12">
                        {articles.map((article) => (
                            <ArticleCard article={article} />
                        ))}
                    </article>
                </div>
            </section>
        </main>
    );
};
