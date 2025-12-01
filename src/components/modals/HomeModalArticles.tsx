import { workArticles } from '@/data/workArticles'

type HomeModalArticlesProps = {
    id: number,
    slug: string,
    title: string,
    link: string,
    intro: string,
    paragraphs: string[],
    features: string[],
    awards: any[],
    body: string[],
    images: any[],
    next: {
        video: string,
        title: string,
        link: string
    },
}

const HomeModalArticles = ({ article }: { article: HomeModalArticlesProps }) => {

    console.log(article)

    return (
        <article className='flex flex-col gap-10'>
            <div className='grid grid-cols-[1fr_2fr] gap-10'>
                <aside className='relative self-start  h-full'>
                    <div className='sticky top-[-40%] '>
                        {/* <div className='sticky -top-[calc(100dvh-5rem)]'> */}
                        <header>
                            <h1 className='text-[clamp(2.5rem,2.65vw,3.325rem)]'>{article.title}</h1>
                            <div className='pt-10'>
                                <button>Visit Website</button>
                                <span>Building & Construction</span>
                            </div>
                            <h2 className='text-[clamp(1.25rem,1.33vw,1.66rem)] leading-8'>PIQUE is a leading manufacturer of prefabricated, premium modular homes, designed for people living in challenging and remote locations.</h2>
                        </header>
                        <div>
                            <div className='flex flex-col gap-10 leading-6'>
                                {workArticles[0].paragraphs.map((pa, i) => (
                                    <p key={i}>{pa}</p>
                                ))}
                            </div>
                            <div className='my-10 flex flex-col gap-3'>
                                {workArticles[0].features.map((fe, i) => (
                                    <div key={i} className='flex gap-3'>
                                        <img src={fe.icon} className='h-6 w-6 aspect-square' />
                                        <span>{fe.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col'>
                                <span className='mb-5'>Awards</span>
                                {workArticles[0].awards.map((aw, i) => (
                                    <div key={i} className='grid grid-cols-[1fr_2fr_auto] gap-5 py-4 border-t-1 last:border-b-1'>
                                        <div><span>{aw.name}</span></div>
                                        <div><span>{aw.description}</span></div>
                                        <div><span>{aw.year}</span></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
                <div className='h-full grid grid-cols-2 gap-6'>
                    {workArticles[0].images.map((img, i) => {
                        return (
                            <picture key={i} className='aspect-[23/29] nth-[3n-2]:col-span-2 nth-[3n-2]:aspect-[47/29]'>
                                <img src={img.src} alt={img.alt} className='h-full w-full rounded-4xl' />
                            </picture>
                        )
                    })}
                </div>
            </div>
            <div className='mt-15'>
                <div className='text-4xl font-medium mb-5'>
                    <span>SIGUIENTE</span>
                </div>
                <div className='w-full'>
                    <a href='#'>
                        <video autoPlay loop muted className='rounded-4xl object-cover w-full'>
                            <source src={workArticles[0].next.video} type='video/mp4' />
                            Tu navegador no soporta el video
                        </video>
                    </a>
                </div>
            </div>
        </article >

    )
}

export default HomeModalArticles