import type { WorkArticleType } from "../types"

const slug = "cocos-keeling-islands"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const cocosKeelingIslandsArticle: WorkArticleType = {
    slug: slug,
    title: "Cocos Keeling Islands",
    category: ['comunidad'],
    link: "/",
    intro: "Las Islas Cocos Keeling son el último paraíso virgen de Australia, un idílico oasis tropical con palmeras cocoteras, playas de arena blanca y aguas azules",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "La Comisión de Turismo de la Isla Cocos Keeling le planteó a Humaan el doble desafío de aumentar el atractivo turístico de las islas y al mismo tiempo crear un activo que gestionara el inventario de productos de alojamiento, actividades y excursiones de una manera más eficiente.",
        "El contenido visual enriquecido desempeñaría un papel fundamental en la comunicación de la vida en la isla. Este contenido se distribuyó con elegancia en toda la estructura del sitio web para atraer y captar la atención del público objetivo. Una experiencia de usuario intuitiva permitió que todos los operadores turísticos de la isla aparecieran con llamadas a la acción claras al motor de reservas personalizable para impulsar las ventas y la actividad turística.",
        "El sitio y el lanzamiento de relaciones públicas que lo respalda han vuelto a poner a Cocos Keeling Island en el mapa y han aumentado su consideración para los turistas que buscan aventuras en todo el mundo."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Animación e interacción" },
        { icon: "", label: "Integración de reservas" },
    ],
    body: [
        { type: "video", src: `${imgPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}