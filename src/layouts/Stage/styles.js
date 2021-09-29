import { styled } from "stitches";

export const Stage = styled("div", {
  widht: "100%",
  height: "100vh",
  backgroundColor: "$bg100",
  color: "$darkPurple",
});

export const Upper = styled("div", {
  maxWidth: "1140px",
  height: "calc(100% - 355px)",
  marginX: "auto",
});

export const Lower = styled("div", {
  width: "100%",
  height: "355px",
  backgroundColor: "$cream",
  backgroundImage: "url('assets/background-shadow.svg')",
  backgroundRepeat: "no-repeat",
  borderTop: "2px solid $darkPurple",
});
