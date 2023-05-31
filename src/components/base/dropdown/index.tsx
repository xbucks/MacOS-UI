import React, {
  cloneElement,
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { IDropdownContext, IDropdownProps } from "./interface";
import Trigger, { TRIGGER_NAME } from "./Trigger";
import Item from "./Item";
import Group from "./Group";
import Menu, { MENU_NAME } from "./Menu";
import useClickOnOutside from "../../../hooks/useOnClickOutside";

export const DropdownContext = createContext<IDropdownContext>({});
function Dropdown({ children, onClose, onOpen }: IDropdownProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [menuPosTop, setMenuPosTop] = useState<number>(0);
  const [menuPosLeft, setMenuPosLeft] = useState<number>(0);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  let trigger = <></>;
  let menu = <></>;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && typeof child.type !== "string") {
      const childName = child.type.name;
      if (childName === TRIGGER_NAME) {
        trigger = child;
      }
      if (childName === MENU_NAME) {
        menu = child;
      }
    }

    return null;
  });

  useLayoutEffect(() => {
    if (!triggerRef.current) return;
    const bounding = triggerRef.current.getBoundingClientRect();
    const { bottom, left } = bounding;
    setMenuPosTop(bottom);
    setMenuPosLeft(left);
  }, []);

  const open = useCallback(() => {
    onOpen?.();
    setIsShowMenu(true);
  }, []);

  const close = useCallback(() => {
    console.log("hello world");
    onClose?.();
    setIsShowMenu(false);
  }, []);

  const triggerElement = useMemo(() => cloneElement(trigger), [trigger]);
  const menuElement = useMemo(
    () =>
      cloneElement(menu, {
        onClose: close
      }),
    [menu]
  );

  useClickOnOutside(menuRef, close);

  return (
    <DropdownContext.Provider value={{ setIsShowMenu }}>
      <div className="">
        <span className="inline-block" ref={triggerRef} onClick={open}>
          {triggerElement}
        </span>
        {isShowMenu && (
          <div
            ref={menuRef}
            className="fixed z-50 mt-0.5"
            style={{
              top: menuPosTop,
              left: menuPosLeft
            }}>
            {menuElement}
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Item = Item;
Dropdown.Group = Group;
Dropdown.Menu = Menu;

export default Dropdown;
