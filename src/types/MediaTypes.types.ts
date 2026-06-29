export type MediaTypes = {
    id: number,
    slug: string,
    name: string,
    src: string,
    mediaType: "image" | "video",
    childSrc: string,
    childType: "image" | "video" | "",
    categories: string[] | null,
    pages: string[] | null,
    childRatio?: string
}