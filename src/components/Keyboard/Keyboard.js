import Key from "./Key/Key";
import * as S from "./styles";

const Keyboard = () => {
  return (
    <S.Keyboard>
      {"qwertyuiopasdfghjklzxcvbnm".split("").map((char) => (
        <Key key={char} value={char}>
          {char}
        </Key>
      ))}
    </S.Keyboard>
  );
};

export default Keyboard;
