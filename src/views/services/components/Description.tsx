import Headings from '@/components/common/Headings'
import Panned from '@/components/common/Panned'
import PannedText from '@/components/common/PannedText'

const Description = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <>
            <Headings as='h2' variant='subtitle' className='playfair inline-flex leading-[1] !m-0 max-w-[clamp(51.88rem,54.89vw,69rem)]'>
                <PannedText>
                    {title}
                </PannedText>
            </Headings>

            <Panned variant='vertical'>
                <span className='text-[clamp(1.25rem,1.33vw,1.66rem)] max-w-[clamp(51.88rem,54.89vw,69rem)] opacity-60 leading-[1.4]'>
                    {subtitle}
                </span>
            </Panned>
        </>
    )
}

export default Description