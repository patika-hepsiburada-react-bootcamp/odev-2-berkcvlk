import { useEffect, useState } from "react";

// Hook to get which key pressed by user via keyboard.
const useKeyboard = () => {
  const [clickedKey, setClickedKey] = useState("");

  useEffect(() => {
    const handleClickedKey = (event) => {
      setClickedKey(event.key.toLowerCase());
    };

    window.addEventListener("keydown", handleClickedKey);

    return () => window.removeEventListener("keydown", handleClickedKey);
  }, []);

  return clickedKey;
};

export default useKeyboard;
