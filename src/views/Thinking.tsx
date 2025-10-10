import ArticleCard from "@/components/common/ArticleCard";
import { articles } from "@/data/Articles";


export const Thinking = () => {


    return (
        <>

            <section className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="md:absolute top-0 left-0 w-full flex flex-col items-center justify-center overflow-hidden z-[-1] ">

                    <div className="text-[#0f1d07] text-[3rem] sm:text-[6rem] md:text-[11rem] lg:text-[13rem] 
                                    md:-mt-12  lg:-mt-36 tracking-[-.03em] font-medium select-none">
                        <span>T</span>
                        <span>h</span>
                        <span>i</span>
                        <span>n</span>
                        <span>k</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </div>

                    <div className="md:-mt-12 lg:-mt-16 text-center">
                        <span className="text-xl  sm:text-lg md:text-2xl text-center px-4 font-medium">
                            Musings on design, experience and technology.
                        </span>
                    </div>
                </div>


                <article className=" md:mt-56 lg:mt-40">
                    <div>

                        {
                            articles.map((article, i) => (
                                <ArticleCard key={i} article={article} />
                            ))
                        }
                    </div>

                </article>
            </section>

        </>
    );
};