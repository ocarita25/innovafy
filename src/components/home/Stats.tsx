import React from 'react'

type StatsProps = {
    valor: string,
    descripcion: string,
}

const Stats = ({ valor, descripcion }: StatsProps) => {
    return (
        <div className="grid grid-cols-[50%_1fr] not-last:border-b-1 items-center">
            <span className="font-black text-4xl lg:text-[clamp(3rem,5vw,6rem)]">{valor}</span>
            <span className="text-3xl">{descripcion}</span>
        </div>
    )
}

export default Stats