import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

export function scrollToSectionByID(sectionId: string): Promise<boolean> {
    const section = document.getElementById(sectionId);
    if (!section) return Promise.resolve(false);

    return new Promise((resolve) => {
        gsap.to(window, {
            duration: 0.75,
            scrollTo: { y: section, offsetY: 0 },
            ease: "expo.out",
            onComplete: () => resolve(true)
        })
    })
}