import Image from 'next/image';
import { ReactNode } from 'react'

type CardProps = {
    title: string | null;
    children: ReactNode;
    background?: string | null;
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({ title, children, background, ...props }: CardProps) => {
    return (
        <div className={`relative rounded-4xl overflow-hidden w-full ${props.className}`}>
            {background &&
                <Image
                    src={background}
                    alt='fondo'
                    fill
                />}
            <h2 className='absolute bottom-0 left-0 text-white text-2xl px-10 py-5 font-black '>
                {title}
            </h2>
            <div className='w-full h-full flex items-center justify-center'>{children}</div>
        </div>
    )
}