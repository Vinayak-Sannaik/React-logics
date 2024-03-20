import { useEffect, useState } from "react";

const ProgressBarAutomatic = () => {
  const [value, setValue] = useState(0);
  const [percent, setPercent] = useState(value);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, 100);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));

    if (value >= 100) {
      setSuccess(true); // Set success to true when progress reaches 100%
    }
  }, [value]);

  return (
    <>
      <div className="progress">
        <span className="progress-percent">{percent}%</span>
        <div
          className="progress-bar"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        />
      </div>
      <span>{success ? "Completed" : "Loading..."}</span>
    </>
  );
};

export default ProgressBarAutomatic;
