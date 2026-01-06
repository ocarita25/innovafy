// import type { Article } from "@/types";
// import { Link } from "react-router-dom"; 

// type NextUpProps = {
//     article: Article;
//     articles: Article[];
// };

// export default function NextUp({ article, articles }: NextUpProps) {
export default function NextUp() {
    return (
        <></>
    )
    // // Encontrar el índice del artículo actual
    // const currentIndex = articles.findIndex((a) => a.id === article.id);

    // // Obtener el siguiente artículo (si existe)
    // const nextArticle =
    //     currentIndex !== -1 && currentIndex < articles.length - 1
    //         ? articles[currentIndex + 1]
    //         : null;

    // // Si no hay siguiente artículo no mostrar nada
    // if (!nextArticle) return null;

    // return (
    //     <div className="w-full mx-auto md:w-11/12 lg:w-2/3 max-w-4xl mt-16 pb-10">
    //         <h2 className="text-3xl md:text-4xl font-bold text-[#32453f] mb-8">
    //             A continuación
    //         </h2>

    //         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl p-4 md:p-6">
    //             <div className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
    //                 <img
    //                     className="w-full h-auto object-cover rounded-2xl"
    //                     src={nextArticle.image || "https://via.placeholder.com/400x300?text=No+Image"}
    //                     alt={nextArticle.title}
    //                 />
    //             </div>

    //             <div className="w-full md:w-2/3">
    //                 <h3 className="text-2xl sm:text-3xl font-bold text-[#32453f] mb-2">
    //                     {nextArticle.title}
    //                 </h3>

    //                 <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
    //                     <span>{nextArticle.categories?.join(", ") || "Uncategorized"}</span>
    //                     <span className="text-[#8B5CF6]">✦</span>
    //                     <span>{nextArticle.readTime} min read</span>
    //                 </div>

    //                 <p className="text-sm sm:text-base text-gray-700 mb-6">
    //                     {nextArticle.description}
    //                 </p>

    //                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-200 gap-4 sm:gap-0">

    //                     <Link
    //                         to={`/post/${nextArticle.id}`}
    //                         className="flex items-center bg-[#212e1a] md:hover:bg-[#91e889] px-4 py-2 rounded-full text-[#fefefe] md:hover:text-[#212e1a] font-medium transition"
    //                     >
    //                         Read Article
    //                         <svg
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             fill="none"
    //                             viewBox="0 0 24 24"
    //                             strokeWidth="2"
    //                             stroke="currentColor"
    //                             className="w-4 h-4 ml-2"
    //                         >
    //                             <path
    //                                 strokeLinecap="round"
    //                                 strokeLinejoin="round"
    //                                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    //                             />
    //                         </svg>
    //                     </Link>

    //                     <div className="flex items-center">
    //                         <img
    //                             className="rounded-full w-8 h-8 object-cover mr-2"
    //                             src={nextArticle.authorAvatar || "https://i.pravatar.cc/40?img=12"}
    //                             alt={nextArticle.author}
    //                         />
    //                         <span className="text-sm font-medium text-gray-800">
    //                             {nextArticle.author} • {nextArticle.date}
    //                         </span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}
