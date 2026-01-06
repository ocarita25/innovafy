import type { WorkArticleType } from "../types"

const slug = "pay-to"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const payToArticle: WorkArticleType = {
    slug: slug,
    title: "PayTo",
    category: ['comercial'],
    link: "/",
    intro: "PayTo es un servicio de pago digital con preautorización que admite transacciones bancarias tanto para comerciantes como para consumidores.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "Concebido para aumentar la confianza y mejorar la seguridad en torno a las transacciones de débito directo, el sitio web tuvo que combinar contenido informativo con comunicación educativa para crear una experiencia fácil de usar con la que los consumidores y las pequeñas empresas pudieran interactuar.",
        "La respuesta fue un diseño minimalista con iconografía visual intuitiva que comunicaba el proceso de interacción entre bancos, comercios y consumidores. El sitio web funcionó como una biblioteca de recursos para el público y contaba con numerosos casos de uso, materiales de marketing y preguntas frecuentes para facilitar una consulta más profunda según fuera necesario.",
        "El galardonado sitio web PayTo continúa desempeñando un papel importante en la transformación digital de la industria bancaria y establece el estándar para la comunicación eficaz de productos dentro de los servicios financieros."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño responsivo" },
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Casos de uso infográficos" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
    ],
}