import React, { useState, useEffect } from "react";
import "./SaleCount.css";

const SaleCountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const endTime = new Date("2026-07-29T00:00:00Z");
    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  return (
    <div className="sale-banner-container">
      <div className="sale-banner">
        <h2 className="sale-heading">🎉 Thinkmart Mega Sale Ends In</h2>
        <div className="countdown">
          <div className="time">
            <span>{timeRemaining.days}</span>
            <small>Days</small>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span>{timeRemaining.hours}</span>
            <small>Hrs</small>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span>{timeRemaining.minutes}</span>
            <small>Min</small>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span>{timeRemaining.seconds}</span>
            <small>Sec</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleCountdownTimer;
