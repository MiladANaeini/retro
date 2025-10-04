import { useEffect, useState } from "react";

export const useControls = () => {
  const [controls, setControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  useEffect(() => {
    const keyMap = {
      w: "forward",
      ArrowUp: "forward",
      s: "backward",
      ArrowDown: "backward",
      a: "left",
      ArrowLeft: "left",
      d: "right",
      ArrowRight: "right",
      " ": "jump",
    };

    const handleKeyDown = (e) => {
      const action = keyMap[e.key] || keyMap[e.code];
      if (action) setControls((c) => ({ ...c, [action]: true }));
    };

    const handleKeyUp = (e) => {
      const action = keyMap[e.key] || keyMap[e.code];
      if (action) setControls((c) => ({ ...c, [action]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return controls;
};