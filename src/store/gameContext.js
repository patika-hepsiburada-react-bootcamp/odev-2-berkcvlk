import { createContext, useState, useEffect } from "react";
import { GAME_STATUS, MAX_ATTEMPT_COUNT } from "constants/game";
import { revealString } from "utils";

// CONTAINS
// status => "WIN", "LOSE", "START"
// attempts
// attemptedChars
// word
export const GameContext = createContext(null);

const Provider = ({ children }) => {
  const [status, setStatus] = useState(GAME_STATUS.START);
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [clickedKeys, setClickedKeys] = useState([]);

  useEffect(() => {
    if (status === GAME_STATUS.START) {
      fetchRandomWord();
    }
  }, [status]);

  useEffect(() => {
    if (attempts === MAX_ATTEMPT_COUNT) {
      setStatus(GAME_STATUS.LOSE);
    }

    if (word && revealString(word, clickedKeys).indexOf("_") === -1) {
      setStatus(GAME_STATUS.WIN);
    }
  }, [attempts, clickedKeys, word]);

  const reset = () => {
    setAttempts(0);
    setClickedKeys([]);
    setStatus(GAME_STATUS.START);
  };

  const onFailedAttempt = () => {
    setAttempts((prev) => prev + 1);
  };

  const onKeyClick = (key) => {
    // If pressed key does not help to reveal
    // the word, make the attempt fail
    if (word.indexOf(key) === -1) {
      onFailedAttempt();
    }

    setClickedKeys((prev) => [...prev, key]);
  };

  const fetchRandomWord = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(process.env.REACT_APP_RANDOM_WORD_API);
      const [randomWord] = await res.json();

      setWord(randomWord);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GameContext.Provider
      value={{
        status,
        word,
        isLoading,
        attempts,
        clickedKeys,
        onKeyClick,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default Provider;
