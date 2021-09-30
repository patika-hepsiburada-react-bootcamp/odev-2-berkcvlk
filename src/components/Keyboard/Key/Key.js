import { useState, useContext } from "react";
import { GameContext } from "store/gameContext";

import * as S from "./styles";

const Key = ({ value, ...rest }) => {
  const { onKeyClick } = useContext(GameContext);
  const [disable, setDisable] = useState(false);

  const handleClick = () => {
    onKeyClick(value);
    setDisable(true);
  };

  return <S.Key disabled={disable} onClick={handleClick} {...rest} />;
};

export default Key;
