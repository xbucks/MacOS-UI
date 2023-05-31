import React, { FC, memo, useCallback, useEffect, useRef } from "react";
import CloseIcon from "../../../assets/icons/close";
import { INoticeProps } from "./interface";

const DURATION_TIME = 2000;

const Notice: FC<INoticeProps> = ({
  onClose,
  title,
  content,
  autoClose = true,
  duration = DURATION_TIME,
  type = "info"
}) => {
  const start = useRef<number>(Date.now());
  const remaining = useRef<number>(duration);
  const durationTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMouseIn = useRef<boolean>(false);

  const close = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (!autoClose) return;
    start.current = Date.now();
    durationTimeout.current = setTimeout(close, duration);
    return () => {
      durationTimeout.current && clearTimeout(durationTimeout.current);
    };
  });

  const mouseMove = useCallback(() => {
    if (!isMouseIn.current) {
      durationTimeout.current && clearTimeout(durationTimeout.current);
      remaining.current = duration - (Date.now() - start.current);
      isMouseIn.current = true;
    }
  }, []);

  const mouseLeave = useCallback(() => {
    durationTimeout.current = setTimeout(close, remaining.current);
    isMouseIn.current = false;
  }, []);

  return (
    <div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className="relative group cursor-pointer">
      <div className="w-80 rounded-lg backdrop-blur-sm bg-white p-2 shadow-md">
        <div className="flex items-center justify-between">
          <div></div>
          <div className="text-xs text-system-gray02-light">20m ago</div>
        </div>
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xs">{content}</div>
      </div>
      <button
        className="w-5 h-5 rounded-full shadow-sm absolute top-0 backdrop-blur-sm bg-white -translate-x-1/2 -translate-y-1/2 items-center justify-center hidden group-hover:flex border"
        onClick={close}>
        <CloseIcon className="w-3 h-3" />
      </button>
    </div>
  );
};

export default memo(Notice);
