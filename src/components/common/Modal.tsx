
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TitleUp from "./TitleUp";
import type { Article } from "@/types";
import { FastAverageColor } from "fast-average-color";
import NextUp from "./NextUp";
import { articles } from "@/data/Articles";

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}


type ModalProps = {
  handleCloseModal: () => void;
  article: Article;
  articles: Article[];
};


const springConfig = {
  stiffness: 200,
  damping: 25,
  mass: 0.5,
};

const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 768;

export const Modal = ({ handleCloseModal, article }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);


  const [titleAnimState, setTitleAnimState] = useState("hidden");
  const [dominantColor, setDominantColor] = useState<string>("#f7f7f7");

  useEffect(() => {
    const imageUrl = article.image?.trim();

    if (!imageUrl) {
      const hue = Math.abs(hashCode(article.title)) % 360;
      setDominantColor(`hsl(${hue}, 60%, 92%)`);
      return;
    }

    const fac = new FastAverageColor();
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = () => {
      try {

        const color = fac.getColor(img, {
          algorithm: "dominant", // ← clave: color más frecuente, no promedio
          step: 2,              // buen equilibrio entre precisión y rendimiento
        });
        setDominantColor(color.hex);
      } catch (err) {
        console.warn("Error al extraer color dominante:", imageUrl, err);
        const hue = Math.abs(hashCode(article.title)) % 360;
        setDominantColor(`hsl(${hue}, 60%, 92%)`);
      }
    };

    img.onerror = () => {
      console.warn("No se pudo cargar la imagen para extraer color:", imageUrl);
      const hue = Math.abs(hashCode(article.title)) % 360;
      setDominantColor(`hsl(${hue}, 60%, 92%)`);
    };

    return () => {
      fac.destroy();
    };
  }, [article.image, article.title]);

  // Bloquear scroll del body
  useEffect(() => {

    const timer = setTimeout(() => {
      setTitleAnimState("visible");
    }, 450);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  // scroll para animaciones
  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current) {
        scrollY.set(modalRef.current.scrollTop);
      }
    };

    const modal = modalRef.current;
    if (modal) {
      modal.addEventListener("scroll", handleScroll);
      return () => modal.removeEventListener("scroll", handleScroll);
    }
  }, [scrollY]);

  // Valores iniciales
  const initialHeight = isLargeScreen ? "70vh" : "60vh";
  const initialWidth = isLargeScreen ? "95%" : "90%";

  // Transformaciones basadas en scroll
  const targetHeight = useTransform(scrollY, [0, 100], [initialHeight, "100vh"], { clamp: true });
  const targetWidth = useTransform(scrollY, [0, 100], [initialWidth, "100vw"], { clamp: true });
  const targetLeft = useTransform(scrollY, [0, 100], ["50%", "0%"], { clamp: true });
  const targetBorderRadius = useTransform(scrollY, [0, 100], [24, 0]);
  const targetTranslateX = useTransform(scrollY, [0, 100], ["-50%", "0%"], { clamp: true });

  // Fondo: del color dominante al blanco al hacer scroll
  const backgroundColor = useTransform(scrollY, [0, 800], [dominantColor, "#f3f3e9"]);

  const height = useSpring(targetHeight, springConfig);
  const width = useSpring(targetWidth, springConfig);
  const left = useSpring(targetLeft, springConfig);
  const borderRadius = useSpring(targetBorderRadius, springConfig);
  const translateX = useSpring(targetTranslateX, springConfig);


  return (
    <motion.div
      className="fixed bottom-0 z-50 overflow-hidden shadow-lg py-6"
      style={{
        height,
        width,
        left,
        translateX,
        backgroundColor,
        borderRadius: useTransform(borderRadius, (v) => `${v}px ${v}px 0 0`),
      }}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        ref={modalRef}
        className="h-full overflow-y-auto"
        style={{ maxHeight: "100vh" }}
      >

        <div className="flex justify-end mb-4 px-5 md:px-10">
          <button
            onClick={handleCloseModal}
            className="w-8 h-8 flex items-center justify-center bg-[#939389] text-white rounded-full hover:bg-white hover:text-[#939389] transition fixed top-6 right-6 md:right-10 cursor-pointer z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>



        <div className="px-5 md:px-10">
          <div className="flex flex-col md:flex-row py-7 mb-10 md:mb-20">
            <div className="w-full md:w-1/2 mx-auto flex-shrink-0 mb-8 md:mb-0">
              <img
                className="rounded-3xl w-full max-w-sm md:max-w-none mx-auto h-auto object-cover"
                src={article.image?.trim() || ""}
                alt={article.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23999'%3ENo image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>


            <div className="w-full md:w-1/2 flex flex-col md:pl-10">
              <div className="w-full">

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-800 leading-tight mb-3">
                  <TitleUp title={article.title} animateState={titleAnimState} />
                </h1>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 md:mb-14">
                  <span>{article.categories?.join(", ") || "Uncategorized"}</span>
                  <span className="text-[#8B5CF6]">✦</span>

                  <span>{article.readTime} min read</span>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  {article.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-300">
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src={article.authorAvatar || "https://i.pravatar.cc/40?img=1"}
                    alt={article.author || "Author"}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://i.pravatar.cc/40?img=1";
                    }}
                  />
                  <div>
                    <span className="block text-sm font-medium text-gray-800">
                      {article.author || "Unknown author"}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {article.date || "Unknown date"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
                [&_h2]:text-4xl [&_h2]:my-6 [&_h2]:font-bold 
                [&_h3]:text-2xl [&_h3]:my-4 [&_h3]:font-medium
                [&_p]:text-lg [&_p]:py-3 
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:py-1 
                [&_a]:text-emerald-700 [&_a]:hover:underline
                max-w-3xl mx-auto px-4 md:px-8 pb-12
            "
            dangerouslySetInnerHTML={{ __html: article.content || "" }}
          />

          {/* Sección "Up Next" */}
          <NextUp article={article} articles={articles} />
        </div>
      </div>
    </motion.div>
  );
};