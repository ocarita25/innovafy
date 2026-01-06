import { isWorkCategory, type WorkCategory } from "@/data/work/types";
import { useParams } from "react-router-dom";
import Featured from "./components/FeaturedWork";
import WorkByCategory from "./components/WorkByCategory";
import { useModal } from "@/context/ModalContext";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { getWorkCardsByCategory } from "@/data/work";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkWrapper = ({ category }: { category?: WorkCategory }) => {
    const params = useParams<{ category?: string }>();
    const { openModal } = useModal();

    function handleOpenModal(type: "work" | "awards" | "ideas" | "brief", slug: string) {
        openModal(type, slug)
    }

    const resolvedCategory: WorkCategory = category ?? (isWorkCategory(params.category) ? params.category : "featured")

    const [selectedCategory, setSelectedCategory] = useState<WorkCategory>(resolvedCategory);

    useEffect(() => {
        setSelectedCategory(resolvedCategory)
    }, [resolvedCategory])

    const workCards = useMemo(() => {
        return getWorkCardsByCategory(selectedCategory)
    }, [selectedCategory])

    useLayoutEffect(() => {
        ScrollTrigger.refresh()
    }, [workCards])

    if (resolvedCategory === "featured")
        return <Featured cards={workCards} onOpenModal={(type, slug) => handleOpenModal(type, slug)} />

    return <WorkByCategory
        key={category}
        category={resolvedCategory}
        cards={workCards}
        onOpenModal={(type, slug) => handleOpenModal(type, slug)}
    />
}

export default WorkWrapper