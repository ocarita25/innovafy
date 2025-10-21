

import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import ArticleCard from "@/components/common/ArticleCard";
import { articles } from "@/data/Articles";

export const Thinking = () => {
    const { scrollYProgress } = useScroll({
        target: undefined,
        offset: ["start end", "end start"],
    });

    // Animaciones globales (escala y borde)
    const scaleRaw = useTransform(scrollYProgress, [0.8, 1], [1, 0.8]);
    const scale = useSpring(scaleRaw, { stiffness: 100, damping: 25, mass: 0.5 });

    const borderRadiusRaw = useTransform(scrollYProgress, [0.8, 1], [0, 24]);
    const borderRadius = useSpring(borderRadiusRaw, { stiffness: 100, damping: 25, mass: 0.5 });

    // ✅ Tipado correcto para TypeScript
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="w-screen overflow-x-hidden">
            <motion.div
                style={{
                    scale,
                    borderRadius,
                }}
                className="w-full"
            >
                <div className="mx-auto px-4 md:px-8">
                    {/* Título */}
                    <div className="md:absolute top-0 left-0 w-full flex flex-col items-center justify-center overflow-hidden z-[-1] ">
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
                        <div className="md:-mt-12 lg:-mt-16 text-center">
                            <span className="text-xl sm:text-lg md:text-2xl text-center px-4 font-medium">
                                Musings on design, experience and technology.
                            </span>
                        </div>
                    </div>

                    {/* Lista de artículos */}
                    <article className="md:mt-56 lg:mt-40 mb-30 space-y-12">
                        {articles.map((article) => (
                            <motion.div
                                key={article.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <ArticleCard article={article} />
                            </motion.div>
                        ))}
                    </article>
                </div>
            </motion.div>
        </section>
    );
};
