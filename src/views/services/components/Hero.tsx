import Panned from '@/components/common/Panned'

interface HeroProps {
    mediaType: "image" | "video",
    src: string
}

const Hero = ({ mediaType, src }: HeroProps) => {
    return (
        <Panned variant='vertical'>
            <div className='rounded-4xl overflow-hidden w-full aspect-[45/24]'>
                {
                    mediaType === "image" ?
                        <img src={src} className='w-full h-full object-cover' />
                        :
                        <video autoPlay loop muted className='w-full h-full object-cover rounded-4xl'>
                            <source src={src} type='video/mp4' />
                            Tu navegador no soporta este video
                        </video>
                }
            </div>
        </Panned>
    )
}

export default Hero