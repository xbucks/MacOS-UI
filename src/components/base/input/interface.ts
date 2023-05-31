import { ReactNode } from "react";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
  icon?: ReactNode;
}
