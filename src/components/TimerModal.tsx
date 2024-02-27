"use client";
import { useEffect, useState } from "react";
import { TTimer } from "@/types/timer";

const TimerModal = ({ time, onFinish, className }: TTimer) => {
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
        onFinish();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds, onFinish]);

  return (
    <span className={className}>{`${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`}</span>
  );
};

export default TimerModal;
