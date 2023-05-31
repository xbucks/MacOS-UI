import { ReactNode } from "react";

export type Size = "sm" | "md" | "lg" | "xl";

export interface IModalProps {
  size?: Size;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
}

export interface IModalApi {
  open: (configs: IModalProps) => void;
}
