import React, { FC, useMemo } from "react";
import { ITrafficLightProps } from "./interface";
import CloseIcon from "../../../assets/icons/close";
import clsx from "clsx";

const TrafficLight: FC<ITrafficLightProps> = ({ type = "base", className, ...restProps }) => {
  const typeStyle = useMemo(() => {
    switch (type) {
      case "base":
        return " bg-gray-300";
        break;
      case "close":
        return "bg-system-red-light";
        break;
    }
  }, [type]);

  return (
    <button
      className={clsx(
        "w-3 h-3 rounded-full flex items-center justify-center group",
        typeStyle,
        className
      )}
      {...restProps}>
      {type === "close" && <CloseIcon className="w-2 h-2 hidden group-hover:block" />}
    </button>
  );
};

export default TrafficLight;
