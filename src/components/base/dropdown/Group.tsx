import React, { FC, ReactElement, cloneElement } from "react";
import { IGroupProps, IItemProps } from "./interface";
import { ITEM_NAME } from "./Item";

const Group: FC<IGroupProps> = ({ children }) => {
  return (
    <div className="py-1">
      <div className="border-t mx-2 mb-1" />
      {children}
      <div className="border-t mx-2" />
    </div>
  );
};

export default Group;
