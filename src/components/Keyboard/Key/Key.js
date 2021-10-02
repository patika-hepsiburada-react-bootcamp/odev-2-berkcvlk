import { useState, useEffect, memo, useCallback } from "react";

import { useGame } from "hooks";
import * as S from "./styles";

const Key = ({ value, isClicked, ...rest }) => {
  const { onKeyClick } = useGame();
  const [disable, setDisable] = useState(false);

  const handleClick = useCallback(() => {
    onKeyClick(value);
    setDisable(true);
  }, [onKeyClick, value]);

  // If the user pressed key via keyboard
  // this will occur the click handler.
  useEffect(() => {
    if (isClicked) {
      handleClick();
    }
  }, [handleClick, isClicked]);

  return <S.Key disabled={disable} onClick={handleClick} {...rest} />;
};

export default memo(Key);
