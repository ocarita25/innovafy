import { thinkingImgCLOUD } from "@/constants/resources"
import type { ThinkingArticleType } from "../thinking.types"

const slug = "accesibilidad-significa-disenar-tambien-para-ti"
const path = `${thinkingImgCLOUD}/${slug}`

export const AccesibilidadSignificaDiseñarTambienParaTi: ThinkingArticleType = {

    slug: slug,
    title: "Accesibilidad significa diseñar también para tí",
    author: "Paul Spencer",
    authorAvatar: "/images/staff/avatars/paul-spencer.webp",
    date: "15 Julio 2025",
    tags: ["Accesibilidad", "Diseño"],
    duration: 3,
    description: 'La accesibilidad no es solo para "otras personas", es para todos nosotros, incluyéndote a ti. Ya sea una migraña, un internet lento o simplemente el envejecimiento, todos enfrentamos limitaciones temporales o permanentes en algún momento, lo que hace que el diseño accesible sea un regalo para tu yo futuro',
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                text: 'La accesibilidad no es solo para "otras personas", es para todos nosotros, incluyéndote a ti. Ya sea una migraña, un internet lento o simplemente el envejecimiento, todos enfrentamos limitaciones temporales o permanentes en algún momento, lo que hace que el diseño accesible sea un regalo para tu yo futuro',
            },
            {
                text: "Un grupo diferente. Otro .",
            },
            {
                text: "Pero esto sólo cuenta la mitad de la historia.",
            },
        ],
        section: [
            {
                title: "“Todos” te incluye a ti; sí, a ti.",
                description: [
                    {
                        text: "Digamos que estás probando una receta completamente nueva. Es algo bastante avanzado, pero no te importa el reto. ¡Pero entonces, suenan las sirenas! ¡Un bebé llora! Una olla se desborda, el fregadero se incendia y el refrigerador se va con el microondas.",
                    },
                    {
                        text: "Un millón de problemas compiten por tu atención y te sientes abrumado. Tu cerebro simplemente no puede procesar tantas tareas a la vez. Bienvenido a una discapacidad cognitiva.",
                    },
                    {
                        text: "O digamos que estás de viaje y el acceso a internet no es el habitual. O quizás es rapidísimo, pero tienes una cuota muy limitada y cara. Bienvenido a una desventaja tecnológica.",
                    },
                    {
                        text: "Ahora, ¿qué tal despertarse con gripe o migraña? El dolor dificulta enfocar la vista y te vendría bien que todos estuvieran un poco más tranquilos. Bienvenidos a la discapacidad sensorial. Nos pasa a todos.",
                    },
                ]
            },
            {
                title: "En algún momento de tu vida, experimentarás una “discapacidad”.",
                description: [
                    {
                        text: "Quizás no sea permanente. Quizás no sea el tipo que te da derecho a recibir ayuda del gobierno. Pero incluso si tienes la suerte de vivir sin estrés ni enfermedades con internet ilimitado, probablemente envejecerás.",
                    },
                    {
                        text: "El texto pequeño y de bajo contraste será más difícil de leer. El ruido visual se volverá más molesto. Después de jubilarse, tal vez no pueda permitirse tecnología que gestione fácilmente lo que podrían llegar a ser los sitios y aplicaciones actuales.",
                    },
                    {
                        text: "Y, sin embargo, dado lo que sabemos, la accesibilidad aún puede ser difícil de vender. Esto se debe a la idea errónea de que la accesibilidad debe ser una etapa adicional en un proyecto, cuando, en realidad, es solo otra faceta de un buen diseño y desarrollo.",
                    },
                ]
            },
            {
                title: "Piense en la accesibilidad como un regalo para su yo futuro.",
                description: [
                    {
                        text: "Seré el primero en admitir que invierto más en crear productos accesibles cuando sé que también me beneficiaré. ¿Egoísta? Probablemente. Pero no es una respuesta descabellada. Y no creo ser el único que lo hace.",
                    },
                    {
                        text: "Cuando te identificas con un resultado, es más fácil apreciar los matices de la experiencia. La idea de estar en esa situación se siente más real, lo que te permite aportar la empatía y la creatividad necesarias para crear una obra excelente.",
                    },
                    {
                        text: "Considerar las aplicaciones y sitios web accesibles como regalos para el futuro es solo un pequeño cambio de mentalidad. Pero se acerca más a prometer un producto que puedas usar sin importar tu situación.",
                    },
                ]
            },
        ]
    }
}