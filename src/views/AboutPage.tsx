import { HeaderFace } from "@/assets"
import AboutHero from "@/components/about/AboutHero"
import AboutTeam from "@/components/about/AboutTeam"
import AutoSlider from "@/components/about/Autoslider"
import Headings from "@/components/common/Headings"
import PannedText from "@/components/common/PannedText"
import Scrollable from "@/components/common/Scrollable"
import ThemeTrigger from "@/components/common/ThemeTrigger"
import TiltCard from "@/components/common/TiltCard"
import Main from "@/components/layouts/Main"
import { capabalities, clientsImages, whatWeDo, whatWeDont } from "@/constants/about"

function AboutPage() {

    const { images, clientes } = clientsImages()
    const bgOriginal = "#D8E7EE"
    const bgColor = "#3799EA"

    return (
        <Main className="-mt-20 pt-0 grid">
            <AboutHero />

            <div className="subtitle p-fluid leading-[1] pb-30 z-20 text-[var(--color-theme-secondary)]">
                <Headings as="h2" variant="section">
                    <PannedText aria-label="Human experiences are the foundation of everything we do - client relationships, team collaboration and an unwavering focus on the end user. This philosophy is in our name, our core values and underpins our approach to every engagement.">
                        Las experiencias humanas son la base de todo lo que hacemos: las relaciones con los clientes, la colaboración en equipo y un enfoque inquebrantable en el usuario final. Esta filosofía está en nuestro nombre, en nuestros valores fundamentales y sustenta nuestro enfoque en cada compromiso.
                    </PannedText>
                </Headings>
            </div>

            <div className="overflow-hidden h-[clamp(30rem,35dvw,40rem] min-[1024px]:h-[clamp(20rem,80vh,50rem)] grid items-center">
                <AutoSlider images={images} />
            </div>

            <div className="flex flex-col text-theme-secondary max-w-[calc(clamp(87.5rem,92.6vw,116.375rem))] p-fluid mt-40 mx-auto w-full gap-[clamp(5rem,5.3vw,6.65rem)]">
                <Headings as="h2" variant="subtitle">
                    <PannedText>
                        Desde 2010 hemos trabajado con clientes increíbles para crear un impacto significativo y experiencias memorables.
                    </PannedText>
                </Headings>

                <div className="grid grid-cols-3 min-[992px]:grid-cols-5 gap-1 min-[992px]:gap-2 mb-20">
                    {clientes.map(ci => (
                        <TiltCard key={ci.id}>
                            <img src={ci.src} className="w-3/4 aspect-square rounded-none object-contain" />
                        </TiltCard>
                    ))}
                </div>
            </div>

            <div className="grid text-theme-secondary w-full max-w-[calc(clamp(87.5rem,92.6vw,116.375rem))] mx-auto p-fluid mt-[clamp(9.375rem,19.53125vw,12.46875rem)] lg:mt-[clamp(12.5rem,13.22vw,16.625rem)] gap-[clamp(7.9375rem,8.4vw,10.56rem)]">
                <PannedText className="max-w-[clamp(71.25rem,75.397vw,94.76rem)] text-[clamp(1.875rem,3.90vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)] xl:text-[clamp(3.75rem,3.97vw,4.99rem)] leading-[1] overflow-hidden">
                    Nuestras capacidades se centran en nuestra habilidad para desarrollar sitios web y aplicaciones de clase mundial. Trabajamos 100 % internamente y de principio a fin, asegurando que cada proyecto se entregue con el más alto estándar de calidad.
                </PannedText>

                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[992px]:grid-cols-3 justify-between gap-[3.125rem] sm:gap-[5rem_2.5rem] lg:gap-[clamp(5.94rem,6.28vw,7.89rem)_clamp(5rem,5.29vw,6.65rem)]">
                    {capabalities.map((c, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-3xl lg:text-4xl pb-10">{c.title}</span>
                            <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                                {c.capabilities.map((capabalitie, j) => (
                                    <li key={j}>{capabalitie}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <ThemeTrigger
                startDesktop="top 40%"
                endDesktop="bottom top"
                bgColor={bgColor}
                bgOriginal={bgOriginal}
                className={"about-humans"}
            >
                <div className="about-humans-testimonials p-fluid text-[clamp(1.875rem,3.91vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)]">
                    <div className="about-humans-testimonials-slider">
                        <figure className="about-humans-testimonial">
                            <blockquote className="about-humans-testimonial-quote">
                                <span>"It was one of the most extraordinary experiences we have had in 24 years of business. Why? Because you challenged us and helped us articulate something very special."</span>
                            </blockquote>
                            <figcaption className="items-center content-center justify-self-start grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-[0_clamp(1.125rem,1.19vw,1.49rem)]">
                                <div className="row-[1/-1] col-[1] block leading-0 h-14 place-content-center max-w-full"><HeaderFace /></div>
                                <span className="flex items-center leading-[1] font-medium text-[clamp(1rem,1.058vw,1.33rem)]">
                                    <div>Prof. Dan Haagman</div>
                                </span>
                                <span className="flex items-center leading-[1] font-medium text-[clamp(1rem,1.058vw,1.33rem)]">
                                    <div>Chaleit</div>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="about-humans-team aspect-[5/4]">
                    <h2 className="about-humans-team-heading">
                        <div className="absolute whitespace-nowrap z-[1] top-[23%] left-[49.61%] -translate-x-1/2">
                            <Scrollable yOriginal={0} yTarget={-25} start="top+=200 bottom" end="bottom 50%">
                                Somos
                            </Scrollable>
                        </div>
                        <div className="absolute whitespace-nowrap z-[3] top-[34%] left-[47.95%] -translate-x-1/2">
                            <Scrollable yOriginal={0} yTarget={-25} start="top-=50 bottom" end="bottom 40%">
                                Humanos
                            </Scrollable>
                        </div>
                    </h2>
                    <div className="about-humans-team-wrapper">
                        <picture className="team-image-main">
                            <img src='/images/about/we_are_humans.webp' alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                        </picture>
                        <picture className="team-image-back">
                            <img src='/images/about/we_are_humans.webp' alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                        </picture>
                        <picture className="team-image-front">
                            <img src='/images/about/we_are_humans.webp' alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                        </picture>
                    </div>
                </div>

                <Headings as="h2" variant="section" className="p-fluid text-white">
                    <PannedText className="leading-[1.2]" aria-label="We're a team of makers, thinkers, explorers and theatre singers. We approach work and play with curiosity and experimentation, using what we learn to create meaningful digital products that connect with people, just like you.">
                        Somos un equipo de creadores, pensadores, exploradores y cantantes de teatro. Abordamos el trabajo y el juego con curiosidad y espíritu de experimentación, utilizando lo que aprendemos para crear productos digitales significativos que conectan con las personas, igual que contigo.
                    </PannedText>
                </Headings>
            </ThemeTrigger>

            <AboutTeam />

            <Scrollable yOriginal={10} yTarget={-5} start="top bottom" end="top 60%">
                <div className="grid max-w-[clamp(87.5rem,92.60vw,116.38rem)] w-full p-fluid gap-[clamp(1.875rem,199vw,2.5rem)]">
                    <Headings as="h2" variant="section">
                        <PannedText>
                            Aunque nuestro enfoque está en el éxito de nuestros clientes, nos enorgullece que nuestro trabajo sea <span className="text-purple-800">reconocido</span> continuamente por los mejores de los mejores.
                        </PannedText>
                    </Headings>

                    <div className="grid grid-cols-3 lg:grid-cols-[repeat(5,minmax(auto,1fr))] gap-3">
                        {clientes.map(ci => (
                            <TiltCard key={ci.id}>
                                <img src={ci.src} className="w-3/4 aspect-square rounded-none object-contain" />
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </Scrollable>


            <div className="text-primary grid max-w-[calc(clamp(87.5rem,92.59vw,116.375rem)+var(--container-gutter)*2)] p-fluid w-full gap-[clamp(5.625rem,5.95vw,7.48rem)] m-[clamp(6.25rem,6.6137566138vw,8.3125rem)_auto_clamp(9.375rem,9.9206349206vw,12.46875rem)]">
                <Headings as="h2" variant="section" className="max-w-[clamp(71.25rem,75.40vw,94.76rem)]">
                    <PannedText>
                        Por encima de todo, creemos en las relaciones humanas, en los resultados excepcionales y en disfrutar del camino.
                    </PannedText>
                </Headings>
                <div className="grid min-[992px]:grid-cols-2 max-w-[clamp(71.25rem,75.4vw,94.77rem)] gap-[clamp(5rem,5.291005291vw,6.65rem)]">
                    <section className="grid gap-[clamp(2.125rem,2.25vw,2.83rem)] content-start">
                        <h3 className="m-0 text-[clamp(1.5rem,1.58vw,1.99rem)]">Lo que hacemos</h3>
                        <ul className="grid grid-cols-2 justify-between max-[480px]:gap-[clamp(1.15rem,2.65vw,3.33rem)] gap-[0.6em] m-0 p-0 opacity-70 list-none text-[clamp(1.125rem,1.19vw,1.5rem)]">
                            {whatWeDo.map((text, i) =>
                                <li key={i}>{text}</li>
                            )}
                        </ul>
                    </section>
                    <section className="grid gap-[clamp(2.125rem,2.25vw,2.83rem)] content-start">
                        <h3 className="line-through m-0 text-[clamp(1.5rem,1.58vw,1.99rem)]">Lo que no hacemos</h3>
                        <ul className="grid grid-cols-2 justify-between max-[480px]:gap-[clamp(1.15rem,2.65vw,3.33rem)] gap-[0.6em] m-0 p-0 opacity-70 list-none text-[clamp(1.125rem,1.19vw,1.5rem)]">
                            {whatWeDont.map((text, i) =>
                                <li key={i}>{text}</li>
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </Main >
    )
}

export default AboutPage
