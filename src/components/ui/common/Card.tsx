import { ReactNode } from 'react'

type CardProps = {
    title: string | null;
    children: ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
    return (
        <div className='relative rounded-4xl overflow-hidden w-full'>
            <h2 className='absolute bottom-0 left-0 text-white text-2xl px-10 py-5 font-black '>
                {title}
            </h2>
            <div className='w-fill'>{children}</div>
        </div>
    )
}