import Panned from '@/components/common/Panned'

interface CapabilitiesProps {
    capabilities: {
        icon: any,
        title: string,
        text: string,
    }[]
}

const Capabilities = ({ capabilities }: CapabilitiesProps) => {
    return (
        <div className='grid grid-cols-1 min-[992px]:grid-cols-4 gap-10 w-full'>
            {capabilities.map((cap, i) => (
                <Panned key={i} variant='horizontal' xOffset={-50 * i} durationOffset={0.15 * i} opacityOffset={-1 * i} className='max-[992px]:mt-10 mt-5'>
                    <div className='flex flex-col gap-5 min-[992px]:gap-10'>
                        {cap.icon}
                        <hr />
                        <div>
                            <h3 className='text-[clamp(1.13rem,1.2vw,1.5rem)] mb-8'>{cap.title}</h3>
                            <span className='opacity-60 text-[clamp(0.94rem,0.99vw,1.25rem)] leading-[1.5]'>{cap.text}</span>
                        </div>
                    </div>
                </Panned>
            ))}
        </div>
    )
}

export default Capabilities