"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type TimerProps = {
  createdAt: string;
  min: number;
  className: string;
};

const Timer = ({ createdAt, min = 0, className }: TimerProps) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const startTime = new Date(createdAt).getTime();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
      const remainingTimeInSeconds = min * 60 - elapsedTimeInSeconds;
      setMinutes(Math.floor(remainingTimeInSeconds / 60));
      setSeconds(remainingTimeInSeconds % 60);

      if (remainingTimeInSeconds <= 0) {
        clearInterval(interval);
        router.push("/");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds, min, startTime, router]);

  return (
    <span className={className}>{`${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`}</span>
  );
};

export default Timer;
