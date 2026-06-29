import { breakthroughArticle } from "@/data/work/articles/breakthrough";
import { childrensHospitalFoundationArticle } from "@/data/work/articles/children-hospital-foundation";
import { consejoCancerWAArticle } from "@/data/work/articles/consejo-cancer-wa";
import { fundacionNacionalCancerMamaArticle } from "@/data/work/articles/fundacion-nacional-cancer-mama";
import { migrantRightsArticle } from "@/data/work/articles/migrant-rights";
import { telethonArticle } from "@/data/work/articles/telethon";
import { theHospitalResearchFoundationGroupArticle } from "@/data/work/articles/the-hospital-research-foundation-group";
import { vitalVoicesArticle } from "@/data/work/articles/vital-voices";
import type { CategorizedWorkArticles } from "@/data/work/types";

export const sinLucroArticles: CategorizedWorkArticles[] = [
    { article: breakthroughArticle, column: 1 },
    { article: fundacionNacionalCancerMamaArticle, column: 1 },
    { article: theHospitalResearchFoundationGroupArticle, column: 2 },
    { article: consejoCancerWAArticle, column: 1 },
    { article: vitalVoicesArticle, column: 1 },
    { article: telethonArticle, column: 2 },
    { article: childrensHospitalFoundationArticle, column: 1 },
    { article: migrantRightsArticle, column: 1 }
]