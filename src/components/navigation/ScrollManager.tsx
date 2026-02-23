import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        //Se limpian los scrolltriggers activos
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        //Reiniciamos el scroll a top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })

        //Refrescamos el ScrollTrigger
        ScrollTrigger.refresh();

    }, [pathname])

    return null
}
