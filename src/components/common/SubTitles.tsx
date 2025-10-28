import { cn } from '@/lib/utils'
import React from 'react'

type SubTitleProps = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

const SubTitles = ({ children, ...props }: SubTitleProps) => {
    return (
        <h2 className={cn(`text-[clamp(1.875rem,3.90vw,2.49rem)] lg:text-[clamp(6.25rem,6.6137566138vw,8.3125rem)] max-w-[clamp(66.875rem,70.77vw,88.94rem)] leading-[1] w-full font-medium`, props.className)}>
            {children}
        </h2>
    )
}

export default SubTitles