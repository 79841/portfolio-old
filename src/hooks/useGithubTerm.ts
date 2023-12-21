"use client";
import { useEffect, useRef, useState } from "react";

export const useGithubTerm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [term, setTerm] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      if (ref.current === null) {
        return;
      }
      const boxWidth = ref.current.offsetWidth;
      const interval = Math.floor(boxWidth / 65) - 1;
      if (term != interval) setTerm(interval);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [term]);

  return [term, ref] as const;
};
