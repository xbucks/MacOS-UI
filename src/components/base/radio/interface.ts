import { ReactNode } from "react";

export interface IRadioProps<T>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value: T;
  groupValue?: T;
  onChange?: (value: T) => void;
  children?: ReactNode;
}

export interface IRadioGroupProps<T> {
  value?: T;
  onChange?: (value: T) => void;
  children?: ReactNode;
  className?: string;
}
