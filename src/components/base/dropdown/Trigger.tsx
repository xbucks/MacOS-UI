import React, { FC } from "react";
import { ITriggerProps } from "./interface";

export const TRIGGER_NAME = "Trigger";

const Trigger: FC<ITriggerProps> = ({ children }) => {
  return <>{children}</>;
};

export default Trigger;
