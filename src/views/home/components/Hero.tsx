import { ButtonBlack } from '@/components/common/Button'
import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'


const Hero = () => {
    return (
        <section className='w-full p-fluid grid items-center min-h-[30vh] min-[992px]:min-h-[80dvh]'>
            {/* <Headings className="!m-0 text-[clamp(2.6rem,6.2vw,4.16rem)] min-[992px]:py-20 text-color-primary"> */}
            <Headings className="!m-0 text-[clamp(2.6rem,6.2vw,4.16rem)] min-[992px]:py-20 text-[#463467]">
                <PannedText className="overflow-hidden">
                    Experiencias Innovadoras Impactantes
                </PannedText>
            </Headings>
            {/* <ButtonBlack className='min-[992px]:text-[clamp(1.5rem,3vw,2rem)] !px-5 !py-3 min-[992px]:!px-10 min-[992px]:!py-5 mb-10'>Quiero mi Plan de Crecimiento Gratis</ButtonBlack> */}
        </section>
    )
}

export default Hero