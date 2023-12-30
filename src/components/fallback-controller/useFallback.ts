import { useEffect, useState } from "react";

export const useFallback = () => {
  
  const [ready, setReady] = useState(false);
  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 1000)).then((_) =>
      setReady(true),
    );}
  )
  return ready
}