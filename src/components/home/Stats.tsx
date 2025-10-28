import React from 'react'
import Counter from '../common/Counter'
import VerticalPanned from '../common/VerticalPanned'
import { stats } from '@/constants/home'

const Stats = () => {
    return (
        <div className="w-full flex flex-col justify-center lg:justify-end items-center row-start-3">
            {stats.map((stat, i) => (
                <div key={i} className="w-full grid grid-cols-[50%_1fr] border-b-1 items-center first:pb-10 not-first:py-5">
                    <VerticalPanned from={{ x: -140, opacity: -3, ease: "expo.out", duration: 1 }}>
                        <Counter to={stat.to} suffix={stat.suffix} />
                    </VerticalPanned>
                    <VerticalPanned from={{ y: 100, opacity: 0, ease: "expo.out", duration: 2 }} className="overflow-hidden">
                        <span className="text-xl lg:text-[clamp(1.375rem,2.5dvw,1.875rem)]">{stat.description}</span>
                    </VerticalPanned>
                </div>
            ))}
        </div>
    )
}

export default Stats