import React, { FC, useCallback, useLayoutEffect, useState } from "react";
import { ICheckboxProps } from "./interface";
import clsx from "clsx";

const CheckMarkIcon = () => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_93_32117)">
        <path
          d="M2 5L4.25 7.5L8.5 1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_93_32117"
          x="0.75"
          y="0.249908"
          width="9"
          height="9.00009"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.5" />
          <feGaussianBlur stdDeviation="0.25" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_32117" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_93_32117"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Checkbox: FC<ICheckboxProps> = ({ onChange, value, disabled, label, ...restProps }) => {
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
    <label
      className={clsx("cursor-pointer inline-flex items-center", {
        "cursor-not-allowed": disabled
      })}>
      <input
        type="checkbox"
        checked={innerValue}
        onChange={handleChange}
        className="hidden"
        disabled={disabled}
        {...restProps}
      />
      <span
        className={clsx(
          "w-4 h-4 border border-black/10 rounded shadow-inner transition-colors relative",
          {
            "bg-gradient-to-b from-linear-blue-from to-linear-blue-to": innerValue && !disabled,
            "bg-system-gray02-light": disabled
          }
        )}>
        {innerValue && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CheckMarkIcon />
          </span>
        )}
      </span>
      {label && <span className="text-sm ml-1">{label}</span>}
    </label>
  );
};

export default React.memo(Checkbox);
