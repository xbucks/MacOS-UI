import React from "react";
import { createRoot } from "react-dom/client";
import { IModalApi, IModalProps } from "./interface";
import OriginModal from "./Modal";
import { createPortal } from "react-dom";

type ModalType = typeof OriginModal & IModalApi;
const Modal = OriginModal as ModalType;

Modal.open = (configs: IModalProps) => {
  const modalFragment = document.createDocumentFragment();
  const root = createRoot(modalFragment);

  const handleClose = () => {
    configs.onClose?.();
    root.unmount();
  };

  root.render(createPortal(<OriginModal {...configs} onClose={handleClose} />, document.body));
};

export default Modal;
