"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ResizeContextType {
  windowWidth: number;
}

const ResizeContext = createContext<ResizeContextType>({ windowWidth: 0 });

const ResizeProvider = ({ children }: { children: ReactNode }) => {
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

const useResizeContext = () => useContext(ResizeContext);

export { ResizeProvider, useResizeContext };
