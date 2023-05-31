import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import Notice from "./Notice";
import { INotificationsRef, INoticeProps } from "./interface";

// eslint-disable-next-line react/display-name
const Notifications = forwardRef<INotificationsRef>((props, ref) => {
  const [configs, setConfigs] = useState<INoticeProps[]>([]);

  const closeNotice = useCallback((key: React.Key) => {
    const config = configs.find((item) => item.key === key);
    config?.onClose?.();
    setConfigs((list) => list.filter((item) => item.key !== key));
  }, []);

  useImperativeHandle(ref, () => {
    return {
      open: (config) => {
        setConfigs((list) => {
          const clone = [...list];
          // replace if exist
          const index = clone.findIndex((item) => item.key === config.key);
          const innerConfig = { ...config };
          if (index >= 0) {
            clone[index] = innerConfig;
          } else {
            clone.push(innerConfig);
          }
          return clone;
        });
      },
      close: (key) => {
        closeNotice(key);
      },
      destroy: () => {
        setConfigs([]);
      }
    };
  });

  return (
    <>
      <div className="fixed top-4 right-4 flex flex-col gap-3">
        {configs.map((config) => {
          const { key, ...restConfig } = config;
          return <Notice key={key} {...restConfig} onClose={() => closeNotice(key)} />;
        })}
      </div>
    </>
  );
});

Notifications.displayName = "Notifications";
export default Notifications;
