import { artecoArticle } from "@/data/work/articles/arteco";
import { calixArticle } from "@/data/work/articles/calix";
import { clanCerveceroArticle } from "@/data/work/articles/clan-cervecero";
import { curtinStudyPlannerArticle } from "@/data/work/articles/curtin-study-planner";
import { fluidityArticle } from "@/data/work/articles/fluidity";
import { lawmeeArticle } from "@/data/work/articles/lawmee";
import { pentanetArticle } from "@/data/work/articles/pentanet";
import { rychigerArticle } from "@/data/work/articles/rychiger";
import { theUniversityOfNotreDameArticle } from "@/data/work/articles/the-university-of-notre-dame";
import { toCuscoArticle } from "@/data/work/articles/to-cusco";
import type { CategorizedWorkArticles } from "@/data/work/types";

export const uiUxArticles: CategorizedWorkArticles[] = [
    { article: clanCerveceroArticle, column: 2 },
    { article: toCuscoArticle, column: 2 },
    { article: artecoArticle, column: 2 },
    { article: fluidityArticle, column: 2 },
    { article: rychigerArticle, column: 1 },
    { article: pentanetArticle, column: 1 },
    { article: lawmeeArticle, column: 2 },
    { article: curtinStudyPlannerArticle, column: 1 },
    { article: calixArticle, column: 1 },
    { article: theUniversityOfNotreDameArticle, column: 2 }
] 