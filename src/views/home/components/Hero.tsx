import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import { Link } from 'react-router-dom'
import Facebook from '/public/images/social-media/facebook.svg?react'
import TikTok from '/public/images/social-media/tiktok.svg?react'
import Instagram from '/public/images/social-media/instagram.svg?react'
import LinkedIn from '/public/images/social-media/linkedin.svg?react'
import Panned from '@/components/common/Panned'

const Hero = () => {
    return (
        <section className='w-full p-fluid grid items-center min-h-[30vh] min-[992px]:min-h-[80dvh] playfair mb-20'>
            <Headings className="!m-0 text-[clamp(2.6rem,6.2vw,4.16rem)] min-[992px]:py-20 text-[#463467]">
                <PannedText className="overflow-hidden">
                    Experiencias Innovadoras Impactantes
                </PannedText>
            </Headings>
            <Panned variant='vertical' yOffset={200} className='overflow-hidden'>
                <div className='flex gap-5 text-[#463467]'>
                    <Link to={"https://www.tiktok.com/@inovafy.studio"} className='flex flex-col gap-3 items-center hover:text-[#5700ff] ease duration-150'>
                        <TikTok className='w-9' />
                    </Link>
                    <Link to={"https://www.facebook.com/profile.php?id=61583814716637"} className='flex flex-col gap-3 items-center  hover:text-[#5700ff] ease duration-150'>
                        <Facebook className='w-9' />
                    </Link>
                    <Link to={"https://www.instagram.com/inovafy.studio/"} className='flex flex-col gap-3 items-center  hover:text-[#5700ff] ease duration-150'>
                        <Instagram className='w-9' />
                    </Link>
                    <Link to={"https://www.linkedin.com/company/inovafy-studio/"} className='flex flex-col gap-3 items-center  hover:text-[#5700ff] ease duration-150'>
                        <LinkedIn className='w-9' />
                    </Link>
                </div>
            </Panned>
        </section>
    )
}

export default Hero