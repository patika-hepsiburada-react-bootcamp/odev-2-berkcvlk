import * as S from "./styles";

const Page = ({ children, Illustration }) => {
  return (
    <S.Container>
      <S.Header>{children}</S.Header>
      {Illustration && <Illustration />}
    </S.Container>
  );
};

export default Page;
