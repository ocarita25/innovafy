"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  img?: string,
  intensity?: number
  children: React.ReactNode,
} & React.HTMLAttributes<HTMLDivElement>

const TiltCard = ({ img, intensity = 1, children, ...props }: TiltCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const mm = gsap.matchMedia();

    const handleMouseMove = (e: MouseEvent) => {


      // Usamos el contenedor como referencia
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Intensidad del efecto
      const rotationY = (deltaX / rect.width) * 15 * intensity;
      const rotationX = -(deltaY / rect.height) * 15 * intensity;

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

    mm.add("(min-width: 1200px)", () => {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    })
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={cardRef} className="h-full" style={{ transformStyle: "preserve-3d", transformOrigin: "center" }}>
        <div className={cn("grid items-center justify-center bg-[#ffffffcc] aspect-square rounded-2xl", props.className)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
