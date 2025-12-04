import type { ThinkingCardType } from "@/types/ThinkingArticle.types";
import Headings from "./Headings";
import Arrow from "@/assets/Arrow";
import { cn } from "@/lib/utils";

const ArticleCard = ({ title, categories, readTime, description, author, authorAvatar, date, image, isCard, onClick, ...props }: ThinkingCardType) => {

    return (
        <div className={cn("max-md:gap-7 grid grid-cols-1 w-full min-[768px]:items-center", props.className)} onClick={onClick}>
            <div className="rounded-4xl bg-purple-700 overflow-hidden h-full">
                <img src={image} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-7 min-md:ml-[clamp(1.25rem,8.75vw,4.5rem)]">
                <header>
                    <Headings as="h2" variant="" className="m-0 mb-3 text-[2rem]">{title}</Headings>
                    <div className="flex max-md:flex-col-reverse gap-2 text-sm">
                        <h3>{categories.join(", ")}</h3>
                        <span className="text-[#8B5CF6] max-md:hidden">✦</span>
                        <span>{`Lectura de ${readTime} minutos`}</span>
                    </div>
                </header>
                <div>
                    <span className="leading-[1.75]">{description}</span>
                </div>
                <div className="flex flex-row min-[768px]:flex-col-reverse min-[1150px]:flex-row min-md:gap-7 justify-between">
                    {isCard && <div className="button bg-black text-white">
                        <span>Leer artículo</span>
                        <Arrow width="w-4" />
                    </div>}
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <img src={authorAvatar} alt="Autor" className="w-8 h-8 rounded-full" />
                        <span>{author}</span>
                        <span className="ml-6">{date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ArticleCard;
