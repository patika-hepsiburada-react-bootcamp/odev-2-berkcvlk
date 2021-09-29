import { styled } from "stitches";

export const Logo = styled("div", {
  width: "max-content",
});

export const LogoUpper = styled("div", {
  dFlex: "end center",
});

export const Letter = styled("span", {
  fontSize: "70px",
  fontWeight: "600",
  color: "#fff",
  WebkitTextStroke: "3px #6d6875",
});

export const Rope = styled("div", {
  width: "44px",
  height: "196px",
  marginX: "10px",
  backgroundImage: "url('assets/rope.svg')",
  backgroundRepeat: "no-repeat",
});

export const LogoDesc = styled("p", {
  fontSize: "$1",
  fontWeight: "600",
  textTransform: "uppercase",
  color: "$gray600",
  marginY: "4px",
});
