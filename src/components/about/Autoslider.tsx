import type { MediaTypes } from '@/types/MediaTypes.types'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(Draggable, InertiaPlugin)

type AutoSliderProps = {
    images: MediaTypes[],
    speed?: number // velocidad del auto-scroll
}

const AutoSlider = ({ images, speed = 30 }: AutoSliderProps) => {

    const wrapperRef = useRef<HTMLDivElement>(null)
    const draggableRef = useRef<Draggable | null>(null)
    const autoScrollTween = useRef<gsap.core.Tween | null>(null)

    // const slides = React.Children.toArray(children)
    const repeatedSlides = [...images, ...images]

    useLayoutEffect(() => {
        if (!wrapperRef.current) return;
        const container = wrapperRef.current;

        const totalWidth = container.scrollWidth / 2;
        const wrapX = gsap.utils.wrap(-totalWidth, 0);

        draggableRef.current?.kill()
        autoScrollTween.current?.kill()

        const startAutoScroll = () => {
            autoScrollTween.current?.kill()

            autoScrollTween.current = gsap.to(container, {
                x: `-=${totalWidth}`,
                duration: speed,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: (x) => wrapX(parseFloat(x)) + "px"
                }
            })
        }

        draggableRef.current = Draggable.create(container, {
            type: "x",
            inertia: true,
            allowContextMenu: false,
            onDrag: function () {
                autoScrollTween.current?.kill() // stop autoplay during manual drag
                gsap.set(container, { x: wrapX(this.x) })
            },
            onThrowUpdate: function () {
                gsap.set(container, { x: wrapX(this.x) })
            },
            onRelease() {
                // When user releases, wait for throw to end or not, then restart autoplay
                if (!this.isThrowing) {
                    startAutoScroll()
                }
            },
            onThrowComplete() {
                startAutoScroll()
            }
        })[0]

        // Inicio del autoplay, la primera vez
        startAutoScroll()

        return () => {
            draggableRef.current?.kill()
            autoScrollTween.current?.kill()
        }
    }, [speed])

    return (
        <div>
            <div ref={wrapperRef} className='flex gap-2 min-[992px]:gap-10 touch-pan-y items-center'>
                {repeatedSlides.map((child, i) => (
                    <picture key={i} className='shrink-0 rounded-sm min-[992px]:rounded-3xl overflow-hidden w-[30dvw]'>
                        <img id={child.id.toString()} src={child.src} alt={child.name} className='object-contain w-full max-h-[80dvh]' />
                    </picture>
                ))}
            </div>
        </div>

    )
}

export default AutoSlider
