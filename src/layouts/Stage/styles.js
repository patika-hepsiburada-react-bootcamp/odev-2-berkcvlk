import { styled } from "stitches";

export const Stage = styled("div", {
  widht: "100%",
  height: "100vh",
  backgroundColor: "$bg100",
  color: "$darkPurple",
});

export const Upper = styled("div", {
  maxWidth: "1140px",
  paddingX: "134px",
  height: "70%",
  marginX: "auto",
});

export const Lower = styled("div", {
  dFlex: "center center",
  width: "100%",
  height: "30%",
  backgroundColor: "$cream",
  backgroundImage: "url('assets/background-shadow.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  borderTop: "2px solid $darkPurple",
});

export const MadeWithLove = styled("span", {
  fontSize: "$2",
  fontWeight: "500",
  color: "$gray600",

  "&:hover a": {
    color: "$blue",
  },
});

export const Main = styled("main", {
  height: "100%",
  marginTop: "50px",
});
