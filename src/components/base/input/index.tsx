import React, { FC, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import CloseIcon from "../../../assets/icons/close";
import { IInputProps } from "./interface";
import clsx from "clsx";

const Input: FC<IInputProps> = ({ clearable, icon, className, value, onChange, ...restProps }) => {
  const [innerValue, setInnerValue] = useState<typeof value>(value || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const isShowClear = useMemo(() => !!innerValue, [innerValue]);

  useLayoutEffect(() => {
    if (value !== undefined) {
      setInnerValue(value);
    }
  }, [value]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setInnerValue(e.target.value);
    }
    onChange?.(e);
  }, []);

  const handleClear = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (value === undefined) {
      setInnerValue("");
    }

    if (!inputRef.current) return;

    inputRef.current.value = "";
    inputRef.current.focus();
    const currentTarget = inputRef.current.cloneNode(true);
    const event = Object.create(e, {
      target: { value: currentTarget },
      currentTarget: { value: currentTarget }
    });

    onChange?.(event as React.ChangeEvent<HTMLInputElement>);
  }, []);

  return (
    <div className={className}>
      <label htmlFor="" className="block text-sm">
        Lable
      </label>
      <div className="relative">
        {icon && <div className="absolute top-1/2 left-2 -translate-y-1/2">{icon}</div>}
        <input
          ref={inputRef}
          value={innerValue}
          onChange={handleChange}
          className={clsx("border outline-none rounded-md py-1 px-2 text-sm w-full", {
            "pl-6": icon,
            "pr-7": clearable
          })}
          {...restProps}
        />
        {clearable && isShowClear && (
          <button
            onClick={handleClear}
            className="w-4 h-4 rounded-full bg-system-gray05-light flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2">
            <CloseIcon className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(Input);
