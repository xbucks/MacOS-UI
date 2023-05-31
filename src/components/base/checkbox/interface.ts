import { ReactNode } from "react";

export interface ICheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  onChange?: (value: boolean) => void;
  value?: boolean;
  label?: ReactNode;
}
