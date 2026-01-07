import { cocosKeelingIslandsArticle } from "@/data/work/articles/cocos-keeling-islands";
import { evokeAgArticle } from "@/data/work/articles/evoke-ag";
import { fermantleArtsCentreArticle } from "@/data/work/articles/fermantle-arts-centre";
import { goldenPipelineArticle } from "@/data/work/articles/golden-pipeline";
import { hablarCaminarArticle } from "@/data/work/articles/hablar-caminar";
import { myMindCheckArticle } from "@/data/work/articles/my-mind-check";
import { scitechArticle } from "@/data/work/articles/scitech";
import { surveillanceWatchArticle } from "@/data/work/articles/surveillance-watch";
import { trailsWaArticle } from "@/data/work/articles/trails-wa";
import type { CategorizedWorkArticles } from "@/data/work/types";

export const comunidadPropositoArticles: CategorizedWorkArticles[] = [
    { article: hablarCaminarArticle, column: 1 },
    { article: trailsWaArticle, column: 1 },
    { article: surveillanceWatchArticle, column: 2 },
    { article: evokeAgArticle, column: 1 },
    { article: myMindCheckArticle, column: 1 },
    { article: cocosKeelingIslandsArticle, column: 2 },
    { article: goldenPipelineArticle, column: 1 },
    { article: scitechArticle, column: 1 },
    { article: fermantleArtsCentreArticle, column: 2 }
]