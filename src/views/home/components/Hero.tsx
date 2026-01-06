import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'


const Hero = () => {
    return (
        <section className='w-full p-fluid grid items-center min-h-[30vh] min-[992px]:min-h-[80dvh]'>
            <Headings className="!m-0 text-[clamp(2.6rem,6.2vw,4.16rem)] min-[992px]:py-20 text-color-primary">
                <PannedText className="overflow-hidden">
                    Experiencias Innovadoras Impactantes
                    {/* Innovación digital para marcas que quieren escalar */}
                </PannedText>
            </Headings>
        </section>
    )
}

export default Hero