import React, { FC } from "react";
import { IOptionProps } from "./interface";

const Option: FC<IOptionProps> = ({ children, ...restProps }) => {
  return <option {...restProps}>{children}</option>;
};

export default Option;
