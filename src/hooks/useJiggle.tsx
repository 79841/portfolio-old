"use client";

import { useEffect, useRef, useState } from "react";

export const useJiggle = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateStyle, setRotateStyle] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef == null || cardRef.current == null) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      cardRef.current.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return [cardRef, rotateStyle] as const;
};
