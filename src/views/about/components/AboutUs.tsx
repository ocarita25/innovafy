import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'

const AboutUs = () => {
    return (
        <div className="subtitle p-fluid leading-[1] pb-30 z-20">
            <Headings as="h2" variant="section" className="text-color-primary">
                <PannedText className='inline-flex' aria-label="Inovafy es tu hub de innovación 360°, donde la tecnología, el diseño y la estrategia se fusionan para impulsar tu marca. No somos una agencia; somos un socio estratégico que centraliza todas tus necesidades de crecimiento digital en un solo lugar.">
                    <span className='text-[#4700ff] playfair'>Inovafy</span> es tu hub de innovación 360°, donde la tecnología, el diseño y la estrategia se fusionan para impulsar tu marca. No somos una agencia; somos un socio estratégico que centraliza todas tus necesidades de crecimiento digital en un solo lugar.
                </PannedText>
            </Headings>
        </div>
    )
}

export default AboutUs