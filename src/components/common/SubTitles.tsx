import { cn } from '@/lib/utils'
import React from 'react'

type SubTitleProps = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

const SubTitles = ({ children, ...props }: SubTitleProps) => {
    return (
        <h2 className={cn(`text-[clamp(2.19rem,4.56vw,2.91rem)] min-[992px]:text-[clamp(6.25rem,6.61vw,8.31rem)] max-w-[clamp(66.875rem,70.77vw,88.94rem)] leading-[1] m-0 w-full font-medium`, props.className)}>
            {children}
        </h2>
    )
}

export default SubTitles