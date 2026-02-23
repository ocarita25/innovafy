import Arrow from '@/assets/Arrow'
import Headings from '@/components/common/Headings'
import { Link } from 'react-router-dom'

interface NextServiceProps {
    service: {
        title: string,
        text: string,
        url: string,
        img: string,
    }
}

const NextService = ({ service }: NextServiceProps) => {

    const { title, text, url, img } = service

    return (
        <section className='p-fluid mb-40'>
            <div className='flex flex-col justify-between min-[1200px]:items-center min-[1200px]:flex-row gap-[2.5rem_clamp(2.81rem,2.98vw,3.74rem)] p-8 bg-slate-900 rounded-[2rem] text-white'>
                <div className='flex flex-col gap-4 min-[1200px]:gap-[clamp(1.88rem,1.99vw,2.5rem)] h-full min-[1200px]:p-9 pr-0'>
                    <h2 className='m-0 px-4 py-3 bg-slate-600 w-fit rounded-full'>Our Expertise</h2>
                    <Headings as='h3' variant='section' className='text-white mt-0 mb-auto'>{title}</Headings>
                    <div className='text-[clamp(1.25rem,1.33vw,1.66rem)] leading-[1.4] min-[992px]:max-w-[clamp(29.88rem,31.61vw,39.73rem)] '>
                        <span>{text}</span>
                    </div>
                    <Link to={url} className='flex items-center gap-3 m-0 px-4 py-3 bg-slate-600 w-fit rounded-full'>
                        <span>Seguir Leyendo</span>
                        <Arrow width='w-4' />
                    </Link>
                </div>
                <div className='max-w-1/2 rounded-4xl overflow-hidden w-full'>
                    <img src={img} className='w-full' />
                </div>
            </div>
        </section>
    )
}

export default NextService