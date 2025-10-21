import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { articles } from "@/data/Articles";
import TitleUp from "@/components/common/TitleUp"; 

export function DetailsPost() {
    const { id } = useParams();
    const article = articles.find((a) => a.id === Number(id));

    const { scrollYProgress } = useScroll({
        offset: ["start end", "end start"],
    });

    const scaleRaw = useTransform(scrollYProgress, [0.8, 1], [1, 0.7]);
    const scale = useSpring(scaleRaw, { stiffness: 100, damping: 25, mass: 0.5 });

    const borderRadiusRaw = useTransform(scrollYProgress, [0.8, 1], [0, 24]);
    const borderRadius = useSpring(borderRadiusRaw, { stiffness: 100, damping: 25, mass: 0.5 });


    const [titleAnimState, setTitleAnimState] = useState("hidden");

    useEffect(() => {
        const timer = setTimeout(() => {
            setTitleAnimState("visible");
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    if (!article) {
        return (
            <div className="p-6 text-center text-gray-600 bg-pink-50 min-h-screen">
                <p>No se encontró información del artículo {id}.</p>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#ffffff] mt-12">
            <motion.div
                style={{ scale, borderRadius }}
                className="bg-[#f3f3e9] shadow-lg"
            >
                <div className="grid md:grid-cols-2 gap-8 items-start mb-16 max-w-6xl mx-auto px-4 md:px-8">

                    <div className="flex justify-center">
                        <div className="rounded-3xl overflow-hidden shadow-md max-w-[90%] w-full">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between space-y-6">
                        <div>
                            {/* El titulo con la animacion */}
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
                                <TitleUp title={article.title} animateState={titleAnimState} />
                            </h1>

                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                <span>{article.categories.join(", ")}</span>
                                <span>✦</span>
                                <span>{article.readTime} min read</span>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                {article.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                            <img
                                src={article.authorAvatar || "https://i.pravatar.cc/40?img=1"}
                                alt={article.author}
                                className="rounded-full w-10 h-10 object-cover"
                            />
                            <div>
                                <span className="block text-sm font-medium text-gray-800">
                                    {article.author || "Autor desconocido"}
                                </span>
                                <span className="block text-xs text-gray-500">
                                    {article.date || "Fecha desconocida"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* El Contenido */}
                {article.content && (
                    <div
                        className="
                [&_h2]:text-4xl [&_h2]:my-6 [&_h2]:font-bold 
                [&_h3]:text-2xl [&_h3]:my-4 [&_h3]:font-medium
                [&_p]:text-lg [&_p]:py-3 
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:py-1 
                [&_a]:text-emerald-700 [&_a]:hover:underline
                max-w-3xl mx-auto px-4 md:px-8 pb-12
            "
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                )}
            </motion.div>
        </section>
    );
}
