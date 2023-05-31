import React from "react";

export type NotificationType = "success" | "error" | "warning" | "info";

export interface INoticeProps {
  onClose?: () => void;
  key: React.Key;
  title: string;
  content: string;
  type?: NotificationType;
  duration?: number;
  autoClose?: boolean;
}

export interface IOpenTask {
  type: "open";
  config: INoticeProps;
}

export interface ICloseTask {
  type: "close";
  key: React.Key;
}

export interface IDestroyTask {
  type: "destroy";
}

export type Task = IOpenTask | ICloseTask | IDestroyTask;

export interface INotificationsRef {
  open: (config: INoticeProps) => void;
  close: (taskKey: React.Key) => void;
  destroy: () => void;
}
