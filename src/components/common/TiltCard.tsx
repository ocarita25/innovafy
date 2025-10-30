"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type TiltCardProps = {
  img: string
}

const TiltCard = ({ img }: TiltCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Usamos el contenedor como referencia
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Intensidad del efecto
      const rotationY = (deltaX / rect.width) * 30;
      const rotationX = -(deltaY / rect.height) * 30;

      gsap.set(card, {
        rotateX: rotationX,
        rotateY: rotationY,
        transformPerspective: 600,
        transformOrigin: "center",
        duration: 0,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
        duration: 0.4,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // <div ref={containerRef} className="relative flex w-full h-full items-center justify-center">
    <div ref={containerRef}>
      <div ref={cardRef} style={{ transformStyle: "preserve-3d", transformOrigin: "center" }}>
        <div className="flex items-center justify-center bg-[#ffffff4d] aspect-square overflow-hidden rounded-4xl">
          <img src={img} className="w-3/4 aspect-square rounded-none object-contain" />
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
