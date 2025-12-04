import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { articlesCard } from "@/data/Articles";
import TitleUp from "@/components/common/TitleUp";

export function DetailsPost() {
    const { slug } = useParams();
    const article = articlesCard.find((a) => a.slug === slug);

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
                <p>No se encontró información del artículo {slug}.</p>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#ffffff] mt-12">

        </section>
    );
}
