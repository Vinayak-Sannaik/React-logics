import { useState } from "react";

const ProgressBar = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <p>Progress Bar</p>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        min={0}
        max={100}
        placeholder="0 - 100"
      />
      <div className="progress">
        <span className="progress-percent">{number}%</span>
        <div style={{ width: `${number}%` }} />
      </div>
    </>
  );
};
export default ProgressBar;
