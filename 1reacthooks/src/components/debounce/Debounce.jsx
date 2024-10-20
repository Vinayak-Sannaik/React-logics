import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useThrottle from "../../hooks/useThrottle";

const Debounce = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);
  const throttledText = useThrottle(text, 5000);

  useEffect(() => {
    if (debouncedText) {
      //call API with debounced text
    }
  }, [debouncedText]);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search..."
      />
      <h2>Normal Text : {text}</h2>
      <h2>Debounced Text : {debouncedText}</h2>
      <h2>Throttle Text : {throttledText}</h2>
    </>
  );
};

export default Debounce;
