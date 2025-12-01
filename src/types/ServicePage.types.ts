export type ServicePageType = {
    slug: string;
    heading: {
        pill: string;
        title: string;
        heroImage: string;
        mediaType: "image" | "video";
    };
    description: {
        title: string;
        subtitle: string;
        capabilities: {
            icon: string;
            title: string;
            text: string;
        }[];
        valuePropositions: {
            media: string;
            mediaType: "image" | "video";
            title: string;
            text: string;
        }[];
    };
    briefSubmit: string,
    nextService: string;
}