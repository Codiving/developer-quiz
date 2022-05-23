import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, time: number) => {
  const intervalRef = useRef<() => void>(() => {});

  useEffect(() => {
    intervalRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (time) {
      const interval = setInterval(() => intervalRef.current(), time);
      return () => clearInterval(interval);
    }
  }, [time]);
};

export default useInterval;
