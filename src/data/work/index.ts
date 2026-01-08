import { fundacionNacionalCancerMamaArticle } from "./articles/fundacion-nacional-cancer-mama";
import { hablarCaminarArticle } from "./articles/hablar-caminar";
import { fairGoFinanceArticle } from "./articles/fair-go-finance";
import { satterleyArticle } from "./articles/satterley";
import { colegioEscocesMelbourneArticle } from "./articles/colegio-escoces-melbourne";
import { growArticle } from "./articles/grow";
import { loamArticle } from "./articles/loam";
import { feroxArticle } from "./articles/ferox";
import { pentanetArticle } from "./articles/pentanet";
import { trailsWaArticle } from "./articles/trails-wa";
import { fluidityArticle } from "./articles/fluidity";
import { piqueArticle } from "./articles/pique";
import { chaleitArticle } from "./articles/chaleit";
import { surveillanceWatchArticle } from "./articles/surveillance-watch";
import { sussexTapsArticle } from "./articles/sussex-taps";

import type { CategorizedWorkArticles, WorkArticleType, WorkCardDataType, WorkCategory } from "./types";
import { consejoCancerWAArticle } from "./articles/consejo-cancer-wa";
import { unheartedSolutionsArticle } from "./articles/unhearted-solutions";
import { georgiouGroupArticle } from "./articles/grupo-georgiou";
import { workpacArticle } from "./articles/workpac";
import { mlgArticle } from "./articles/mlg";
import { payToArticle } from "./articles/pay-to";
import { rychigerArticle } from "./articles/rychiger";
import { smartfixArticle } from "./articles/smartfix";
import { blackvueArticle } from "./articles/black-vue";
import { jasonWindowsArticle } from "./articles/jason-windows";
import { waGoodFoodGuideArticle } from "./articles/wa-good-food-guide";
import { breakthroughArticle } from "./articles/breakthrough";
import { vitalVoicesArticle } from "./articles/vital-voices";
import { telethonArticle } from "./articles/telethon";
import { childrensHospitalFoundationArticle } from "./articles/children-hospital-foundation";
import { migrantRightsArticle } from "./articles/migrant-rights";
import { theHospitalResearchFoundationGroupArticle } from "./articles/the-hospital-research-foundation-group";
import { myMindCheckArticle } from "./articles/my-mind-check";
import { fintonaGirlsSchoolArticle } from "./articles/fintona-girls-school";
import { curtinOpenDayArticle } from "./articles/curtin-open-day";
import { schroleArticle } from "./articles/schrole";
import { curtinStudyPlannerArticle } from "./articles/curtin-study-planner";
import { theUniversityOfNotreDameArticle } from "./articles/the-university-of-notre-dame";
import { scitechArticle } from "./articles/scitech";
import { greenLeavesArticle } from "./articles/green-leaves";
import { wesleyCollegeArticle } from "./articles/wesley-college";
import { evokeAgArticle } from "./articles/evoke-ag";
import { cocosKeelingIslandsArticle } from "./articles/cocos-keeling-islands";
import { goldenPipelineArticle } from "./articles/golden-pipeline";
import { fermantleArtsCentreArticle } from "./articles/fermantle-arts-centre";
import { lawmeeArticle } from "./articles/lawmee";
import { spaceDraftArticle } from "./articles/space-draft";
import { locimoArticle } from "./articles/locimo";
import { uniosLxConfiguratorArticle } from "./articles/unios-lx-configurator";
import { calixArticle } from "./articles/calix";
import { featuredArticles } from "@/views/work/data/featured";
import { comercialArticles } from "@/views/work/data/comercial";
import { sinLucroArticles } from "@/views/work/data/sin-lucro";
import { educacionArticles } from "@/views/work/data/educacion";
import { comunidadPropositoArticles } from "@/views/work/data/comunidad-proposito";
import { innovacionArticles } from "@/views/work/data/innovacion";
import { uiUxArticles } from "@/views/work/data/ui-ux";

const articles: WorkArticleType[] = [
    piqueArticle,
    sussexTapsArticle,
    blackvueArticle,
    breakthroughArticle,
    chaleitArticle,
    childrensHospitalFoundationArticle,
    colegioEscocesMelbourneArticle,
    consejoCancerWAArticle,
    curtinOpenDayArticle,
    curtinStudyPlannerArticle,
    fairGoFinanceArticle,
    feroxArticle,
    fintonaGirlsSchoolArticle,
    fluidityArticle,
    fundacionNacionalCancerMamaArticle,
    georgiouGroupArticle,
    greenLeavesArticle,
    growArticle,
    hablarCaminarArticle,
    jasonWindowsArticle,
    loamArticle,
    mlgArticle,
    migrantRightsArticle,
    myMindCheckArticle,
    payToArticle,
    pentanetArticle,
    rychigerArticle,
    satterleyArticle,
    schroleArticle,
    scitechArticle,
    smartfixArticle,
    surveillanceWatchArticle,
    telethonArticle,
    theHospitalResearchFoundationGroupArticle,
    theUniversityOfNotreDameArticle,
    trailsWaArticle,
    unheartedSolutionsArticle,
    vitalVoicesArticle,
    waGoodFoodGuideArticle,
    wesleyCollegeArticle,
    workpacArticle,
    evokeAgArticle,
    cocosKeelingIslandsArticle,
    goldenPipelineArticle,
    fermantleArtsCentreArticle,
    lawmeeArticle,
    spaceDraftArticle,
    locimoArticle,
    uniosLxConfiguratorArticle,
    calixArticle
];

const categories: Record<WorkCategory, CategorizedWorkArticles[]> = {
    featured: featuredArticles,
    comercial: comercialArticles,
    "sin-fines-de-lucro": sinLucroArticles,
    educacion: educacionArticles,
    "comunidad-y-proposito": comunidadPropositoArticles,
    innovacion: innovacionArticles,
    "ui-ux": uiUxArticles,
}

const articlesBySlug = new Map(
    articles.map(article => [article.slug, article])
);

export function getWorkArticleBySlug(slug: string): WorkArticleType | undefined {
    return articlesBySlug.get(slug)
}

export function getFeaturedWorkCards() {
    return getWorkCards().filter(article => article.isFeatured === true)
}

export function getWorkCardsByCategory(category: WorkCategory) {
    return categories[category].map(article => ({
        isFeatured: article.article.isFeatured,
        slug: article.article.slug,
        title: article.article.title,
        thumbnail: article.article.thumbnail,
        categories: article.article.category,
        columns: article.column
    }))

}

export function getWorkCards(): WorkCardDataType[] {
    return getAllWorkArticles().map(article => ({
        isFeatured: article.isFeatured,
        slug: article.slug,
        title: article.title,
        thumbnail: article.thumbnail,
        categories: article.category
    }))
}

export function getAllWorkArticles(): WorkArticleType[] {
    return articles
}