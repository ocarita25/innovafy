import { imgCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "cocacola"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const cocaColaArticle: WorkArticleType = {
    slug: slug,
    title: "Coca-Cola",
    industry: "Bebidas gasificadas",
    category: ['comunidad-y-proposito', 'comercial', 'featured'],
    link: "https://www.coca-cola.com/pe/es/sustainability/nos-une-el-mundo-que-queremos",
    intro: "The Coca-Cola Company es una empresa multinacional de bebidas que produce, comercializa y distribuye refrescos y otras bebidas a nivel mundial. Es reconocida por su marca Coca-Cola y su amplia presencia en más de 200 países.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
    },
    paragraphs: [
        'En su objetivo por hacer del mundo un lugar mejor para vivir, Coca Cola Company inició un Proyecto llamado "Un mundo sin residuos" donde tuvimos la oportunidad de participar en la propuesta del desarollo de un app móvil que te permitía llevar un control actualizado de las botellas que reciclabas, a la vez podías acumular puntos y canjearlos por productos de la marca.',
        'Además, nos encargaron el branding de sus máquinas recicladoras "Ecobox" que colocaron en centros comerciales como Wong y Metro.',
    ],
    features: [
        { icon: "", label: "Branding" },
        { icon: "", label: "Comunidad" },
        { icon: "", label: "Web App" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
    ],
}