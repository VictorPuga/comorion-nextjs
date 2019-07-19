import { useRef, useEffect } from "react";
export default function useEventListener(
  eventName: string,
  handler: (e: any) => any,
  element: {
    addEventListener: Function;
    removeEventListener: Function;
  } = window
): void {
  const savedHandler = useRef<(e: any) => any>();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    if (!savedHandler.current) return;
    const eventListener = (e: any) => savedHandler.current!(e);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
