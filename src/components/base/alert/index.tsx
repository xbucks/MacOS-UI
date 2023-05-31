import React from "react";
import { createRoot } from "react-dom/client";
import OriginAlert from "./Alert";
import { IAlertApi, IAlertProps } from "./interface";
import { createPortal } from "react-dom";

type AlertType = typeof OriginAlert & IAlertApi;
const Alert = OriginAlert as AlertType;

Alert.open = (configs?: IAlertProps) => {
  const alertFragment = document.createDocumentFragment();
  const root = createRoot(alertFragment);

  const handleClose = () => {
    configs?.onClose?.();
    root.unmount();
  };

  root.render(createPortal(<OriginAlert {...configs} onClose={handleClose} />, document.body));
};

export default Alert;
