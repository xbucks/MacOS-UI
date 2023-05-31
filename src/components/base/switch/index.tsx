import clsx from "clsx";
import React, { FC, useCallback, useLayoutEffect, useState } from "react";
import { ISwitchProps } from "./interface";

const Switch: FC<ISwitchProps> = ({ onChange, value, ...restProps }) => {
  const [innerValue, setInnerValue] = useState<boolean>(value || false);

  useLayoutEffect(() => {
    if (value !== undefined) {
      setInnerValue(value);
    }
  }, [value]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setInnerValue(e.target.checked);
    }
    onChange?.(e.target.checked);
  }, []);

  return (
    <label className="cursor-pointer inline-block">
      <input
        checked={innerValue}
        type="checkbox"
        onChange={handleChange}
        className="hidden"
        {...restProps}
      />
      <span
        className={clsx(
          "inline-block h-4 w-7 rounded-full border-white/30 shadow-inner relative transition-all duration-300",
          { "bg-system-blue-light": innerValue, "bg-system-gray05-light": !innerValue }
        )}>
        <span
          className={clsx(
            "inline-block w-full absolute top-1/2 -translate-y-1/2 transition-all duration-300 z-0",
            {
              "translate-x-full": innerValue
            }
          )}>
          <div
            className={clsx(
              "w-4 h-4 rounded-full border bg-white shadow-sm transition-all duration-300",
              {
                "-translate-x-full": innerValue
              }
            )}
          />
        </span>
      </span>
    </label>
  );
};

export default React.memo(Switch);
