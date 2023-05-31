import React, { FC, useMemo } from "react";
import { IButtonProps } from "./interface";
import clsx from "clsx";

const Button: FC<IButtonProps> = ({
  children,
  className,
  isBlock,
  type = "default",
  ...restProps
}) => {
  const typeStyle = useMemo(() => {
    switch (type) {
      case "primary":
        return "bg-gradient-to-b from-linear-blue-from to-linear-blue-to text-white";
        break;
      case "warning":
        return "bg-system-yellow-light text-white";
        break;
      case "danger":
        return "bg-system-red-light text-white";
        break;
      case "cancel":
        return "bg-system-gray04-light";
        break;
      default:
        return "bg-white text-gray-700 border";
        break;
    }
  }, [type]);

  return (
    <button
      className={clsx(
        "rounded-md backdrop-blur-sm px-3 py-1 shadow-sm text-sm",
        typeStyle,
        { "w-full": isBlock },
        className
      )}
      {...restProps}>
      {children}
    </button>
  );
};

export default React.memo(Button);
