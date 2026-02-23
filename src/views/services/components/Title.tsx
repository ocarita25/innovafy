import Headings from '@/components/common/Headings'
import Panned from '@/components/common/Panned'

const Title = ({ title }: { title: string }) => {
    return (
        <Headings as='h2' variant='subtitle' className='max-w-[clamp(76.25rem,80.69vw,101.41rem)] leading-[1] !m-0 text-color-primary'>
            <Panned variant='vertical' delay={0.1}>
                {title}
            </Panned>
        </Headings>
    )
}

export default Title