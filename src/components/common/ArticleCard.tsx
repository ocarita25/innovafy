import type { Article } from "@/types";
import { useMotionValue, useTransform, motion, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Modal } from "./Modal";

type ArticleCardProps = {
    article: Article
};

const ArticleCard = ({ article }: ArticleCardProps) => {

    const [modal, setmodal] = useState(false)
    const handleModal = () => {
        setmodal(!modal)

    }

    const handleCloseModal = () => {
        setmodal(false)
    }

    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useSpring(useTransform(y, [-1, 1], [8, -8]), {
        stiffness: 50,
        damping: 10
    })
    const rotateY = useSpring(useTransform(x, [-1, 1], [-8, 8]), {
        stiffness: 50,
        damping: 10
    })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect()
        const offsetX = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const offsetY = ((e.clientY - rect.top) / rect.height) * 2 - 1

        x.set(offsetX)
        y.set(offsetY)
    }

    const handleMouseLeave = () => {
        if (ref.current) {
            x.set(0)
            y.set(0)
        }
    }

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
                    transformStyle: "preserve-3d"
                }}
                className=" mt-20 p-6 md:p-8 rounded-xl max-w-4xl mx-auto flex flex-col  md:flex-row gap-14 items-start cursor-pointer">
 
                <div className="flex-shrink-0 ">
                    <img
                        src={article.image}
                        alt="Crowd illustration"
                        className="rounded-2xl w-full md:w-[300px] h-auto object-cover"
                    />
                </div>

                <div className=" flex flex-col justify-center flex-grow h-96 space-y-4  ">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        {article.title}
                    </h2>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{article.categories.join(", ")}</span>
                        <span>✦</span> 
                        <span>{article.readTime} min read</span>
                    </div>

               
                    <p className="text-gray-600 mt-8 mb-10 leading-relaxed">
                        {article.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                        <button className="bg-emerald-950 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-emerald-500 transition cursor-pointer">
                            Read Article
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>

                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <img
                                src={article.authorAvatar}
                                alt="Teegan Lincoln"
                                className="w-8 h-8 rounded-full"
                            />
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {modal && <Modal  handleCloseModal={handleCloseModal} />}
            </AnimatePresence>
        </>
    );
};

export default ArticleCard;