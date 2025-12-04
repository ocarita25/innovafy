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
        work: <WorkArticle slug={slug} onNext={onNext} />,
        awards: <AwardsArticle />,
        ideas: <ThinkingArticle slug={slug} onNext={onNext} />,
        brief: <Brief />
    };

    return map[type] ?? null

}