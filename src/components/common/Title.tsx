import { cn } from '@/lib/utils'
import React from 'react'

type TitleProps = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

const Title = ({ children, ...props }: TitleProps) => {
    return (
        <h1 className={cn('tracking-normal font-medium text-[clamp(3.125rem,6.51vw,4.16rem)] min-[992px]:text-[clamp(8.125rem,8.59vw,10.81rem)] text-[var(--color-theme-secondary)]', props.className)}>
            {children}
        </h1>
    )
}

export default Title