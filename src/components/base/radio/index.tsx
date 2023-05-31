import clsx from "clsx";
import React, {
  Children,
  ReactElement,
  cloneElement,
  useCallback,
  useLayoutEffect,
  useState
} from "react";
import { IRadioGroupProps, IRadioProps } from "./interface";

function Radio<T>({ value, groupValue, onChange, children, ...restProps }: IRadioProps<T>) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsChecked(value === groupValue);
  }, [value, groupValue]);

  return (
    <label className="inline">
      <input
        type="radio"
        className="hidden"
        checked={isChecked}
        onChange={() => onChange?.(value)}
        {...restProps}
      />
      <span className="flex items-center">
        <span
          className={clsx(
            "w-4 h-4 rounded-full border border-black/10 shadow-inner flex items-center justify-center",
            {
              "bg-gradient-to-b from-linear-blue-from to-linear-blue-to": isChecked
            }
          )}>
          {isChecked && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
        </span>
        <span className="text-sm ml-1">{children}</span>
      </span>
    </label>
  );
}

function RadioGroup<T>({ value, onChange, className, children }: IRadioGroupProps<T>) {
  const [innerValue, setInnerValue] = useState<T>();

  useLayoutEffect(() => {
    if (value !== undefined) {
      setInnerValue(value);
    }
  }, [value]);

  const handleChange = useCallback((newValue: T) => {
    if (value === undefined) {
      setInnerValue(newValue);
    }

    onChange?.(newValue);
  }, []);

  return (
    <div className={className}>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child as ReactElement<IRadioProps<T>>, {
            groupValue: innerValue,
            onChange: handleChange
          });
        }
      })}
    </div>
  );
}

RadioGroup.Radio = Radio;

export default RadioGroup;
