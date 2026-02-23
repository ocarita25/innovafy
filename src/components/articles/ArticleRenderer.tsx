import AwardsArticle from "@/components/articles/Awards";
// import Brief from "@/views/Brief";
import HomePlansArticle from "@/views/home/HomePlansArticle";
import ThinkingArticle from "@/views/thinking/ThinkingArticle";
import WorkArticle from "@/views/work/WorkArticle";

interface ArticleRendererProps {
    type: "work" | "awards" | "ideas" | "plans" | null;
    slug: string | null;
    onNext: () => void;
}

export function ArticleRenderer({ type, slug, onNext, }: ArticleRendererProps) {
    if (!type || !slug) return null;

    const map = {
        work: WorkArticle,
        awards: AwardsArticle,
        ideas: ThinkingArticle,
        plans: HomePlansArticle,
        // brief: Brief,
        // alert: null
    };

    const Component = map[type]

    return Component ? <Component slug={slug} onNext={onNext} /> : null;

}