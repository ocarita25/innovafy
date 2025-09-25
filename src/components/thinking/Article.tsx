import React from 'react'



const Article = () => {
    return (
        <article className='grid grid-flow-col grid-rows-[auto_auto] md:grid-flow-row md:grid-cols-[1fr_2fr]'>
            <div className='h-full overflow-hidden rounded-2xl'>
                <img src="/images/thinking/thinking-1.webp" style={{ height: "110%", width: "100%", objectFit: "cover" }} />
            </div>
            <div className='flex flex-col shrink ps-20 py-10 justify-between'>
                <div className='flex flex-col gap-1 md:gap-5'>
                    <h2 className='break-words whitespace-normal text-[2.5rem] md:text-5xl'>How deep do we dive?</h2>
                    <div className='text-[0.95rem] md:text-md leading-none flex flex-col-reverse md:flex-row gap-2 items-start md:items-center text-neutral-500'>
                        <span>User Experience, Design</span>
                        <span className='hidden md:block'>*</span>
                        <span>6 min red</span>
                    </div>
                </div>
                <div className='flex flex-wrap py-10 text-md xl:text-xl text-neutral-500 break-words whitespace-normal'>
                    <span className='flex flex-wrap text-wrap'>
                        Lean user research uses ligthweight and targeted strategies to gain lots of insight for relatively less cost. Early, nimble reasearch helps catch critical 'unknown unknowns' and incorrect assumptsion before they can jeopardise the project budget.
                    </span>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='relative rounded-full h-12 w-12 overflow-hidden'>
                        <img src='/images/staff/persona2.webp' className='relative top-0 h-24 object-cover' />
                    </div>
                    <span>Nial Holder</span>
                    <span className='px-10'>10 september 2025</span>
                </div>
            </div>
        </article>
    )
}

export default Article