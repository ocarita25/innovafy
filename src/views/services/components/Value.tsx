import Headings from '@/components/common/Headings'
import Panned from '@/components/common/Panned'
import PannedText from '@/components/common/PannedText'

interface ValueProps {
    values: {
        mediaType: 'image' | 'video',
        media: string,
        title: string,
        text: string,
    }[]
}

const ValuePropositionImage = ({ mediaType, src }: { mediaType: "image" | "video", src: string }) => {

    return (
        <Panned variant='vertical' className='col-start-2'>
            <div className='aspect-[754/531] overflow-hidden rounded-4xl'>
                {
                    mediaType === "image" ?
                        <img src={src} className='object-cover w-full' />
                        :
                        <video autoPlay loop muted>
                            <source src={src} className='object-cover w-full' />
                        </video>
                }
            </div>
        </Panned>
    )
}

const ValuePropositionDescription = ({ title, text, leftAlign = false }: { title: string, text: string, leftAlign?: boolean }) => {

    const alignClass = leftAlign ? "mr-auto col-start-1" : "ml-auto col-start-2"

    return (
        <div className={`row-1 flex flex-col justify-center min-[992px]:max-w-[clamp(28.75rem,30.43vw,38.24rem)] col-start-1 ${alignClass}`}>
            <div className='max-[992px]:mb-5'>
                <Headings as='h2' variant='eyebrow' className='mt-0 mb-0'>
                    <PannedText>
                        {title}
                    </PannedText>
                </Headings>
            </div>
            <Panned variant='vertical'>
                <p className='text-[clamp(1.25rem,1.33vw,2.25rem)] leading-[1.5]'>{text}</p>
            </Panned>
        </div>
    )
}

const Value = ({ values }: ValueProps) => {
    return (
        <div className='flex flex-col gap-20 min-[992px]:gap-30 mt-15'>
            {values.map((val, i) => {
                const leftAlign = i % 2 === 0
                return (
                    <div key={i} className='flex flex-col min-[992px]:grid min-[992px]:grid-cols-2 gap-8'>
                        <ValuePropositionImage mediaType={val.mediaType} src={val.media} />
                        <ValuePropositionDescription title={val.title} text={val.text} leftAlign={leftAlign} />
                    </div>
                )
            })}
        </div>
    )
}

export default Value