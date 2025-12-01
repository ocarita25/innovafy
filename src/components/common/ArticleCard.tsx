
import type { Article } from "@/types";
import {
    useMotionValue,
    useTransform,
    motion,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";
import { articles } from "@/data/Articles";

type ArticleCardProps = {
    article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
    const [modal, setModal] = useState(false);
    const handleModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);

    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-1, 1], [10, -10]), {
        stiffness: 40,
        damping: 13,
        mass: 1,
    });
    const rotateY = useSpring(useTransform(x, [-1, 1], [-11, 11]), {
        stiffness: 40,
        damping: 13,
        mass: 1,
    });

    const lightOpacity = useTransform(x, [-1, 0, 0.1], [0.4, 0.4, 0]);
    const lightX = useTransform(x, [-1, 0], ["-20%", "0%"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width;
        const offsetY = (e.clientY - rect.top) / rect.height;

        x.set(offsetX * 2 - 1);
        y.set(offsetY * 2 - 1);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <>
            <motion.div
                ref={ref}
                onClick={handleModal}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    position: "relative",
                }}
                className="mt-10 p-6 md:p-8 rounded-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start cursor-pointer"
            >
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "50%",
                        height: "100%",
                        background:
                            "linear-gradient(to right, rgba(255,255,255,0.3), transparent)",
                        pointerEvents: "none",
                        opacity: lightOpacity,
                        x: lightX,
                    }}
                />

                <div className="flex-shrink-0">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="rounded-2xl w-full md:w-[300px] h-auto object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center flex-grow h-96 space-y-3">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        {article.title}
                    </h2>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{article.categories.join(", ")}</span>
                        <span className="text-[#8B5CF6]">✦</span>

                        <span>{article.readTime} min read</span>
                    </div>

                    <p className="text-gray-600 mt-4 md:mt-8 mb-10 leading-relaxed">
                        {article.description}
                    </p>

                    <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">

                        <Link
                            to={`/post/${article.id}`}
                            className="bg-emerald-950 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer w-auto self-start"
                        >
                            Read Article

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>


                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <img
                                src={article.authorAvatar}
                                alt="Autor"
                                className="w-8 h-8 rounded-full"
                            />
                            <span>{article.author}</span>
                            <span className="ml-6">{article.date}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {modal && (
                    <Modal article={article} handleCloseModal={handleCloseModal} articles={articles} />

                )}
            </AnimatePresence>
        </>
    );
};

export default ArticleCard;
