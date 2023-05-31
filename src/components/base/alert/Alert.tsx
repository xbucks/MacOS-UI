import React, { FC, useCallback, useState } from "react";
import { IAlertProps } from "./interface";
import Spinner from "../spinner";
import Button from "../button";

const Alert: FC<IAlertProps> = ({
  onClose,
  onConfirm,
  cancelText = "Cancel",
  okText = "OK",
  title,
  content
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConfirm = useCallback(async () => {
    setIsLoading(true);
    await onConfirm?.();
    setIsLoading(false);
    onClose?.();
  }, []);

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-4 shadow-md rounded-lg text-center bg-white/30 backdrop-blur-xl z-10">
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xs my-3">{content}</div>
        <div className="flex items-center justify-between gap-2">
          <Button type="cancel" onClick={onClose} isBlock>
            {cancelText}
          </Button>
          {onConfirm && (
            <Button type="primary" onClick={handleConfirm} isBlock>
              {isLoading ? <Spinner /> : okText}
            </Button>
          )}
        </div>
      </div>
      <div className="fixed top-0 left-0 w-screen h-screen bg-white/30 backdrop-blur-sm z-0" />
    </>
  );
};

export default Alert;
