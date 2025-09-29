"use client";

import { createContext, useContext } from "react";

interface ResizeContextType {
  windowWidth: number;
}

const ResizeContext = createContext<ResizeContextType>({ windowWidth: 0 });
const useResizeContext = () => useContext(ResizeContext);

export { ResizeContext, useResizeContext };
