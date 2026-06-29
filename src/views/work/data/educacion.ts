import { colegioEscocesMelbourneArticle } from "@/data/work/articles/colegio-escoces-melbourne";
import { curtinOpenDayArticle } from "@/data/work/articles/curtin-open-day";
import { curtinStudyPlannerArticle } from "@/data/work/articles/curtin-study-planner";
import { fintonaGirlsSchoolArticle } from "@/data/work/articles/fintona-girls-school";
import { greenLeavesArticle } from "@/data/work/articles/green-leaves";
import { myMindCheckArticle } from "@/data/work/articles/my-mind-check";
import { schroleArticle } from "@/data/work/articles/schrole";
import { scitechArticle } from "@/data/work/articles/scitech";
import { theUniversityOfNotreDameArticle } from "@/data/work/articles/the-university-of-notre-dame";
import { wesleyCollegeArticle } from "@/data/work/articles/wesley-college";
import type { CategorizedWorkArticles } from "@/data/work/types";

export const educacionArticles: CategorizedWorkArticles[] = [
    { article: colegioEscocesMelbourneArticle, column: 2 },
    { article: myMindCheckArticle, column: 1 },
    { article: fintonaGirlsSchoolArticle, column: 1 },
    { article: curtinOpenDayArticle, column: 2 },
    { article: schroleArticle, column: 1 },
    { article: curtinStudyPlannerArticle, column: 1 },
    { article: theUniversityOfNotreDameArticle, column: 2 },
    { article: scitechArticle, column: 1 },
    { article: greenLeavesArticle, column: 1 },
    { article: wesleyCollegeArticle, column: 2 }
]