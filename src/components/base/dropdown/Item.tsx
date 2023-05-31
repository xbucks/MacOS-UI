import React, { FC, useCallback, useContext } from "react";
import { IItemProps } from "./interface";
import { DropdownContext } from ".";

export const ITEM_NAME = "Item";

const Item: FC<IItemProps> = ({ children, onClick, isStillOpenAfterClick }) => {
  const { setIsShowMenu } = useContext(DropdownContext);

  const handleClick = useCallback(() => {
    onClick?.();
    if (isStillOpenAfterClick) return;
    setIsShowMenu?.(false);
  }, []);

  return (
    <div
      onClick={handleClick}
      className="hover:bg-system-blue-light hover:text-white rounded-md px-2 py-1 mb-1 last:mb-0 cursor-pointer">
      {children}
    </div>
  );
};

export default Item;
