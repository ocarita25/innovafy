import Arrow from '@/assets/Arrow'
import { ButtonBlack } from '@/components/common/Button'
import { workArticles } from '@/data/workArticles'
import { cn } from '@/lib/utils'

interface WorkArticleProps {
    slug: string,
    onNext: () => void;
}

const ArticleBody = ({ body }: { body: any[] }) => {
    return (
        body.map((content, i) => {
            return (
                // <Panned variant='vertical'>{
                content.type === "text" ?
                    <div key={i} className='min-[992px]:col-span-2 flex flex-col gap-10 py-15'>
                        <blockquote className='text-4xl'>
                            <p>{content.text}</p>
                        </blockquote>
                        <div><span>{content.author}</span></div>
                    </div>

                    :

                    content.type === "video" ?
                        <video key={i} autoPlay muted loop className={cn("rounded-4xl", content.style)}>
                            <source src={content.src} />
                        </video>
                        :
                        <img key={i} src={content.src} alt={content.alt} className={cn('h-full w-full rounded-4xl', content.style)} />
                // }</Panned>
            )
        }))
}

const WorkArticle: React.FC<WorkArticleProps> = ({ slug, onNext }) => {

    const article = workArticles.find(a => a.slug === slug)

    if (!article) return null

    return (
        <article className='flex flex-col gap-10'>
            <div className='grid min-[992px]:grid-cols-[max-content_1fr] gap-10'>
                <aside className=' h-full w-[clamp(28.125rem,29.76vw,37.41rem)]'>
                    <div className='relative h-full'>
                        <div className='sticky -top-40 '>
                            <header>
                                <h1 className='text-[clamp(2.5rem,2.65vw,3.325rem)]'>{article.title}</h1>
                                <div className='pt-10 flex items-center gap-3'>
                                    <ButtonBlack>
                                        Visit Website
                                        <Arrow height="h-3.5" stroke="1" color="#0f0" />
                                    </ButtonBlack>
                                    <span>Building & Construction</span>
                                </div>
                                <h2 className='text-[clamp(1.25rem,1.33vw,1.66rem)] leading-8'>{article.intro}</h2>
                            </header>
                            <div>
                                <div className='flex flex-col gap-10 leading-6'>
                                    {article.paragraphs.map((pa, i) => (
                                        <p key={i}>{pa}</p>
                                    ))}
                                </div>
                                <div className='my-10 flex flex-col gap-3'>
                                    {article.features.map((fe, i) => (
                                        <div key={i} className='flex gap-3'>
                                            <img src={fe.icon} className='h-6 w-6 aspect-square' />
                                            <span>{fe.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col'>
                                    <span className='mb-5'>Awards</span>
                                    {article.awards.map((aw, i) => (
                                        <div key={i} className='grid grid-cols-[1fr_2fr_auto] gap-5 py-4 border-t-1 last:border-b-1'>
                                            <div><span>{aw.name}</span></div>
                                            <div><span>{aw.description}</span></div>
                                            <div><span>{aw.year}</span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className='h-full grid grid-cols-1 min-[992px]:grid-cols-2 gap-6'>
                    <ArticleBody body={article.body} />
                </div>
            </div>
            <div className='mt-15'>
                <div className='text-4xl font-medium mb-5'>
                    <span>SIGUIENTE</span>
                </div>
                <div className='w-full'>
                    <div>
                        <video autoPlay loop muted className='rounded-4xl object-cover w-full'>
                            <source src={workArticles[0].next.video} type='video/mp4' />
                            Tu navegador no soporta el video
                        </video>
                    </div>
                </div>
            </div>
        </article >
    )
}

export default WorkArticle