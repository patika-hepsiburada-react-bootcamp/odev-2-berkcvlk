import { styled, keyframes } from "stitches";

const ripple = keyframes({
  "0%": {
    top: "36px",
    left: "36px",
    width: "0",
    height: "0",
    opacity: "1",
  },
  "100%": {
    top: "0px",
    left: "0px",
    width: "72px",
    height: "72px",
    opacity: "0",
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  dFlex: "center center",
});

export const Loader = styled("div", {
  display: "inline-block",
  position: "relative",
  width: "80px",
  height: "80px",
});

export const FirstChild = styled("div", {
  position: "absolute",
  border: "4px solid $orange",
  opacity: "1",
  borderRadius: "50%",
  animation: `${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
});

export const SecondChild = styled(FirstChild, {
  animationDelay: "-0.5s",
});
