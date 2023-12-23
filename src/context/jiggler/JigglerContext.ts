"use client";
import { MouseEventHandler, RefObject, createContext, useContext } from "react";

export type TJigglerContext = {
  // containerRef: RefObject<HTMLDivElement>;
  // handleMouseMove: MouseEventHandler<HTMLDivElement>;
  // handleMouseOut: MouseEventHandler<HTMLDivElement>;
  rotateStyle: string;
} | null;
// type TJigglerDispatchContext = {
//   setContainer: () => void;
// };

export const JigglerContext = createContext<TJigglerContext>(null);
// export const JigglerDispatchContext =
//   createContext<TJigglerDispatchContext | null>(null);

export const useJigglerContext = () => useContext(JigglerContext);
// export const useJigglerDispatchContext = () =>
//   useContext(JigglerDispatchContext);
