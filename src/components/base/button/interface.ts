import { ReactNode } from "react";

export type ButtonType = "primary" | "warning" | "danger" | "default" | "cancel";

export interface IButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type"> {
  onClick?: () => void;
  children?: ReactNode;
  type?: ButtonType;
  isBlock?: boolean;
}
