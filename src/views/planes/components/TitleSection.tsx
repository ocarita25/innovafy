import Headings from '@/components/common/Headings'
import { secciones } from '../data/sections'

interface TitleSectionProps {
    sectionName: string,
    isBgDark?: boolean,
}

const TitleSection = ({ sectionName, isBgDark = false }: TitleSectionProps) => {

    const { section, title, accent, introduction } = secciones[sectionName]

    const textColor = isBgDark ? "text-color-secondary" : "text-color-primary"

    return (
        <div className='max-w-[clamp(10rem,60vw,30rem)] lg:max-w-[clamp(20rem,70vw,60rem)] mb-10'>
            <span className='uppercase text-[#5700ff] text-[0.75rem] tracking-widest font-regular '>{section}</span>
            <Headings as='h3' variant='section' className={`font-black playfair !my-2 ${textColor}`}>
                {title}
                <br />
                <em className='text-[#5700ff]'>{accent}</em>
            </Headings>
            {introduction && (<p className='opacity-60 leading-6'>{introduction}</p>)}
        </div>
    )
}

export default TitleSection