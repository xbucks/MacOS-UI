import { ReactNode } from "react";

export interface IDropdownProps {
  children?: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface ITriggerProps {
  children?: ReactNode;
}

export interface IMenuProps {
  children?: ReactNode;
}

export interface IGroupProps {
  children?: ReactNode;
}

export interface IItemProps {
  children?: ReactNode;
  onClick?: () => void;
  isStillOpenAfterClick?: boolean;
}

export interface IDropdownContext {
  setIsShowMenu?: (value: boolean) => void;
}
