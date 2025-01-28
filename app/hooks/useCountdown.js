"use client"
import { useState, useEffect } from 'react';

const useCountdown = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const [hours, minutes, seconds] = initialTime.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = () => {
    if (timeLeft <= 0) return "ENDED";

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return formatTime();
};

export default useCountdown; 