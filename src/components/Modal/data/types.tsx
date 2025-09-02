import { ReactNode } from "react";

interface IModal {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: CallableFunction;
  onClose: () => void;
  isSize?: boolean;
}

export type { IModal };
