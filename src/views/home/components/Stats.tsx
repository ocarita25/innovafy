import { stats } from '@/views/home/data/stats'
import Counter from './Counter'
import Panned from '@/components/common/Panned'

const Stats = () => {
    return (
        <div className="w-full flex flex-col justify-center lg:justify-end items-center row-start-3 mt-[clamp(3.125rem,3.31vw,4.16rem)]">
            {stats.map((stat, i) => (
                <div key={i} className="w-full grid grid-cols-[50%_1fr] border-b-1 items-center first:pb-10 not-first:py-5">
                    <Panned variant='horizontal'>
                        <Counter to={stat.to} suffix={stat.suffix} />
                    </Panned>
                    <Panned variant='vertical'>
                        <span className="text-xl lg:text-[clamp(1.375rem,2.5dvw,1.875rem)]">{stat.description}</span>
                    </Panned>
                </div>
            ))}
        </div>
    )
}

export default Stats