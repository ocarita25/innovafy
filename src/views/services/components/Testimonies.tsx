

const Testimonies = () => {
    return (
        {/* <section className="grid gap-20 p-fluid">
                {testimonies.map((t, i) => {
                    const style = { top: `${(20 + 10 * i) * 0.25}rem` }
                    const triggerStyle = { marginTop: `${100 * i}vh`, marginBottom: `${(30 - 10 * i) * 0.25}rem`, }
                    const prevLast = i === testimonies.length - 2
                    const last = i === testimonies.length - 1

                    return (
                        <StackCards key={i} prevLast={prevLast} last={last} style={style} triggerStyle={triggerStyle} className={`${t.cardColor} mb-30`}>
                            <div className={`w-full h-full grid max-[991px]:grid-flow-row max-[991px]:grid-rows-[auto_1fr] min-[992px]:grid-cols-[min(70vh,50%)_1fr] max-[991px]:gap-7 ${t.textColor ?? 'text-primary'} `}>
                                <div className='max-[991px]:w-full max-h-full rounded-4xl overflow-hidden min-[992px]:aspect-[23/21]'>
                                    <img src={t.image} className='max-[991px]:max-h-[33vh] object-cover aspect-[21/23] w-full' />
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <blockquote className='flex flex-col justify-between min-[992px]:ml-17'>
                                        <q className='text-[clamp(1.3rem,4.2vw,1.7rem)] min-[768px]:text-[clamp(1.88rem,3.9vw,2.5rem)] min-[1200px]:text-[clamp(2.25rem,3vw,3rem)]'>{t.quote}</q>
                                    </blockquote>
                                    <div className='flex flex-col gap-2 min-[992px]:ml-17'>
                                        <span className='text-[1.15rem]'>{t.author}</span>
                                        <span>{t.organization}</span>
                                    </div>
                                </div>
                            </div>
                        </StackCards>
                    )
                })}
            </section> */}
    )
}

export default Testimonies