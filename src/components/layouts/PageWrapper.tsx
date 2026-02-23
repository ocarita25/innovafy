// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import React, { useEffect, useRef } from 'react'
// import { useLocation } from 'react-router-dom'

// type PageWrapper = {
//     children: React.ReactNode
// }

// const locationThemes = [
//     { id: 1, pathname: "/", themeStarter: "var(--theme-tertiary)", themeEnd: "#fff" },
//     { id: 2, pathname: "/acerca-de", themeStarter: "#D8E7EE", themeEnd: "#fff" },
//     { id: 3, pathname: "/trabajo", themeStarter: "var(--theme-tertiary)", themeEnd: "#fff" },
//     { id: 5, pathname: "/thinking", themeStarter: "var(--theme-tertiary)", themeEnd: "#fff" },
//     { id: 6, pathname: "/contacto", themeStarter: "#D1CDD8", themeEnd: "#B8AFC6" },
// ]

// const PageWrapper = ({ children }: PageWrapper) => {

//     gsap.registerPlugin(ScrollTrigger)
//     const containerRef = useRef<HTMLDivElement>(null);

//     const location = useLocation();
//     const locationTheme = locationThemes.find(lt => lt.pathname === location.pathname)

//     console.log("Ubicacion:", location);
//     console.log("Tema:", locationTheme);


//     useEffect(() => {
//         if (!containerRef.current || !locationTheme) return

//         containerRef.current.style.setProperty("--theme-background", `${locationTheme.themeStarter}`)
//         console.log("Fondo cambiado para la pagina: ", location.pathname)
//     }, [location.pathname])

//     return (
//         <div ref={containerRef} className='grid z-1 items-start w-full bg-theme-background !rounded-0'>
//             {children}
//         </div>
//     )
// }

// export default PageWrapper