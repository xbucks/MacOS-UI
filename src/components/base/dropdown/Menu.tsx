import React, { FC, ReactElement, cloneElement } from "react";
import { IGroupProps, IItemProps, IMenuProps } from "./interface";
import { ITEM_NAME } from "./Item";

export const MENU_NAME = "Menu";

const Menu: FC<IMenuProps> = ({ children }) => {
  return (
    <ul className="bg-white/30 backdrop-blur-xl border text-sm p-1 rounded-md w-fit min-w-10 shadow-lg">
      {children}
    </ul>
  );
};

export default Menu;
