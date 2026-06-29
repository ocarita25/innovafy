import type { ThinkingArticleType, ThinkingCardType } from "../thinking.types";
import { AccesibilidadSignificaDiseñarTambienParaTi } from "./accesibilidad-significa-disenar-tambien-para-ti";
import { BuenDiseñoDemuestraCredibilidad } from "./buen-diseno-demuestra-credibilidad";
import { ComprendiendoWCAG } from "./comprendiendo-wcag-2-2";
import { ContenidoEficazYCentradoEnElUsuario } from "./contenido-eficaz-y-centrado-en-el-usuario";
import { ContenidoEmergenteParaLLM } from "./contenido-emergente-para-llm";
import { CualEsElCostoDeUnBuenSitioWeb } from "./cual-es-el-costo-de-un-buen-sitio-web";
import { QueTanProfundoInvestigamos } from "./que-tan-profundo-profundizamos";
import { TransformandoElConocimientoEnImpacto } from "./transformando-el-conocimiento-en-impacto";

const articles: ThinkingArticleType[] = [
    CualEsElCostoDeUnBuenSitioWeb,
    ComprendiendoWCAG,
    QueTanProfundoInvestigamos,
    ContenidoEmergenteParaLLM,
    TransformandoElConocimientoEnImpacto,
    AccesibilidadSignificaDiseñarTambienParaTi,
    BuenDiseñoDemuestraCredibilidad,
    ContenidoEficazYCentradoEnElUsuario
]

const articlesBySlug = new Map(
    articles.map(article => [article.slug, article])
);

export function getThinkingArticleBySlug(slug: string): ThinkingArticleType | undefined {
    return articlesBySlug.get(slug)
};

export function getThinkingCards(): ThinkingCardType[] {
    return getAllThinkingArticles().map(article => ({
        slug: article.slug,
        title: article.title,
        author: article.author,
        authorAvatar: article.authorAvatar,
        date: article.date,
        description: article.description,
        tags: article.tags,
        duration: article.duration,
        thumbnail: article.thumbnail,
    }))
}

export function getAllThinkingArticles(): ThinkingArticleType[] {
    return articles
};