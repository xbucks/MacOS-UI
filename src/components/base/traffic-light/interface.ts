export type Type = "base" | "close";

export interface ITrafficLightProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: Type;
}
