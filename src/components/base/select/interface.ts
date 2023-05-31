import { ReactNode } from "react";

export interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  isBlock?: boolean;
}

export interface IOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children?: ReactNode;
}
