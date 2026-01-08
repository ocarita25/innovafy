import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'

const AboutUs = () => {
    return (
        <div className="subtitle p-fluid leading-[1] pb-30 z-20 text-[var(--color-theme-secondary)]">
            <Headings as="h2" variant="section" className="text-color-primary">
                <PannedText aria-label="Inovafy es tu hub de innovación 360°, donde la tecnología, el diseño y la estrategia se fusionan para impulsar tu marca. No somos una agencia; somos un socio estratégico que centraliza todas tus necesidades de crecimiento digital en un solo lugar.">
                    Inovafy es tu hub de innovación 360°, donde la tecnología, el diseño y la estrategia se fusionan para impulsar tu marca. No somos una agencia; somos un socio estratégico que centraliza todas tus necesidades de crecimiento digital en un solo lugar.
                </PannedText>
            </Headings>
        </div>
    )
}

export default AboutUs