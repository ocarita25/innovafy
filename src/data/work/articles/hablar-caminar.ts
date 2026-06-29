import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "hablar-caminar"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const hablarCaminarArticle: WorkArticleType = {
    slug: slug,
    title: "Hablar y Caminar",
    industry: "Educación",
    category: ['featured', "comunidad-y-proposito"],
    link: "https://apps.apple.com/au/app/talk-n-walk/id1615889482",
    intro: "Talk N Walk es una aplicación móvil única que apoya y fomenta la actividad física en niñas en edad escolar.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'PIQUE Thumbnail',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "Con el objetivo de incentivar a niñas preadolescentes y adolescentes a sustituir el sedentarismo por actividades en su entorno local, este tipo de iniciativas exploran cómo la tecnología puede cerrar la brecha entre el mundo digital y el movimiento físico, promoviendo un enfoque positivo hacia un estilo de vida activo.",
        "Soluciones como Talk N Walk integran principios de gamificación y personalización para construir experiencias móviles significativas, facilitando la conversación, fomentando la actividad al aire libre y generando ciclos de retroalimentación que evidencian el impacto de la actividad física en la salud mental.",
        "Tras su lanzamiento, propuestas de esta naturaleza suelen recibir reconocimiento por su carácter innovador y por establecer nuevos estándares en diseño inclusivo, accesibilidad y experiencia centrada en el usuario."
    ],
    features: [
        { icon: "", label: "Investigación de UX" },
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Aplicación para iOS y Android" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-3`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-8`, style: "min-[992px]:col-span-2" },
    ],
}