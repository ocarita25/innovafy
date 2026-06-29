import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import Scrollable from '@/components/common/Scrollable'
import ThemeTrigger from '@/components/common/ThemeTrigger'
import { imgCLOUD } from '@/constants/resources'

const WhoWeAre = () => {

    const bgOriginal = "#D8E7EE"
    const bgColor = "#3799EA"


    return (
        <ThemeTrigger
            startDesktop="top 40%"
            endDesktop="bottom top"
            bgColor={bgColor}
            bgOriginal={bgOriginal}
            className={"about-humans"}
        >
            <div className="about-humans-team aspect-[5/4] max-w-dvw">
                <h2 className="about-humans-team-heading playfair">
                    <div className="absolute whitespace-nowrap z-[1] top-[23%] left-[49.61%] -translate-x-1/2">
                        <Scrollable yOriginal={0} yTarget={-35} initScale={0.85} scale={1.05} start="top+=200 bottom" end="bottom 50%">
                            Somos
                        </Scrollable>
                    </div>
                    <div className="absolute whitespace-nowrap z-[3] top-[34%] left-[47.95%] -translate-x-1/2">
                        <Scrollable yOriginal={0} yTarget={-35} initScale={0.85} scale={1.05} start="top-=50 bottom" end="bottom 40%">
                            Innovadores
                        </Scrollable>
                    </div>
                </h2>
                <div className="about-humans-team-wrapper">
                    <picture className="team-image-main">
                        <img src={`${imgCLOUD}/about/we_are_humans.webp`} alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                    </picture>
                    <picture className="team-image-back">
                        <img src={`${imgCLOUD}/about/we_are_humans.webp`} alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                    </picture>
                    <picture className="team-image-front">
                        <img src={`${imgCLOUD}/about/we_are_humans.webp`} alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                    </picture>
                </div>
            </div>
            <Headings as="h2" variant="section" className="p-fluid text-white">
                <PannedText className="inline-flex leading-[1.2]" aria-label="Hemos impulsado una renovación total en nuestra metodología:  Inovafy es ahora un Ecosistema de Innovación Digital 360°. Centralizamos Marketing Estratégico, Branding, Contenido, Audiovisual y Desarrollo Web/App de primer nivel, potenciados con Automatización IA. Todo se ejecuta 100% interno (de principio a fin) para garantizar la máxima calidad y visión estratégica. ¡Estamos de vuelta!">
                    Somos un Ecosistema de <span className="text-color-primary playfair italic">Innovación Digital 360°</span>. que integra estrategia, creatividad, tecnología y automatización IA, con ejecución 100% interna.
                </PannedText>
            </Headings>
        </ThemeTrigger>
    )
}

export default WhoWeAre