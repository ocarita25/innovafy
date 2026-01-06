import type { ThinkingArticleType } from "../thinking.types"

const slug = "que-tan-profundo-investigamos"
const path = "/images/thinking/articles"

export const QueTanProfundoInvestigamos: ThinkingArticleType = {

    slug: slug,
    title: "¿Qué tan profundo Investigamos?",
    author: "Niaal Holder",
    authorAvatar: "/images/staff/avatars/niaal-holder.webp",
    date: "10 Setiembre 2025",
    tags: ["Experiencia de Usuario", "Diseño"],
    duration: 6,
    description: "La investigación de usuarios eficiente utiliza estrategias sencillas y específicas para obtener una gran cantidad de información a un coste relativamente bajo. Una investigación temprana y ágil ayuda a detectar incógnitas críticas y suposiciones incorrectas antes de que puedan comprometer el presupuesto del proyecto.",
    thumbnail: {
        type: 'image',
        src: `${path}/${slug}.webp`,
        alt: ''
    },
    content: {
        introduction: [
            {
                variant: "text",
                subVariant: "text",
                text: "Según nuestra experiencia, «investigación de usuarios» puede ser un término algo confuso. Para algunos clientes (y colegas del sector), la única forma de recopilar datos es mediante grandes presupuestos y plazos largos. Esta forma de pensar a menudo resulta costosa, ya que puede disuadir a las personas de emprender lo que, en realidad, es una fase de trabajo más sencilla que, aun así, conduce a resultados bien elaborados y relevantes",
            },
            {
                variant: "text",
                subVariant: "text",
                text: "Una investigación de usuarios ligera y específica ( investigación de usuarios lean ) puede aportar un gran valor sin desbordar el presupuesto del proyecto. De hecho, con una planificación cuidadosa, un razonamiento empático y un enfoque reflexivo, es posible obtener descubrimientos más específicos y profundos mediante investigaciones más pequeñas y profundas.",
            },
            {
                variant: "text",
                subVariant: "title",
                tag: "h3",
                text: "El mito de más datos"
            },
            {
                variant: "text",
                subVariant: "text",
                text: "La investigación puede ser eficaz a diversas escalas, desde pequeños grupos focales en la investigación cualitativa hasta grandes encuestas que abarcan la población en estudios cuantitativos. Sin embargo, los expertos en usabilidad de Nielsen Norman Group (NNGroup) consideran que un tamaño mayor no siempre es mejor. Si bien las pruebas a gran escala pueden generar información más profunda y detectar problemas menos frecuentes, para un proyecto web común y corriente, se puede obtener un valor sorprendente con tan solo unas pocas pruebas con muestras pequeñas."
            },
            {
                variant: "text",
                subVariant: "text",
                text: 'En cuanto se recopilan datos de un  solo usuario de prueba , la información se dispara y, estadísticamente, ya se ha aprendido casi un tercio de todo lo necesario sobre la usabilidad del diseño. Fundamentalmente, esa transición de "sin investigación" a "algo de investigación" ofrece la mejor relación calidad-precio: la diferencia entre cero e incluso un poco de datos es asombrosa. A medida que se  añaden más usuarios, se aprende cada vez menos  porque se siguen viendo los mismos datos una y otra vez.'
            },
            {
                variant: "text",
                subVariant: "text",
                text: 'Aunque se necesitan “al menos 15 usuarios para descubrir todos los problemas de usabilidad”, NNGroup recomienda realizar pruebas con solo cinco usuarios en un par de escenarios para optimizar los resultados, el presupuesto y el cronograma del proyecto.'
            },
            {
                variant: "multimedia",
                subVariant: "image",
                image: "img.webp",
                imageDescription: "Incluso las grandes organizaciones pueden prescindir de una investigación de usuarios exhaustiva. Cuando el propósito del producto es claro, la investigación eficiente indica cómo conectar mejor con la audiencia para alcanzar sus objetivos y los suyos."
            },
            {
                text: "Se puede obtener un inmenso valor de la investigación cualitativa con un número reducido de usuarios si se combina con la experiencia en una disciplina específica. Por ejemplo, un diseñador experimentado no solo podrá planificar actividades de investigación útiles para el proyecto en cuestión, sino que también tendrá los conocimientos necesarios para reconocer patrones en los datos y comprender su significado."
            }
        ],
        section: [
            {
                title: "Cómo es la investigación de usuarios lean",
                description: [
                    {
                        text: "Como agencia pequeña, los trabajos que conseguimos no suelen requerir investigaciones exhaustivas. Hemos comprobado una y otra vez el sorprendente valor de las pequeñas y bien diseñadas actividades de investigación de usuarios dentro de nuestro marco de descubrimiento, planificación, diseño y desarrollo.",
                    },
                    {
                        text: "Notas de cuna de nuestro manual:"
                    },
                ],
                subSection: [
                    {
                        title: "2–3 actividades de corta duración con un público objetivo",
                        content: [
                            {
                                text: 'Por "público objetivo", nos referimos a entre 5 y 10 personas con una conexión profunda con los grupos de audiencia a los que representan. Esto suele incluir a personas con experiencias relevantes para nuestros usuarios finales, o a partes interesadas del proyecto y consultores con conocimientos especializados que puedan influir en la calidad del producto final. Estos pueden ser talleres, entrevistas o ejercicios específicos enfocados en un objetivo determinado.'
                            },
                        ]
                    },
                    {
                        title: "Clasificación de tarjetas, pruebas de árboles y otros métodos de investigación de IA",
                        content: [
                            {
                                text: "Los métodos de prueba de IA son una forma sorprendentemente ágil de validar algunos de los aspectos más críticos de un sitio web moderno, ya que con un tamaño de muestra relativamente pequeño se pueden recopilar información valiosa para fundamentar los planes en torno a la navegación y la estructura del contenido."
                            },
                            {
                                text: "En la mayoría de los sitios web, las actividades de arquitectura de la información suelen involucrar a entre 10 y 15 personas, dependiendo de la naturaleza del proyecto y del cliente. Según la escala del contenido ofrecido por el producto, servicio u organización, este número puede ser mayor o menor según sea necesario, pero un número mayor a 20 probablemente generaría un rendimiento decreciente. Como regla general, si una organización de proyecto incluye varios departamentos o áreas operativas independientes, el tamaño de la muestra debería aumentar en consecuencia."
                            },
                        ]
                    },
                    {
                        title: "Pruebas rápidas y validación de conceptos con wireframes y prototipos",
                        content: [
                            {
                                text: "Basándonos en los hallazgos de NNGroup, recomendamos probar iteraciones de diseño a lo largo del tiempo con un grupo muy pequeño y selecto de usuarios y partes interesadas (entre 3 y 7 personas, según la naturaleza del proyecto y el cliente). El objetivo no es analizar qué funciona bien o mal en el diseño, sino mejorar y evolucionar la solución propuesta según las necesidades del público objetivo."
                            },
                        ]
                    },
                    {
                        title: "Entrevistas en grupos pequeños",
                        content: [
                            {
                                text: "Las entrevistas grupales son una forma ideal de profundizar en las necesidades de los usuarios, los puntos de fricción y los posibles obstáculos del diseño propuesto. Con un grupo más pequeño, puede tomarse su tiempo para explorar las preocupaciones menos obvias (pero igualmente urgentes), e incluso descubrir casos de uso marginales en los que los diseños inadecuados aún tienen un impacto significativo. Si bien requiere más tiempo y es más subjetivo, este tipo de investigación profunda y de alta empatía aumenta en importancia cuanto más crítico sea su producto para la misión"
                            },
                        ]
                    },
                    {
                        title: "Pruebas sustitutivas",
                        content: [
                            {
                                text: "En este enfoque, las partes interesadas internas abogan por los usuarios, lo que es ideal para proyectos con financiación insuficiente o proyectos en los que el público objetivo es inaccesible por alguna razón. Para que las pruebas sustitutivas sean eficaces, las partes interesadas seleccionadas deben tener un conocimiento profundo y una relación comunicativa fluida con el público objetivo; básicamente, deben estar lo suficientemente familiarizados como para hablar en nombre de para quién estamos diseñando"
                            },
                        ]
                    },
                ]
            },
            {
                title: "Pequeña investigación, gran valor",
                description: [
                    {
                        text: "Hay muchísimo que ganar al tener contacto directo con usuarios reales, sin importar cuán pequeña o fugaz sea la interacción. Verás cómo tus suposiciones se cuestionan o tus ideas se validan, todo por el precio de unas pocas horas y un plato de sándwiches.",
                    },
                    {
                        text: "La investigación de usuarios se aborda mejor como una etapa pequeña, asequible y necesaria, en lugar de como un obstáculo o un simple paso. Revela tanto las incógnitas desconocidas como dónde las partes interesadas (¡e incluso nosotros, los diseñadores!) podemos estar proyectando nuestras propias expectativas en el usuario.",
                    },
                    {
                        text: "Cuanto antes se aborden los problemas, más económico y rápido será recuperarse. Este es el verdadero valor de la investigación de usuarios eficiente: la capacidad de avanzar con rapidez, aprender con rapidez y evitar fallos innecesarios. La investigación no es un lujo, es una inversión estratégica y escalable en el éxito de su producto.",
                    },
                ]
            },
        ]
    }
}