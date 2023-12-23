"use client";
import {
  MouseEventHandler,
  PropsWithChildren,
  RefObject,
  useRef,
  useState,
} from "react";
import { JigglerContext } from "./JigglerContext";

type TJigglerContextProviderProps = PropsWithChildren;

export const JigglerContextProvider = ({
  children,
}: TJigglerContextProviderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateStyle, setRotateStyle] = useState<string>("");

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current == null) return;
    const rotateY = (e.clientX / window.innerWidth - 0.5) * 20;
    const rotateX = (0.5 - e.clientY / window.innerHeight) * 20;
    setRotateStyle(
      (_) => `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
    );
  };

  const handleMouseOut: MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current == null) return;
    setRotateStyle((_) => "perspective(800px) rotateY(0deg) rotateX(0deg)");
  };

  return (
    <JigglerContext.Provider value={{ rotateStyle }}>
      <div ref={ref} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
        {children}
      </div>
    </JigglerContext.Provider>
  );
};
