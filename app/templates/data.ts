export type Template = {
    slug: string;
    title: string;
    desc: string;
    img: string;
    poster: string;
    video?: string;
    badge?: string;
};

export const templates: Template[] = [
    {
        slug: "template-1",
        title: "Template 1",
        desc: "30s viral 9:16 template for Reels / TikTok / Shorts.",
        img: "/templates/template-1.png",
        poster: "/templates/template-1.png",
        badge: "TRENDING",
        video: "/templates/t1.mp4",
    },
];

export type Review = {
    name: string;
    text: string;
    stars?: number;
};

export const reviews: Review[] = [
    { name: "Aylin", text: "So easy. The result looked viral in minutes.", stars: 5 },
    { name: "Emre", text: "Template quality is insane. Worth it.", stars: 5 },
    { name: "Sena", text: "Perfect for Reels. Upload → pay → download.", stars: 5 },
    { name: "Kerem", text: "Super clean website and fast export.", stars: 5 },
];
