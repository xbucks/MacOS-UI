export interface ISwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  onChange?: (value: boolean) => void;
  value?: boolean;
}
