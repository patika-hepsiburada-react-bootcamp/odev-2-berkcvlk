import { useState } from "react";

import { useGame } from "hooks";
import * as S from "./styles";

const Key = ({ value, ...rest }) => {
  const { onKeyClick } = useGame();
  const [disable, setDisable] = useState(false);

  const handleClick = () => {
    onKeyClick(value);
    setDisable(true);
  };

  return <S.Key disabled={disable} onClick={handleClick} {...rest} />;
};

export default Key;
