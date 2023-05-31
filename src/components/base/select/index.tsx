import React, { Children, ReactElement, cloneElement } from "react";
import { IOptionProps, ISelectProps } from "./interface";
import Option from "./Option";
import clsx from "clsx";

function Select({ children, className, isBlock, ...restProps }: ISelectProps) {
  return (
    <select
      className={clsx("text-sm py-1 px-2 outline-none rounded-md border", className, {
        "w-full": isBlock
      })}
      {...restProps}>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child as ReactElement<IOptionProps>);
        }
      })}
    </select>
  );
}

Select.Option = Option;

export default Select;
