import { RefObject, useEffect } from "react";
import { Handler } from "./interface";

function useClickOnOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useClickOnOutside;
