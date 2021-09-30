/**
 * Reveal the string according to given array
 * @param {string} str A string will be revealed
 * @param {string[]} arr An array that contains the string to reveal equal ones.
 */
const revealString = (str, arr) => {
  return str
    .split("")
    .map((char) => {
      if (arr.includes(char)) return char;
      return "_";
    })
    .join("");
};

export default revealString;
