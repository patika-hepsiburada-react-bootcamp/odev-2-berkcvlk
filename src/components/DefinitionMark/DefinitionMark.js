import { useState, useEffect } from "react";

import { Loader } from "components";
import * as S from "./styles";

// Component will be refactored, later.. I hope..
const DefinitionMark = ({ word, ...rest }) => {
  const [definition, setDefinition] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        const [data] = await res.json();
        console.log(data);
        const [meaning] = data.meanings;
        const [definition] = meaning.definitions;
        const phonetic = data.phonetic;

        setDefinition(definition.definition);
        setPhonetic(phonetic);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [word]);

  const handleToggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const renderer = () => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <S.Title>Definition</S.Title>
        <S.Definition>{definition}</S.Definition>
        <S.Phonetic>{phonetic}</S.Phonetic>
      </>
    );
  };

  return (
    <S.DefinitionMark onClick={handleToggleMenu} {...rest}>
      {isActive && <S.DefinitionMenu>{renderer()}</S.DefinitionMenu>}
    </S.DefinitionMark>
  );
};

export default DefinitionMark;
