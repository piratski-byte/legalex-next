"use client";

import { ReactNode, useEffect, useState } from "react";
import { ResizeContext } from "./ResizeContext";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResizeContext.Provider value={{ windowWidth }}>
      {children}
    </ResizeContext.Provider>
  );
};

export default AppProvider;
