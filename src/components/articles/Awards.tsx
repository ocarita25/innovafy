import Headings from '../common/Headings'
import { recognition } from '@/data/awards'

const AwardsArticle = () => {
    return (
        <section>
            <Headings variant='eyebrow'>Reconocimientos</Headings>

            <div className='grid max-[991px]:gap-10 text-primary'>
                {recognition.map(r => {
                    return (
                        <div>
                            <div className='min-[992px]:hidden border-b-1 py-3'>{r.year}</div>
                            {r.awards.map((a, i) => (
                                <div key={i} className='grid grid-cols-[2fr_1fr_2fr] min-[992px]:grid-cols-[clamp(5rem,7.75vw,9rem)_1fr_1fr_1fr] gap-10 py-3 border-b-1 text-sm min-[992px]:text-[1.25rem]'>
                                    <div className={`${i !== 0 ? "text-transparent" : ""} max-[992px]:hidden`}>{r.year}</div>
                                    <div>{a.project}</div>
                                    <div>{a.organization}</div>
                                    <div>{a.award}</div>
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AwardsArticle