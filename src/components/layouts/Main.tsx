import { cn } from '@/lib/utils'
import React from 'react'

type MainProps = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const Main = ({ children, ...props }: MainProps) => {
    return (
        <main className={cn("m-0 h-full w-full max-w-dvw min-h-dvh", props.className)}>
            {children}
        </main>
    )
}

export default Main