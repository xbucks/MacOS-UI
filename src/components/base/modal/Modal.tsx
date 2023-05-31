import React, { FC, useMemo } from "react";
import { IModalProps } from "./interface";
import clsx from "clsx";
import TrafficLight from "../traffic-light";

const Modal: FC<IModalProps> = ({ size = "md", onClose, title, children }) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "sm":
        return "max-w-sm";
        break;
      case "md":
        return "max-w-md";
        break;
      case "lg":
        return "max-w-lg";
        break;
      case "xl":
        return "max-w-xl";
        break;
    }
  }, [size]);

  return (
    <>
      <div
        className={clsx(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-xl rounded-lg w-full overflow-hidden shadow-md z-10",
          sizeStyle
        )}>
        <div className="h-7 w-full bg-system-gray05-light relative flex items-center justify-end px-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
            {title}
          </div>
          <TrafficLight />
          <TrafficLight className="mx-2" />
          <TrafficLight type="close" onClick={onClose} />
        </div>
        <div className="p-2">{children}</div>
      </div>
      <div className="fixed top-0 left-0 w-screen h-screen bg-white/30 backdrop-blur-sm z-0" />
    </>
  );
};

export default Modal;
