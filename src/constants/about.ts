import { media } from "./images"

export const whatWeDo = [
    "World-class digital",
    "Expect creativity",
    "Celebrate success",
    "Obsess over detail",
    "Pub lunch Fridays",
    "Embrace change",
    "Unlock potential",
    "High-five",
    "Outstanding service",
    "Value relationships",
    "Exceed expectations",
    "Party"
]

export const whatWeDont = [
    "Work weekends",
    "Outsource",
    "Resist cake",
    "Lose at Mario Kart",
    "‘Make it pop’",
    "Free pitches",
    "Sacrifice quality for profit",
    "Egos",
    "Overpromise",
    "Cut corners",
    "Accept mediocrity",
    "Decaf"
]

export const clientsImages = () => {
    const images = media.filter(m => m.pages?.includes("acerca"))
    const clientes = images.filter(i => i.categories?.includes("clients"))
    return { images, clientes }
}