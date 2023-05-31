import React from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import OriginNotifications from "./Notifications";
import { INotificationsRef, INoticeProps, Task } from "./interface";

type NotificationsType = typeof OriginNotifications & INotificationsRef;
const Notifications = OriginNotifications as NotificationsType;

let taskQueue: Task[] = [];

let notifications: INotificationsRef | null = null;

const flushNotice = () => {
  if (!notifications) {
    const notificationsFragment = document.createDocumentFragment();
    const root = createRoot(notificationsFragment);
    root.render(
      createPortal(
        <OriginNotifications
          ref={(instance) => {
            if (!notifications && instance) {
              notifications = instance;
              flushNotice();
            }
          }}
        />,
        document.body
      )
    );

    return;
  }

  // execute taskQueue
  taskQueue.forEach((task) => {
    switch (task.type) {
      case "open":
        notifications?.open(task.config);
        break;
      case "close":
        notifications?.close(task.key);
        break;
    }
  });

  // clean taskQueue
  taskQueue = [];
};

Notifications.open = (config: INoticeProps) => {
  taskQueue.push({
    type: "open",
    config
  });

  flushNotice();
};

Notifications.close = (key: React.Key) => {
  taskQueue.push({
    type: "close",
    key
  });

  flushNotice();
};

Notifications.destroy = () => {
  taskQueue.push({
    type: "destroy"
  });

  flushNotice();
};

export default Notifications;
