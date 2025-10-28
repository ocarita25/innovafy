export type ExpandingCardProps = {
    original: gsap.TweenVars
    target: gsap.TweenVars
    sTrigger: ScrollTrigger.Vars
    cardClass?: string
}
// export type ExpandingCardProps = {
//     cardClass?: string
//     start?: string,
//     end?: string,
//     initialScaleX: number,
//     initialScaleY: number,
//     finalScaleX: number,
//     finalScaleY: number,
//     resizeInitial?: boolean,
//     markers?: boolean,
//     gsapProps?: gsap.TweenVars
// }