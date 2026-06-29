export type WorkModalArticlesProps = {
    id: number,
    slug: string,
    title: string,
    link: string,
    intro: string,
    paragraphs: string[],
    features: {
        icon: string,
        label: string,
    }[],
    awards: {
        name: string,
        description: string,
        year: string,
    }[],
    body: any[],
    next: {
        video: string,
        title: string,
        link: string
    },
}