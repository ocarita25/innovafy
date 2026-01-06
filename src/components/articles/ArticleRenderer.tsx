import AwardsArticle from "@/components/articles/Awards";
import Brief from "@/views/Brief";
import ThinkingArticle from "@/views/thinking/ThinkingArticle";
import WorkArticle from "@/views/work/WorkArticle";

interface ArticleRendererProps {
    type: "work" | "awards" | "ideas" | "brief" | null;
    slug: string | null;
    onNext: () => void;
}

export function ArticleRenderer({ type, slug, onNext, }: ArticleRendererProps) {
    if (!type || !slug) return null;

    const map = {
        work: WorkArticle,
        awards: AwardsArticle,
        ideas: ThinkingArticle,
        brief: Brief,
    };

    const Component = map[type]

    return Component ? <Component slug={slug} onNext={onNext} /> : null;

}