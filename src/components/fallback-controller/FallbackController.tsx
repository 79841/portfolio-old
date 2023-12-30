"use client";

import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { useFallback } from "./useFallback";
type TFallbackControllerProps = {
  fallback: ReactNode;
} & PropsWithChildren;
export const FallbackController = ({
  fallback,
  children,
}: TFallbackControllerProps) => {
  const ready = useFallback();
  return <>{ready ? children : fallback}</>;
};
