"use client";

import { useEffect, useState } from "react";

export const useResize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0); // Начальное значение — 0

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowWidth;
};
