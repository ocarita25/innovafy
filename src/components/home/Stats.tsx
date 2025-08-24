import React from 'react'
import Counter from '../common/Counter'

type StatsProps = {
    to: number,
    suffix: string,
    descripcion: string,
}

const Stats = ({ to, suffix, descripcion }: StatsProps) => {
    return (
        <div className="w-full grid grid-cols-[50%_1fr] border-b-1 items-center first:pb-10 not-first:py-10">
            <Counter to={to} suffix={suffix} />
            <span className="text-3xl">{descripcion}</span>
        </div>
    )
}

export default Stats