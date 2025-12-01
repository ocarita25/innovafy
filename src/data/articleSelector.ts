import AwardsArticle from "@/components/articles/Awards";
import WorkArticle from "@/views/work/WorkArticle";

export function articleSelector(type: "work" | "awards" | null, slug: string | null) {

    if (!type || !slug) return null

    const selected = {
        work: WorkArticle(slug),
        awards: AwardsArticle(),
    }[type]

    if (!selected) return null
    return selected
}