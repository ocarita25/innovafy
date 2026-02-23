import Panned from "@/components/common/Panned"

const Pill = ({ text }: { text: string }) => {
    return (
        <Panned variant='vertical' yOffset={400}>
            <h1 className='text-[clamp(0.95rem,0.96vw,1.14rem)] text-color-primary'>
                <span className='bg-theme-accent px-3 py-2 rounded-full'>{text}</span>
            </h1>
        </Panned>

    )
}

export default Pill