import Image from 'next/image';
import React from 'react'

type TestimonialQuoteProps = {
    quote: string,
    autor: string,
    company: string
};

const TestimonialQuote = ({ quote, autor, company }: TestimonialQuoteProps) => {
    return (
        <figure className='px-30'>
            <blockquote className='text-4xl lg:text-5xl pb-20'>{quote}</blockquote>
            <div>
                <figcaption className='flex gap-5 items-center'>
                    <div>
                        <Image src="/images/isocal.svg" alt="logo" width={100} height={50} />
                    </div>
                    <div className='flex flex-col'>
                        <span className=''>{autor}</span>
                        <span className='text-gray-400'>{company}</span>
                    </div>
                </figcaption>
                <div></div>
            </div>
        </figure >
    )
}

export default TestimonialQuote