export type MediaTypes = {
    id: number,
    name: string,
    src: string,
    mediaType: "image" | "video",
    childSrc: string,
    childType: "image" | "video" | "",
    categories: string[] | null,
    pages: string[] | null,
}