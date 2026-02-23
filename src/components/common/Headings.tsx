import { cn } from '@/lib/utils';
import React from 'react'

type HeadingProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4';
    variant?: 'title' | 'subtitle' | 'section' | 'eyebrow' | "";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Headings = ({ as: Tag = "h1", variant = "title", children, ...props }: HeadingProps) => {

    const className = cn({
        title: "text-[clamp(2.5rem,6.51vw,4.16rem)] min-[992px]:text-[clamp(6.35rem,8.61vw,10.15rem)]",
        subtitle: "text-[clamp(2.19rem,4.56vw,2.91rem)] min-[992px]:text-[clamp(5.75rem,6.61vw,8.31rem)]",
        section: "text-[clamp(1.875rem,3.97vw,2.49rem)] min-[992px]:text-[clamp(2.5rem,5.21vw,3.325rem)] min-[1400px]:text-[clamp(3.75rem,3.97vw,4.98rem)]",
        eyebrow: "text-[1.875rem] min-[992px]:text-[clamp(2.5rem,2.65vw,3.325rem)]",
        "": "",
    }[variant],
        "tracking-normal font-medium mb-0 min-[992px]:mb-[1em]",
        props.className)

    return (
        <Tag className={className}>
            {children}
        </Tag>
    )
}

export default Headings