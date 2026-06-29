import { feroxArticle } from "@/data/work/articles/ferox";
import { growArticle } from "@/data/work/articles/grow";
import { kitchenCenterArticle } from "@/data/work/articles/kitchen-center";
import { lawmeeArticle } from "@/data/work/articles/lawmee";
import { loamArticle } from "@/data/work/articles/loam";
import { locimoArticle } from "@/data/work/articles/locimo";
import { sazonPeruanaArticle } from "@/data/work/articles/sazon-peruana";
import { spaceDraftArticle } from "@/data/work/articles/space-draft";
import { surveillanceWatchArticle } from "@/data/work/articles/surveillance-watch";
import { unheartedSolutionsArticle } from "@/data/work/articles/unhearted-solutions";
import { uniosLxConfiguratorArticle } from "@/data/work/articles/unios-lx-configurator";
import type { CategorizedWorkArticles } from "@/data/work/types";

export const innovacionArticles: CategorizedWorkArticles[] = [
    { article: kitchenCenterArticle, column: 1 },
    { article: sazonPeruanaArticle, column: 1 },
    { article: growArticle, column: 1 },
    { article: feroxArticle, column: 1 },
    { article: lawmeeArticle, column: 2 },
    { article: spaceDraftArticle, column: 1 },
    { article: loamArticle, column: 1 },
    { article: surveillanceWatchArticle, column: 2 },
    { article: unheartedSolutionsArticle, column: 1 },
    { article: locimoArticle, column: 1 },
    { article: uniosLxConfiguratorArticle, column: 2 }
]