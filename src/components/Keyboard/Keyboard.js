import { useKeyboard } from "hooks";
import Key from "./Key/Key";
import * as S from "./styles";

const Keyboard = () => {
  const clickedKey = useKeyboard();

  return (
    <S.Keyboard>
      {"qwertyuiopasdfghjklzxcvbnm".split("").map((char) => (
        <Key key={char} isClicked={clickedKey === char} value={char}>
          {char}
        </Key>
      ))}
    </S.Keyboard>
  );
};

export default Keyboard;
