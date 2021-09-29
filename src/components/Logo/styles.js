import { styled } from "stitches";

export const Logo = styled("div", {
  width: "max-content",
  userSelect: "none",
});

export const LogoUpper = styled("div", {
  dFlex: "end center",
});

export const Letter = styled("span", {
  fontSize: "70px",
  fontWeight: "800",
  color: "#fff",
  WebkitTextStroke: "3px #6d6875",
});

export const Rope = styled("div", {
  width: "44px",
  height: "196px",
  marginX: "6px",
  backgroundImage: "url('assets/rope.svg')",
  backgroundRepeat: "no-repeat",
});

export const Motto = styled("p", {
  fontSize: "$2",
  fontWeight: "600",
  textTransform: "uppercase",
  color: "$gray600",
  marginY: "6px",
});
