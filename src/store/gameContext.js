import { createContext, useState, useEffect, useCallback } from "react";

import { GAME_STATUS, MAX_ATTEMPT_COUNT } from "constants/game";
import { revealString } from "utils";

/**
 * Context for game propierties and functionalities
 * @typedef GameContext
 * @property {"WIN" | "LOSE" | "START"} status Game status state
 * @property {string} word Word state to guess/reveal for the game
 * @property {number} attempts User attempts count
 * @property {string[]} clickedKeys User clicked keys to compare with the word state
 */
export const GameContext = createContext(null);

const Provider = ({ children }) => {
  const [status, setStatus] = useState("");
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [clickedKeys, setClickedKeys] = useState([]);

  // Each game reset fetch another random
  // word from api.
  useEffect(() => {
    if (status === GAME_STATUS.START) {
      fetchRandomWord();
    }
  }, [status]);

  // Whenever user interact with the keyboard listen for keys clicked
  // and check if the user won.
  const isUserWinner = useCallback(() => {
    return word && revealString(word, clickedKeys).indexOf("_") === -1;
  }, [clickedKeys, word]);

  useEffect(() => {
    if (isUserWinner()) {
      setStatus(GAME_STATUS.WIN);
    }
  }, [isUserWinner]);

  // If the user hit the max attempt count
  // set the game status to redirect to the lose page
  useEffect(() => {
    if (attempts === MAX_ATTEMPT_COUNT) {
      setStatus(GAME_STATUS.LOSE);
    }
  }, [attempts]);

  const reset = () => {
    setAttempts(0);
    setClickedKeys([]);
    setIsLoading(true);
    setStatus(GAME_STATUS.START);
  };

  const onFailedAttempt = () => {
    setAttempts((prev) => prev + 1);
  };

  const onKeyClick = (key) => {
    // To prevent add existing key to the
    // clickedkeys array and increase the
    // failed attempt count
    if (clickedKeys.indexOf(key) !== -1) {
      return;
    }

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
