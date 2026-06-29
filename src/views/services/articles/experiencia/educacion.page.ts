import { Badges, Graduate, Group, SquarePen } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD, servicesVidCLOUD } from "@/constants/resources";

const slug = "experiencia/educacion"

export const educacionPage: ServicePageType =
{
    slug: "educacion",
    heading: {
        pill: "Educación",
        title: "Espacios digitales donde el conocimiento puede prosperar",
        heroImage: `${servicesVidCLOUD}/${slug}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Experiencias educativas extraordinarias",
        subtitle: "Desde la educación infantil hasta la universidad, trabajamos en todo el espectro educativo para impulsar las matriculaciones, aumentar la concienciación y ofrecer experiencias estudiantiles excepcionales.",
        capabilities: [
            {
                icon: SquarePen(),
                title: "Inscripción atractiva",
                text: "Aplicamos nuestra galardonada metodología de diseño y experiencia de usuario para captar la atención del público y crear vías claras que aumenten el interés e impulsen las inscripciones.",
            },
            {
                icon: Graduate(),
                title: "Experiencia del estudiante",
                text: "Desde la educación interactiva hasta la selección de cursos y la planificación de estudios, hemos ayudado a numerosas instituciones a mejorar la experiencia digital de sus estudiantes.",
            },
            {
                icon: Badges(),
                title: "Conocimiento de la marca",
                text: "Nuestras experiencias digitales inmersivas ofrecen formas sencillas y atractivas de alcanzar los objetivos de sus grupos de interés. Conviértase en la marca que acierta.",
            },
            {
                icon: Group(),
                title: "Socios educativos",
                text: "Creemos en relaciones, servicio y soporte excepcionales para nuestros clientes. Estamos con usted a largo plazo para mantener su ventaja competitiva y garantizar su éxito continuo.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Impulsar las visitas y las consultas de inscripción",
                text: "La competencia por captar la atención se intensifica año tras año. Transformamos tu plataforma digital en una poderosa herramienta que atrae e inspira, convirtiendo a los estudiantes potenciales en miembros activos de tu comunidad.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Potencia tu marca",
                text: "Cada producto que creamos es totalmente personalizado; una experiencia digital diseñada específicamente para llevar tu marca al siguiente nivel. Combinamos diseño innovador, tecnología de vanguardia y contenido estratégico para ofrecer sitios web y aplicaciones educativas que no solo son visualmente atractivos, sino también altamente interactivos y funcionales.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Potenciando el aprendizaje a través de la innovación digital",
                text: "La innovación es clave para conectar con los estudiantes, y las expectativas nunca han sido tan altas. Desde módulos de aprendizaje en línea hasta plataformas personalizadas, creamos experiencias de aprendizaje interactivas e inmersivas que cautivan, motivan y educan a los estudiantes.",
            },
        ]
    },
    briefSubmit: "Experiencias Educativas Extraordinarias",
    nextService: "innovacion-startups"
}